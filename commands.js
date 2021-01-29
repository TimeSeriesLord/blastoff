var shortcuts = {

/* 
-------------------------------------
~~~~~~~~~~~~~~~~~~~~~~ 
*/

d: ['⧌Duck Duck Go', 'https://duckduckgo.com/?q=%s'],
dp: ['dogpile', 'http://results.dogpile.com/search/web?q=%s'],
gb: ['⧌ Gibiru', 'https://gibiru.com/results.html?q=%s'],
luk: ['⧌ Lukol', 'https://www.lukol.com/s.php?q=%s'],
mg: ['⧌ Metager', 'https://metager.org/meta/meta.ger3?eingabe=%s&focus=web'],
mj: ['⧌ Mojeek', 'https://www.mojeek.com/search?q=%s'],
q: ['⧌ Qwant', 'https://www.qwant.com/?q=%s&t=web'],
sc: ['⧌ Swisscows', 'https://swisscows.com/?query=%s&region=en-US&uiLanguage=en'],
sp: ['Startpage', 'https://www.startpage.com/do/dsearch?query=%s'],
sx: ['⧌ Searx', 'https://searx.bar/search?q=%s'],
y: ['Yandex', 'https://yandex.com/search/?text=%s'],
yp: ['⧌ Yippy', 'https://yippy.com/search?query=%s'],

// ---[ GIFs

gib: ['gifs Bing', 'https://www.bing.com/images/search?&q=gif+%s'],
giy: ['gifs Yandex', 'https://yandex.com/images/search?text=gif+%s'],

// ---[ IMAGES

ib: ['images Bing', 'http://www.bing.com/images/search?q=%s'],
id: ['⧌ images DDG', 'https://duckduckgo.com/?iax=images&ia=images&q=%s'],
idp: ['images dogpile', 'http://results.dogpile.com/search/images?q=%s'],
imj: ['⧌ images Mojeek', 'https://www.mojeek.com/search?q=%s&fmt=images'],
iq: ['⧌ images Qwant', 'https://www.qwant.com/?t=images&q=%s'],
isc: ['⧌ images Swisscows', 'https://swisscows.com/image?query=%s&region=en-US&uiLanguage=en'],
isx: ['⧌ images Searx', 'https://searx.bar?categories=images&q=%s'],
iy: ['⧌ images Yandex', 'https://yandex.com/images/search?text=%s'],
iyp: ['⧌ images Yippy', 'https://yippy.com/ysa/cgi-bin/query-meta?v%3aproject=yippy-com-images&v%3asources=yippy-images&query=%s'],


// ---[ MAPS

maph: ['driving directions Wego Here (separate places with ;)', 'https://wego.here.com/directions/drive/%s/%s'],
mapos: ['maps Open Street Map', 'https://www.openstreetmap.org/search?query=%s'],


// ---[ MUSIC
msc: ['⧌ music Swisscows', 'https://swisscows.com/music?query=%s&region=en-US&uiLanguage=en'],


// ---[ NEWS

ndp: ['news dogpile', 'http://results.dogpile.com/search/news?q=%s'],
nmj: ['news Mojeek', 'https://www.mojeek.com/search?q=%s&fmt=news'],
nq: ['news Qwant', 'https://www.qwant.com/?t=news&q=%s'],
nsx: ['news Searx', 'https://searx.bar/?categories=news&language=en-US&q=%s'],
ny: ['news Yandex', 'https://yandex.com/news/search?text=%s'],
ngab: ['news Gab (hotlink)', 'https://gab.com/news'],


// ---[ VIDEO
viddp: ['dogpile video', 'http://results.dogpile.com/search/video?q=%s'],
vidd: ['DDG video', 'https://duckduckgo.com/?iax=videos&ia=videos&q=%s'],
vsc: ['Swisscows vid', 'https://swisscows.com/video?query=%s&region=en-US&uiLanguage=en'],
vsx: ['Searx.bar', 'https://searx.bar/?categories=videos&language=en-US&q=%s'],
vy: ['Yandex Video', 'https://yandex.com/video/search?text=%s'],
vyp: ['Yippy', 'https://yippy.com/ysa/cgi-bin/query-meta?v%3Asources=yippy-video&v%3Aproject=yippy-com-images&query=%s'],




// ---[ IP Addy
ipaddy: ['IP Address', 'https://duckduckgo.com/?q=my+ip+address&ia=answer'],


// ---[ SEARCH ENGINE BANGS
bd: ['Bangs on DDG (omit the !)', 'https://duckduckgo.com/?q=!%s'],
yn: ['bangs on YubNub', 'http://yubnub.org/parser/parse?command=%s'],

bangsd: ['find Bangs on DDG', 'https://duckduckgo.com/bang?q=%s'],
bangsyn: ['find bangs on YubNub', 'http://yubnub.org/parser/parse?command=ls+%s'],



/* 
-------------------------------------
Site Specific Search URLs
~~~~~~~~~~~~~~~~~~~~~~ 
*/

// ---[ A

da: ['art deviantART', 'http://browse.deviantart.com/?q=%s'],


// ---[ B

beeradvo: ['beer BeerAdvocate', 'https://duckduckgo.com/?q=!beer%20%s'],


// ---[ C

dilbert: ['cartoons Dilbert', 'https://duckduckgo.com/?q=!dilbert%20%s'],
bcdb: ['cartoons The Big Cartoon Database', 'https://duckduckgo.com/?q=!bcdb%20%s'],

stackoverflow: ['computing Stackoverflow', 'http://stackoverflow.com/search?q=%s'],

// ---[ D

inst: ['DIY Instructables', 'http://www.instructables.com/howto/?sort=none&q=%s'],
wikihow: ['DIY Wikihow', 'https://www.wikihow.com/wikiHowTo?search=%s'],


// ---[ E

ewp: ['encyclopedia Wikipedia', 'http://en.wikipedia.org/wiki/Special:Search?search=%s&go=Go'],
ranewp: ['encyclopedia Wikipedia', 'http://en.wikipedia.org/wiki/Special:Random'],
eig: ['encyclopedia info galactic', 'https://infogalactic.com/info/Special:Search?search=%s'],


// ---[ F
frink: ['Frink', 'https://futureboy.us/fsp/frink.fsp?fromVal=%s&toVal=%s'],
foxbiz: ['Fox Business', 'http://www.foxbusiness.com/search.html?q=%s'],


// ---[ H



// ---[ I

cci: ['images creative commons', 'https://duckduckgo.com/?q=!ccsearch%20%s'],
flkr: ['images Flickr Search', 'http://flickr.com/search/?q=%s'],
unsplash: ['images Unsplash', 'https://unsplash.com/s/photos/%s'],

wayback: ['internet Archive.org', 'http://web.archive.org/web/*/%s'],

ircchannels: ['irc Netsplit Channels', 'https://netsplit.de/channels/?chat=%s'],

// ---[ J

indeed: ['jobs Indeed', 'http://www.indeed.com/jobs?q=%s&l=%s'],


// ---[ L

deb: ['Linux debian', 'https://packages.debian.org/search?suite=default&section=all&arch=any&searchon=names&keywords=%s'],
yelp: ['local Yelp', 'https://duckduckgo.com/?q=!yelp%20%s'],


// ---[ M
memegen: ['memes Imgflip Meme Generator', 'https://imgflip.com/memegenerator'],
kym: ['memes Know Your Meme', 'http://knowyourmeme.com/search?q=%s'],

imdb: ['movies IMDb', 'http://www.imdb.com/find?s=all&q=%s'],

allmusica: ['music AllMusic Albums', 'https://duckduckgo.com/?q=!albums%20%s'],
allmusic: ['music AllMusic', 'https://duckduckgo.com/?q=!allmusic%20%s'],
covers: ['music Secondhand Songs', 'http://secondhandsongs.com/search?search_text=%s'],


// ---[ N 
newsnow: ['news New Now UK', 'http://www.newsnow.co.uk/ajax/search-redir?q=%s'],
uksun: ['news Sun UK', 'https://www.thesun.co.uk/?s=%s'],
ukdailymail: ['news Daily Mail UK', 'http://www.dailymail.co.uk/home/search.html?sel=site&searchPhrase=%s'],
ukexpress: ['news Express UK' ,'https://www.express.co.uk/search?s=%s'],
upi: ['news UPI' , 'https://www.upi.com/search?s_l=articles&ss=%s'],


// ---[ O




// --- [ P




// ---[ Q

// ---[ R
zillow: ['realty Zillow', 'https://duckduckgo.com/?q=!zillow%20%s'],


yum: ['recipes Yummly', 'http://www.yummly.com/recipes?q=%s'],

bpstate: ['relo Best Places state', 'https://www.bestplaces.net/find/state.aspx?state=%s'],
bpmetro: ['relo Best Places metro', 'https://www.bestplaces.net/find/metro.aspx?st=%s'],
bpcn: ['relo Best Places county', 'https://www.bestplaces.net/find/county.aspx?counties=%s'],
bpzip: ['relo Best Places zip code', 'https://www.bestplaces.net/find/zip.aspx?st=wa'],


// ---[ S


ace: ['shop Ace Hardware', 'https://duckduckgo.com/?q=!ace%20%s'],
autozone: ['shop AutoZone', 'https://duckduckgo.com/?q=!autozone%20%s'],
az: ['shop Amazon', 'https://www.amazon.com/s?ie=UTF&index=blended&keywords=%s&tag=stusa-20'],
// azusa: ['Amazon', 'https://www.amazon.com/s?ie=UTF&index=blended&keywords=%22made%20in%20usa%22%20%s&tag=stusa-20'],
azusa: ['shop Made in USA Amazon', 'https://www.amazon.com/s?k=made+in+usa+%s'],
azvid: ['shop Amazon Prime Video', 'https://duckduckgo.com/?q=!primevideo%20%s'],
bevmo: ['shop BevMo', 'http://shop.bevmo.com/search?w=%s'],
bestbuy: ['shop BestBuy', 'https://duckduckgo.com/?q=!bestbuy%20%s'],
bhpv: ['shop BH Photo Video', 'https://duckduckgo.com/?q=!bh%20%s'],
bnbooks: ['shop Barnes & Noble', 'https://duckduckgo.com/?q=!barnesandnoble%20%s'],
costco: ['shop Costco', 'https://duckduckgo.com/?q=!costco%20%s'],
cantire: ['shop Canadian Tire', 'https://duckduckgo.com/?q=!canadiantire%20%s'],
sams: ['shop Sams Club', 'http://yubnub.org/parser/parse?command=sams%20%s'],
ebay: ['shop ebay', 'http://yubnub.org/parser/parse?command=ebay%20%s'],


fse: ['socmed Free Speech Extreme', 'https://freespeechextremist.com/search?query=%s'],
gab: ['socmed Gab', 'https://gab.com/search?q=%s'],
egab: ['socmed Gab explore (hotlink)', 'https://gab.com/popular'],
htgab: ['socmed Gab hashtags', 'https://gab.com/tags/%s'],
insta: ['socmed Instagram tags','https://www.instagram.com/explore/tags/%s'],
instag: ['socmed Instagram google', 'https://igsearcher.com/search?q=%s'],
masto: ['socmed Mastodon tags', 'https://qoto.org/tags/%s'],
minds: ['socmed minds', 'https://www.minds.com/search;q=%s'],
mindsh: ['socmed minds hash', 'https://www.minds.com/search;q=%23%s'],
nitterrss: ['socmed Nitter RSS', 'https://nitter.net/search/rss?f=tweets&q=%s'],
subreddit: ['socmed Subreddit', 'http://www.reddit.com/r/%s/'],
tw: ['socmed Twitter', 'http://yubnub.org/parser/parse?command=tw%20%s'],

chromex: ['software Chrome Extensions', 'https://chrome.google.com/webstore/search/%s&_category=extensions'],


alluc: ['stream Alluc', 'http://www.alluc.ee/stream/search?q=%s&stream=Find+Streams'],
couchtuner: ['stream Couchtuner', 'https://duckduckgo.com/?q=!tune%20%s'],
crunchyroll: ['stream CrunchyRoll', 'https://duckduckgo.com/?q=!crunchyroll%20%s'],
pluto: ['stream Pluto TV', 'https://www.pluto.tv/'],
xumo: ['stream Xumo TV', 'https://www.xumo.tv/'],

sms: ['URL', 'https://shortmarks.com/s.php?q=%s'],
simsites: ['Similar Sites', 'http://www.similarsites.com/site/%s'],


// ---[ T


revphone: ['telnos Phone Reverse Lookup', 'https://www.whitepages.com/search/ReversePhone?utf8=%E2%9C%93&country_code=1&iso_code=us&full_phone=%s'],
whitepages: ['telnos Whitepages', 'https://www.whitepages.com/search/FindPerson?utf8=%E2%9C%93&who=%s&where=%s'],

alarmclock: ['time alarmclock (hotline)', 'http://www.clock2d.com/#'],
tid: ['time Time.Is (hotline)', 'https://time.is/'],
timer: ['time Minutes Timer', 'http://e.ggtimer.com/m/%s'],

ceben: ['translate Glosbe cebuano to english', 'https://glosbe.com/ceb/en/%s'],
enceb: ['translate Glosbe english to cebuano', 'https://glosbe.com/en/ceb/%s'],



sigalert: ['traffic Sigalert', 'http://www.sigalert.com/map.asp?Region=%s'],
vantr: ['traffic Vancouver', 'http://yubnub.org/parser/parse?command=gvtm'],

// ---[ U

ucode: ['Unicode' , 'https://unicode-table.com/en/search/?q=%s'],




// ---[ V

bitchute: ['vids Bitchute', 'https://www.bitchute.com/search?q=%s&sort=date_created+desc'],
bittube: ['vids Bittube', 'https://bit.tube/results?term=%s&cat=0&for=%s'],
vimeo: ['vids Vimeo', 'https://www.vimeo.com/search?q=%s'],
vidme: ['vids vidme', 'https://vid.me/search?q=%s'],

// ---[ W
wca: ['weather Weather Canada', 'http://weather.gc.ca/city/jump_e.html?city=%s&lang=e&unit='],


acronym: ['words Acronym Finder', 'http://www.acronymfinder.com/~/search/af.aspx?Acronym=%s'],
hashtag: ['words Hashtagify', 'http://hashtagify.me/hashtag/%s'],
oe: ['words Online Etymology Dictionary', 'https://www.etymonline.com/search?q=%s'],
dpsych: ['words Psychology Dictionary','https://psychologydictionary.org/%s/'],
thesp: ['words Thesaurus Plus', 'https://thesaurus.plus/synonyms/%s'],
ud: ['words Urban Dictionary' , 'https://www.urbandictionary.com/define.php?term=%s'],



// --- [ X


// ---[ Y



/* 
-------------------------------------
Cheatsheets
~~~~~~~~~~~~~~~~~~~~~~ 
*/

apt: ['cheat sheet Apt', 'https://www.cyberciti.biz/tips/linux-debian-package-management-cheat-sheet.html'],
tmux: ['cheat sheet Tmux', 'https://tmuxcheatsheet.com'],
unicode: ['cheat sheet Unicode', 'https://unicode-table.com/en/#basic-latin'],

// XXX

i34: ['xxx images Rule 34', 'https://rule34.xxx/index.php?page=post&s=list&tags=%s'],
girg: ['xxx gifs Redgifs', 'https://www.redgifs.com/gifs/browse/%s'],
gigs: ['xxx gifs Gif Sauce', 'https://gifsauce.com/search?q=%s'],
xxx: ['xxx Wank Machine', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:wm4rlz__bp4&q=%s'],


/* 
-------------------------------------
Microsoft BRANDS
~~~~~~~~~~~~~~~~~~~~~~ 
*/
b: ['Bing', 'http://www.bing.com/search?q=%s&filters=ex1%3a%22ez%s%22'],
mapb: ['maps Bing', 'https://www.bing.com/maps/default.aspx?where1=%s'],
nb: ['news Bing', 'https://www.bing.com/news/search?q=%s&qft=interval%3D%22%s%22'],
tidb: ['time Bing', 'http://www.bing.com/search?q=%s%20time'],
tidinb: ['time in cities Bing (; between places)', 'http://www.bing.com/search?q=%s%20time%20in%20%s'],
wb: ['weather Bing', 'https://duckduckgo.com/?q=!bw%20%s'],


/* 
-------------------------------------
Google Site Search
~~~~~~~~~~~~~~~~~~~~~~ 
*/
amg: ['Allmusic in Google' ,'https://www.google.com/?gws_rd=ssl#q=site:allmusic.com+%s'],
ytg: ['YouTube in Google', 'https://www.google.com/search?q=%22%s%22+site:youtube.com&tbm=vid&tbs=qdr:%s'],


/* 
-------------------------------------
GOOGLE BRANDS
~~~~~~~~~~~~~~~~~~~~~~ 
*/

//blogger
statsblogger: ['Blogger Stats (hotlink)', 'http://www.blogger.com/blogger.g?blogID=%s#overviewstats'],

yt: ['YouTube', 'http://www.youtube.com/results?search_query=%s'],
htyt: ['YouTube', 'https://www.youtube.com/hashtag/%s'],
plyt: ['YouTube Playlist (hotlink)', 'http://www.youtube.com/view_all_playlists?sf=name&sa=0'],
subsyt: ['YouTube Subscriptions (hotlink)', 'https://www.youtube.com/feed/subscriptions'],



/* 
-------------------------------------
GOOGLE CUSTOM SEARCH
~~~~~~~~~~~~~~~~~~~~~~ 
*/

social: ['Big Social', 'https://cse.google.com/cse/publicurl?cx=014888467458561743118:d0fnimmfg20&q=%s'],
blogh: ['Blog Hosts', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:g1nqxo8x81y&q=%s'],
blogd: ['Blog Directories', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:pukj6rewm0u&q=%s'],
foodie: ['Foodie Recipes', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:frzvmu7jqfs&q=%s'],
gdata: ['Gov Data', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:je3fjsqcijm&q=%s'],
sayings: ['Great Sayings', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:slhiazwukk8&q=%s'],
hockey: ['Hockey Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:t5nq63bfci4&q=%s'],
howto: ['How Skills', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:7yyqix2m5cs&q=%s'],
images: ['Image Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:iftil0q9gds&q=%s'],
trust: ['Knowledge Trust', 'https://cse.google.com:443/cse/publicurl?cx=014888467458561743118:wjxur2mdeis&q=%s'],
usmade: ['Made in USA', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:q2ady31mcg0&q=%s'],
myse: ['MY SE', 'https://cse.google.com/cse/publicurl?cx=014888467458561743118:kz2ltrch1_m&q=%s'],
theo: ['Theo Bible studies', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:m_ld3udekwy&q=%s'],
travel: ['Travel Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:xtwe2noxwig&q=%s'],
tdj: ['True Dollar Journal', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:h6ernfazave&q=%s'],
video: ['Video Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:9b_hegjhy-g&q=%s'],
wordy: ['Wordy', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:0hnabyt7zuw&q=%s'],

/* 
-------------------------------------
GOOGLE SEARCH
~~~~~~~~~~~~~~~~~~~~~~ 
*/
gmail: ['Google mail', 'https://mail.google.com/mail/u/0/#search/%s'],
gmailx: ['Gmail', 'http://gmail.google.com/gmail?search=query&q=%s&view=tl&fs=1'],

g: ['Google', 'http://www.google.com/search?q=%s'],
bookso1: ['Google Books 1500-1869', 'https://www.google.com/search?hl=en&tbo=d&tbm=bks&tbs=bkv:r,cdr:1,cd_min:%3A1%2F1%2F1500%2Ccd_max%3A12%2F31%2F1869&q=%s'],
bookso2: ['Google Books 1870-1929', 'https://www.google.com/search?hl=en&tbo=d&tbm=bks&tbs=bkv:r,cdr:1,cd_min:%3A1%2F1%2F1870%2Ccd_max%3A12%2F31%2F1929&q=%s'],
booksg: ['Google Books Free', 'https://www.google.com/search?hl=en&tbs=bkv:r&tbm=bks&start=0&sa=N&biw=1125&q=%s'],
freebooksg: ['Google Books Free Books', 'https://www.google.com/search?hl=en&tbs=bkv:r,bkt:b&tbm=bks&start=0&sa=N&biw=1125&q=%s'],
cacheg: ['Google Cache', 'http://www.google.com/search?q=cache%3A+%s'],
icag: ['Google Canada Image Search', 'https://duckduckgo.com/?q=!gica%20%s'],
docsg: ['Google Documents', 'http://docs.google.com/?pli=1#search/%s'],
driveg: ['Google Drive', 'https://drive.google.com/#search/%s'],
expressg: ['Google Express', 'https://express.google.com/u/0/search?q=%s'],
financeg: ['Google Finance', 'https://duckduckgo.com/?q=!stock%20%s'],
flightsg: ['Google Flights', 'https://www.google.com/flights/#search;f=%s;t=%s;d=%s;r=%s;s=0;eo=e'],
gig: ['Google gifs', 'https://duckduckgo.com/?q=!ggif%20%s'],
icrg: ['Google Images Commercial Reuse', 'https://duckduckgo.com/?q=!gcc%20%s'],
ig: ['Google Images', 'http://images.google.com/images?q=%s'],
irg: ['Google Images Reuse  ', 'https://duckduckgo.com/?q=!imgrwm%20%s'],
ilg: ['Google Images Large ', 'https://duckduckgo.com/?q=!il%20%s'],
irevg: ['Google Images Reverse Search', 'https://duckduckgo.com/?q=!gri%20%s'],
iurlg: ['Google Images by URL', 'https://www.google.com/searchbyimage?image_url=%s'],
mapg: ['Google Maps', 'http://www.google.com/maps?q=%s'],
ddg: ['Google Maps Driving Directions ', 'https://www.google.com/maps?saddr=%s&daddr=%s&output=classic'],
ng: ['Google News', 'https://news.google.com/search?num=100&hl=en-US&lr&tab=wn&ie=UTF-8&q=%s&scoring=d&gl=US&ceid=US:en'],
patentsg: ['Google Patents', 'https://duckduckgo.com/?q=!patent%20%s'],
ptransg: ['Google Translate', 'https://translate.google.com/translate?hl=en&sl=ru&tl=en&u=%s'],
scholarg: ['Google Scholar', 'https://duckduckgo.com/?q=!googlescholar%20%s'],
sinceg: ['Google Since', 'https://www.google.com/search?q=%s&tbs=qdr:%s'],
siteg: ['Google Site', 'http://www.google.com/search?q=%s%20site:%s'],
transitg: ['Google Transit', 'https://www.google.com/maps?saddr=%s&daddr=%s&ie=UTF8&f=d&sort=def&dirflg=r&hl=en'],
transg: ['Google Translate', 'https://translate.google.com/#%s/%s/%s'],
daterg: ['Google with Date Range', 'https://www.google.com/search?q=%s&source=lnt&tbs=cdr:1,cd_min:%s,cd_max:%s&tbm='],

usyn: ['Yubnub Url Sub', 'http://yubnub.org/parser/parse?command=url%20%s'],

}

