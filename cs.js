'''
 变量名 DHHM   多账号用@隔开
        CSCS   这是每个任务抢的次数 可以不设置 默认2 
        LTDLC   代理池  有代理池的自己添加变量 没有的不用设置 使用本地
  启动时间设置在23:55分-0点之间会等待到23:59:56秒开始抢任务 其他时间马上运行 
  建议挂代理池 不建议多账号一个本 同一IP 请求20次回请求频繁 建议 一号一本可以使用desi DHHM ‘数字’ 指定账号
  一个本多号就算挂代理池 也是使用同一个IP 跟本地没区别
  想抢什么任务自己修改TASK_IDS = [125, 124, 123, 122, 121] 里面的数字
'''
import requests
import json
import base64
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import time
from datetime import datetime, timedelta
import binascii
import base64
import threading
import os


PHONE_V = os.getenv('DHHM1').split('&')
CSCS = int(os.getenv('CSCS', '2'))
LTDLC = os.getenv('LTDLC2', '').split('@')

TASK_IDS = [123,122] 
infocode = {
    "121": "阅读15分钟任务",
    "122": "阅读120分钟任务",
    "123": "阅读240分钟任务",
    "124": "阅读360分钟任务",
    "125": "阅读480分钟任务"
}
ACTIVE_ID = "20"
REQ_NUM = {
    121: CSCS,
    122: CSCS,
    123: CSCS,
    124: CSCS,
    125: CSCS
}
DELAY = 0.05 


TARGET_TIME = datetime.strptime("23:59:59.979", "%H:%M:%S.%f")

UA = "Mozilla/5.0 (Linux; Android 11; Redmi Note 10 Pro Build/RP1A.201005.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.159 Mobile Safari/537.36"
headers = {
    "User-Agent": UA,
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "sec-ch-ua": '"Android WebView";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
    "accesstoken": "ODZERTZCMjA1NTg1MTFFNDNFMThDRDYw",
    "Content-Type": "application/json;charset=UTF-8",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": '"Android"',
    "Origin": "https://10010.woread.com.cn",
    "X-Requested-With": "com.sinovatech.unicom.ui",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://10010.woread.com.cn/ng_woread/",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
}

def utf8_parse(s):
    return s.encode('utf-8')

def get_aes(data, key):
    iv = "gnirtS--setyB-61"[::-1].encode('utf-8')
    key = key.encode('utf-8')
    key_hex = binascii.hexlify(key).decode('utf-8')
    iv_hex = binascii.hexlify(iv).decode('utf-8')
    iv = bytes.fromhex(iv_hex)
    key = bytes.fromhex(key_hex)
    json_string = json.dumps(data, separators=(',', ':'))
    utf8_string = json_string.encode('utf-8')
    cipher = AES.new(key, AES.MODE_CBC, iv)
    encrypted = cipher.encrypt(pad(utf8_string, AES.block_size))
    encrypted_hex = encrypted.hex()
    return base64.b64encode(encrypted_hex.encode('utf-8')).decode('utf-8')

def get_aes_v(body, task_id):
    token = body["data"]["token"]
    user_id = body["data"]["userid"]
    user_index = body["data"]["userindex"]
    user_account = body["data"]["phone"]
    verify_code = body["data"]["verifycode"]

    e1 = {"datav": {"activeId": ACTIVE_ID, "taskId": task_id}}
    result1 = get_aes({
        **e1["datav"],
        "timestamp": datetime.now().strftime("%Y%m%d%H%M%S"),
        "token": token,
        "userAccount": user_account,
        "userId": user_id,
        "userIndex": user_index,
        "verifyCode": verify_code
    }, "woreadst^&*12345")

    return result1

def get_aes_phone(data, key):
    iv = utf8_parse("gnirtS--setyB-61"[::-1])
    key = utf8_parse(key)
    phone = utf8_parse(data)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    encrypted = cipher.encrypt(pad(phone, AES.block_size))
    hex_str = binascii.hexlify(encrypted).decode('utf-8')
    return base64.b64encode(hex_str.encode('utf-8')).decode('utf-8')

def process_task(token, task_id, phone, proxies):
    data = json.dumps({"sign": token})
    headers2 = headers.copy()
    headers2["Content-Type"] = "application/json;charset=UTF-8"

    try:
        response = requests.post(
            "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
            headers=headers2,
            data=data,
            proxies=proxies
        )
        response_data = response.json()
        timestamp = datetime.now().strftime("%H:%M:%S:%f")[:-3]
        print(f"{phone} {timestamp} {infocode[str(task_id)]}: {response_data.get('message', 'No message')}")
    except Exception as error:
        #print(f"请求失败，任务ID:{task_id}:", error)
        return None

    time.sleep(DELAY)

def get_aes_v_task(tokens, phone, proxies):
    threads = []
    for task_id in TASK_IDS:
        for _ in range(REQ_NUM[task_id]):
            token = tokens[task_id]
            thread = threading.Thread(target=process_task, args=(token, task_id, phone, proxies))
            threads.append(thread)
            thread.start()
            time.sleep(DELAY) 

    for thread in threads:
        thread.join()

    #print(datetime.now().strftime("%H:%M:%S:%f")[:-3])

def login(phone, proxies):
    e = {"data": {"phone": get_aes_phone(phone, "woreadst^&*12345")}}
    result = get_aes({**e["data"], "timestamp": datetime.now().strftime("%Y%m%d%H%M%S")}, "woreadst^&*12345")
    data = json.dumps({"sign": result})
    response = requests.post(
        "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        headers=headers,
        data=data,
        proxies=proxies
    )

    if response.status_code == 200:
        login_response = response.json()
        timestamp = datetime.now().strftime("%H:%M:%S:%f")[:-3]
        if 'data' in login_response:
            print(f"手机号码 {phone} {timestamp} 登录成功")
            tokens = {}
            for task_id in TASK_IDS:
                token = get_aes_v({
                    "data": {
                        "token": login_response["data"]["token"],
                        "userid": login_response["data"]["userid"],
                        "userindex": login_response["data"]["userindex"],
                        "phone": login_response["data"]["phone"],
                        "verifycode": login_response["data"]["verifycode"]
                    }
                }, task_id)
                tokens[task_id] = token
            
           
            now = datetime.now()
            target_time_today = now.replace(hour=TARGET_TIME.hour, minute=TARGET_TIME.minute, second=TARGET_TIME.second, microsecond=TARGET_TIME.microsecond)
            
            if now > target_time_today:
                target_time_today += timedelta(days=1)
            
            time_to_wait = (target_time_today - now).total_seconds()
            
            if time_to_wait <= 300: 
                print(f"等待 {time_to_wait} 秒到 {target_time_today} 开始抢任务")
                time.sleep(time_to_wait)
            
            get_aes_v_task(tokens, phone, proxies)
        else:
            print(f"手机号码 {phone} 登录失败，响应中没有 'data' 键")
            print("登录响应内容:", login_response)
    else:
        print(f"手机号码 {phone} 登录失败，状态码: {response.status_code}")
        print("登录响应内容:", response.text)

def main():
    threads = []
    proxies = {}
    if LTDLC and LTDLC[0]:
        proxies = {
            "http": LTDLC[0],
            "https": LTDLC[0]
        }
        print("使用代理池:", LTDLC[0])
    else:
        print("使用本地请求")

    for phone in PHONE_V:
        thread = threading.Thread(target=login, args=(phone, proxies))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

if __name__ == "__main__":
    main()
    #print("All tasks processed.")
    print("任务运行完成")
