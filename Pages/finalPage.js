import Page from './page'

class FinalPage extends Page {
   
    get homeLink() { return $('=Home') }

}

export default new FinalPage()