const puppeteer = require("puppeteer");
const db = require("../database/models");

async function getCredentials (){
  try {
    let data = await db.CriticalPass.findOne({where: {idCriticalPass: 1}});
    if(data) return data
    return false;
  } catch (error) {
      throw `Ocurrio un error ${error.message}`;
  }
}


async function ssr() {
  console.info("rendering the page in ssr mode");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  try {
    let datos = await getCredentials()
    await page.goto(datos.sitio, { waitUntil: "networkidle2", timeout: 10000 });
    await page.type("#email", datos.user);
    await page.type("#pass", datos.pass);
    await page.click("#loginbutton");
    await page.waitForNavigation();
    page.on('request', logRequest);

  } catch (err) {
    console.error(err);
    throw new Error("page.goto/waitForSelector timed out.");
  }
  let html = await page.content();
  console.log(html);
  return { html };
}

function logRequest(interceptedRequest) {
  console.log('A request was made:', interceptedRequest.url());
}

module.exports = ssr;
