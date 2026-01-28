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
        const keys = [];
        const ages = [];
        let count = 0;

        const respJson = JSON.parse(data);
        console.log(respJson);
        respJson.data.split(',').forEach((pair) => {
          const [field, value] = pair.trim().split('=');

          if (field === 'key') keys.push(value);
          if (field === 'age') ages.push(Number(value));
        });

        ages.forEach((age) => {
          if (age >= 50) {
            count++;
          }
        });

        console.log(count);
      });

      console.log(resp.statusCode);
      resp.resume();
    },
  );
} catch (err) {
  console.log(err);
}
