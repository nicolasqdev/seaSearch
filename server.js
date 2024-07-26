import puppeteer from 'puppeteer';

(async () => {
  //proxy server
    const SBR_WS_ENDPOINT = 'wss://brd-customer-hl_15810fe2-zone-scraping_browser2:25j1lhqe70n1@brd.superproxy.io:9222';


    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({headless: false, browserWSEndpoint: SBR_WS_ENDPOINT});
    const page = await browser.newPage();
    
    // Navigate the page to a URL
   /*  await page.goto('https://www.mon-ip.com/',{waitUntil: "networkidle0", timeout: 90000});
    return; */

    
    await page.goto('https://www.google.com/',{waitUntil: "networkidle0", timeout: 90000});

    const element = await page.waitForSelector('#L2AGLb');//accepter conditio utilisateur
    
    await element.click(); 

    await page.evaluate(() => {
        document.querySelector(".gLFyf").value = "contrat électricité pas cher";//champs recherche
    });

    await page.waitForSelector('.gLFyf');
    await page.click(".gLFyf");

    
    //const searchResultSelector = '.gNO89b';// class css button lancer la recherche gNO89b
    
    //await page.waitForSelector('.gNO89b');
    //await page.click('.gNO89b');
    // faire des tickets avec google ads pour faire 
    // 
    page.$eval(`.gNO89b`, element =>
        element.click()
      );

    await page.waitForSelector('.gLFyf');

    await page.waitForSelector('.sVXRqc');


    //link page
    
    //console.log(hrefsPageLink);
    //link page


    //page 1 
    const hrefs = await page.$$eval(
        ".sVXRqc",
        els => els.map(el => el.href)
      );
      console.log("page 1")
    console.log(hrefs);
    //console.log("fini");
    await page.waitForSelector('.fl');
    await page.click('.fl');

     //page 2
    await page.waitForSelector('.sVXRqc');
    const hrefs2 = await page.$$eval(
      ".sVXRqc",
      els => els.map(el => el.href)
    );
    console.log("page 2")
    console.log(hrefs2);



    await page.waitForSelector('.fl');
    await page.click('.fl');

    //Page 3
    await page.waitForSelector('.sVXRqc');
    const hrefs3 = await page.$$eval(
      ".sVXRqc",
      els => els.map(el => el.href)
    );
    console.log("page 3")
    console.log(hrefs3);
    await browser.close();
})();