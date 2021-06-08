let countries
let country_data = []
let indexes
let data = {}
let map
let countriesGeoJSON
function preload(){
    $.getJSON('https://raw.githubusercontent.com/CodingTrain/website/main/CodingChallenges/CC_109_subscriber_map/P5/countries.json',function(received_data){
        countries = received_data
        indexes = Object.keys(countries)
        indexes.forEach(index =>{
            $.getJSON(`./countries/${index}`,function(received_data){
                data[index] = received_data
            })
        })
    })
    
}
function setup(){
    map = new L.Map('map', {
        center: new L.LatLng(30,30),
        zoom: 1.8,
        maxZoom: 7,
        minZoom: 1.5,
        maxBounds : [[200,200],[-200,-200]]
    });
    const osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(osm);
}

function draw(){
    if(Object.keys(data).length != 240){
        return
    }
    $.getJSON("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",function(received_data){
        countriesGeoJSON = new L.geoJson(received_data);
        map.addLayer(countriesGeoJSON);
        // countriesGeoJSON.on({
        //     click: display_data
        // })
        // function display_data(e){
        //     let country_code = e.propagatedFrom.feature.properties.ISO_A2.toLowerCase()
        //     const { active,cases,deaths,population,recovered,todayCases,todayRecovered,todayDeaths} = data[country_code]
            
        //     console.log(active,cases,deaths,population,recovered,todayCases,todayRecovered,todayDeaths)
        // }
    })
    indexes.forEach(index =>{
        if(data[index]['active'] > 0){
            var circle = L.circle(countries[index],{
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: data[index]['active']
            }).addTo(map)
            circle.bindPopup(`<center><b>${data[index]['country']}</b></center><br>Active cases: ${data[index]['active']}`)
        }
    })
    let loader = document.getElementById('css-loader');
    loader.style.display ='none'
    noLoop()
}
function display_data(){
    let country_select = document.getElementById('country-select');
    let country_code = country_select.value.toLowerCase();
    const { country,active,cases,deaths,population,recovered,todayCases,todayRecovered,todayDeaths} = data[country_code];
    document.getElementById('country-name').innerHTML = 'Country:' + country
    document.getElementById('active').innerHTML = 'Active Cases:' + active
    document.getElementById('total').innerHTML = 'Total Cases:' + cases
    document.getElementById('recovered').innerHTML = 'Total Recovered:' + recovered
    document.getElementById('deaths').innerHTML =   'Total Deaths:' + deaths
    document.getElementById('population').innerHTML = 'Population:' + population
    document.getElementById('cases-today').innerHTML = 'Cases Today:' + todayCases
    document.getElementById('recovered-today').innerHTML = 'Recovered Today:' + todayRecovered
    document.getElementById('deaths-today').innerHTML = 'Deaths Today:' + todayDeaths
}