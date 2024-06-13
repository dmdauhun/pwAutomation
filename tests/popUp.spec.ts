import {expect, test} from "@playwright/test"

test.describe('POPUP WINDOW accept', () =>{
    test('popUP window', async ({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        //await page.pause()
        page.on('dialog',el=>el.accept())
        await  page.locator('#confirmbtn').click()
    })

    test('popUP window dismiss', async ({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
       // await page.pause()
        page.on('dialog',el=>el.dismiss())
        await  page.locator('#confirmbtn').click()
    })
})
    