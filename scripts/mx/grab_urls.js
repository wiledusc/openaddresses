// scraper code -- browse to the following URL & paste the JS into 
// your browser's dev console. tested in Chrome.
// when complete, a JSON list of URLs will be printed in browser. copy to urls.txt
// http://www3.inegi.org.mx/sistemas/biblioteca/sfi/detalle2.aspx?s=est&upc=0&pf=prod&ef=0&f=2&cl=0&tg=3604&c=265&ct=201100000&titulo=nacional

var urls = new Array();

function ClickNext(i) {
    var dde = document.getElementById('DropDownEntidad');
    if (i>=dde.options.length) {
        document.write(urls.join("<br/>"));
    }
    else {
        dde.selectedIndex = i;
        document.getElementById('DropDownEdicion').selectedIndex = 2;
        document.getElementById('Filtro').click();
        setTimeout(function() {
            for(var j=0;j<document.links.length;j++) {
                if (document.links[j].href.match(/OFile\.aspx/i) && document.links[j].href.match(/_s\.zip/i) && document.links[j].href.match(/\/urbana\/SHP\//)) {
                    urls.push(document.links[j].href);
                }
            }

            ClickNext(i + 1);
        }, 10000);
    }
}

ClickNext(1);