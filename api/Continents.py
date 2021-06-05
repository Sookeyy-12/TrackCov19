import requests
import json

url = 'https://corona.lmao.ninja/v2/continents/ ?today&strict'

class Continents():
    def get_data(self,continent):
        split_url = url.split(' ')
        data_url = continent.join(split_url)
        response = requests.get(data_url)
        json_data = json.loads(response.text)
        return json_data
