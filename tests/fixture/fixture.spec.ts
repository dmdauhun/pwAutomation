import { expect, test } from './todo-page'

test('fixture test', async ({ page, todoPage }) => {
    await todoPage.addTodo('spec Fixture text ')
    await expect(page.getByTestId('todo-title')).toContainText(['spec Fixture text '])
})