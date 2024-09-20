def get_line_credentials(user_id):
    # 這裡用假數據來演示，實際應該從資料庫獲取
    credentials = {
        "user1": {
            "access_token": "zhfKexmFDLPPZ7g4WHwqR2wpLxzIox2VAsvYeudA7YV9+F7elKh6/lo264+Ab5rnCx2mGUiLaGqW+yTi+NVawJV/AkMsUv9a+3hgl1t35oavMAAxPoA0sRqXNGyfty2HQEqeKLHWhx4LntdunYJJXQdB04t89/1O/w1cDnyilFU=",
            "channel_secret": "68c73d4f514657cc060e14db7ac32218"
        },
        "user2": {
            "access_token": "zhfKexmFDLPPZ7g4WHwqR2wpLxzIox2VAsvYeudA7YV9+F7elKh6/lo264+Ab5rnCx2mGUiLaGqW+yTi+NVawJV/AkMsUv9a+3hgl1t35oavMAAxPoA0sRqXNGyfty2HQEqeKLHWhx4LntdunYJJXQdB04t89/1O/w1cDnyilFU=",
            "channel_secret": "68c73d4f514657cc060e14db7ac32218"
        }
        # 可以有更多的使用者配置
    }
    return credentials.get(user_id)
