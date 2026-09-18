import { useRef, useState } from "react";

const initialValues = { name: "", email: "", subject: "", message: "" };
const fields = {
  name: { label: "Name", type: "text", autoComplete: "name", minLength: 2 },
  email: { label: "Email", type: "email", autoComplete: "email" },
  subject: { label: "Subject", type: "text", minLength: 3 },
  message: { label: "Message", minLength: 10 },
};
const rules = {
  name: (value) =>
    value.trim().length >= 2 ? "" : "Please enter at least 2 characters.",
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
      ? ""
      : "Please enter a valid email address.",
  subject: (value) =>
    value.trim().length >= 3 ? "" : "Please enter a subject.",
  message: (value) =>
    value.trim().length >= 10 ? "" : "Please enter at least 10 characters.",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(
    "Fill out the form and send your message.",
  );
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const pending = useRef(false);
  const inputs = useRef({});

  async function submit(event) {
    event.preventDefault();
    if (pending.current) return;
    setSuccess(false);
    const nextErrors = Object.fromEntries(
      Object.keys(fields).map((id) => [id, rules[id](values[id])]),
    );
    setErrors(nextErrors);
    const invalid = Object.keys(fields).find((id) => nextErrors[id]);
    if (invalid) {
      setStatus("Please correct the highlighted fields.");
      inputs.current[invalid]?.focus();
      return;
    }
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus(
        "The contact form is not configured yet. Please try the email link instead.",
      );
      return;
    }
    pending.current = true;
    setSending(true);
    setStatus("Sending your message...");
    try {
      const body = new FormData();
      Object.entries(values).forEach(([key, value]) =>
        body.append(key, value.trim()),
      );
      body.append("access_key", accessKey);
      body.append("replyto", values.email.trim());
      body.append("from_name", "Portfolio Contact Form");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error("Unable to send message.");
      setValues(initialValues);
      setErrors({});
      setSuccess(true);
      setStatus("Thanks! Your message has been sent.");
    } catch {
      setStatus(
        "Sorry, your message could not be sent. Please try again or use the email link.",
      );
    } finally {
      pending.current = false;
      setSending(false);
    }
  }

  function field(id) {
    const { label, ...attributes } = fields[id];
    const props = {
      ...attributes,
      id,
      name: id,
      required: true,
      value: values[id],
      ref: (element) => {
        inputs.current[id] = element;
      },
      className: errors[id] ? "invalid" : undefined,
      "aria-invalid": Boolean(errors[id]),
      "aria-describedby": errors[id] ? `${id}Error` : undefined,
      onBlur: () =>
        setErrors((previous) => ({ ...previous, [id]: rules[id](values[id]) })),
      onChange: (event) => {
        const value = event.target.value;
        setValues((previous) => ({ ...previous, [id]: value }));
        if (errors[id])
          setErrors((previous) => ({ ...previous, [id]: rules[id](value) }));
      },
    };
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        {id === "message" ? (
          <textarea {...props} rows={5} />
        ) : (
          <input {...props} />
        )}
        <span className="error-message" id={`${id}Error`}>
          {errors[id]}
        </span>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      id="contactForm"
      onSubmit={submit}
      noValidate
    >
      <p
        className={`form-notice${success ? " valid" : ""}`}
        id="formStatus"
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
      <div className="form-row">
        {field("name")}
        {field("email")}
      </div>
      {field("subject")}
      {field("message")}
      <button className="btn btn-primary" type="submit" disabled={sending}>
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
