import { test} from '@playwright/test'

test('request failed',async ({page})=>{
await page.route('**\/*.{png,jpg,jpeg,svg}',(body)=>{
   // console.log(request)
    if(body.request().resourceType()==='image'){
        body.abort()
    }else{
        body.continue()
    }
})
   page.on('requestfailed',(req)=>{
    console.log(`error: ${req.url()}`)

   })
 
await page.goto('https://www.apple.com/')

})