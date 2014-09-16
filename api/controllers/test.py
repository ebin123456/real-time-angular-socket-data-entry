import requests
payload = {'nickname': 'value1hhhhh'}
r = requests.post("http://localhost:1337/first/update/5", data=payload)
print(r.text)

