import {test as it } from 'playwright/test';
import {DatePicker} from '../../page_object/demoQA/widgets/DatePicker'


it.describe('Date picker for demoQA',()=>{
    it('working with date picker for demoQA',async ({page})=>{
        // const browser: Browser = await chromium.launch({ headless: false });

        // const context = await browser.newContext();
        // const page: Page = await context.newPage();



        let datePicker=new DatePicker(page)
        await page.goto('https://demoqa.com/date-picker')
        await datePicker.verifyheader()
    
    })
})