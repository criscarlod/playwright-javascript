const { test, expect } = require('@playwright/test')

const LoginPage = require('../../pages/CuraHealthCare/LoginPage');

test('User can login successfully', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.validationAppointmentPage();
    await loginPage.isAppointmentButtonVisible();
    await loginPage.login('John Doe', 'ThisIsNotAPassword');


})