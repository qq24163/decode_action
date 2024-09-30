//require("global-agent/bootstrap");
//global.GLOBAL_AGENT.HTTP_PROXY="http://192.168.7.3:8080";
// 设置一个定时器，在9分钟后强制关闭脚本
setTimeout(() => {
    console.log("\n9分钟已到，强制关闭脚本");
    process.exit(0); // 退出脚本
}, 9 * 60 * 1000); // 9分钟
// 设置一个间隔定时器，每分钟提示剩余时间
let remainingMinutes = 9;
const intervalId = setInterval(() => {
    remainingMinutes--;
    if (remainingMinutes > 0) {
        process.stdout.write(`\r还有${remainingMinutes}分钟关闭脚本`);
    } else {
        clearInterval(intervalId); // 清除间隔定时器
    }
}, 60 * 1000); // 每分钟

const _0x4c672b = _0x4a9430("中国联通阅读"),
  _0x2bba68 = require("got"),
  _0x2bbc1d = require("path"),
  {
    exec: _0x526718
  } = require("child_process"),
  _0x368aa5 = require("crypto-js"),
  {
    CookieJar: _0x4484a5
  } = require("tough-cookie"),
  _0x24434b = "chinaUnicom",
  _0x55899c = ["\n", "&", "@"],
  _0x52f10b = [_0x24434b + "Cookie"],
  _0x148eb1 = 7000,
  _0x1cbe1e = 3;
const 
  _0x469423 = "iphone_c@11.0503",
  _0x546817 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:" + _0x469423 + "}",
  _0x281cdf = "af8ceac06275e6af2826a3cf6ea168d611fe3ed96f70dd80b11ce03507d892dc266ede9a3e75852aba96dd300ef7f86150abe20ce49c13c85d86165bdd8fb0b2c17a6f33dea1cbe7538afcb85e964c2415f1bccf4a5f79ccb685a5dbfdc46fe6",
  _0x3d9810 = "10000002",
  _0xa01453 = "7k1HcDL8RKvc",
  _0x49426e = "woreadst^&*12345",
  _0x18c84f = "16-Bytes--String",
  _0x46b3a9 = "225",
  _0x127422 = "party", 
  _0x3bb78f = "9",
  _0x4e5ad9 = "0123456789",
  _0x4192c6 = "qwertyuiopasdfghjklzxcvbnm",
  _0x2a3518 = "100002",
  _0x353847 = "";
let 
  _0x55391c = null,
  _0x5724ea = [6640, 6641];



function _0x71b805(_0x6a8fe2, _0x1dd78a, _0x1e36ab, _0x3359f8, _0x2c8970, _0x16f3cf) {
  return _0x368aa5[_0x6a8fe2].encrypt(_0x368aa5.enc.Utf8.parse(_0x3359f8), _0x368aa5.enc.Utf8.parse(_0x2c8970), {
    mode: _0x368aa5.mode[_0x1dd78a],
    padding: _0x368aa5.pad[_0x1e36ab],
    iv: _0x368aa5.enc.Utf8.parse(_0x16f3cf)
  }).ciphertext.toString(_0x368aa5.enc.Hex);
}
let 
  _0x13c734 = 0;
function _0x169d23() {
  _0x13c734 = 1;
  process.on("SIGTERM", () => {
    _0x13c734 = 2;
    process.exit(0);
  });
  const _0x1067e7 = _0x2bbc1d.basename(process.argv[1]),
    _0x485af0 = ["bash", "timeout", "grep"];
  let _0x58df8a = ["ps afx"];
  _0x58df8a.push("grep " + _0x1067e7);
  _0x58df8a = _0x58df8a.concat(_0x485af0.map(_0x12a62f => "grep -v \"" + _0x12a62f + " \""));
  _0x58df8a.push("wc -l");
  const _0x5ef64e = _0x58df8a.join("|"),
    _0x3b614a = () => {
      _0x526718(_0x5ef64e, (_0x3ebb06, _0x1bb818, _0x1b4324) => {
        if (_0x3ebb06 || _0x1b4324) {
          return;
        }
        _0x191c8c = parseInt(_0x1bb818.trim(), 10);
      });
      if (_0x13c734 == 1) {
        setTimeout(_0x3b614a, 2000);
      }
    };
  _0x3b614a();
}
class _0x1e60de {
  constructor() {
    this.index = _0x4c672b.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x1dc10b = {
      limit: 0
    };
    const _0x3e8908 = {
      Connection: "keep-alive"
    };
    const _0x7705b4 = {
      retry: _0x1dc10b,
      timeout: _0x148eb1,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x3e8908
    };
    this.got = _0x2bba68.extend(_0x7705b4);
    if (_0x13c734 == 0) {
      _0x169d23();
    }
  }
  log(_0x269c59, _0x301c3b = {}) {
    var _0x18a4a7 = "",
      _0x732521 = _0x4c672b.userCount.toString().length;
    if (this.index) {
      _0x18a4a7 += "账号[" + _0x4c672b.padStr(this.index, _0x732521) + "]";
    }
    if (this.name) {
      _0x18a4a7 += "[" + this.name + "]";
    }
    _0x4c672b.log(_0x18a4a7 + _0x269c59, _0x301c3b);
  }
  set_cookie(_0x2599f0, _0x6eb0f3, _0x312d79, _0x193e1e, _0x5c93b8 = {}) {
    this.cookieJar.setCookieSync(_0x2599f0 + "=" + _0x6eb0f3 + "; Domain=" + _0x312d79 + ";", "" + _0x193e1e);
  }
  async request(_0x433feb) {
    const _0x290a0a = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x23df85 = ["TimeoutError"],
      _0x668150 = ["EPROTO"],
      _0x1a1818 = [];
    var _0x4a443f = null,
      _0x1a7b45 = 0,
      _0x3f4231 = _0x433feb.fn || _0x433feb.url;
    let _0x5e1d36 = _0x4c672b.get(_0x433feb, "valid_code", _0x1a1818);
    _0x433feb.method = _0x433feb?.["method"]?.["toUpperCase"]() || "GET";
    let _0x823091, _0x173cf5;
    while (_0x1a7b45 < _0x1cbe1e) {
      try {
        _0x1a7b45++;
        _0x823091 = "";
        _0x173cf5 = "";
        let _0x179710 = null,
          _0x58a24f = _0x433feb?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x148eb1,
          _0x143403 = false,
          _0x2a8da8 = 5000;
        /*await _0x4c672b.wait(_0x2a8da8);*/
        await new Promise(async _0x57cb0a => {
          setTimeout(() => {
            _0x143403 = true;
            _0x57cb0a();
          }, _0x58a24f);
          await this.got(_0x433feb).then(_0x4366f3 => {
            _0x4a443f = _0x4366f3;
          }, _0x30aa0f => {
            _0x179710 = _0x30aa0f;
            _0x4a443f = _0x30aa0f.response;
            _0x823091 = _0x179710?.["code"] || "";
            _0x173cf5 = _0x179710?.["name"] || "";
          });
          _0x57cb0a();
        });
        if (_0x143403) {
          this.log("[" + _0x3f4231 + "]请求超时(" + _0x58a24f / 1000 + "秒)，重试第" + _0x1a7b45 + "次");
        } else {
          if (_0x668150.includes(_0x823091)) {
            this.log("[" + _0x3f4231 + "]请求错误[" + _0x823091 + "][" + _0x173cf5 + "]");
            if (_0x179710?.["message"]) {
              console.log(_0x179710.message);
            }
            break;
          } else {
            if (_0x23df85.includes(_0x173cf5)) {
              this.log("[" + _0x3f4231 + "]请求错误[" + _0x823091 + "][" + _0x173cf5 + "]，重试第" + _0x1a7b45 + "次");
            } else {
              if (_0x290a0a.includes(_0x823091)) {
                this.log("[" + _0x3f4231 + "]请求错误[" + _0x823091 + "][" + _0x173cf5 + "]，重试第" + _0x1a7b45 + "次");
              } else {
                let _0x26ca58 = _0x4a443f?.["statusCode"] || "",
                  _0xeb6c6a = _0x26ca58 / 100 | 0;
                if (_0x26ca58) {
                  _0xeb6c6a > 3 && !_0x5e1d36.includes(_0x26ca58) && (_0x26ca58 ? this.log("请求[" + _0x3f4231 + "]返回[" + _0x26ca58 + "]") : this.log("请求[" + _0x3f4231 + "]错误[" + _0x823091 + "][" + _0x173cf5 + "]"));
                  if (_0xeb6c6a <= 4) {
                    break;
                  }
                } else {
                  this.log("请求[" + _0x3f4231 + "]错误[" + _0x823091 + "][" + _0x173cf5 + "]");
                }
              }
            }
          }
        }
      } catch (_0x3004fb) {
        _0x3004fb.name == "TimeoutError" ? this.log("[" + _0x3f4231 + "]请求超时，重试第" + _0x1a7b45 + "次") : this.log("[" + _0x3f4231 + "]请求错误(" + _0x3004fb.message + ")，重试第" + _0x1a7b45 + "次");
      }
    }
    if (_0x4a443f == null) {
      return Promise.resolve({
        statusCode: _0x823091 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x50b741,
      headers: _0x590c9b,
      body: _0x1d560d
    } = _0x4a443f;
    if (_0x1d560d) {
      try {
        _0x1d560d = JSON.parse(_0x1d560d);
      } catch {}
    }
    const _0x44d302 = {
      statusCode: _0x50b741,
      headers: _0x590c9b,
      result: _0x1d560d
    };
    return Promise.resolve(_0x44d302);
  }
}
let _0x24046c = _0x1e60de;
try {
  let _0x12396e = require("./LocalBasic");
  _0x24046c = _0x12396e;
} catch {}
class _0x333e45 extends _0x24046c {
  constructor(_0xd93737) {
    super(_0x4c672b);
    this.cookieJar = new _0x4484a5();
    const _0x320a64 = {
      "User-Agent": _0x546817
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x320a64
    });
    let _0x52e0a3 = _0xd93737.split("#");
    this.token_online = _0x52e0a3[0];
    this.unicomTokenId = _0x4c672b.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x4c672b.randomString(32, _0x4e5ad9 + _0x4192c6).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.moonbox_task_record = {};
    this.moonbox_notified = [];
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x693930, _0x1088e8, _0x52b165 = {}) {
    let _0x44b4f4 = _0x52b165?.["domain"] || "10010.com",
      _0x3b30c6 = _0x52b165?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x693930, _0x1088e8, _0x44b4f4, _0x3b30c6, _0x52b165);
  }
  get_bizchannelinfo() {
    const _0x2fbd5b = {
      bizChannelCode: _0x46b3a9,
      disriBiz: _0x127422,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x2ae285 = JSON.stringify(_0x2fbd5b);
    return _0x2ae285;
  }
  get_epay_authinfo() {
    const _0x31fa00 = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x31fa00);
  }
  get_flmf_data(_0x30396c = "welfareCenter") {
    const _0x1e4b94 = {
      sid: this.flmf_sid,
      actcode: _0x30396c
    };
    return _0x1e4b94;
  }
  encode_woread(_0x1fb841, _0x2edf26 = _0x49426e) {
    let _0x5d406d = _0x71b805("AES", "CBC", "Pkcs7", JSON.stringify(_0x1fb841), _0x2edf26, _0x18c84f);
    return Buffer.from(_0x5d406d, "utf-8").toString("base64");
  }
  encode_woread_jm(_0x1fb841, _0x2edf26 = _0x49426e) {
    let _0x5d406d = _0x71b805("AES", "CBC", "Pkcs7", _0x1fb841, _0x2edf26, _0x18c84f);
    return Buffer.from(_0x5d406d, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x4c672b.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_woread_m_param() {
    return {
      timestamp: _0x4c672b.time("yyyyMMddhhmmss"),
      signtimestamp: Date.now(),
      source: _0x3bb78f,
      token: this.woread_token
    };
  }
  get_ltyp_sign_header(_0x535fbf) {
    let _0x4ebb05 = Date.now(),
      _0x334431 = Math.floor(89999 * Math.random()) + 100000,
      _0x26bfbe = _0x2a3518,
      _0x5ba8fb = _0x353847,
      _0x461c52 = _0x368aa5.MD5(_0x535fbf + _0x4ebb05 + _0x334431 + _0x26bfbe + _0x5ba8fb).toString();
    const _0x59dfc6 = {
      key: _0x535fbf,
      resTime: _0x4ebb05,
      reqSeq: _0x334431,
      channel: _0x26bfbe,
      version: _0x5ba8fb,
      sign: _0x461c52
    };
    return _0x59dfc6;
  }
  async onLine(_0x12cbf8 = {}) {
    let _0x4d2878 = false;
    try {
      let _0x248c36 = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x4c672b.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x281cdf,
            version: _0x469423,
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x1b682a,
          statusCode: _0x152ca4
        } = await this.request(_0x248c36),
        _0x5655f9 = _0x4c672b.get(_0x1b682a, "code", _0x152ca4);
      if (_0x5655f9 == 0) {
        _0x4d2878 = true;
        this.valid = true;
        this.mobile = _0x1b682a?.["desmobile"];
        this.name = _0x1b682a?.["desmobile"];
        this.ecs_token = _0x1b682a?.["ecs_token"];
        this.city = _0x1b682a?.["list"];
        this.log("登录成功");
      } else {
        this.valid = false;
        this.log("登录失败[" + _0x5655f9 + "]");
      }
    } catch (_0x158d45) {
      console.log(_0x158d45);
    } finally {
      return _0x4d2878;
    }
  }
  
  


  async woread_api(_0x34880c) {
    let _0x1db761 = await this.request(_0x4c672b.copy(_0x34880c)),
      _0x3e48ad = _0x1db761?.["result"]?.["message"] || "";
    _0x3e48ad?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x1db761 = await this.request(_0x4c672b.copy(_0x34880c)));
    return _0x1db761;
  }
  switch_woread_token(_0x56b38b) {
    const _0x2c6986 = {
      accesstoken: _0x56b38b
    };
    const _0x14d38a = {
      headers: _0x2c6986
    };
    this.got = this.got.extend(_0x14d38a);
  }
  async woread_auth(_0x7b7459 = {}) {
  let _0x547982 = false;
  while (!_0x547982) { // 添加重试逻辑
    try {
      let _0x43ac40 = _0x4c672b.time("yyyyMMddhhmmss");
      const _0x371d90 = {
        timestamp: _0x43ac40
      };
      let _0x2b69e1 = this.encode_woread(_0x371d90),
          _0x281e8f = Date.now().toString(),
          _0x2c469e = _0x368aa5.MD5(_0x3d9810 + _0xa01453 + _0x281e8f).toString();
      const _0x40e0b0 = {
        sign: _0x2b69e1
      };
      const _0x51135a = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x3d9810 + "/" + _0x281e8f + "/" + _0x2c469e,
        json: _0x40e0b0
      };
      let {
        result: _0x10c758
      } = await this.request(_0x51135a),
          _0x1540b2 = _0x4c672b.get(_0x10c758, "code", -1);
      if (_0x1540b2 == "0000") {
        _0x547982 = true;
        this.woread_accesstoken = _0x10c758?.["data"]?.["accesstoken"];
        this.switch_woread_token(this.woread_accesstoken);
      } else {
        let _0x2c8b85 = _0x10c758?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x1540b2 + "]: " + _0x2c8b85);
      }
    } catch (_0x3f8fdd) {
      console.log(_0x3f8fdd);
    }
    if (!_0x547982) {
      console.log("woread_auth 失败，重试中...");
      await new Promise(resolve => setTimeout(resolve, 5000)); // 等待5秒后重试
    }
  }
  return _0x547982;
 }

 async woread_login(_0x26d717 = {}) {
  let _0x5c0c95 = false;
  while (!_0x5c0c95) { // 添加重试逻辑
    try {
      let _0x10a4cc = {
        phone: this.encode_woread_jm(this.mobile),
        timestamp: _0x4c672b.time("yyyyMMddhhmmss")
      },
          _0x544576 = this.encode_woread(_0x10a4cc);
      const _0x148f49 = {
        sign: _0x544576
      };
      const _0x35c631 = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x148f49
      };
      let {
        result: _0x28bf76
      } = await this.request(_0x35c631),
          _0x5e778d = _0x4c672b.get(_0x28bf76, "code", -1);
      if (_0x5e778d == "0000") {
        _0x5c0c95 = true;
        let {
          userid: _0x58fe9a,
          userindex: _0x42fa05,
          token: _0x346b8f,
          verifycode: _0xdef795
        } = _0x28bf76?.["data"];
        this.woread_token = _0x346b8f;
        this.woread_verifycode = _0xdef795;
        const _0x3bda74 = {
          woread_userid: _0x58fe9a,
          woread_userindex: _0x42fa05,
          woread_token: _0x346b8f,
          woread_verifycode: _0xdef795
        };
        Object.assign(this, _0x3bda74);
      } else {
        let _0x32f4f4 = _0x28bf76?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x5e778d + "]: " + _0x32f4f4);
      }
    } catch (_0x315b1a) {
      console.log(_0x315b1a);
    }
    if (!_0x5c0c95) {
      console.log("woread_login 失败，重试中...");
      await new Promise(resolve => setTimeout(resolve, 5000)); // 等待5秒后重试
    }
  }
  return _0x5c0c95;
 }

  
  async moonbox_queryActiveInfo(_0x1aa999 = {}) {
    try {
      let _0x25bfae = this.get_woread_param(),
        _0x30779b = this.encode_woread(_0x25bfae);
      const _0x3df8df = {
        sign: _0x30779b
      };
      const _0x1fafe7 = {
        fn: "moonbox_queryActiveInfo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo",
        json: _0x3df8df
      };
      let {
          result: _0x3fef2a
        } = await this.woread_api(_0x1fafe7),
        _0x1f3aaf = _0x4c672b.get(_0x3fef2a, "code", -1);
      if (_0x1f3aaf == "0000") {
        let {
          activeId: _0x250122,
          activeName: _0x2bfd4e
        } = _0x3fef2a?.["data"];
        _0x55391c = _0x250122;
      } else {
        let _0xa936bf = _0x3fef2a?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x1f3aaf + "]: " + _0xa936bf);
      }
    } catch (_0x1b94a6) {
      console.log(_0x1b94a6);
    }
  }
  async moonbox_queryCurTaskStatus(_0x149c93 = {}) {
    try {
      let _0x5de828 = {
          activeIndex: _0x55391c,
          ...this.get_woread_param()
        },
        _0x3b7ea4 = this.encode_woread(_0x5de828);
      const _0xfd95db = {
        sign: _0x3b7ea4
      };
      const _0x247389 = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0xfd95db
      };
      let {
          result: _0x1d541c
        } = await this.woread_api(_0x247389),
        _0x1054fb = _0x4c672b.get(_0x1d541c, "code", -1);
      if (_0x1054fb == "0000") {
        for (let _0x252927 of _0x1d541c?.["data"] || []) {
          let {
            taskName: _0x313ae9,
            currentValue: _0x3fdd11,
            taskValue: _0x53dd8d
          } = _0x252927?.["taskDetail"];
          switch (_0x252927.taskStatus) {
            case 0:
              {
                this.moonbox_task_record[_0x313ae9] = true;
                this.log("阅光宝盒[" + _0x313ae9 + "]进度: " + parseInt(_0x3fdd11) + "/" + _0x53dd8d + "分钟");
                break;
              }
            case 2:
              {
                await this.moonbox_completeActiveTask(_0x252927);
              }
            case 1:
              {
                this.moonbox_task_record[_0x313ae9] = false;
                if (!this.moonbox_notified.includes(_0x313ae9)) {
                  this.moonbox_notified.push(_0x313ae9);
                  const _0x52e7f2 = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x313ae9 + "]今日已完成", _0x52e7f2);
                }
                break;
              }
          }
        }
      } else {
        let _0x325aa9 = _0x1d541c?.["message"] || "";
        _0x325aa9?.["includes"]("未领取") && !_0x149c93.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x149c93.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x149c93)) : this.log("阅光宝盒查询任务状态失败[" + _0x1054fb + "]: " + _0x325aa9);
      }
    } catch (_0x4df7a0) {
      console.log(_0x4df7a0);
    }
    // 无论任务状态如何，继续运行查询任务列表
     await this.moonbox_queryActiveTaskList();
  }
  async moonbox_completeActiveTask(_0x4af677, _0x3aeda0 = {}) {
    try {
      let _0x4c63e8 = {
          taskId: _0x4af677.id,
          ...this.get_woread_param()
        },
        _0xa3034 = this.encode_woread(_0x4c63e8);
      const _0x378954 = {
        sign: _0xa3034
      };
      const _0x4513b4 = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x378954
      };
      let {
          result: _0x40efdd
        } = await this.woread_api(_0x4513b4),
        _0x37bf24 = _0x4c672b.get(_0x40efdd, "code", -1);
      if (_0x37bf24 == "0000") {
        const _0x432c2b = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x40efdd?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x40efdd?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x432c2b);
      } else {
        let _0x355fe8 = _0x40efdd?.["message"] || "";
        this.log("阅光宝盒[" + _0x4af677?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x37bf24 + "]: " + _0x355fe8);
      }
    } catch (_0x5d1580) {
      console.log(_0x5d1580);
    }
  }
  async moonbox_queryActiveTaskList(_0x5b4f5d = {}) {
    try {

      let yueduliebiao = [
            {
                taskDetail: {
                    taskValue: "240",
                    materialGroup: {
                        groupName: "0.3元话费红包"
                    },
                    taskName: "阅读240分钟"
                },
                maxNum: 1500,
                receiveNum: 750,
                secondTaskId: "118"
            },
            {
                taskDetail: {
                    taskValue: "120",
                    materialGroup: {
                        groupName: "0.2元话费红包"
                    },
                    taskName: "阅读120分钟"
                },
                maxNum: 3000,
                receiveNum: 1500,
                secondTaskId: "117"
            }
        ];

        let _0x1cff30 = yueduliebiao.sort(function (_0x1792cf, _0xe10a9b) {
            let _0x3ecb2c = parseInt(_0xe10a9b.taskDetail.taskValue),
                _0x243b54 = parseInt(_0x1792cf.taskDetail.taskValue);
            return _0x3ecb2c - _0x243b54;
        });

        let _0xe49ce3 = _0x1cff30.filter(_0x5ed25d => _0x5ed25d.maxNum - _0x5ed25d.receiveNum > 0 && _0x5ed25d.taskDetail.materialGroup.groupName.includes("红包"));
          this.log(`获取到 ${_0xe49ce3.length} 个可领取的阅光宝盒红包任务`);
        _0xe49ce3?.["length"] ? await this.moonbox_receiveActiveTask(_0xe49ce3) : this.log("没有可领取的阅光宝盒红包任务了");
      } 
     catch (_0x3346d3) {
      console.log(_0x3346d3);
    }
  }
  
  async moonbox_receiveActiveTask(_0x17d7d6, _0x642063 = {}) {
    try {
        if (!_0x17d7d6.length) {
            return;
        }

        const waitForMidnight = async () => {
            const now = new Date();
            const targetTime = new Date();
            targetTime.setHours(23, 59, 53, 500); // 设定时间为0点0分0秒

            let timeDifference = targetTime - now;
            if (timeDifference < 0) {
                targetTime.setDate(targetTime.getDate() + 1); // 如果当前时间已经过了0点0分0秒，设定时间为第二天的0点0分0秒
                timeDifference = targetTime - now;
            }

            if (timeDifference <= 360000) { // 如果离设定时间在360秒（6分钟）内
                console.log(`距离设定时间还有${Math.floor(timeDifference / 1000)}秒，等待到设定时间运行`);
                await new Promise(resolve => setTimeout(resolve, timeDifference));
                console.log("到达设定时间，开始查询任务");
            } else {
                console.log("距离设定时间超过360秒，直接运行");
            }
        };

        // 等待到设定时间或直接运行
        await waitForMidnight();

        const executeTask = async (task, attempt) => {
            let _0x3180c7 = task?.["taskDetail"]?.["taskName"] || "",
                _0x35c4b9 = {
                    activeId: _0x55391c,
                    taskId: task.secondTaskId,
                    ...this.get_woread_param()
                },
                _0x9d13eb = this.encode_woread(_0x35c4b9);
            const _0x1abd0a = {
                sign: _0x9d13eb
            };

            const _0x3e1696 = {
                fn: "moonbox_queryActiveTaskList",
                method: "post",
                url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
                json: _0x1abd0a
            };

            return this.woread_api(_0x3e1696).then(({ result: _0x4cc772 }) => {
                let _0x45290e = _0x4c672b.get(_0x4cc772, "code", -1);
                if (_0x45290e == "0000") {
                    this.moonbox_task_record[_0x3180c7] = true;
                    this.log(`第${attempt + 1}次请求：领取阅光宝盒任务[${_0x3180c7}]成功`);
                    return { attempt: attempt + 1, status: "成功", message: `领取阅光宝盒任务[${_0x3180c7}]成功` };
                } else {
                    let _0x4cc9d9 = _0x4cc772?.["message"] || "";
                    this.log(`第${attempt + 1}次请求：领取阅光宝盒任务[${_0x3180c7}]失败[${_0x45290e}]: ${_0x4cc9d9}`);
                    return { attempt: attempt + 1, status: "失败", message: `领取阅光宝盒任务[${_0x3180c7}]失败[${_0x45290e}]: ${_0x4cc9d9}` };
                }
            });
        };

        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

        const executeTasksWithRetries = async (task) => {
            const results = [];
            for (let i = 0; i < 7; i++) {
                console.log(`开始第${i + 1}次请求`);
                results.push(executeTask(task, i));
                await delay(3000); // 每次请求之间等待3秒
            }
            console.log("7次请求完成，等待打印结果");
            return Promise.all(results);
        };

        const allTasks = _0x17d7d6.map(task => executeTasksWithRetries(task));
        const allResults = await Promise.all(allTasks);

        // 处理结果，使每个任务只显示一次，并包含详细的请求信息
        const processedResults = allResults.map((results, index) => {
            const taskName = _0x17d7d6[index]?.["taskDetail"]?.["taskName"] || `任务${index + 1}`;
            return {
                taskName,
                results: results.map(result => ({
                    attempt: result.attempt,
                    status: result.status,
                    message: result.message
                }))
            };
        });

        console.log("所有请求的结果：", JSON.stringify(processedResults, null, 2));

    } catch (_0x2fbd0d) {
        console.log(_0x2fbd0d);
    }
 }
  async woread_draw_task(_0x10af6a) {
    await this.woread_getSeeVideoAddNumber(_0x10af6a);
    await this.woread_addDrawTimes(_0x10af6a);
    await this.woread_getActivityNumber(_0x10af6a);
  }
  async woread_task() {
    for (let _0x524680 of _0x5724ea) {
      await this.woread_draw_task(_0x524680);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }

  async userLoginTask() {
    if (!(await this.onLine())) {
      return;
    }
    if (!(await this.woread_auth())) {
      return;
    }
    if (!(await this.woread_login())) {
      return;
    }
    this.switch_woread_token(this.woread_accesstoken);
    if (!_0x55391c) {
      const activeInfoSuccess = await this.moonbox_queryActiveInfo();
    if (!activeInfoSuccess) {
      // 即使查询活动信息失败，也继续执行查询当前任务状态
      await this.moonbox_queryCurTaskStatus();
      return;
    }
  }
  await this.moonbox_queryCurTaskStatus();
 }

}
!(async () => {
  _0x4c672b.read_env(_0x333e45);
  for (let _0x3a7d7a of _0x4c672b.userList) {
    await _0x3a7d7a.userLoginTask();
  }
})().catch(_0x56ffeb => _0x4c672b.log(_0x56ffeb)).finally(() => _0x4c672b.exitNow());

function _0x4a9430(_0x3dc8ae) {
  return new class {
    constructor(_0x20ff7f) {
      this.name = _0x20ff7f;
      this.startTime = Date.now();
      const _0x39680c = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x39680c);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x2ae7b7, _0x275447 = {}) {
      const _0x56f445 = {
        console: true
      };
      Object.assign(_0x56f445, _0x275447);
      if (_0x56f445.time) {
        let _0x3ef8cb = _0x56f445.fmt || "hh:mm:ss";
        _0x2ae7b7 = "[" + this.time(_0x3ef8cb) + "]" + _0x2ae7b7;
      }
      if (_0x56f445.notify) {
        this.notifyStr.push(_0x2ae7b7);
      }
      if (_0x56f445.console) {
        console.log(_0x2ae7b7);
      }
    }
    get(_0x2a0329, _0x4bceb4, _0x4a1980 = "") {
      let _0x5317bb = _0x4a1980;
      _0x2a0329?.["hasOwnProperty"](_0x4bceb4) && (_0x5317bb = _0x2a0329[_0x4bceb4]);
      return _0x5317bb;
    }
    pop(_0x1b7e25, _0xe7c4ac, _0x41427d = "") {
      let _0x189530 = _0x41427d;
      _0x1b7e25?.["hasOwnProperty"](_0xe7c4ac) && (_0x189530 = _0x1b7e25[_0xe7c4ac], delete _0x1b7e25[_0xe7c4ac]);
      return _0x189530;
    }
    copy(_0x35e17d) {
      return Object.assign({}, _0x35e17d);
    }
    read_env(_0x313c6f) {
      let _0x2818ab = _0x52f10b.map(_0x4a0e55 => process.env[_0x4a0e55]);
      for (let _0x2db17f of _0x2818ab.filter(_0x898472 => !!_0x898472)) {
        let _0xd94a01 = _0x55899c.filter(_0x477b8e => _0x2db17f.includes(_0x477b8e)),
          _0x40b5c7 = _0xd94a01.length > 0 ? _0xd94a01[0] : _0x55899c[0];
        for (let _0x1c8866 of _0x2db17f.split(_0x40b5c7).filter(_0x32ae75 => !!_0x32ae75)) {
          this.userList.push(new _0x313c6f(_0x1c8866));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x5d04ec = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x52f10b.map(_0x46a071 => "[" + _0x46a071 + "]").join("或"), _0x5d04ec);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x5db126, _0x57b22b, _0x392357 = {}) {
      while (_0x57b22b.idx < _0x4c672b.userList.length) {
        let _0x258f29 = _0x4c672b.userList[_0x57b22b.idx++];
        if (!_0x258f29.valid) {
          continue;
        }
        await _0x258f29[_0x5db126](_0x392357);
      }
    }
    async threadTask(_0xa21bf9, _0x52bb63) {
      let _0x279723 = [];
      const _0x10e941 = {
        idx: 0
      };
      while (_0x52bb63--) {
        _0x279723.push(this.threads(_0xa21bf9, _0x10e941));
      }
      await Promise.all(_0x279723);
    }
    time(_0xc0075d, _0x39d0d0 = null) {
      let _0x47b00f = _0x39d0d0 ? new Date(_0x39d0d0) : new Date(),
        _0x3e8b62 = {
          "M+": _0x47b00f.getMonth() + 1,
          "d+": _0x47b00f.getDate(),
          "h+": _0x47b00f.getHours(),
          "m+": _0x47b00f.getMinutes(),
          "s+": _0x47b00f.getSeconds(),
          "q+": Math.floor((_0x47b00f.getMonth() + 3) / 3),
          S: this.padStr(_0x47b00f.getMilliseconds(), 3)
        };
      /(y+)/.test(_0xc0075d) && (_0xc0075d = _0xc0075d.replace(RegExp.$1, (_0x47b00f.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x13db8b in _0x3e8b62) new RegExp("(" + _0x13db8b + ")").test(_0xc0075d) && (_0xc0075d = _0xc0075d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3e8b62[_0x13db8b] : ("00" + _0x3e8b62[_0x13db8b]).substr(("" + _0x3e8b62[_0x13db8b]).length)));
      return _0xc0075d;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x19b840 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x19b840.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x246b7e, _0x485edb, _0x56d4e8 = {}) {
      let _0x4ec3df = _0x56d4e8.padding || "0",
        _0x5951a7 = _0x56d4e8.mode || "l",
        _0x2508bb = String(_0x246b7e),
        _0x2284d5 = _0x485edb > _0x2508bb.length ? _0x485edb - _0x2508bb.length : 0,
        _0x4f9fa3 = "";
      for (let _0x325347 = 0; _0x325347 < _0x2284d5; _0x325347++) {
        _0x4f9fa3 += _0x4ec3df;
      }
      _0x5951a7 == "r" ? _0x2508bb = _0x2508bb + _0x4f9fa3 : _0x2508bb = _0x4f9fa3 + _0x2508bb;
      return _0x2508bb;
    }
    json2str(_0x50c3fd, _0x5546cf, _0x126bf8 = false) {
      let _0x2a028b = [];
      for (let _0xf7404a of Object.keys(_0x50c3fd).sort()) {
        let _0xf3ba9 = _0x50c3fd[_0xf7404a];
        if (_0xf3ba9 && _0x126bf8) {
          _0xf3ba9 = encodeURIComponent(_0xf3ba9);
        }
        _0x2a028b.push(_0xf7404a + "=" + _0xf3ba9);
      }
      return _0x2a028b.join(_0x5546cf);
    }
    str2json(_0x5ac0e0, _0x2b412e = false) {
      let _0x55b019 = {};
      for (let _0x251032 of _0x5ac0e0.split("&")) {
        if (!_0x251032) {
          continue;
        }
        let _0x1a4334 = _0x251032.indexOf("=");
        if (_0x1a4334 == -1) {
          continue;
        }
        let _0x43dbca = _0x251032.substr(0, _0x1a4334),
          _0x5a058c = _0x251032.substr(_0x1a4334 + 1);
        if (_0x2b412e) {
          _0x5a058c = decodeURIComponent(_0x5a058c);
        }
        _0x55b019[_0x43dbca] = _0x5a058c;
      }
      return _0x55b019;
    }
    randomPattern(_0x2e6754, _0x2d62bd = "abcdef0123456789") {
      let _0x1ef277 = "";
      for (let _0x24e475 of _0x2e6754) {
        if (_0x24e475 == "x") {
          _0x1ef277 += _0x2d62bd.charAt(Math.floor(Math.random() * _0x2d62bd.length));
        } else {
          _0x24e475 == "X" ? _0x1ef277 += _0x2d62bd.charAt(Math.floor(Math.random() * _0x2d62bd.length)).toUpperCase() : _0x1ef277 += _0x24e475;
        }
      }
      return _0x1ef277;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-4xxx-4xxx-xxxxxxxxxxxx");
    }
    randomString(_0x1e4fee, _0x58454d = "abcdef0123456789") {
      let _0x437894 = "";
      for (let _0x5b91d3 = 0; _0x5b91d3 < _0x1e4fee; _0x5b91d3++) {
        _0x437894 += _0x58454d.charAt(Math.floor(Math.random() * _0x58454d.length));
      }
      return _0x437894;
    }
    randomList(_0x243ee5) {
      let _0x5d4508 = Math.floor(Math.random() * _0x243ee5.length);
      return _0x243ee5[_0x5d4508];
    }
    wait(_0x7fb1b7) {
      return new Promise(_0x13dc83 => setTimeout(_0x13dc83, _0x7fb1b7));
    }
    async exitNow() {
      await this.showmsg();
      let _0x3b76e8 = Date.now(),
        _0x4e1727 = (_0x3b76e8 - this.startTime) / 1000;
      this.log("");
      const _0x265b3c = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x4e1727 + "秒", _0x265b3c);
      process.exit(0);
    }
    normalize_time(_0x138270, _0x5b6289 = {}) {
      let _0x40e1b4 = _0x5b6289.len || this.default_timestamp_len;
      _0x138270 = _0x138270.toString();
      let _0x2a2577 = _0x138270.length;
      while (_0x2a2577 < _0x40e1b4) {
        _0x138270 += "0";
      }
      _0x2a2577 > _0x40e1b4 && (_0x138270 = _0x138270.slice(0, 13));
      return parseInt(_0x138270);
    }
    
    async wait_gap_interval(_0x380985, _0x47b42d) {
      let _0x55e493 = Date.now() - _0x380985;
      _0x55e493 < _0x47b42d && (await this.wait(_0x47b42d - _0x55e493));
    }
  }(_0x3dc8ae);
}
