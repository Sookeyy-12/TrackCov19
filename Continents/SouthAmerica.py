import requests
import json

url = 'https://corona.lmao.ninja/v2/continents/south%20america?yesterday&strict'

class SouthAmerica():

    def get_cases():
        response = requests.get(url)
        json_data = json.loads(response.text)
        cases = json_data['cases']
        return str(cases)

    def get_todaycases():
        response = requests.get(url)
        json_data = json.loads(response.text)
        today_cases = json_data['todayCases']
        return str(today_cases)

    def get_deaths():
        response = requests.get(url)
        json_data = json.loads(response.text)
        deaths = json_data['deaths']
        return str(deaths)

    def get_todaydeaths():
        response = requests.get(url)
        json_data = json.loads(response.text)
        today_deaths = json_data['todayDeaths']
        return str(today_deaths)

    def get_recovered():
        response = requests.get(url)
        json_data = json.loads(response.text)
        recovered = json_data['recovered']
        return str(recovered)

    def get_todayrecovered():
        response = requests.get(url)
        json_data = json.loads(response.text)
        today_recovered = json_data['todayRecovered']
        return str(today_recovered)

    def get_active():
        response = requests.get(url)
        json_data = json.loads(response.text)
        active = json_data['active']
        return str(active)

    def get_population():
        response = requests.get(url)
        json_data = json.loads(response.text)
        population = json_data['population']
        return str(population)

    def get_tests():
        response = requests.get(url)
        json_data = json.loads(response.text)
        tests = json_data['tests']
        return str(tests)