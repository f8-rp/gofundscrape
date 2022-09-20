const puppeteer = require('puppeteer')

async function scrapeProduct(url){
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url);

  const [el] = await page.$x('//*[@id="__next"]/div[2]/main/div[2]/div[3]/aside/div[1]/div[1]/div/h2')

  const txt = await el.getProperty('textContent')
  const rawTxt = await txt.jsonValue();

  //const result = rawTxt.slice("  ",1)
  result = rawTxt.substring(1,6)
  console.log(result);
  browser.close()
}

scrapeProduct('https://www.gofundme.com/f/rookie-high-school-robotics-team-fundraising?qid=ad5e6e3ae09ec679e2aa8e82c4a65a98')