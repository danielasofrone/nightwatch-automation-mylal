require('nightwatch/bin/runner.js');
const SCREENSHOT_PATH = "./screeshots";

var SELENIUM_CONFIGURATION = {
    "start_process": true,
    "server_path": 'node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.13.0.jar',
    "host": '127.0.0.1',
    "port": 4444,
    "cli_args": {
        "webdriver.chrome.driver" : "./node_modules/.bin/chromedriver"
    }
};

var PHANTOMJS_CONFIGURATION = {
    "browserName": "phantomjs",
    "javascriptEnabled": true,
    "acceptSslCerts": true,
    "phantomjs.binary.path": "node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs",
    "phantomjs.cli.args": [],
    "platform": "LINUX",
    "version": "",
    "video": "False"
};
//
var FIREFOX_CONFIGURATION = {
    "browserName": 'firefox',
    "javascriptEnabled": true,
    "acceptSslCerts": true
};

var CHROME_CONFIGURATION = {
    "browserName": 'chrome',
    "javascriptEnabled": true,
    "acceptSslCerts": true,
    "phantomjs.binary.path": "node_modules/.bin/chromedriver",
    "version": "",
    "video": "False"
};

var ENVIRONMENTS = {
    "default": {
        "desiredCapabilities": CHROME_CONFIGURATION,
        "launch_url": "http://localhost",
        "screenshots": {
            "enabled": true,
            "path": SCREENSHOT_PATH
        },
        "globals": {
            "waitForConditionTimeout": 5000 // when internet is slow we will wait for a while.
        }
    },
    "local": {
        "launch_url": "http://local-5vorflug.gcloud.fti-group.com",
        "end_session_on_fail": false,
        "desiredCapabilities": CHROME_CONFIGURATION,
        "screenshots": {
            "enabled": true,
            "path": SCREENSHOT_PATH
        },
        "globals": {
            "waitForConditionTimeout": 5000
        }
    },
    "staging": {
        "launch_url": "https://staging.mylal.de/login",
        "end_session_on_fail": false,
        "desiredCapabilities": CHROME_CONFIGURATION,
        "screenshots": {
            "enabled": true,
            "path": SCREENSHOT_PATH
        },
        "globals": {
            "waitForConditionTimeout": 5000
        }
    },
    "testing": {
        "launch_url": "testing-5vorflug.gcloud.fti-group.com",
        "end_session_on_fail": false,
        "desiredCapabilities": PHANTOMJS_CONFIGURATION,
        "screenshots": {
            "enabled": true,
            "path": SCREENSHOT_PATH
        },
        "globals": {
            "waitForConditionTimeout": 5000
        }
    },
    "prod": {
        "launch_url": "http://5vorflug.de",
        "end_session_on_fail": false,
        "desiredCapabilities": PHANTOMJS_CONFIGURATION,
        "screenshots": {
            "enabled": true,
            "path": SCREENSHOT_PATH
        },
        "globals": {
            "waitForConditionTimeout": 5000
        }
    },
    "local-base": {
        "launch_url": "http://www.5vorflug.de",
        "end_session_on_fail": false,
        "desiredCapabilities": CHROME_CONFIGURATION,
        "screenshots": {
            "enabled": true,
            "path": SCREENSHOT_PATH
        },
        "globals": {
            "waitForConditionTimeout": 5000
        }
    }
};

module.exports = {
    "src_folders": ["tests"],
    // "page_objects_path": 'pageObjects',
    "selenium": SELENIUM_CONFIGURATION,
    "test_settings": ENVIRONMENTS,
    "output_folder": "./reports",
    // "custom_commands_path" : "node_modules/nightwatch-custom-commands-assertions/js/commands",
    // "custom_assertions_path" : "node_modules/nightwatch-custom-commands-assertions/js/assertions"
};
