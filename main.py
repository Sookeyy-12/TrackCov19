import os
from flask import Flask, render_template
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

from api.Continents import Continents
continents = Continents()
from api.Countries import Countries
countries = Countries()

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/continents/<name>")
def return_data_continent(name):
    return continents.get_data(name)

@app.route("/countries/<name>")
def return_data_country(name):
    return countries.get_data(name)

@app.route("/SafetyMeasures/")
def safety_measures():
    return render_template('safetymeasures.html')

@app.route("/FAQs/")
def faq_covid19():
    return render_template('faq.html')

if __name__ == "__main__":
    app.run(port=os.getenv("PORT"), debug=True)