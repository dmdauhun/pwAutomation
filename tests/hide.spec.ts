import {expect, test} from "@playwright/test"

test.describe('HIDDEN ELEMENTS', () =>{
    test('hidden element test',async ({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        expect (page.locator('#displayed-text')).toBeVisible()
     await    page.locator('#hide-textbox').click()
        expect (page.locator('#displayed-text')).toBeHidden()

    })
})