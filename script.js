function showWindow(id, href = "", title = "Folder"){
    var element = document.getElementById(id);
    element.style.display = "block";

    document.getElementById("window-title").textContent = title;

    var iframe = document.getElementById("content");
    iframe.src = href;
}

function showMusicWindow(){
    var element = document.getElementById("music-window");
    element.style.display = "block";

    getSongOfDay();
}

function hideWindow(id){
    var element = document.getElementById(id);
    element.style.display = "none";
}

const Songs = [
    "994101583",    //slide tackel
    "1165291456",   //duvet
    "819225769",    //l to the og
    "1237900021",   //american teenager
    "318913765",    //(the death of ruby)
    "1487714506",   //back to the old house
    "718248307",    //everything goes my way
    "1431552202",   //$20
    "613615692",    //on the square
    "249799316",    //ciggaretes out the window
    "625476402",    //bags
    "406344999",    //show me how
    "254399326",    //dreams
    "1353942376",   //d>e>a>t>h>m>e>t>a>l
    "725204059",    //bless the telephone
    "3585879",      //avril 14th
    "302122024",    //lovefool
    "1058390350",   //simulation swarm
    "25742560",     //oblivion
    "1381339285",   //why cant i be the same
    "1277112982",   //alright
    "1441844464",   //sarah
    "793862767",    //kyoto
    "261159802",    //what once was
    "256241332",    //the less i know the better
    "1141129054",   //good will hunting
    "342393209"     //ivy
    
];

var musicLoaded = false;
function getSongOfDay(){
    if(musicLoaded){
        return;
    }
    musicLoaded = true;
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    document.getElementById("music-player").src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + Songs[day % Songs.length] + "&color=%23bfbfbf&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true";
}

function updateCurrentTime() {
    const currentTimeElement = document.getElementById("time");
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    
    currentTimeElement.textContent = formattedTime;
  }
  
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);

  function iframeLoaded() {

    var iFrameID = document.getElementById('content');
    if(iFrameID) {
          
          iFrameID.height = "";
          iFrameID.width = "";

          if(detectMob()){
            iFrameID.width = Math.min((iFrameID.contentWindow.document.body.scrollWidth + 30), 550) + "px";
            iFrameID.height = Math.min((iFrameID.contentWindow.document.body.scrollHeight + 50), 700) + "px";
          } else {
            iFrameID.height = Math.min((iFrameID.contentWindow.document.body.scrollHeight + 50), 550) + "px";
            iFrameID.width = Math.min((iFrameID.contentWindow.document.body.scrollWidth * 2), 700) + "px";
          }
        }
    }

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}