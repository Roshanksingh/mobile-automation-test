import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';
import { loginCredentials, signUpCredentials } from '../data/login.data';
import allureReporter from '@wdio/allure-reporter';

describe('User, when interacting with a login form,', () => {
    beforeEach(() => {
        TabBar.waitForTabBarShown();
        TabBar.openLogin();
        LoginScreen.waitForIsShown(true);
    });

    fit('should be able login successfully', () => {
        allureReporter.addSeverity("critical");
        LoginScreen.loginContainerButton.click();
        LoginScreen.submitLoginForm(loginCredentials);
        // Wait for the alert and validate it
        NativeAlert.waitForIsShown();
        expect(NativeAlert.text()).toEqual('Success\nYou are logged in!');

        // Close the alert
        NativeAlert.pressButton('OK');
        NativeAlert.waitForIsShown(false);
    });

    fit('should be able sign up successfully', () => {
        allureReporter.addSeverity("critical");
        LoginScreen.signUpContainerButton.click();
        LoginScreen.submitSignUpForm(signUpCredentials);
        // Wait for the alert and validate it
        NativeAlert.waitForIsShown();
        expect(NativeAlert.text()).toEqual('Signed Up!\nYou successfully signed up!');

        // Close the alert
        NativeAlert.pressButton('OK');
        NativeAlert.waitForIsShown(false);
    });
});
