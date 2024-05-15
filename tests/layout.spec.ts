import {test} from '@playwright/test'


test.describe.only('Fill in the forms',()=>{

    test("Fill all fields", async ({ page }) => {
       
    
        await page.goto(
          "http://localhost:4200/pages/forms/layouts",
        );
        await page.locator("[placeholder='Jane Doe']").fill("Dima");
        await page
          .locator(
            '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"][placeholder="Email"]' )
          .fill("mike@test.com");
          //await page.pause();

        //   await page.locator('input[placeholder="Password"]').fill('test1234');
        //   await page.locator('[for="companyname"] ~ input[placeholder="Company"]').fill("LLC Happy");
        //   await page.selectOption('select[name="country"]', {label: 'United States'})
        //   await page.locator('label:has-text("City*") ~ input#inputCity').fill('Orlando')
        //   await page.getByPlaceholder('Address 1').fill('704 Tobie Ct')
        //   await page.getByRole('textbox',{name:"Zip code"}).fill('32825')



          //await page.pause();
      });


})