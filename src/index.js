/* eslint-disable */
import embed from './configure';
import connect from './connect';

const MASHUP_URL = process.env.MASHUP_URL || "" 
const MASHUP_WEBINTID = process.env.MASHUP_WEBINTID || "" 
const MASHUP_APPID = process.env.MASHUP_APPID || "" 
const MASHUP_ID = process.env.MASHUP_ID || "" 

async function run() {
  const app = await connect({
    url: MASHUP_URL,
    webIntegrationId: MASHUP_WEBINTID,
    appId: MASHUP_APPID,
  });

  const n = embed(app);

  (await n.selections()).mount(document.querySelector('.toolbar'));

  n.render({
    element: document.querySelector('.object'),
    id: MASHUP_ID,
  });
}

run();
