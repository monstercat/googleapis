# Google APIs NodeJS Client

This is a compiled version, with extended libraries, to assist in easy and
quick installations.

## How to Regenerate

```
git clone git@github.com:google/google-api-nodejs-client.git
cd google-api-nodejs-client
npm install
npm run build-tools && node build/src/scripts/generate.js --discovery-url "https://www.monstercat.com/google-apis.json"
npm run compile
cd ..
cp -R google-api-nodejs-client/build/src ./
rm -rf google-api-nodejs-client
```
