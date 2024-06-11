import {expect, test} from "@playwright/test"

test.describe('HIDDEN ELEMENTS', () =>{
    test('popUP window', async ({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        page.on('dialog',dialog=>dialog.accept())
        page.locator
    })
})
    