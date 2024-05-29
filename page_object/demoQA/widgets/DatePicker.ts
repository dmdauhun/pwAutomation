import { Page,expect } from "@playwright/test";

export class DatePicker {

    public readonly page: Page //can't modify --readonly means
    constructor(page: Page) {

        this.page = page; //global scope access anytime

    }

    get header() {

        return "h1"
    }

   async verifyheader (){

       const header= this.page.locator(this.header)//header 
        await expect(header).toContainText('Date Picker')
       // await expect(header).toHaveClass("text-center")

    }

}

