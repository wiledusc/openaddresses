var casper = require('casper').create();
casper.start();
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36');
var opts = {
    method: 'get',
    headers: {
        'Host': 'www3.inegi.org.mx',
        'DNT': 1,
        'Accept-Encoding': 'gzip, deflate, sdch',
        'Accept-Language': 'en-US,en;q=0.8,ko;q=0.6',            
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    }
};
casper.thenOpen('http://www3.inegi.org.mx/sistemas/biblioteca/sfi/detalle2.aspx?s=est&upc=0&pf=prod&ef=0&f=2&cl=0&tg=3604&c=265&ct=201100000&titulo=nacional', opts);
casper.waitForSelector('#DropDownEntidad', function() {
    this.download(casper.cli.args[0], casper.cli.args[1]);
});
casper.run();
