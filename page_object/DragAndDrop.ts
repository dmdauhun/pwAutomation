import { expect } from "@playwright/test"
import { Page } from "playwright/test"

export class DragAndDrop {
    readonly page: Page
    constructor(page: Page) {

        this.page = page

    }
    get dragEl() {

        return '[draggable="true"]'
    }
    get drophereEl() {

        return "#mydropzone"
    }
    get dropList() {

        return "#droppedlist"
    }

    public async dragAndDropElement(text: string) {

        await this.page.locator(this.dragEl, { hasText: text }).dragTo(this.page.locator(this.drophereEl))
        expect(await this.page.locator(this.dropList).textContent()).toContain(text)
    }
    public async dragAndDropElement2(text: string) {
        await this.page.locator(this.dragEl, { hasText: text }).hover()
        await this.page.mouse.down()
        await this.page.locator(this.dragEl).hover()
        expect(await this.page.locator(this.dropList).textContent()).toContain(text,)
    }

}