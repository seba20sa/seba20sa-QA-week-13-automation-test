describe(
    'Acces the google search engine, access the correct element to enter the wikipedia URL and click the search button'
    , () => {
    it('Go from google to wikipedia', () => {        
        browser.url('https://www.google.com/')        
        let searchArea =  $('.gLFyf')
        searchArea.setValue('Wikipedia')
        let wikipediaUrl = $('.LC20lb')
        searchArea.keys('Enter')
        wikipediaUrl.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada')
        expect(browser).toHaveTitle('Wikipedia, la enciclopedia libre')
        browser.pause(3000)
    })
  })