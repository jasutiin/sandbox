// is it illegal to have this code in my github please don't arrest me

const https = require('https');

try {
  https.get(
    'https://coderbyte.com/api/challenges/json/age-counting',
    (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        console.log(data);
        respJson = JSON.parse(data);
        console.log(respJson);
      });

      console.log(resp.statusCode);
      resp.resume;
    },
  );
} catch (err) {
  console.log(err);
}
