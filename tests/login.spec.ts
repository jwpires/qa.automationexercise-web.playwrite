import { test, expect } from "@playwright/test";
import { LoginPage } from "../class/LoginPage";

test("[CT-01] - Realizar login com sucesso na plataforma", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("jose.pires@bol.com", "123456");

  await expect(page.getByText(/Logged in as jose/)).toBeVisible();
});
