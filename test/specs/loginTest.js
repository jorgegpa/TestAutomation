import { expect } from 'chai'
import LoginPage from '../../Pages/loginPage'
import InitPage from '../../Pages/initPage'
import FinalPage from '../../Pages/finalPage'
const username = 'testuser@example.com'
const password = 'test123'

describe('login form', () => {
    before(async function(){
       LoginPage.open()
       await InitPage.submit();
    })

    it('Caso de prueba positivo', () => {
        LoginPage.username.setValue(username)
        LoginPage.password.setValue(password)
        LoginPage.submit()

        expect(FinalPage.homeLink.getText()).to.equal('Home')
    })

})