var shortcuts = {

/* 
-------------------------------------
~~~~~~~~~~~~~~~~~~~~~~ 
*/



b: ['Bing', 'http://www.bing.com/search?q=%s&filters=ex1%3a%22ez%s%22'],
d: ['Duck Duck Go', 'https://duckduckgo.com/?q=%s'],
dp: ['dogpile', 'http://results.dogpile.com/search/web?q=%s'],
gib: ['gibiru', 'https://gibiru.com/results.html?q=%s'],
luk: ['lukol', 'https://www.lukol.com/s.php?q=%s'],
mg: ['Metager', 'https://metager.org/meta/meta.ger3?eingabe=%s&focus=web'],
mj: ['Mojeek', 'https://www.mojeek.com/search?q=%s'],
q: ['Qwant', 'https://www.qwant.com/?q=%s&t=web'],
sp: ['Startpage', 'https://www.startpage.com/do/dsearch?query=%s'],
sc: ['Swisscows', 'https://swisscows.com/?query=%s&region=en-US&uiLanguage=en'],
sx: ['Searx', 'https://searx.bar/search?q=%s'],
y: ['Yandex', 'https://yandex.com/search/?text=%s'],
yp: ['Yippy', 'https://yippy.com/search?query=%s'],

// ---[ Dictionaries

dpsych: ['Psychology Dictionary','https://psychologydictionary.org/%s/'],

// ---[ SEARCH ENGINE BANGS
bangd: ['Bangs on DDG', 'https://duckduckgo.com/bang?q=%s'],
bangod: ['Bangs on DDG (omit the !)', 'https://duckduckgo.com/?q='+"!"+'%s'],

// ---[ GIFs

gifb: ['Bing Gifs', 'https://www.bing.com/images/search?&q=gif+%s'],

// ---[ IMAGES

i34: ['Rule 34 xxx', 'https://rule34.xxx/index.php?page=post&s=list&tags=%s'],
ib: ['Bing Image', 'http://www.bing.com/images/search?q=%s'],
id: ['DDG Images', 'https://duckduckgo.com/?iax=images&ia=images&q=%s'],
idp: ['dogpile images', 'http://results.dogpile.com/search/images?q=%s'],
imj: ['Mojeek Images', 'https://www.mojeek.com/search?q=%s&fmt=images'],
iq: ['Qwant Images', 'https://www.qwant.com/?t=images&q=%s'],
isc: ['Swisscows images', 'https://swisscows.com/image?query=%s&region=en-US&uiLanguage=en'],
isx: ['Searx', 'https://searx.bar?categories=images&q=%s'],
iy: ['Yandex Images', 'https://yandex.com/images/search?text=%s'],
iyp: ['Yippy', 'https://yippy.com/ysa/cgi-bin/query-meta?v%3aproject=yippy-com-images&v%3asources=yippy-images&query=%s'],

unsplash: ['Unsplash', 'https://unsplash.com/s/photos/%s'],

// ---[ IP Addy
ip: ['IP Address', 'https://duckduckgo.com/?q=my+ip+address&ia=answer'],

// ---[ MAPS

mapb: ['Bing Map', 'https://www.bing.com/maps/default.aspx?where1=%s'],
mapos: ['Open Street Map', 'https://www.openstreetmap.org/search?query=%s'],

// ---[ MUSIC
msc: ['Swisscows music', 'https://swisscows.com/music?query=%s&region=en-US&uiLanguage=en'],


// ---[ NEWS

nb: ['Bing News', 'https://www.bing.com/news/search?q=%s&qft=interval%3D%22%s%22'],
ndp: ['dogpile news', 'http://results.dogpile.com/search/news?q=%s'],
ng: ['Google News', 'https://news.google.com/search?num=100&hl=en-US&lr&tab=wn&ie=UTF-8&q=%s&scoring=d&gl=US&ceid=US:en'],
nmj: ['Mojeek News', 'https://www.mojeek.com/search?q=%s&fmt=news'],
nq: ['Qwant News', 'https://www.qwant.com/?t=news&q=%s'],
nsx: ['Searx News', 'https://searx.bar/?categories=news&language=en-US&q=%s'],
ny: ['Yandex Video', 'https://yandex.com/news/search?text=%s'],

// ---[ SCIENCE
// scsx: ['Searx Bar', 'https://searx.bar/categories=science+media&language=en-US&q=%s'],

// ---[ SHOPPING


sdp: ['dogpile shopping', 'http://results.dogpile.com/search/shopping?q=%s'],

// ---[ SOCIAL
// sosx: ['Searx Bar', 'https://searx.bar/categories=social+media&language=en-US&q=%s'],

// ---[ TIME

tidb: ['Bing Time', 'http://www.bing.com/search?q=%s%20time'],
tidinb: ['Bing Time', 'http://www.bing.com/search?q=%s%20time%20in%20%s'],

// ---[ VIDEO
viddp: ['dogpile video', 'http://results.dogpile.com/search/video?q=%s'],
vidd: ['DDG video', 'https://duckduckgo.com/?iax=videos&ia=videos&q=%s'],
vsc: ['Swisscows vid', 'https://swisscows.com/video?query=%s&region=en-US&uiLanguage=en'],
vsx: ['Searx.bar', 'https://searx.bar/?categories=videos&language=en-US&q=%s'],
vy: ['Yandex Video', 'https://yandex.com/video/search?text=%s'],
vyp: ['Yippy', 'https://yippy.com/ysa/cgi-bin/query-meta?v%3Asources=yippy-video&v%3Aproject=yippy-com-images&query=%s'],




// ---[ Toki

toki: ['Toki', 'https://search.anonymize.com/?category_general=on&time_range=&language=en-US&q=%s'],

itoki: ['Toki', 'https://toki.com/?categories=images&language=en-US&q=%s'],
vtoki: ['Toki', 'https://toki.com/?categories=videos&language=en-US&q=%s'],
ntoki: ['Toki', 'https://toki.com/?categories=news&language=en-US&q=%s'],
sotoki: ['Toki', 'https://toki.com/categories=social+media&language=en-US&q=%s'],
ftoki: ['Toki', 'https://toki.com/categories=files&language=en-US&q=%s'],


/* 
-------------------------------------
Site Specific Search URLs
~~~~~~~~~~~~~~~~~~~~~~ 
*/


// ---[ A
az: ['Amazon', 'https://www.amazon.com/s?ie=UTF&index=blended&keywords=%s&tag=stusa-20'],
acronym: ['Acronym Finder', 'http://www.acronymfinder.com/~/search/af.aspx?Acronym=%s'],
alarmclock: ['alarmclock', 'http://www.clock2d.com/#'],
alluc: ['Alluc', 'http://www.alluc.ee/stream/search?q=%s&stream=Find+Streams'],

// ---[ B
bitchute: ['Bitchute', 'https://www.bitchute.com/search?q=%s&sort=date_created+desc'],
bittube: ['Bittube', 'https://bit.tube/results?term=%s&cat=0&for=%s'],

boodigo: ['Boodigo', 'https://boodigo.com/search?q=%s'],


statebp: ['x', 'https://www.bestplaces.net/find/state.aspx?state=%s'],
metrobp: ['x', 'https://www.bestplaces.net/find/metro.aspx?st=%s'],
cnbp: ['x', 'https://www.bestplaces.net/find/county.aspx?counties=%s'],
zipbp: ['x', 'https://www.bestplaces.net/find/zip.aspx?st=wa'],


// ---[ C
covers: ['Secondhand Songs', 'http://secondhandsongs.com/search?search_text=%s'],
chromex: ['Chrome Extensions', 'https://chrome.google.com/webstore/search/%s&_category=extensions'],
ceben: ['Glosbe ceu to eng', 'https://glosbe.com/ceb/en/%s'],
enceb: ['Glosbe eng to cebu', 'https://glosbe.com/en/ceb/%s'],

// ---[ D
da: ['deviantART', 'http://browse.deviantart.com/?q=%s'],
deb: ['debian', 'https://packages.debian.org/search?suite=default&section=all&arch=any&searchon=names&keywords=%s'],

// ---[ F
flkr: ['Flickr Search', 'http://flickr.com/search/?q=%s'],
frink: ['Frink', 'https://futureboy.us/fsp/frink.fsp?fromVal=%s&toVal=%s'],
foxbiz: ['Fox Business', 'http://www.foxbusiness.com/search.html?q=%s'],
fse: ['Free Speech Extreme', 'https://freespeechextremist.com/search?query=%s'],
masto: ['Mastodon tags', 'https://qoto.org/tags/%s'],

// ---[ G
gab: ['Gab', 'https://gab.ai/search/%s'],
esgab: ['Gab explore', 'https://gab.ai/popular'],
htgab: ['Gab hashtags', 'https://gab.com/tags/%s'],





// ---[ H
htag: ['Hashtagify', 'http://hashtagify.me/hashtag/%s'],
maph: ['Wego Here', 'https://wego.here.com/directions/drive/%s/%s'],

// ---[ I
imdb: ['IMDb', 'http://www.imdb.com/find?s=all&q=%s'],
inst: ['Instructables', 'http://www.instructables.com/howto/?sort=none&q=%s'],
icast: ['Intellicast', 'http://www.intellicast.com/Local/Default.aspx?query=%s'],
indeed: ['Indeed', 'http://www.indeed.com/jobs?q=%s&l=%s'],
insta: ['Instagram tags','https://www.instagram.com/explore/tags/%s'],
instag: ['Instagram google', 'https://igsearcher.com/search?q=%s'],


// ---[ K
kym: ['Know Your Meme', 'http://knowyourmeme.com/search?q=%s'],

// ---[ M
memegen: ['Imgflip Meme Gen', 'https://imgflip.com/memegenerator'],
minds: ['minds', 'https://www.minds.com/search;q=%s'],
mindsh: ['minds hash', 'https://www.minds.com/search;q=%23%s'],

// ---[ N 
newsnow: ['News Now UK', 'http://www.newsnow.co.uk/ajax/search-redir?q=%s'],
ircchannels: ['Netsplit Channels', 'https://netsplit.de/channels/?chat=%s'],
nitterrss: ['Nitter RSS', 'https://nitter.net/search/rss?f=tweets&q=%s'],

// ---[ O

oe: ['Online Etymology Dictionary', 'https://www.etymonline.com/search?q=%s'],



// --- [ P

pluto: ['Pluto TV', 'https://www.pluto.tv/'],



// ---[ Q

// ---[ R
revphone: ['Phone Reverse Lookup', 'https://www.whitepages.com/search/ReversePhone?utf8=%E2%9C%93&country_code=1&iso_code=us&full_phone=%s'],


// ---[ S

sigalert: ['Sigalert', 'http://www.sigalert.com/map.asp?Region=%s'],
sms: ['URL', 'https://shortmarks.com/s.php?q=%s'],
simsites: ['Similar Sites', 'http://www.similarsites.com/site/%s'],


// ---[ T

tid: ['Time.Is', 'https://time.is/'],


tumslide: ['Tumblr Slideshow', 'http://www.tumbview.com/view.php?t=%s'],
tumgrid: ['Tumblr Grid Viewer', 'http://tumbview.com/%s/grid/'],
tumgridr: ['Tumblr Grid Viewer', 'http://tumbview.com/%s/grid/random'],
tumvid: ['Tumblr Video Viewer', 'http://tumbview.com/%s/video/'],
tmux: ['Tmux Cheat', 'https://tmuxcheatsheet.com'],
thesp: ['Thesaurus Plus', 'https://thesaurus.plus/synonyms/%s'],

timer: ['Timer minutes', 'http://e.ggtimer.com/m/%s'],

// ---[ U

uksun: ['Sun UK', 'https://www.thesun.co.uk/?s=%s'],
ukdailymail: ['Daily Mail UK', 'http://www.dailymail.co.uk/home/search.html?sel=site&searchPhrase=%s'],
ukexpress: ['Express UK' ,'https://www.express.co.uk/search?s=%s'],
upi: ['UPI' , 'https://www.upi.com/search?s_l=articles&ss=%s'],
ud: ['Urban Dictionary' , 'https://www.urbandictionary.com/define.php?term=%s'],
ucode: ['Unicode' , 'https://unicode-table.com/en/search/?q=%s'],




// ---[ V

vimeo: ['Vimeo', 'https://www.vimeo.com/search?q=%s'],
vidme: ['vidme', 'https://vid.me/search?q=%s'],

// ---[ W
weca: ['Weather Canada', 'http://weather.gc.ca/city/jump_e.html?city=%s&lang=e&unit='],

wp: ['Wikipedia', 'http://en.wikipedia.org/wiki/Special:Search?search=%s&go=Go'],
ranwp: ['Wikipedia', 'http://en.wikipedia.org/wiki/Special:Random'],

wayback: ['Archive.org', 'http://web.archive.org/web/*/%s'],
whitepages: ['Whitepages', 'https://www.whitepages.com/search/FindPerson?utf8=%E2%9C%93&who=%s&where=%s'],
wikihow: ['Wikihow', 'https://www.wikihow.com/wikiHowTo?search=%s'],
wpig: ['info galactic', 'https://infogalactic.com/info/Special:Search?search=%s'],


// --- [ X

xumo: ['Xumo TV', 'https://www.xumo.tv/'],

// ---[ Y
yn: ['YubNub', 'http://yubnub.org/parser/parse?command=%s'],
yum: ['Yummly', 'http://www.yummly.com/recipes?q=%s'],



/* 
-------------------------------------
DUCK DUCK GO bangs
~~~~~~~~~~~~~~~~~~~~~~ 
*/
// ---[ DDG A
ace: ['Ace Hardware', 'https://duckduckgo.com/?q=!ace%20%s'],
autozone: ['AutoZone', 'https://duckduckgo.com/?q=!autozone%20%s'],
allmusica: ['AllMusic Albums', 'https://duckduckgo.com/?q=!albums%20%s'],
allmusic: ['AllMusic', 'https://duckduckgo.com/?q=!allmusic%20%s'],
azvid: ['Amazon Prime Video', 'https://duckduckgo.com/?q=!primevideo%20%s'],


// ---[ DDG B
beeradvo: ['BeerAdvocate', 'https://duckduckgo.com/?q=!beer%20%s'],
bnbooks: ['Barnes & Noble', 'https://duckduckgo.com/?q=!barnesandnoble%20%s'],
bevmo: ['BevMo', 'http://shop.bevmo.com/search?w=%s'],
bestbuy: ['BestBuy', 'https://duckduckgo.com/?q=!bestbuy%20%s'],
bhpv: ['BH Photo Video', 'https://duckduckgo.com/?q=!bh%20%s'],
bweather: ['Bing Weather', 'https://duckduckgo.com/?q=!bw%20%s'],
bcdb: ['The Big Cartoon Database', 'https://duckduckgo.com/?q=!bcdb%20%s'],

// ---[ DDG C
costco: ['Costco', 'https://duckduckgo.com/?q=!costco%20%s'],
cantire: ['Canadian Tire', 'https://duckduckgo.com/?q=!canadiantire%20%s'],
calvinhobbes: ['Calvin And Hobbes', 'https://duckduckgo.com/?q=!calvinandhobbes%20%s'],
couchtuner: ['Couchtuner', 'https://duckduckgo.com/?q=!tune%20%s'],
crunchyroll: ['CrunchyRoll', 'https://duckduckgo.com/?q=!crunchyroll%20%s'],
cci: ['creative commons', 'https://duckduckgo.com/?q=!ccsearch%20%s'],

// ---[ DDG D
dilbert: ['Dilbert', 'https://duckduckgo.com/?q=!dilbert%20%s'],
drinks: ['Drinksmixer', 'https://duckduckgo.com/?q=!mixer%20%s'],
dauser: ['DeviantArt User', 'https://duckduckgo.com/?q=!dauser%20%s'],
iddg: ['DuckDuckGo Images', 'https://duckduckgo.com/?q=!dggi%20%s'],

// ---[ DDG E
eddieb: ['Eddie Bauer', 'https://duckduckgo.com/?q=!eddiebauer%20%s'],
engse: ['English StackExchange', 'https://duckduckgo.com/?q=!en%20%s'],


// ---[ DDG F

fooddata: ['Nutrition Data', 'https://duckduckgo.com/?q=!nutridata%20%s'],
foodsubs: ['Cooks Thesaurus', 'https://duckduckgo.com/?q=!foodsubs%20%s'],
findlaw: ['FindLaw', 'https://duckduckgo.com/?q=!findlaw%20%s'],
flickr: ['Flickr', 'https://duckduckgo.com/?q=!flickr%20%s'],
flickrcc: ['Flickr All Creative Commons', 'https://duckduckgo.com/?q=!flickrcc%20%s'],
freesound: ['Freesound', 'https://duckduckgo.com/?q=!frs%20%s'],
feedly: ['Feedly', 'https://duckduckgo.com/?q=!fdl%20%s'],
funimation: ['FUNimation', 'https://duckduckgo.com/?q=!funimation%20%s'],


// ---[ DDG G
giphytv: ['Giphy TV', 'https://duckduckgo.com/?q=!giphytv%20%s'],
gifcities: ['Gifcities', 'https://duckduckgo.com/?q=!gifcities%20%s'],
gfycat: ['reddit GfycatDepot', 'https://duckduckgo.com/?q=!gfycatdepot%20%s'],
giphy: ['Giphy', 'https://duckduckgo.com/?q=!giphy%20%s'],
getty: ['Getty Images', 'https://duckduckgo.com/?q=!gettyimages%20%s'],


// ---[ DDG H
harborfreight: ['Harbor Freight Tools', 'https://duckduckgo.com/?q=!hft%20%s'],
homedepot: ['Home Depot', 'https://duckduckgo.com/?q=!homedepot%20%s'],
homebase: ['Homebase', 'https://duckduckgo.com/?q=!homebase%20%s'],
homedepotca: ['Home Depot Canada', 'https://duckduckgo.com/?q=!homedepotca%20%s'],
howstuff: ['How Stuff Works', 'https://duckduckgo.com/?q=!howstuffworks%20%s'],
houzz: ['Houzz', 'https://duckduckgo.com/?q=!houzz%20%s'],

// ---[ DDG I
ikea: ['Ikea', 'https://duckduckgo.com/?q=!ikea%20%s'],
ikeaca: ['Ikea Canada', 'https://duckduckgo.com/?q=!ikeaca%20%s'],
ikeaau: ['IKEA Australia', 'https://duckduckgo.com/?q=!ikeaau%20%s'],
ixquick: ['ixquick', 'https://duckduckgo.com/?q=!ixquick%20%s'],
ixi: ['Ixquick Picture Search', 'https://duckduckgo.com/?q=!iximg%20%s'],
ixv: ['Ixquick videos', 'https://duckduckgo.com/?q=!ixquickvideos%20%s'],
imgur: ['Imgur gifs', 'https://duckduckgo.com/?q=!igif%20%s'],
iephil: ['Internet Encyclopedia of Philosophy', 'https://duckduckgo.com/?q=!iep%20%s'],
investopedia: ['Investopedia', 'https://duckduckgo.com/?q=!investopedia%20%s'],
instagram: ['Instagram', 'https://duckduckgo.com/?q=!instagram%20%s'],
imdb: ['IMBD', 'https://duckduckgo.com/?q=!imbd%20%s'],
imdbkw: ['IMDb Keywords', 'https://duckduckgo.com/?q=!imdbk%20%s'],


// ---[ DDG J
jcpenney:  ['JC Penney', 'https://duckduckgo.com/?q=!jcpenney%20%s'],

// ---[ DDG K
kmart: ['Kmart', 'https://duckduckgo.com/?q=!kmart%20%s'],
kohls: ['Kohls', 'https://duckduckgo.com/?q=!kohls%20%s'],
kbb: ['Kelly Blue Book', 'https://duckduckgo.com/?q=!kbb%20%s'],
khan: ['Khan Academic', 'https://duckduckgo.com/?q=!khan%20%s'],
kodi: ['Kodi Wiki', 'https://duckduckgo.com/?q=!kodi%20%s'],
kidsinmind: ['Kids in Mind', 'https://duckduckgo.com/?q=!kim'],
kickstarter: ['Kickstarter', 'https://duckduckgo.com/?q=!kickstarter%20%s'],


// ---[ DDG L
loblaws: ['Loblaws', 'https://duckduckgo.com/?q=!loblaws%20%s'],
lowes: ['Lowes', 'https://duckduckgo.com/?q=!lowes%20%s'],
londondrugs: ['London Drugs', 'https://duckduckgo.com/?q=!londondrugs%20%s'],
llbean: ['LL Bean', 'https://duckduckgo.com/?q=!llbean%20%s'],
lowesca: ['Lowes Canada', 'https://duckduckgo.com/?q=!lowesca%20%s'],
logo: ['Instant Logo Search', 'https://duckduckgo.com/?q=!instantlogo%20%s'],

// ---[ DDG M

menards: ['Menards', 'https://duckduckgo.com/?q=!menards%20%s'],
macys: ['Macys', 'https://duckduckgo.com/?q=!macys%20%s'],
memrise: ['Memrise', 'https://duckduckgo.com/?q=!memrise%20%s'],
mitocw: ['MIT OpenCourseWare', 'https://duckduckgo.com/?q=!mitocw%20%s'],
mayoclinic: ['Mayo Clinic', 'https://duckduckgo.com/?q=!mayo%20%s'],
meddic: ['The Free Dictionary (Medical)', 'https://duckduckgo.com/?q=!medical%20%s'],
mrqe: ['Movie Review Query Engine', 'https://duckduckgo.com/?q=!mrqe%20%s'],
metasearch: ['metasearch', 'https://duckduckgo.com/?q=!mes%20%s'],
mathencyc: ['Encyclopedia of Mathematics', 'https://duckduckgo.com/?q=!eom%20%s'],



// ---[ DDG N
nordstroms: ['Nordstrom', 'https://duckduckgo.com/?q=!nordstrom%20%s'],
nih: ['NIH', 'https://duckduckgo.com/?q=!nih%20%s'],
noaa: ['NOAA', 'https://duckduckgo.com/?q=!noaa%20%s'],
nws: ['National Weather Service', 'https://duckduckgo.com/?q=!nws%20%s'],
netflix: ['Netflix', 'https://duckduckgo.com/?q=!netflix%20%s'],
nps: ['National Park Service (USA)', 'https://duckduckgo.com/?q=!nps%20%s'],


// ---[ DDG O
officed: ['OfficeDepot', 'https://duckduckgo.com/?q=!officedepot%20%s'],
openweather: ['Open Weather Map', 'https://duckduckgo.com/?q=!owm%20%s'],


// ---[ DDG P
petsmart: ['PetSmart', 'https://duckduckgo.com/?q=!petsmart%20%s'],
petsmartca: ['PetSmart Canada', 'https://duckduckgo.com/?q=!petsmartca%20%s'],
paypal: ['PayPal', 'https://duckduckgo.com/?q=!paypal%20%s'],
petco: ['Petco', 'https://duckduckgo.com/?q=!petco%20%s'],
pftv: ['Project Free TV', 'https://duckduckgo.com/?q=!pftv%20%s'],
putlocker: ['PutLocker', 'https://duckduckgo.com/?q=!putlocker%20%s'],

// ---[ DDG R
rei: ['REI', 'https://duckduckgo.com/?q=!rei%20%s'],
rexall: ['Rexall', 'https://duckduckgo.com/?q=!rexall%20%s'],
realcan: ['Real Canadian Superstore', 'https://duckduckgo.com/?q=!superstore%20%s'],
rsdb: ['Racial Slur Database', 'https://duckduckgo.com/?q=!rsdb%20%s'],
ratebeer: ['ratebeer', 'https://duckduckgo.com/?q=!ratebeer%20%s'],


// ---[ DDG S
sof: ['Save-On-Foods', 'https://duckduckgo.com/?q=!saveonfoods%20%s'],
sears: ['Sears', 'http://www.sears.com/?keyword=%s'],
sobeys: ['Sobeys', 'https://duckduckgo.com/?q=!sobeys%20%s'],
sdm: ['Shoppers Drug Mart', 'https://duckduckgo.com/?q=!shoppers%20%s'],
staplesca: ['Staples Canada', 'https://duckduckgo.com/?q=!staplesca%20%s'],
socmen: ['Social Mention', 'https://duckduckgo.com/?q=!smention%20%s'],

// sp: ['Startpage', 'https://duckduckgo.com/?q=!syear%20%s'],
isp: ['Startpage Images', 'https://duckduckgo.com/?q=!spi%20%s'],
vsp: ['Startpage Videos', 'https://duckduckgo.com/?q=!spv%20%s'],
songfacts: ['Songfacts', 'https://duckduckgo.com/?q=!songfacts%20%s'],
setlist: ['Setlist.fm', 'https://duckduckgo.com/?q=!setlist%20%s'],
stanfordphil: ['Stanford Encyclopedia of Philosophy', 'https://duckduckgo.com/?q=!plato%20%s'],

scidic: ['The Science Dictionary', 'https://duckduckgo.com/?q=!scidict%20%s'],
scidaily: ['Science Daily', 'https://duckduckgo.com/?q=!scd%20%s'],
stubhub: ['StubHub', 'https://duckduckgo.com/?q=!stubhub%20%s'],
subreddit: ['Subreddit', 'http://www.reddit.com/r/%s/'],
stackoverflow: ['Stackoverflow', 'http://stackoverflow.com/search?q=%s'],


// ---[ DDG T

target: ['Target', 'https://duckduckgo.com/?q=!target%20%s'],
twn: ['The Weather Network', 'https://duckduckgo.com/?q=!twn%20%s'],
twc: ['The Weather Channel', 'https://duckduckgo.com/?q=!weatherchannel%20%s'],
tvguide: ['TV Guide', 'https://duckduckgo.com/?q=!tvguide%20%s'],
twgo: ['Twitter Home', 'http://twitter.com/home'],
tixnet: ['TicketNetwork', 'https://duckduckgo.com/?q=!ticketnetwork%20%s'],
tumblr: ['tumblr', 'https://duckduckgo.com/?q=!tumblr%20%s'],
timedate: ['timeanddate', 'https://duckduckgo.com/?q=!tz%20%s'],
trulia: ['Trulia', 'https://duckduckgo.com/?q=!trulia%20%s'],
travelmath: ['TravelMath', 'https://duckduckgo.com/?q=!tmn%20%s'],

// ---[ DDG U
// ud: ['UrbanDictionary', 'https://duckduckgo.com/?q=!ud%20%s'],

// ---[ DDG W
walmart: ['WalMart', 'https://duckduckgo.com/?q=!walmart%20%s'],
wcommons: ['Wikimedia Commons', 'https://duckduckgo.com/?q=!commons%20%s'],
watchseries: ['Watch Series', 'https://duckduckgo.com/?q=!wts%20%s'],
wu: ['Weather Underground', 'https://duckduckgo.com/?q=!wu%20%s'],
webmd: ['WebMD', 'https://duckduckgo.com/?q=!webmd%20%s'],

// ---[ DDG X
x4chan: ['4chan', 'https://duckduckgo.com/?q=!4chan%20%s'],
x500px: ['500px', 'https://duckduckgo.com/?q=!500px%20%s'],


// ---[ DDG Y
yelp: ['Yelp', 'https://duckduckgo.com/?q=!yelp%20%s'],
financey: ['Yahoo Finance', 'https://duckduckgo.com/?q=!yf%20%s'],
iyx: ['Yandex Images', 'https://duckduckgo.com/?q=!iya%20%s'],

// ---[ DDG Z
zillow: ['Zillow', 'https://duckduckgo.com/?q=!zillow%20%s'],


// ---[ DDG Google

// newsg: ['Google News', 'https://duckduckgo.com/?q=!gn%20%s'],


scholarg: ['Google Scholar', 'https://duckduckgo.com/?q=!googlescholar%20%s'],
gpatents: ['Google Patents', 'https://duckduckgo.com/?q=!patent%20%s'],
financeg: ['Google Finance', 'https://duckduckgo.com/?q=!stock%20%s'],
icag: ['Google Canada Image Search', 'https://duckduckgo.com/?q=!gica%20%s'],
irg: ['Google Image Reuse  ', 'https://duckduckgo.com/?q=!imgrwm%20%s'],
ilg: ['Google Images Large ', 'https://duckduckgo.com/?q=!il%20%s'],
icrg: ['Google Images Commercial Reuse', 'https://duckduckgo.com/?q=!gcc%20%s'],
irevg: ['Google Reverse Image Search', 'https://duckduckgo.com/?q=!gri%20%s'],
gifsg: ['Google gifs', 'https://duckduckgo.com/?q=!ggif%20%s'],


// yubnub
sams: ['Sams Club', 'http://yubnub.org/parser/parse?command=sams%20%s'],
ebay: ['ebay', 'http://yubnub.org/parser/parse?command=ebay%20%s'],
tvan: ['Vancouver Traffic', 'http://yubnub.org/parser/parse?command=gvtm'],
ynus: ['Yubnub Url Sub', 'http://yubnub.org/parser/parse?command=url%20%s'],
drudge: ['Drudge Report', 'http://yubnub.org/parser/parse?command=dr'],
tw: ['Twitter', 'http://yubnub.org/parser/parse?command=tw%20%s'],


/* 
-------------------------------------
Cheatsheets
~~~~~~~~~~~~~~~~~~~~~~ 
*/

apt: ['Apt Cheat Sheet', 'https://www.cyberciti.biz/tips/linux-debian-package-management-cheat-sheet.html'],
unicode: ['Unicode Cheat Sheet', 'https://unicode-table.com/en/#basic-latin'],







/* 
-------------------------------------
Google Site Search
~~~~~~~~~~~~~~~~~~~~~~ 
*/
amg: ['Allmusic' ,'https://www.google.com/?gws_rd=ssl#q=site:allmusic.com+%s'],


/* 
-------------------------------------
GOOGLE BRANDS
~~~~~~~~~~~~~~~~~~~~~~ 
*/

//blogger
bloggerpost: ['Post on Blogger', 'http://www.blogger.com/post-create.g?blogID=%s'],
bloggerstats: ['Blogger Stats', 'http://www.blogger.com/blogger.g?blogID=%s#overviewstats'],

yt: ['YouTube', 'http://www.youtube.com/results?search_query=%s'],
htyt: ['YouTube', 'https://www.youtube.com/hashtag/%s'],
plyt: ['YouTube Playlist', 'http://www.youtube.com/view_all_playlists?sf=name&sa=0'],
gyt: ['YT in G', 'https://www.google.com/search?q=%22%s%22+site:youtube.com&tbm=vid&tbs=qdr:%s'],
subsyt: ['YouTube Subscriptions', 'https://www.youtube.com/feed/subscriptions'],



/* 
-------------------------------------
GOOGLE CUSTOM SEARCH
~~~~~~~~~~~~~~~~~~~~~~ 
*/

gdata: ['Gov Data', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:je3fjsqcijm&q=%s'],
wordy: ['Wordy', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:0hnabyt7zuw&q=%s'],
social: ['Big Social', 'https://cse.google.com/cse/publicurl?cx=014888467458561743118:d0fnimmfg20&q=%s'],
blogh: ['Blog Hosts', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:g1nqxo8x81y&q=%s'],
blogd: ['Blog Directories', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:pukj6rewm0u&q=%s'],
foodie: ['Foodie Recipes', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:frzvmu7jqfs&q=%s'],
sayings: ['Great Sayings', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:slhiazwukk8&q=%s'],
howto: ['How Skills', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:7yyqix2m5cs&q=%s'],
images: ['Image Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:iftil0q9gds&q=%s'],
myse: ['MY SE', 'https://cse.google.com/cse/publicurl?cx=014888467458561743118:kz2ltrch1_m&q=%s'],
hockey: ['Sports Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:t5nq63bfci4&q=%s'],
travel: ['Travel Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:xtwe2noxwig&q=%s'],
tdj: ['True Dollar Journal', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:h6ernfazave&q=%s'],
video: ['Video Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:9b_hegjhy-g&q=%s'],
xxx: ['XXX', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:wm4rlz__bp4&q=%s'],
usmade: ['Made in USA', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:q2ady31mcg0&q=%s'],
theo: ['Theo Bible studies', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:m_ld3udekwy&q=%s'],
trust: ['Knowledge Trust', 'https://cse.google.com:443/cse/publicurl?cx=014888467458561743118:wjxur2mdeis&q=%s'],

/* 
-------------------------------------
GOOGLE SEARCH
~~~~~~~~~~~~~~~~~~~~~~ 
*/
g: ['Google', 'http://www.google.com/search?q=%s'],

ig: ['Google Images', 'http://images.google.com/images?q=%s'],
cacheg: ['Google Cache', 'http://www.google.com/search?q=cache%3A+%s'],
docsg: ['Google Documents', 'http://docs.google.com/?pli=1#search/%s'],
mapg: ['Google Map', 'http://www.google.com/maps?q=%s'],
gmailx: ['Gmail', 'http://gmail.google.com/gmail?search=query&q=%s&view=tl&fs=1'],
oldbooksg: ['Google Books 1870-1929', 'https://www.google.com/search?hl=en&tbo=d&tbm=bks&tbs=bkv:r,cdr:1,cd_min:%3A1%2F1%2F1870%2Ccd_max%3A12%2F31%2F1929&q=%s'],
booksg: ['Google Books Free', 'https://www.google.com/search?hl=en&tbs=bkv:r&tbm=bks&start=0&sa=N&biw=1125&q=%s'],
freebooksg: ['Google Books Free Books', 'https://www.google.com/search?hl=en&tbs=bkv:r,bkt:b&tbm=bks&start=0&sa=N&biw=1125&q=%s'],


sinceg: ['Google Since', 'https://www.google.com/search?q=%s&tbs=qdr:%s'],
drg: ['Google with Date Range', 'https://www.google.com/search?q=%s&source=lnt&tbs=cdr:1,cd_min:%s,cd_max:%s&tbm='],
ddg: ['Driving Directions Google Maps', 'https://www.google.com/maps?saddr=%s&daddr=%s&output=classic'],

siteg: ['Google Site', 'http://www.google.com/search?q=%s%20site:%s'],
iurlg: ['Google Image URL', 'https://www.google.com/searchbyimage?image_url=%s'],
transg: ['Google Translate', 'https://translate.google.com/#%s/%s/%s'],
flightsg: ['Google Flights', 'https://www.google.com/flights/#search;f=%s;t=%s;d=%s;r=%s;s=0;eo=e'],
transitg: ['Google Transit', 'https://www.google.com/maps?saddr=%s&daddr=%s&ie=UTF8&f=d&sort=def&dirflg=r&hl=en'],
expressg: ['Google Express', 'https://express.google.com/u/0/search?q=%s'],
books2g: ['Google Books 1500-1869', 'https://www.google.com/search?hl=en&tbo=d&tbm=bks&tbs=bkv:r,cdr:1,cd_min:%3A1%2F1%2F1500%2Ccd_max%3A12%2F31%2F1869&q=%s'],
driveg: ['Google Drive', 'https://drive.google.com/#search/%s'],
gmail: ['Google mail', 'https://mail.google.com/mail/u/0/#search/%s'],
ptransg: ['Google Translate', 'https://translate.google.com/translate?hl=en&sl=ru&tl=en&u=%s'],

bposts: ['Blogger Posts', 'https://www.blogger.com/blog/posts/2938080886449362778?pli=1&q=%s'],


}

