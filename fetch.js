var WScommands = new Object;

function addCommands(commands) {
  for (var cmd in commands) {
    WScommands[cmd.toLowerCase()] = 
    new Array(commands[cmd][0], commands[cmd][1]);
  }
}

//  Command URLs can contain the following replacement tokens:
//  %s - This token is replaced by any search terms 
//       provided when the command is run.
//  %r - Replaced by the url of the page you were
//       on when the command was run.

var DefaultCommand = 'd';

addCommands(shortcuts);


//This function returns parameter values from the url of this page.
function gup() {
  var name = ("fetch").replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var results = new RegExp("[\\?&]"+name+"=([^&#]*)").exec(window.location.href);

  if (results === null) return "";
  else return results[1];
}

function processCommand(command) {
  var words = command.replace(/%20/g, " ").replace(/\+/g, " ").split(' ');
  var cmd = words.shift().toLowerCase();
  var args = words.join('%20');
  var ref = document.referrer;


//If the command is not recognized, use the default command.
  if (typeof WScommands[cmd] == 'undefined') {
    if (DefaultCommand !== "") {
      args = cmd + ' ' + args;
      cmd = DefaultCommand;
    }
    else {
      alert("Undefined command!");
    }
  }

  var url = WScommands[cmd][1];

  if (url.indexOf('%r') == -1) { ref = ""; }
  if (args === "" && ref === "" && url.indexOf('%s') != -1) {
    //If there are no arguments present, let's just go to the root of the domain.
    var re = new RegExp('https?:\/\/[^\/]*\/');
    var m = re.exec(url);
    url = m[0];
  }

// commented out the "fetch way" 
//  top.location.replace(url.replace(/%s/g, args).replace(/%r/g, ref));

// multiparam processing
  
	var s = args;
	query='';
	urlchunks=url.split('%s');
	schunks=s.split('%3B');
	for (i=0; i<schunks.length; i++) {
		query+=urlchunks[i]+schunks[i];
	}  

	top.location.replace(query);


}

//If the url's "fetch" param has a value then there is no need to load the page,
//we can just start processing the command instead.

var fetch_param=gup();
if (fetch_param !== "") { processCommand(fetch_param); }

//This function runs when the page finishes loading.

function goOnLoad() {
  document.getElementById("search-text").focus();
  
  var cmdTable = document.createElement("table");
  for (var cmd in WScommands) {
    cmdTable.innerHTML += '<tr title="' + WScommands[cmd][1] + '"><td class="trigger">' + cmd + '</td><td class="description">' + WScommands[cmd][0] + '</td></tr>';
  }

  document.getElementById('ocontent').appendChild(cmdTable);
}

function initScreen() { setTimeout("window.scrollTo(0,1);", 100); }
