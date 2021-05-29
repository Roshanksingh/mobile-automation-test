import AppScreen from './AppScreen';
import Gestures from '../helpers/Gestures';

const SELECTORS = {
    ANDROID: {
        LOGIN_SCREEN: '~Login-screen',
        LOGIN_CONTAINER_BUTTON: '~button-login-container',
        SIGNUP_CONTAINER_BUTTON: '~button-sign-up-container',
        SIGNUP_BUTTON: '~button-SIGN UP',
        LOGIN_BUTTON: '~button-LOGIN',
        EMAIL: '~input-email',
        PASSWORD: '~input-password',
        REPEATE_PASSWORD: '~input-repeat-password',
        BIOMETRIC_BUTTON: '~button-biometric'
    },
};

class LoginScreen extends AppScreen {
    constructor() {
        super(SELECTORS.ANDROID.LOGIN_SCREEN);
    }

    get loginContainerButton() { return $(SELECTORS.ANDROID.LOGIN_CONTAINER_BUTTON) };
    get signUpContainerButton() { return $(SELECTORS.ANDROID.SIGNUP_CONTAINER_BUTTON) };
    get loginButton() { return $(SELECTORS.ANDROID.LOGIN_BUTTON) };
    get signUpButton() { return $(SELECTORS.ANDROID.SIGNUP_BUTTON) }
    get email() { return $(SELECTORS.ANDROID.EMAIL) }
    get password() { return $(SELECTORS.ANDROID.PASSWORD) }
    get repeatPassword() { return $(SELECTORS.ANDROID.REPEATE_PASSWORD) }
    get biometricButton() { return $(SELECTORS.ANDROID.BIOMETRIC_BUTTON) }

    submitLoginForm({ username, password }: { username: string; password: string; }) {
        this.email.setValue(username);
        this.password.setValue(password);

        if (driver.isKeyboardShown()) {
            /**
             * Normally we would hide the keyboard with this command `driver.hideKeyboard()`, but there is an issue for hiding the keyboard
             * on iOS when using the command. You will get an error like below
             *
             *  Request failed with status 400 due to Error Domain=com.facebook.WebDriverAgent Code=1 "The keyboard on iPhone cannot be
             *  dismissed because of a known XCTest issue. Try to dismiss it in the way supported by your application under test."
             *  UserInfo={NSLocalizedDescription=The keyboard on iPhone cannot be dismissed because of a known XCTest issue. Try to dismiss
             *  it in the way supported by your application under test.}
             *
             * That's why we click outside of the keyboard.
             */
            $(SELECTORS.ANDROID.LOGIN_SCREEN).click();
        }
        // On smaller screens there could be a possibility that the button is not shown
        Gestures.checkIfDisplayedWithSwipeUp(this.loginButton, 2);
        this.loginButton.click();
    }

    submitSignUpForm({ username, password }: { username: string; password: string; }) {
        this.email.setValue(username);
        this.password.setValue(password);
        this.repeatPassword.setValue(password);

        if (driver.isKeyboardShown()) {
            /**
             * Normally we would hide the keyboard with this command `driver.hideKeyboard()`, but there is an issue for hiding the keyboard
             * on iOS when using the command. You will get an error like below
             *
             *  Request failed with status 400 due to Error Domain=com.facebook.WebDriverAgent Code=1 "The keyboard on iPhone cannot be
             *  dismissed because of a known XCTest issue. Try to dismiss it in the way supported by your application under test."
             *  UserInfo={NSLocalizedDescription=The keyboard on iPhone cannot be dismissed because of a known XCTest issue. Try to dismiss
             *  it in the way supported by your application under test.}
             *
             * That's why we click outside of the keyboard.
             */
            $(SELECTORS.ANDROID.LOGIN_SCREEN).click();
        }
        // On smaller screens there could be a possibility that the button is not shown
        Gestures.checkIfDisplayedWithSwipeUp(this.signUpButton, 2);
        this.signUpButton.click();
    }
}

export default new LoginScreen();
