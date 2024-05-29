import {test as it } from 'playwright/test';
import {DatePicker} from '../../page_object/DatePicker'


it.describe.only('Date picker',()=>{
    it('working with date picker',async ({page})=>{

        let datePicker=new DatePicker(page)
        await page.goto('https://www.lambdatest.com/selenium-playground/jquery-date-picker-demo')
        await datePicker.verifyHeader()
        await datePicker.dateFromToday()
     

    })