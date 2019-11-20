import Page from './page'

class LoginPage extends Page {

    get username() { return $("input[name='login.username']") }
    get password() { return $("input[name='login.password']") }
    get submitBtn() { return $('.button-login') }
    get cancelBtn() {return $('.button-cancel')}
   
    open() {
        super.open('http://testapp.galenframework.com/')
    }

    submit() {
        this.submitBtn.click()
    }

    cancel() {
        this.cancelBtn.click()
    }

}

export default new LoginPage()