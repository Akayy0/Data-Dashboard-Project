export function getUrls(idMunicipality: string) {
    const databases = ['secex', 'sc', 'hedu', 'cnes_professional', 'cnes_bed'];

    let requests = databases.map(data => fetch(`http://api.dataviva.info/${data}/municipality/?municipality=${idMunicipality}`));

    let urls = [
        fetch(`http://api.dataviva.info/rais/industry_division/year/?municipality=${idMunicipality}&year=2017`),
        fetch(`http://api.dataviva.info/rais/occupation_family/year/?municipality=${idMunicipality}&year=2017`),
        fetch(`http://api.dataviva.info/sc/sc_course/year/?municipality=${idMunicipality}&year=2017`),
        fetch(`http://api.dataviva.info/rais/literacy/year/?municipality=${idMunicipality}&year=2017`),
        fetch(`http://api.dataviva.info/secex/type/year/product/?municipality=${idMunicipality}&year=2017`)
    ];

    requests.push(fetch("https://api.pexels.com/v1/search?query=nature?locale=pt-br?orientation=landscape&color=13223A&per_page=30"));

    urls.forEach((url) => {
        requests.push(url)
    });

    return requests;
}

