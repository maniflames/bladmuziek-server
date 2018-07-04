const puppeteer = require('puppeteer');
const bladmuziekUrl = 'http://localhost:8080'; 
const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'W', 'A', 'S', 'D', 'F', 'G', 'Space'];

(async () => {
  const browser = await puppeteer.launch({headless: false}); //no audio output unless there is a browser ¯\_(ツ)_/¯
  const page = await browser.newPage();
  console.log(await page.cookies(bladmuziekUrl));
  await page.setCookie({name: 'blad_mode', value: 'base', domain: 'localhost', session: true})
  await page.goto(bladmuziekUrl);
  await keys.map( (key) => {
    page.keyboard.press(key);
  });
})();

