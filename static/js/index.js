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
        // var circle = L.circle(countries[i], {
        //     color: 'red',
        //     fillColor: '#f03',
        //     fillOpacity: 0.5,
        //     radius: 500
        // })
        // console.log(countries[i])
        // circle.addto(map);

// function mapColor(list,feature){
//     console.log(list,feature)
// }
// let continents = ['Asia', 'Africa','Oceania','North America','South America','Europe']
// let continent_cases = {}
// continents.forEach(continent => {
//     $.getJSON(`./continents/${continent}`,data => {
//         continent_cases[continent] = data.cases;
//     })
// })
// $.getJSON("https://gist.githubusercontent.com/hrbrmstr/91ea5cc9474286c72838/raw/59421ff9b268ff0929b051ddafafbeb94a4c1910/continents.json",function (data) {
//     const continents = new L.geoJson(data,{
//         style: function(feature){
//             return {fillColor : mapColor(continent_cases,continent_cases[feature.properties.CONTINENT])}
//         }
//     })
//     map.addLayer(continents)            
// })
// Countries geoJSON
// $.getJSON("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",function(data){
//     const countries = new L.geoJson(data);

//     map.addLayer(countries)
// })