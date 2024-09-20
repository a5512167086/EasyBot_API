# 引入Pymssql包
import pymssql

# 宣告一個含有MS SQL Server連線參數的連線
sqlconn = pymssql.connect(server='Server Name', user='User ID',
                          password='Change Me', database='Database Name')

# 開啟一個連線
cursor = sqlconn.cursor()

# 關閉連線
sqlconn.close()
