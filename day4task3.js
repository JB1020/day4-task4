let sj = function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    xhr.responseType = "json";
    xhr.onload = () => {
        let b = xhr.response;
        console.log(b.map(uu => uu.name));
        console.log(b.map(uu => uu.region));
        console.log(b.map(uu => uu.subregiom));
        console.log(b.map(uu => uu.papulation));
    };
    xhr.send();

}
sj();