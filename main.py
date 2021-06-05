from api.Countries import Countries
import os
from flask import Flask, render_template
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

from api.Continents import Continents
continents = Continents()
countries = Countries()

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/continents/<name>")
def return_data(name):
    return continents.get_data(name)

@app.route("/countries/<name>")
def return_data(name):
    return countries.get_data(name)

if __name__ == "__main__":
    app.run(port=os.getenv("PORT"))