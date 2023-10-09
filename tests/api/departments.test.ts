import { expect, test } from '@playwright/test';
import { URL_MELI } from '../../dat-provider'

test('get departments - basic test @api', async ({ request }) => {
    const response = await request.get(`${URL_MELI}/departments`);
    const data = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(data).toHaveProperty('departments');
    expect(data).toHaveProperty('landings');
});
