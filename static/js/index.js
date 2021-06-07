let countries
let country_data = []
let indexes
let data = {}
let map
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
    indexes.forEach(index =>{
        if(data[index]['active'] > 0){
            var circle = L.circle(countries[index],{
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: data[index]['active']
            }).addTo(map)
            circle.bindPopup(`Active cases: ${data[index]['active']}`)
        }
    })
    noLoop()
}