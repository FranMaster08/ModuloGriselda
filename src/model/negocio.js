const puppeteer = require("puppeteer");

async function ssr(user, password) {
  let users = [
    {
      name: "bryan0o",
      pass: "1234",
    },
  ];

  let result = users.filter(
    (item) => item.name === user && item.pass === password
  );
  if (result.length < 1) {
    console.log("Invalido");
    return -1;
  }
  console.info("rendering the page in ssr mode");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  try {
    await page.goto('https://facebook.com/login', { waitUntil: "networkidle2", timeout: 10000 });
    await page.type("#email", "francisco.jimenez.cohen@gmail.com", {
      timeout: 10000,
    });
    await page.type("#pass", "Grisell12234..", { timeout: 10000 });

    await page.click("#loginbutton", { timeout: 510000000 });
    await page.waitForNavigation();
  } catch (err) {
    console.error(err);
    throw new Error("page.goto/waitForSelector timed out.");
  }
  let html = await page.content();
  console.log(html);
  return { html };
}
module.exports = ssr;
