let expect = require('chai').expect;
import LoginPage from '../model/pages/login.page';

var module: any;
module.exports = function theinternet() {

    this.Given(
        /^I attempt to register in with valid details/,
        function () {
            LoginPage.open()
            browser.pause(1000);
        } );    
  
    this.Then(/^I proceed to register/,

        function(){
        LoginPage.registerButton.click();
        browser.pause(10000);
         } );


    this.Then(/^I opt to register as a residential customer/,

        function(){
        LoginPage.resicustButton.click();
         } );



    this.Then(/^I enter the details of my account/,

        function(){
        LoginPage.accTextbox.setValue("12343565");
        browser.pause(10000);
         } );
         
    

    
};