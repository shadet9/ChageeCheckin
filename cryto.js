const crypto = require("crypto");
const md2 = require("js-md2");

const activityId = "activityId=947079313798000641&";
const storeId = "storeId=49006";
const timestamp = "&timestamp=1728612892528";
const appid = "appId=wxafec6f8422cb357b&";
const secretKey = "&xiaoMan5&Qimai6*Bwcj8_3DI1^xX0";
// Concatenate the values
const data = appid + storeId + timestamp + secretKey;
const beta = activityId + appid + storeId + timestamp;
console.log("Data:", data);

// Hash the concatenated data using MD5
const md5Hash = crypto.createHash("md5").update(data).digest("hex");

console.log("MD5 Hash:", md5Hash);

const hmacMd5 = crypto.createHmac("md5", secretKey).update(beta).digest("hex");

console.log("HMAC-MD5:", hmacMd5);

const hmacSha1 = crypto
  .createHmac("sha1", secretKey)
  .update(data)
  .digest("hex");

console.log("HMAC-SHA1:", hmacSha1);

const hash = crypto.createHash("sha1").update(data).digest("hex");
console.log("SHA1:", hash);

function E(M) {
  return m.Z.post("/catering/common/ali-verify-code", { mobile: M });
}

const md2Hash = md2(data);
console.log(md2Hash);
