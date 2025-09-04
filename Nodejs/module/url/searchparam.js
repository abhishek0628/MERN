const { URL } = require('url');

const myUrl = new URL('https://site.com/page?lang=en&mode=dark');

console.log(myUrl.searchParams.get('lang')); // en
myUrl.searchParams.set('lang', 'fr');
console.log(myUrl.href); // https://site.com/page?lang=fr&mode=dark
