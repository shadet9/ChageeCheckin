const got = require("got");

(async () => {
  const key = {
    activityId: "947079313798000641",
    storeId: 49006,
    timestamp: "1728612892528",
    signature: "E9FB1F4D4CD14536C7D180425AC53977",
    appid: "wxafec6f8422cb357b",
  };

  const opts = {
    url: "https://webapi2.qmai.cn/web/cmk-center/sign/takePartInSign",
    headers: {
      Host: "webapi2.qmai.cn",
      Connection: "keep-alive",
      "Qm-From": "wechat",
      Accept: "v=1.0",
      "Qm-User-Token":
        "IiXkZWMafd1g-Cn1RePHAlFzcl3Z1BfV0IfMEiq4Rhblm8eiBxCKitvVdiiPrA4s",
      xweb_xhr: 1,
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c11)XWEB/11275",
      "Qm-From-Type": "catering",
      "Content-Type": "application/json",
      "Sec-Fetch-Site": "cross-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer:
        "https://servicewechat.com/wxafec6f8422cb357b/193/page-frame.html",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
    },
    json: key, // Automatically stringifies the body
    responseType: "json", // Automatically parses the JSON response
  };

  const opts2 = {
    url: "https://webapi2.qmai.cn/web/cmk-center/common/getCrmAvailablePoints?appid=wxafec6f8422cb357b",
    headers: {
      Host: "webapi2.qmai.cn",
      Connection: "keep-alive",
      "Qm-From": "wechat",
      Accept: "v=1.0",
      "Qm-User-Token":
        "IiXkZWMafd1g-Cn1RePHAlFzcl3Z1BfV0IfMEiq4Rhblm8eiBxCKitvVdiiPrA4s",
      xweb_xhr: 1,
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c11)XWEB/11275",
      "Qm-From-Type": "catering",
      "Content-Type": "application/json",
      "Sec-Fetch-Site": "cross-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer:
        "https://servicewechat.com/wxafec6f8422cb357b/193/page-frame.html",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
    },
    responseType: "json", // Automatically parses the JSON response
  };

  try {
    const resp = await got.post(opts.url, {
      headers: opts.headers,
      json: opts.json,
    });

    // console.log(`Receive checkin request response:`, JSON.stringify(resp.body));

    const body = JSON.parse(resp.body || "{}");
    if (body.code === 0) {
      console.log(`签到成功,${body.message}`);
    } else if (body.code === 1003106) {
      console.log("业务繁忙,请稍后再试");
    } else {
      console.log(`签到失败(${body.message})`);
    }
  } catch (err) {
    console.error(`Send checkin request error:`, err);
  }

  try {
    const resp2 = await got.get(opts2.url, {
      headers: opts2.headers,
    });

    // console.log(`Receive lookup request response:`, JSON.stringify(resp2.body));
    const body2 = JSON.parse(resp2.body || "{}");
    if (body2.code === 0) {
      console.log(`查询积分成功，川一当前积分为${body2.data}`);
    } else {
      console.log(`查询失败(${body2.message})`);
    }
  } catch (err) {
    console.error(`Send lookingup request error:`, err);
  }
})();
