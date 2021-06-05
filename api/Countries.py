import requests
import json

url = 'https://corona.lmao.ninja/v2/countries/ ?yesterday=true&strict=true&query'

class Countries():
    def get_data(self,country):
        split_url = url.split(' ')
        data_url = country.join(split_url)
        response = requests.get(data_url)
        json_data = json.loads(response.text)
        return json_data
