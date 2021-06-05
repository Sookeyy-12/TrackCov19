const map = new L.Map('map', {
    center: new L.LatLng(30,30),
    zoom: 1.8,
    maxZoom: 18
});
const osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(osm);

function mapColor(list,feature){
    
}
let continents = ['Asia', 'Africa','Oceania','North America','South America','Europe']
let continent_cases = {}
continents.forEach(continent => {
    $.getJSON(`./continents/${continent}`,data => {
        continent_cases[continent] = data.cases;
    })
})
$.getJSON("https://gist.githubusercontent.com/hrbrmstr/91ea5cc9474286c72838/raw/59421ff9b268ff0929b051ddafafbeb94a4c1910/continents.json",function (data) {
    const continents = new L.geoJson(data,{
        style: function(feature){
            return {fillColor : mapColor(continent_cases,continent_cases[feature.properties.CONTINENT])}
        }
    })
    map.addLayer(continents)            
})
// Countries geoJSON
// $.getJSON("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",function(data){
//     const countries = new L.geoJson(data);

//     map.addLayer(countries)
// })