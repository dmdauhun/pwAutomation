import { test as it } from '@playwright/test'


it.describe('Fill in ', () => {
  it.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/pages/forms/layouts");
  })

  it("Inline form", async ({ page }) => {

    await page.locator("[placeholder='Jane Doe']").fill("Dima");
    await page.fill("[placeholder='Jane Doe']~input[placeholder='Email']", 'test1@gmail.com')
    await page.locator('.custom-checkbox').nth(0).check()
    await page.locator("[class='appearance-filled size-medium shape-rectangle status-primary nb-transition']").nth(0).click();
  })

  it("Basic form", async ({ page }) => {

    await page.locator('[id="exampleInputEmail1"]').fill("'test1@gmail.com'");
    await page.fill('[id="exampleInputPassword1"]', 'test123@')
    await page.locator('.custom-checkbox').nth(1).check()
    await page.locator('[status="danger"]').click();

  });

  it("form without labels", async ({ page }) => {

    await page.locator('[placeholder="Recipients"]').fill("Dzmino");
    await page.locator('[placeholder="Message"]').fill("Dzmino");
    await page.locator('[placeholder="Subject"]').fill("Dzmino");
    await page.getByRole('button', { name: 'Send' }).click()
  });

  it("using the grids", async ({ page }) => {

    await page.locator('[id="inputEmail1"]').fill("Dzmino@gmaIL.COM");
    await page.locator('[id="inputPassword2"]').fill("Dzmino@gmaIL.COM");
    await page.locator('[class="inner-circle"]').nth(0).check()
    await page.locator('[class="inner-circle"]').nth(1).check()
    await page.locator("[class='appearance-filled size-medium shape-rectangle status-primary nb-transition']").nth(1).click();
  });

2




  // test.skip("Fill all fields", async ({ page }) => {

  //   await page.locator("[placeholder='Jane Doe']").fill("Dima");
  //   await page.fill("[placeholder='Jane Doe']~input[placeholder='Email']", 'test1@gmail.com')
  //   await page.locator('.custom-checkbox').nth(0).check()
  //   await page.locator("[class='appearance-filled size-medium shape-rectangle status-primary nb-transition']").nth(0).click();

  // });





})
