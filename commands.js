var hotwords = {

/* 
-------------------------------------
~~~~~~~~~~~~~~~~~~~~~~ 
*/

d: ['⧌Duck Duck Go', 'https://duckduckgo.com/?q=%s', 'all'],
dp: ['dogpile', 'http://results.dogpile.com/search/web?q=%s', 'all'],
gb: ['⧌ Gibiru', 'https://gibiru.com/results.html?q=%s', 'all'],
luk: ['⧌ Lukol', 'https://www.lukol.com/s.php?q=%s', 'all'],
mg: ['⧌ Metager', 'https://metager.org/meta/meta.ger3?eingabe=%s&focus=web', 'all'],
mj: ['⧌ Mojeek', 'https://www.mojeek.com/search?q=%s', 'all'],
q: ['⧌ Qwant', 'https://www.qwant.com/?q=%s&t=web', 'all'],
sc: ['⧌ Swisscows', 'https://swisscows.com/?query=%s&region=en-US&uiLanguage=en', 'all'],
sp: ['Startpage', 'https://www.startpage.com/do/dsearch?query=%s', 'all'],
sx: ['⧌ Searx', 'https://searx.xyz/search?q=%s', 'all'],
y: ['Yandex', 'https://yandex.com/search/?text=%s', 'all'],
yp: ['⧌ Yippy', 'https://yippy.com/search?query=%s', 'all'],
pre: ['Presearch', 'https://engine.presearch.org/search?q=%s', 'all'],
bv: ['Brave', 'https://search.brave.com/search?q=%s', 'all'],  

// ---[ GIFs

gib: ['Bing gifs', 'https://www.bing.com/images/search?&q=gif+%s', 'gifs'],
giy: ['Yandex gifs', 'https://yandex.com/images/search?text=gif+%s', 'gifs'],

// ---[ IMAGES

ib: ['Bing images', 'http://www.bing.com/images/search?q=%s', 'images'],
id: ['⧌ DDG images', 'https://duckduckgo.com/?iax=images&ia=images&q=%s', 'images'],
idp: ['Dogpile images', 'http://results.dogpile.com/search/images?q=%s', 'images'],
imj: ['⧌ Mojeek images', 'https://www.mojeek.com/search?q=%s&fmt=images', 'images'],
iq: ['⧌ Qwant images', 'https://www.qwant.com/?t=images&q=%s', 'images'],
isc: ['⧌ Swisscows images', 'https://swisscows.com/image?query=%s&region=en-US&uiLanguage=en', 'images'],
isx: ['⧌ Searx images', 'https://searx.bar?categories=images&q=%s', 'images'],
iy: ['⧌ Yandex images', 'https://yandex.com/images/search?text=%s', 'images'],
iyp: ['⧌ Yippy images', 'https://yippy.com/ysa/cgi-bin/query-meta?v%3aproject=yippy-com-images&v%3asources=yippy-images&query=%s', 'images'],
ipre: ['Pre Images', 'https://engine.presearch.org/images?q=%s', 'images'],
ibv: ['Brave Images', 'https://search.brave.com/images?q=%s', 'images'],

// ---[ MAPS

maph: ['Wego Here driving directions (separate places with ;)', 'https://wego.here.com/directions/drive/%s/%s','driving' ],
mapos: ['Open Street Map', 'https://www.openstreetmap.org/search?query=%s', 'maps'],


// ---[ MUSIC
msc: ['⧌ Swisscows music', 'https://swisscows.com/music?query=%s&region=en-US&uiLanguage=en','music'],


// ---[ NEWS

ndp: ['Dogpile', 'http://results.dogpile.com/search/news?q=%s','news'],
nmj: ['⧌ Mojeek news', 'https://www.mojeek.com/search?fmt=news&q=%s','news'],
nq: ['⧌ news Qwant news', 'https://www.qwant.com/?t=news&q=%s','news'],
nsx: ['⧌ news Searx news', 'https://searx.bar/?categories=news&language=en-US&q=%s','news'],
ny: ['Yandex news', 'https://yandex.com/news/search?text=%s','news'],
ngab: ['Gab news (hotlink)', 'https://gab.com/news','news'],
npre: ['Presearch news', 'https://engine.presearch.org/news?q=%s', 'news'],

// ---[ VIDEO
viddp: ['Dogpile video', 'http://results.dogpile.com/search/video?q=%s','video'],
vidd: ['DDG video', 'https://duckduckgo.com/?iax=videos&ia=videos&q=%s','video'],
vsc: ['⧌  Swisscows video', 'https://swisscows.com/video?query=%s&region=en-US&uiLanguage=en','video'],
vsx: ['⧌  Searx.bar video', 'https://searx.bar/?categories=videos&language=en-US&q=%s','video'],
vy: ['Yandex video', 'https://yandex.com/video/search?text=%s','video'],
vyp: ['⧌ Yippy video', 'https://yippy.com/ysa/cgi-bin/query-meta?v%3Asources=yippy-video&v%3Aproject=yippy-com-images&query=%s','video'],
vpre: ['Presearch video', 'https://engine.presearch.org/videos?q=%s', 'video'],

// ---[ Financial

qcd: ['Coindesk quote', 'https://www.coindesk.com/price/%s/', 'crypto'],
qhy: ['Yahoo historical finance quote', 'https://finance.yahoo.com/quote/%s/history?p=%s', 'finance'],
qy:  ['Yahoo finance quote', 'https://finance.yahoo.com/quote/%s?p=%s', 'finance'],
qg: ['Google finance quote', 'https://www.google.com/finance/quote/%s?window=MAX', 'finance'],

// ---[ SEARCH ENGINE BANGS
bd: ['DDG bangs (omit the !)', 'https://duckduckgo.com/?q=!%s','bangs'],
yn: ['YubNub bangs', 'http://yubnub.org/parser/parse?command=%s','bangs'],
shortmark: ['Shortmark bangs', 'https://shortmarks.com/s.php?q=%s','bangs'],

lsd: ['Duck Duck Go bangs find', 'https://duckduckgo.com/bang?q=%s','bangs'],
lsyn: ['YubNub bangs find', 'http://yubnub.org/parser/parse?command=ls+%s','bangs'],



/* 
-------------------------------------
Site Specific Search URLs
~~~~~~~~~~~~~~~~~~~~~~ 
*/

// ---[ A
ace: ['Ace Hardware', 'https://www.acehardware.com/search?query=%s','shop'],
apt: ['Apt', 'https://www.cyberciti.biz/tips/linux-debian-package-management-cheat-sheet.html','cheat sheet'],
acronym: ['Acronym Finder', 'http://www.acronymfinder.com/~/search/af.aspx?Acronym=%s','words'],
alarmclock: ['alarmclock (hotline)', 'http://www.clock2d.com/#','time'],
allmusic: ['AllMusic', 'https://duckduckgo.com/?q=!allmusic%20%s','music'],
allmusica: ['AllMusic Albums', 'https://duckduckgo.com/?q=!albums%20%s','music'],
alluc: ['Alluc', 'http://www.alluc.ee/stream/search?q=%s&stream=Find+Streams','streams'],
autozone: ['AutoZone', 'https://duckduckgo.com/?q=!autozone%20%s','shop'],
az: ['Amazon', 'https://www.amazon.com/s?ie=UTF&index=blended&keywords=%s&tag=stusa-20','shop'],
// azusa: ['Amazon', 'https://www.amazon.com/s?ie=UTF&index=blended&keywords=%22made%20in%20usa%22%20%s&tag=stusa-20','shop'],
azusa: ['Amazon Made in USA', 'https://www.amazon.com/s?k=made+in+usa+%s','shop'],
azcan: ['Amazon Made in Canada', 'https://www.amazon.com/s?k=made+in+canada+%s','shop'],
azau: ['Amazon Made in Australia', 'https://www.amazon.com/s?k=made+in+australia+%s','shop'],  
aznz: ['Amazon Made in New Zealand', 'https://www.amazon.com/s?k=made+in+new+zealand+%s','shop'],  
azuk: ['Amazon Made in United Kingdom', 'https://www.amazon.com/s?k=made+in+united+kingdom+%s','shop'],    
azjp: ['Amazon Made in Japan', 'https://www.amazon.com/s?k=made+in+japan+%s','shop'],    
aztw: ['Amazon Made in Taiwan', 'https://www.amazon.com/s?k=made+in+taiwan+%s','shop'],    
azkw: ['Amazon Made in Korea', 'https://www.amazon.com/s?k=made+in+korea+%s','shop'],    

azvid: ['Amazon Prime Video', 'https://duckduckgo.com/?q=!primevideo%20%s','shop'],



// ---[ B

beeradvo: ['BeerAdvocate', 'https://duckduckgo.com/?q=!beer%20%s','beer'],
bcdb: ['Big Cartoon Database', 'https://duckduckgo.com/?q=!bcdb%20%s','cartoons'],
bevmo: ['BevMo', 'http://shop.bevmo.com/search?w=%s','shop'],
bestbuy: ['BestBuy', 'https://duckduckgo.com/?q=!bestbuy%20%s','shop'],
bhpv: ['BH Photo Video', 'https://duckduckgo.com/?q=!bh%20%s','shop'],
bitchute: ['Bitchute vids', 'https://www.bitchute.com/search/?query=%s&kind=video','vids'],
bittube: ['Bittube vids', 'https://bit.tube/results?term=%s&cat=0&for=%s','vids'],
bnbooks: ['Barnes & Noble', 'https://duckduckgo.com/?q=!barnesandnoble%20%s','shop'],
bpstate: ['Best Places state (enter state abb)', 'https://www.bestplaces.net/find/state.aspx?state=%s','relo'],
bpmetro: ['Best Places metro (enter state abb)', 'https://www.bestplaces.net/find/metro.aspx?st=%s','relo'],
bpcn: ['Best Places county (enter state abb)', 'https://www.bestplaces.net/find/county.aspx?counties=%s','relo'],
bpzip: ['Best Places zip code (enter state abb)', 'https://www.bestplaces.net/find/zip.aspx?st=%s','relo'],
ntbg: ['Bible Gateway', 'https://www.biblegateway.com/quicksearch/?version=NMB%3BRGT%3BESV&quicksearch=%s','theology'],

// ---[ C
cantire: ['Canadian Tire', 'https://duckduckgo.com/?q=!canadiantire%20%s','shop'],
ceben: ['Glosbe cebuano to english', 'https://glosbe.com/ceb/en/%s','translate'],
cl4sale: ['Craigslist For Sale (city;keywords)', 'http://%s.craigslist.org/search/sss?query=%s','shop'], 
clapts: ['Craigslist Apartments (city;keywords)', 'http://%s.craigslist.org/search/aap?query=%s','apartments'], 
clcom: ['Craigslist Community (city;keywords)', 'http://%s.craigslist.org/search/ccc?query=%s','local'], 
cljobs: ['Craigslist Jobs (city;job type)', 'http://%s.craigslist.org/search/jjj?query=%s','jobs'], 
clcars: ['Craigslist Cars & Trucks (city;keywords)', 'http://%s.craigslist.org/search/cta?query=%s','cars'], 
clrooms: ['Craigslist Room Rentals (city;keywords)', 'http://%s.craigslist.org/search/roo?query=%s','apartments'], 
costco: ['Costco', 'https://www.costco.com/CatalogSearch?dept=All&keyword=%s','shop'],
couchtuner: ['stream Couchtuner', 'https://duckduckgo.com/?q=!tune%20%s','streams'],
chromex: ['Chrome Extensions', 'https://chrome.google.com/webstore/search/%s&_category=extensions','software'],
crunchyroll: ['stream CrunchyRoll', 'https://www.crunchyroll.com/search?from=&q=%s','anime streams'],

// ---[ D
da: ['deviantART', 'http://browse.deviantart.com/?q=%s','art'],
debs: ['Debian packages', 'https://packages.debian.org/search?suite=default&section=all&arch=any&searchon=names&keywords=%s','Linux'],
dilbert: ['Dilbert', 'https://duckduckgo.com/?q=!dilbert%20%s','cartoons'],
dpsych: ['Psychology Dictionary','https://psychologydictionary.org/%s/','words'],

// ---[ E
ebay: ['ebay', 'http://yubnub.org/parser/parse?command=ebay%20%s','shop'],
egab: ['Gab explore (hotlink)', 'https://gab.com/explore','socmed'],
enceb: ['Glosbe english to cebuano', 'https://glosbe.com/en/ceb/%s','translate'],
etsy: ['Etsy', 'https://www.etsy.com/search?q=%s&search_type=tag_title','shop'],

// ---[ F
flkr: ['Flickr Search', 'http://flickr.com/search/?q=%s','images'],
foxbiz: ['Fox Business', 'http://www.foxbusiness.com/search.html?q=%s','news'],
frink: ['Frink (from;to)', 'https://futureboy.us/fsp/frink.fsp?fromVal=%s&toVal=%s','math'],

fse: ['Free Speech Extreme', 'https://freespeechextremist.com/search?query=%s','socmed'],
flatpak: ['Flatpak', 'https://flathub.org/apps/search/%s', 'software'],  

// ---[ G

gab: ['Gab', 'https://gab.com/search?q=%s','socmed'],
gigs: ['Gif Sauce', 'https://gifsauce.com/search?q=%s','xxx'],
girg: ['Redgifs', 'https://www.redgifs.com/gifs/browse/%s','xxx'],

// ---[ H
hashtag: ['Hashtagify', 'http://hashtagify.me/hashtag/%s','words'],
htgab: ['Gab hashtags', 'https://gab.com/tags/%s','socmed'],



// ---[ I
icc: ['Creative Commons images', 'https://duckduckgo.com/?q=!ccsearch%20%s','images'],
imdb: ['IMDb', 'http://www.imdb.com/find?s=all&q=%s','movies'],
indeed: ['Indeed', 'http://www.indeed.com/jobs?q=%s&l=%s','jobs'],
infog: ['info galactic', 'https://infogalactic.com/info/Special:Search?search=%s','encyclopedia'],
inst: ['Instructables', 'http://www.instructables.com/howto/?sort=none&q=%s','DIY'],
insta: ['Instagram tags','https://www.instagram.com/explore/tags/%s','socmed'],
instag: ['Instagram google', 'https://igsearcher.com/search?q=%s','socmed'],
ircchannels: ['Netsplit Channels', 'https://netsplit.de/channels/?chat=%s','irc'],

// ---[ J



// ---[ K
kym: ['Know Your Meme', 'http://knowyourmeme.com/search?q=%s','memes'],


// ---[ L




// ---[ M
masto: ['Mastodon tags', 'https://qoto.org/tags/%s','socmed'],
memegen: ['Imgflip Meme Generator', 'https://imgflip.com/memegenerator','memes'],
minds: ['minds', 'https://www.minds.com/search;q=%s','socmed'],
mindsh: ['minds hash', 'https://www.minds.com/search;q=%23%s','socmed'],
myip: ['MY IP Address', 'https://duckduckgo.com/?q=my+ip+address&ia=answer','internet'],
musicb: ['Music Brainz', 'https://musicbrainz.org/search?query=%s&type=artist&method=indexed','music'],

  



// ---[ N 
newsnow: ['New Now UK', 'http://www.newsnow.co.uk/ajax/search-redir?q=%s','news'],
nitter: ['Nitter (RSS feeds of Twitter) ', 'https://nitter.net/search/rss?f=tweets&q=%s','socmed'],


// ---[ O
oe: ['Online Etymology Dictionary', 'https://www.etymonline.com/search?q=%s','words'],




// --- [ P
pluto: ['Pluto TV', 'https://www.pluto.tv/','streams'],




// ---[ Q

// ---[ R
reddit: ['socmed Reddit', 'https://www.reddit.com/search?q=%s','socmed'],
revphone: ['Phone Reverse Lookup', 'https://www.whitepages.com/search/ReversePhone?utf8=%E2%9C%93&country_code=1&iso_code=us&full_phone=%s','telnos'],
rule34: ['Rule 34 images', 'https://rule34.xxx/index.php?page=post&s=list&tags=%s','xxx'],



// ---[ S

sams: ['Sams Club', 'http://yubnub.org/parser/parse?command=sams%20%s','shop'],
shs: ['Secondhand Songs', 'http://secondhandsongs.com/search?search_text=%s','music'],
sigalert: ['Sigalert', 'http://www.sigalert.com/map.asp?Region=%s','traffic '],
simsites: ['Similar Sites', 'http://www.similarsites.com/site/%s','sites'],
stackoverflow: ['Stackoverflow', 'http://stackoverflow.com/search?q=%s','computing'],
subreddit: ['Subreddit', 'http://www.reddit.com/r/%s/','socmed'],


// ---[ T
thesp: ['Thesaurus Plus', 'https://thesaurus.plus/synonyms/%s','words'],
tmux: ['Tmux', 'https://tmuxcheatsheet.com','cheat sheet'],
time: ['Time.Is (hotline)', 'https://time.is/','time'],
timer: ['Timer (type n no space one of h,m,s)', 'http://e.ggtimer.com/%s','time'],
trulia: ['Trulia', 'http://www.trulia.com/for_sale/+%s+/popularity;d_sort/fsbo,resale_lt/map_v/','reality'],
tw: ['Twitter', 'http://yubnub.org/parser/parse?command=tw%20%s','socmed'],





// ---[ U
ucode: ['Unicode' , 'https://unicode-table.com/en/search/?q=%s','codes lookup'],
ud: ['Urban Dictionary' , 'https://www.urbandictionary.com/define.php?term=%s','words'],
ukdailymail: ['Daily Mail UK', 'http://www.dailymail.co.uk/home/search.html?sel=site&searchPhrase=%s','news'],
ukexpress: ['Express UK' ,'https://www.express.co.uk/search?s=%s','news'],
uksun: ['Sun UK', 'https://www.thesun.co.uk/?s=%s','news'],
unicode: ['Unicode', 'https://unicode-table.com/en/#basic-latin','cheat sheet'],
unsplash: ['Unsplash', 'https://unsplash.com/s/photos/%s','images'],
upi: ['UPI' , 'https://www.upi.com/search?s_l=articles&ss=%s','news'],




// ---[ V
vantr: ['Vancouver traffic', 'http://yubnub.org/parser/parse?command=gvtm','traffic'],
vidme: ['vidme', 'https://vid.me/search?q=%s','vids'],
vimeo: ['Vimeo', 'https://www.vimeo.com/search?q=%s','vids'],

// ---[ W
wayback: ['Archive.org', 'http://web.archive.org/web/*/%s','archive'],
wca: ['Weather Canada', 'http://weather.gc.ca/city/jump_e.html?city=%s&lang=e&unit=','weather'],
whitepages: ['Whitepages', 'https://www.whitepages.com/search/FindPerson?utf8=%E2%9C%93&who=%s&where=%s','telnos'],
wikihow: ['Wikihow', 'https://www.wikihow.com/wikiHowTo?search=%s','DIY'],
wikil: ['wikiless', 'https://wikiless.org/w/index.php?search=%s&title=Special%3ASearch','encyclopedia'],  
wikip: ['Wikipedia', 'http://en.wikipedia.org/wiki/Special:Search?search=%s&go=Go','encyclopedia'],
wikipran: ['Wikipedia', 'http://en.wikipedia.org/wiki/Special:Random','encyclopedia'],
wikid: ['Wiktionary', 'https://en.wiktionary.org/wiki/%s','words'],


// --- [ X
xumo: ['Xumo TV', 'https://www.xumo.tv/','streaming'],
xxx: ['Wank Machine', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:wm4rlz__bp4&q=%s','xxx'],


// ---[ Y
yelp: ['Yelp', 'https://duckduckgo.com/?q=!yelp%20%s','local'],
yum: ['Yummly', 'http://www.yummly.com/recipes?q=%s','recipes'],

// ---[ Z
zillow: ['Zillow', 'https://duckduckgo.com/?q=!zillow%20%s','realty'],



/* 
-------------------------------------
Microsoft BRANDS
~~~~~~~~~~~~~~~~~~~~~~ 
*/
b: ['Bing', 'http://www.bing.com/search?q=%s&filters=ex1%3a%22ez%s%22','sites'],
mapb: ['Bing maps', 'https://www.bing.com/maps/default.aspx?where1=%s','maps'],
nb: ['Bing news', 'https://www.bing.com/news/search?q=%s&qft=interval%3D%22%s%22','news'],
tidb: ['Bing time', 'http://www.bing.com/search?q=%s%20time','time'],
tidinb: ['Bing time in two cities (use ;)', 'http://www.bing.com/search?q=%s%20time%20in%20%s','time'],
wb: ['Bing', 'https://duckduckgo.com/?q=!bw%20%s','weather'],


/* 
-------------------------------------
Google Site Search
~~~~~~~~~~~~~~~~~~~~~~ 
*/


amg: ['Allmusic in Google' ,'https://www.google.com/search?q=allmusic.com%20%s','music'],
ytg: ['YouTube in Google', 'https://www.google.com/search?q=%22%s%22+site:youtube.com&tbm=vid&tbs=qdr:%s','vids'],


/* 
-------------------------------------
GOOGLE BRANDS
~~~~~~~~~~~~~~~~~~~~~~ 
*/

//blogger
statsblogger: ['Blogger Stats (hotlink)', 'http://www.blogger.com/blogger.g?blogID=%s#overviewstats','blogging'],

yt: ['YouTube', 'http://www.youtube.com/results?search_query=%s','vids'],
htyt: ['YouTube hashtags', 'https://www.youtube.com/hashtag/%s','vids'],
plyt: ['YouTube Playlist (hotlink)', 'http://www.youtube.com/view_all_playlists?sf=name&sa=0','vids'],
subsyt: ['YouTube Subscriptions (hotlink)', 'https://www.youtube.com/feed/subscriptions','vids'],



/* 
-------------------------------------
GOOGLE CUSTOM SEARCH
~~~~~~~~~~~~~~~~~~~~~~ 
*/

social: ['Big Social', 'https://cse.google.com/cse/publicurl?cx=014888467458561743118:d0fnimmfg20&q=%s','socmed'],
blogh: ['Blog Hosts', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:g1nqxo8x81y&q=%s','blogging'],
blogd: ['Blog Directories', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:pukj6rewm0u&q=%s','blogging'],
foodie: ['Foodie Recipes', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:frzvmu7jqfs&q=%s','recipes'],
gdata: ['Gov Data', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:je3fjsqcijm&q=%s','data'],
sayings: ['Great Sayings', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:slhiazwukk8&q=%s','words'],
hockey: ['Hockey Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:t5nq63bfci4&q=%s','sports'],
howto: ['How Skills', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:7yyqix2m5cs&q=%s','DIY'],
images: ['Image Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:iftil0q9gds&q=%s','images'],
finkno: ['Fin Knowledge', 'https://cse.google.com:443/cse/publicurl?cx=014888467458561743118:wjxur2mdeis&q=%s','encyclopedia'],
usmade: ['Made in USA', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:q2ady31mcg0&q=%s','shop'],
myse: ['MY SE', 'https://cse.google.com/cse/publicurl?cx=014888467458561743118:kz2ltrch1_m&q=%s','misc'],
theo: ['Theo Bible studies', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:m_ld3udekwy&q=%s','theology'],
travel: ['Travel Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:xtwe2noxwig&q=%s','travel'],
tdj: ['True Dollar Journal', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:h6ernfazave&q=%s','economy'],
video: ['Video Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:9b_hegjhy-g&q=%s','vids'],
wordy: ['Wordy', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:0hnabyt7zuw&q=%s','words'],

/* 
-------------------------------------
GOOGLE SEARCH
~~~~~~~~~~~~~~~~~~~~~~ 
*/
gmail: ['Google mail', 'https://mail.google.com/mail/u/0/#search/%s','google services'],
gmailx: ['Gmail', 'http://gmail.google.com/gmail?search=query&q=%s&view=tl&fs=1','google services'],

g: ['Google', 'http://www.google.com/search?q=%s','all'],
bookso1: ['Google Books 1500-1869', 'https://www.google.com/search?hl=en&tbo=d&tbm=bks&tbs=bkv:r,cdr:1,cd_min:%3A1%2F1%2F1500%2Ccd_max%3A12%2F31%2F1869&q=%s','books'],
bookso2: ['Google Books 1870-1929', 'https://www.google.com/search?hl=en&tbo=d&tbm=bks&tbs=bkv:r,cdr:1,cd_min:%3A1%2F1%2F1870%2Ccd_max%3A12%2F31%2F1929&q=%s','books'],
booksg: ['Google Books Free', 'https://www.google.com/search?hl=en&tbs=bkv:r&tbm=bks&start=0&sa=N&biw=1125&q=%s','books'],
freebooksg: ['Google Books Free Books', 'https://www.google.com/search?hl=en&tbs=bkv:r,bkt:b&tbm=bks&start=0&sa=N&biw=1125&q=%s','books'],
cacheg: ['Google Cache', 'http://www.google.com/search?q=cache%3A+%s','archive'],
icag: ['Google Canada Image Search', 'https://duckduckgo.com/?q=!gica%20%s','images'],
docsg: ['Google Documents', 'http://docs.google.com/?pli=1#search/%s','google services'],
driveg: ['Google Drive', 'https://drive.google.com/#search/%s','google services'],
expressg: ['Google Express', 'https://express.google.com/u/0/search?q=%s', 'shop'],
financeg: ['Google Finance', 'https://duckduckgo.com/?q=!stock%20%s','news'],
flightsg: ['Google Flights', 'https://www.google.com/flights/#search;f=%s;t=%s;d=%s;r=%s;s=0;eo=e','travel'],
gig: ['Google gifs', 'https://duckduckgo.com/?q=!ggif%20%s','gifs'],
icrg: ['Google Images Commercial Reuse', 'https://duckduckgo.com/?q=!gcc%20%s','images'],
ig: ['Google Images', 'http://images.google.com/images?q=%s','images'],
irg: ['Google Images Reuse  ', 'https://duckduckgo.com/?q=!imgrwm%20%s','images'],
ilg: ['Google Images Large ', 'https://duckduckgo.com/?q=!il%20%s','images'],
irevg: ['Google Images Reverse Search', 'https://duckduckgo.com/?q=!gri%20%s','images'],
iurlg: ['Google Images by URL', 'https://www.google.com/searchbyimage?image_url=%s','images'],
mapg: ['Google Maps', 'http://www.google.com/maps?q=%s','maps'],
ddg: ['Google Maps Driving Directions ', 'https://www.google.com/maps?saddr=%s&daddr=%s&output=classic','driving'],
ng: ['Google News', 'https://news.google.com/search?num=100&hl=en-US&lr&tab=wn&ie=UTF-8&q=%s&scoring=d&gl=US&ceid=US:en','news'],
patentsg: ['Google Patents', 'https://duckduckgo.com/?q=!patent%20%s','patents'],
ptransg: ['Google Translate', 'https://translate.google.com/translate?hl=en&sl=ru&tl=en&u=%s','translate'],
scholarg: ['Google Scholar', 'https://duckduckgo.com/?q=!googlescholar%20%s','academic'],
sinceg: ['Google Since (; dn|mn|yn where n=#)', 'https://www.google.com/search?q=%s&tbs=qdr:%s','all'],
siteg: ['Google Site', 'http://www.google.com/search?q=%s%20site:%s','all'],
transitg: ['Google Transit', 'https://www.google.com/maps?saddr=%s&daddr=%s&ie=UTF8&f=d&sort=def&dirflg=r&hl=en','transit'],
transg: ['Google Translate', 'https://translate.google.com/#%s/%s/%s','translate'],
daterg: ['Google with Date Range', 'https://www.google.com/search?q=%s&source=lnt&tbs=cdr:1,cd_min:%s,cd_max:%s&tbm=','all'],

usyn: ['Yubnub Url Sub', 'http://yubnub.org/parser/parse?command=url%20%s','Yubnub'],
  
  

/* 
-------------------------------------
Gab Groups
~~~~~~~~~~~~~~~~~~~~~~ 
*/  
  
  z14gg: ['14 Words', 'https://gab.com/groups/133','Gab Groups'],
z80gg: ['1980s Nostalgia', 'https://gab.com/groups/2169','Gab Groups'],
z8090gg: ['1980s/1990s Music', 'https://gab.com/groups/606','Gab Groups'],
aestheticsgg: ['Aesthetics', 'https://gab.com/groups/4992','Gab Groups'],
aggg: ['Anything Goes', 'https://gab.com/groups/539','Gab Groups'],
affgg: ['Armed for Freedom', 'https://gab.com/groups/5839','Gab Groups'],
akagg: ['All Kinds of Animals!!!!', 'https://gab.com/groups/778','Gab Groups'],
artgg: ['art', 'https://gab.com/groups/60','Gab Groups'],
artbgg: ['Artists Block', 'https://gab.com/groups/723','Gab Groups'],
atgg: ['Alt Tech: Alternative Technology', 'https://gab.com/groups/377','Gab Groups'],
augg: ['Australia', 'https://gab.com/groups/137','Gab Groups'],
bsgg: ['', 'https://gab.com/groups/190','Gab Groups'],
boggg: ['Businesses of Gab', 'https://gab.com/groups/4636','Gab Groups'],
boomergg: ['Boomer music', 'https://gab.com/groups/78','Gab Groups'],
bnewsgg: ['Breaking News', 'https://gab.com/groups/8882','Gab Groups'],
brexitgg: ['#Brexit', 'https://gab.com/groups/730','Gab Groups'],
britfamgg: ['#BritFam', 'https://gab.com/groups/21','Gab Groups'],
bthgg: ['Bitcoin', 'https://gab.com/groups/755','Gab Groups'],
bth2gg: ['/g/bitcoin', 'https://gab.com/groups/1898','Gab Groups'],
buyusagg: ['Buy Made in America', 'https://gab.com/groups/6422','Gab Groups'],
cangg: ['Canada News', 'https://gab.com/groups/976','Gab Groups'],
catsgg: ['Cats', 'https://gab.com/groups/150','Gab Groups'],
ccgg: ['', 'https://gab.com/groups/158','Gab Groups'],
cegg: ['Carnivore Eating', 'https://gab.com/groups/11','Gab Groups'],
ckgg: ['Carnivore & Keto', 'https://gab.com/groups/1870','Gab Groups'],
cememesgg: ['Christian memes', 'https://gab.com/groups/4768','Gab Groups'],
cmusicgg: ['Christian Music', 'https://gab.com/groups/1882','Gab Groups'],
cnewsgg: ['Conservative News', 'https://gab.com/groups/514','Gab Groups'],
coagg: ['Churches of America', 'https://gab.com/groups/3841','Gab Groups'],
comixgg: ['Comics', 'https://gab.com/groups/1017','Gab Groups'],
cookgg: ['Cooking', 'https://gab.com/groups/547','Gab Groups'],
cowgg: ['Cowboys, Rodeos, Horses, Cowgirls', 'https://gab.com/groups/2492','Gab Groups'],
craftsgg: ['Crafts', 'https://gab.com/groups/23','Gab Groups'],
cvidsgg: ['Cool Videos', 'https://gab.com/groups/2376','Gab Groups'],
cw2gg: ['Clown World 2: Honklers Revenge', 'https://gab.com/groups/3992','Gab Groups'],
dborgg: ['Defenders of the Bill of Rights', 'https://gab.com/groups/5849','Gab Groups'],
dloggg: ['Dangerous Ladies of Gab', 'https://gab.com/groups/317','Gab Groups'],
doggosgg: ['Doggos', 'https://gab.com/groups/116','Gab Groups'],
dongg: ['/g/The_Donald', 'https://gab.com/groups/22','Gab Groups'],
dtigg: ['Destroying the Illusion', 'https://gab.com/groups/5167','Gab Groups'],
eohgg: ['Erasure of History', 'https://gab.com/groups/4629','Gab Groups'],
fitgg: ['/fit/', 'https://gab.com/groups/4971','Gab Groups'],
gmgg: ['Gab Marketplace', 'https://gab.com/groups/5724','Gab Groups'],
humorgg: ['? Humor', 'https://gab.com/groups/867','Gab Groups'],
pol2gg: ['? politics', 'https://gab.com/groups/839','Gab Groups'],
tcgg: ['⚠Tucker Highlights⚠', 'https://gab.com/groups/454','Gab Groups'],

eegg: ['Effortless English', 'https://gab.com/groups/','Gab Groups'],
emgg: ['Election Meltdowns', 'https://gab.com/groups/5319','Gab Groups'],
animegg: ['Ev/a/ngelion 3.0 + 1.0', 'https://gab.com/groups/931','Gab Groups'],
foodiegg: ['Food, Cooking, Recipes', 'https://gab.com/groups/822','Gab Groups'],
fnaltgg: ['FOX News Alts', 'https://gab.com/groups/5703','Gab Groups'],
fossgg: ['FOSS', 'https://gab.com/groups/5213','Gab Groups'],
fsgg: ['Free Speech', 'https://gab.com/groups/354','Gab Groups'],
gfagg: ['Gab Fan Art', 'https://gab.com/groups/5818','Gab Groups'],
gswgg: ['Gab Sports World', 'https://gab.com/groups/2076','Gab Groups'],
gaminggg: ['Gaming', 'https://gab.com/groups/289','Gab Groups'],
gapgg: ['GAP Great Awakening Patriots', 'https://gab.com/groups/1598','Gab Groups'],
gardeninggg: ['Gardening', 'https://gab.com/groups/18','Gab Groups'],

gtbrgg: ['Ghost Towns and Backroads', 'https://gab.com/groups/5701','Gab Groups'],
gmakgg: ['Grandmas Kitchen', 'https://gab.com/groups/5722','Gab Groups'],
goggg: ['Guns of Gab', 'https://gab.com/groups/157','Gab Groups'],
hccpdtgg: ['Hardcore COnservative Patriots for Donald Trump', 'https://gab.com/groups/595','Gab Groups'],
healthgg: ['', 'https://gab.com/groups/39','Gab Groups'],
hbgg: ['History Buffs', 'https://gab.com/groups/625','Gab Groups'],

hsogpgg: ['Homesteading and Off Grid Patriots', 'https://gab.com/groups/5799','Gab Groups'],
hwgg: ['Hot Women', 'https://gab.com/groups/974','Gab Groups'],
hfgg: ['Hunting and Fishing', 'https://gab.com/groups/977','Gab Groups'],
icgg: ['Internt Censorship', 'https://gab.com/groups/652','Gab Groups'],
jtgfnrgg: ['Join This Group for No Reason', 'https://gab.com/groups/823','Gab Groups'],
khgg: ['Kraken Hunting', 'https://gab.com/groups/5774','Gab Groups'],

laughgg: ['Laughter is the Best Medicine', 'https://gab.com/groups/2330','Gab Groups'],
lhmgg: ['Le Happy Merchants', 'https://gab.com/groups/1793','Gab Groups'],
ltcgg: ['Learn to Code', 'https://gab.com/groups/1974','Gab Groups'],
ltgg: ['Leftist Tears', 'https://gab.com/groups/796','Gab Groups'],
loggg: ['Libertarians of Gab', 'https://gab.com/groups/40','Gab Groups'],
lusrsgg: ['Linux Users of Gab', 'https://gab.com/groups/1501','Gab Groups'],
mwtfgg: ['Major WTF', 'https://gab.com/groups/5760','Gab Groups'],
  
mmgg: ['Masked Morons', 'https://gab.com/groups/5958','Gab Groups'],
mwgg: ['Meme Warfare', 'https://gab.com/groups/30','Gab Groups'],
memesgg: ['Memes, Memes and More Memes', 'https://gab.com/groups/511','Gab Groups'],
memiacsgg: ['Memiacs', 'https://gab.com/groups/3897','Gab Groups'],
mhgg: ['Military History', 'https://gab.com/groups/4772','Gab Groups'],

mcgg: ['Motorcycles', 'https://gab.com/groups/3460','Gab Groups'],
mwgutgg: ['Music We Grew Up To', 'https://gab.com/groups/2044','Gab Groups'],
nrhmgg: ['Natural Remedies and Herbal Medicine', 'https://gab.com/groups/863','Gab Groups'],
naturegg: ['Nature and the Natural World', 'https://gab.com/groups/343','Gab Groups'],
news1gg: ['News the Original', 'https://gab.com/groups/537','Gab Groups'],

news2gg: ['"Breaking" News', 'https://gab.com/groups/692','Gab Groups'],
nostgg: ['Nostalgia', 'https://gab.com/groups/3476','Gab Groups'],  
  
pfpgg: ['Photography for Photographers', 'https://gab.com/groups/515','Gab Groups'],
plwgg: ['Poetry Lyrics Writing', 'https://gab.com/groups/910','Gab Groups'],
polgg: ['Politics', 'https://gab.com/groups/538','Gab Groups'],
pcpgg: ['Practical Chistian Perspective', 'https://gab.com/groups/5757','Gab Groups'],
phgg: ['Preppers Homesteaders', 'https://gab.com/groups/35','Gab Groups'],

pcegg: ['Programming Computers Electronics', 'https://gab.com/groups/664','Gab Groups'],
ramgg: ['RAM Rightwing Alt Media', 'https://gab.com/groups/174','Gab Groups'],
rnoagg: ['Real News of America', 'https://gab.com/groups/6984','Gab Groups'],
rmgg: ['Rock and Metal', 'https://gab.com/groups/262','Gab Groups'],  
  
rlg: ['Rural Life', 'https://gab.com/groups/376','Gab Groups'],
rrlgg: ['Russian Right Libertarians', 'https://gab.com/groups/1048','Gab Groups'],
scigg: ['Science', 'https://gab.com/groups/390','Gab Groups'],
stengg: ['Science Technology Engineering Nature', 'https://gab.com/groups/681','Gab Groups'],

smgg: ['Smoked Meats', 'https://gab.com/groups/75','Gab Groups'],
ssfwkgg: ['Sooper Seekrit FlammenWurfer Klub', 'https://gab.com/groups/3937','Gab Groups'],
stwgg: ['Stocks to Watch', 'https://gab.com/groups/10635','Gab Groups'],
stsgg: ['Stop the Steal', 'https://gab.com/groups/5364','Gab Groups'],
swausgg: ['Support White Africans Under Seige', 'https://gab.com/groups/1576','Gab Groups'],

sbtbgg: ['Survival Beyond the Basics', 'https://gab.com/groups/783','Gab Groups'],
tagg: ['The Anglosphere', 'https://gab.com/groups/380','Gab Groups'],
eucwgg: ['The ComingEEEE, ARRIVED, European Civil War(s)', 'https://gab.com/groups/187','Gab Groups'],
  
tdngg: ['The Daily News', 'https://gab.com/groups/2483','Gab Groups'],
tfsgg: ['The Far Side', 'https://gab.com/groups/5788','Gab Groups'],
tppgg: ['The Patriot Party', 'https://gab.com/groups/5846','Gab Groups'],
tktgg: ['The Skeptic Tank', 'https://gab.com/groups/5194','Gab Groups'],
ttsgg: ['Tool Talk Saturday', 'https://gab.com/groups/2287','Gab Groups'],
tlgg: ['Traditional Lifestyle', 'https://gab.com/groups/163','Gab Groups'],
ttwgg: ['Travel the World', 'https://gab.com/groups/5788s','Gab Groups'],
t2020gg: ['Trump 2020', 'https://gab.com/groups/981','Gab Groups'],
wsbgg: ['Wall Street Bets', 'https://gab.com/groups/4204','Gab Groups'],
  
wayltgg: ['What Are You Listing To', 'https://gab.com/groups/2042','Gab Groups'],
wwgg: ['Whiskey Women', 'https://gab.com/groups/1669','Gab Groups'],
wplgg: ['White Protection League', 'https://gab.com/groups/1685','Gab Groups'],
twbmgg: ['The Whistleblower Movement', 'https://gab.com/groups/5249','Gab Groups'],
  

gg: ['Gab Groups Timeline', 'https://gab.com/groups','Gab Groups']

}

