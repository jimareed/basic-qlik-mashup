/* eslint-disable */
import embed from './configure';
import connect from './connect';

async function run() {
  const app = await connect({
    url: 'https://jimreed.us.qlikcloud.com',
    webIntegrationId: 'Y-i9iVgFe2H3IApmFQqYeJGc6nvqyZXu',
    appId: 'a94ced3f-7ffe-4fe0-8f09-773b86fdbbe1',
  });

  const n = embed(app);

  (await n.selections()).mount(document.querySelector('.toolbar'));

  n.render({
    element: document.querySelector('.object'),
    id: 'EAjjuyE',
  });
}

run();
