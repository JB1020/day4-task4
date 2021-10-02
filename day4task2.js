function jb() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3/all");
    xhr.responseType = "json";
    xhr.onload = () => {
        let sj = xhr.response;
        console.log(sj.map(sa => sa.flags));
        for (bs of sj) {
            let s = document.createElement('img');
            s.src = bs.flags;
            document.body.append(s);
        }
    };

    xhr.send();
}
jb();