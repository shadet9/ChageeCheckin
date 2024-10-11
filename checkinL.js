const got = require("got");

(async () => {
  const key = {
    activityId: "947079313798000641",
    storeId: 49006,
    timestamp: "1728532380809",
    signature: "DDC22C8A5C291694ABB303272A2EF92C",
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
        "FZqzj837jbtKRZhmckAI7LChE3fX01avnVC16RO3QMscDx6fjwmrw73v_7sev6AM",
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

  console.log(`Send checkin request:`, JSON.stringify(opts, null, 2));

  try {
    const resp = await got.post(opts.url, {
      headers: opts.headers,
      json: opts.json,
    });

    console.log(`Receive checkin request response:`, JSON.stringify(resp.body));

    const body = resp.body || {};
    if (body.code == 0) {
      console.log("签到成功");
    } else if (body.code == 1003106) {
      console.log("业务繁忙,请稍后再试");
    } else if (body.code == 404001) {
      console.log("登陆失效, 尝试移除账号...");
    } else {
      console.log(`签到失败(${body.message})`);
    }
  } catch (err) {
    console.error(`Send checkin request error:`, err);
    console.log("签到错误");
  }
})();
