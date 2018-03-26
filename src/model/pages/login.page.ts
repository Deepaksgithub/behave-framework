class Login_Page {


    public get registerButton()  { return browser.element("//a[@class='register-your-account']") }
    public get resicustButton()  { return browser.element("//a[@class='residential-customer']") }
    public get accTextbox()      { return browser.element("//input[@name='accountId']") }


    
    
    
    public open(): void {
        browser.url('https://www.bordgaisenergy.ie/')
        browser.pause(1000);
    }
}
const LoginPage = new Login_Page();
export default LoginPage