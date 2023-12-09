console.log('00000000001:');

if (process.env.NODE_ENV === "development") {
  const result = require("dotenv").config({ path: ".env.dev" });
}
if (process.env.NODE_ENV === "production") {
  const result = require("dotenv").config({ path: ".env.prod" });
}
require("dotenv").config({ path: ".env.dev" });
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENVAAAA);
console.log(process.env.DB_HOST);

