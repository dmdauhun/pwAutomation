import { expect, test } from '@playwright/test'

test('Pageerror', async ({ page }) => {
    await page.route('**\/*.{png,jpg,jpeg,svg}', (body) => {
        // console.log(request)
        if (body.request().resourceType() === 'image') {
            body.abort()
        } else {
            body.continue()
        }
    })
    page.on('pageerror', error => {
        console.log(`error: ${error}`)

    })
    //await page.pause()
    await page.goto('https://demoqa.com')
    //await page.goto('data:text/html,<script>throw new Error("Test")</script>');
    //await page.pause()
})