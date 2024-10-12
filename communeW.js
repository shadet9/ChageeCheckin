const got = require("got");

(async () => {
  const key = {
    mpId: "gh_36e273c5666c",
    openId: "oePf_4kxCyxfQ8_X1le-S8InKp2g",
    unionId: "o2Kz46EY1_-cri9FDi9zSrTQe90Q",
    data: {
      gameId: "1000133168",
      memberId: "1332251617",
      cardId: "10517964943",
      cardNo: "800800000040735",
      from: "",
    },
  };

  const opts = {
    url: "https://scrm.wuuxiang.com/crm7game-api/api/game/sign/signIn",
    headers: {
      Host: "scrm.wuuxiang.com",
      Connection: "keep-alive",
      apiCaller: "wxxcx",
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvZVBmXzRreEN5eGZROF9YMWxlLVM4SW5LcDJnIiwiYXBwaWQiOiJ3eGM5OWU3ODM2NDBjZDM3YmYiLCJpc3MiOiJtb2JpbGUiLCJleHAiOjE3Mjg3MDczMDcsIm1waWQiOiJnaF8zNmUyNzNjNTY2NmMifQ.zo2BhlOTfwnNUJRcn4tTcdbNAT1WI3AbAE6D1zDSeEQ",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c11)XWEB/11275",
      "Content-Type": "application/json",
      "Tcsl-Shardingfield": "group_code",
      xweb_xhr: 1,
      "xcx-version": "21.03.1",
      "X-Requested-With": "XMLHttpRequest",
      pname: "minigame",
      Accept: "*/*",
      "Sec-Fetch-Site": "cross-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer:
        "https://servicewechat.com/wxc99e783640cd37bf/10/page-frame.html",
    },
    json: key, // Automatically stringifies the body
    responseType: "json", // Automatically parses the JSON response
  };

  try {
    const resp = await got.post(opts.url, {
      headers: opts.headers,
      json: opts.json,
    });

    // console.log(`Receive checkin request response:`, JSON.stringify(resp.body));

    const body = JSON.parse(resp.body || "{}");
    if (body.code == 200) {
      console.log(`签到成功,${body.msg}`);
    } else if (body.code == 415) {
      console.log(`${body.msg}`);
    } else {
      console.log(`签到失败(${body.msg})`);
    }
  } catch (err) {
    console.error(`Send checkin request error:`, err);
  }
})();
