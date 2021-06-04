import requests
import json

class Africa():
    def __init__(self):
        self.url = 'https://corona.lmao.ninja/v2/continents/Africa?yesterday&strict'

    def get_cases(self):
        response = requests.get(self.url)
        json_data = json.loads(response.text)
        cases = json_data['cases']
        return cases

    def get_todaycases(self):
        response = requests.get(self.url)
        json_data = json.loads(response.text)
        today_cases = json_data['todayCases']
        return today_cases

    def get_deaths(self):
        response = requests.get(self.url)
        json_data = json.loads(response.text)
        deaths = json_data['deaths']
        return deaths

    def get_todaydeaths(self):
        response = requests.get(self.url)
        json_data = json.loads(response.text)
        today_deaths = json_data['todayDeaths']
        return today_deaths

    def get_recovered(self):
        response = requests.get(self.url)
        json_data = json.loads(response.text)
        recovered = json_data['recovered']
        return recovered

    def get_todayrecovered(self):
        response = requests.get(self.url)
        json_data = json.loads(response.text)
        today_recovered = json_data['todayRecovered']
        return today_recovered

    def get_active(self):
        response = requests.get(self.url)
        json_data = json.loads(response.text)
        active = json_data['active']
        return active

    def get_population(self):
        response = requests.get(self.url)
        json_data = json.loads(response.text)
        population = json_data['population']
        return population

    def get_tests(self):
        response = requests.get(self.url)
        json_data = json.loads(response.text)
        tests = json_data['tests']
        return tests