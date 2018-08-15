'use strict';
// var home;

module.exports = {
  //Setting up the size of the screen
    before : function (browser) {
        browser.resizeWindow(1400, 1700);
        console.log('Opening Browser...');
        // home = browser.page.homeObjects();

    },
    after: function (browser) {
        console.log('Closing down...');
        browser.end();
    },
    'Check login form exists' : function (browser) {
        browser
            .url('https://staging.mylal.de/login')
            .waitForElementVisible('body', 1000)

            // .click(.'[selector: "a.active.nav-link"]') //Anmelden Nav


//fill in login form and eingeloggt bleiben, then click submit
            .setValue('[type="email"]', 'daniela.sofrone@fti.de')
            .setValue('[type="password"]', 'Parola001')
            .click('[type="checkbox"]')
            .click('[type="submit"]')
            .click('.cookieConsent .btn-primary')
//Meine Buchungen
            .click('.nav-item .nav-link')
            .pause(8000)
            .verify.visible('.container-fluid .text-primary')
//Edit Information - überarbeiten button
            .click('.slider-course-container .btn-primary')
            .click('.react-datepicker-container .rdtDay')
            .click('.form-check-label:nth-of-type(1)')
            .verify.visible('[role="alert"]')
            // .click('input[name="hasAllergies"] [value=true]')
            .pause(5000)




//Add a booking page


            .pause(4000)




    },

}
