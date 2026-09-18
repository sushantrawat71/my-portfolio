import { test, expect } from "@playwright/test";

test("renders sections, skills, code card, navigation and PDF", async ({
  page,
  request,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Sushant Rawat", exact: true }),
  ).toBeVisible();
  await expect(page.locator("main section")).toHaveCount(6);
  await expect(page.locator(".skill-card")).toHaveCount(6);
  await expect(page.locator(".developer-card code")).toContainText(
    "Full Stack Development",
  );
  await expect(page.locator(".nav-link.active")).toHaveText("Home");
  const pdf = await request.get("/resume.pdf");
  expect(pdf.ok()).toBeTruthy();
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
  await page.getByRole("link", { name: "View Projects", exact: true }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator(".nav-link.active")).toHaveText("Projects");
  expect(errors).toEqual([]);
});

test("mobile menu and responsive layouts work", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const toggle = page.locator("#menuToggle");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await page.locator('.nav-link[href="#skills"]').click();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("body")).not.toHaveClass(/menu-open/);
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
});

test("contact validates and reports missing configuration without sending", async ({
  page,
}) => {
  let submissions = 0;
  await page.route("https://api.web3forms.com/**", (route) => {
    submissions++;
    return route.abort();
  });
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.locator("#name")).toBeFocused();
  await expect(page.locator("#nameError")).toHaveText(
    "Please enter at least 2 characters.",
  );
  await page.getByLabel("Name", { exact: true }).fill("Test User");
  await page.getByLabel("Email", { exact: true }).fill("test@example.com");
  await page.getByLabel("Subject").fill("Portfolio test");
  await page
    .getByLabel("Message", { exact: true })
    .fill("This is a test message.");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByRole("status")).toContainText("not configured yet");
  expect(submissions).toBe(0);
});
