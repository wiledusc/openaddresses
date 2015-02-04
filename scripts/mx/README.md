# INEGI Scraper

The INEGI website makes it much harder to collect its shapefiles than it ought to be. The download form is buried in an IFRAME and it enforces .NET viewstate in a really uncharitable way. Cookies retrieved via a browser only stay good for a few minutes. 

This can be beaten but it requires several different tools and steps.

1. Go to [this URL](http://www3.inegi.org.mx/sistemas/biblioteca/sfi/detalle2.aspx?s=est&upc=0&pf=prod&ef=0&f=2&cl=0&tg=3604&c=265&ct=201100000&titulo=nacional), the contents of the IFRAME, and paste the contents of `grab_urls.js` into the browser console. It will slowly iterate over the selections and then replace the contents of the window with a list of URLs. Copy these into a file in this directory called `urls.txt`.

2. Make sure you have CasperJS installed. On OS X this can be done with Homebrew, though as of this writing the main formula is broken. Use `brew install https://raw.github.com/mxcl/homebrew/8f7a1311af77b13b2bd5cc0d760290a320024525/Library/Formula/casperjs.rb` instead. If on Ubuntu, try `sudo npm install -g phantomjs casperjs`. Also install GNU `parallel` if you don't have it already

3. Run `make download`. This will iterate through urls.txt in two parallel streams, downloading them through headless browser sessions. You should run this command a few times in order to catch downloads that time out.


