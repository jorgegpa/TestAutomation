import Page from './page'

class InitPage extends Page {

    get submitBtn() { return $('.button-login') }
    
   
    open() {
        super.open('login')
    }

    submit() {
        this.submitBtn.click()
    }


}

export default new InitPage()