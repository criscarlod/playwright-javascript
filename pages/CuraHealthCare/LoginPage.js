const { expect } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.makeAppointmentButton = page.getByRole('link', { name: 'Make Appointment'});
        this.pageHeaderLocator = page.locator('h1');
        this.userNameInput = page.getByLabel('Username');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', {name: 'Login'});

    }

    async navigate() {
        await this.page.goto('https://katalon-demo-cura.herokuapp.com/')
    }

    //  Assert page header after navigating
    async validationAppointmentPage() {
        await expect(this.pageHeaderLocator).toBeVisible();
    }



    async isAppointmentButtonVisible() {
        await this.makeAppointmentButton.waitFor({ state: 'visible'});
    }

    async login(username, password) {
        await this.makeAppointmentButton.click();
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}

module.exports = LoginPage;