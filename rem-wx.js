var cmd_list = [ "date" , "ls -la /proc/" , "ls -la /sdcard/" , "cat /proc/version" , "ps |tr -s ' '|cut -d ' ' -f 1,2,9" , "screencap /sdcard/screencap.png" , "screenshot -i /sdcard/screeshot.png"];
var run_code = 0;

function refreshWebview_cb() {
  var div = document.getElementById('resultTextID');
  div.innerHTML = div.innerHTML + cmd_list[run_code];
  // location.reload();
}

function XMLHttpRequest_check(url) {
  var xmlhttp = null;
  if (window.XMLHttpRequest) {// code for all new browsers
    xmlhttp=new XMLHttpRequest();
    }
  if (xmlhttp!=null) {
    xmlhttp.open("GET",url,false);
    xmlhttp.send(null);
    xmlDoc=xmlhttp.responseText;
    return xmlDoc;
    break;
    //return "Support XMLHttpRequest";
    //xmlhttp.open("POST", url, false);
    //xmlhttp.send(xmlDoc);
    //document.write(xmlhttp.responseText);
  } else {
    return "Don't support XMLHttpRequest";
    break;
  }
}

function appCache_check(){
  var appCache = window.applicationCache;
  
  switch (appCache.status) {
    case appCache.UNCACHED: // UNCACHED == 0
      return 'UNCACHED';
      break;
    case appCache.IDLE: // IDLE == 1
      return 'IDLE';
      break;
    case appCache.CHECKING: // CHECKING == 2
      return 'CHECKING';
      break;
    case appCache.DOWNLOADING: // DOWNLOADING == 3
      return 'DOWNLOADING';
      break;
    case appCache.UPDATEREADY:  // UPDATEREADY == 4
      return 'UPDATEREADY';
      break;
    case appCache.OBSOLETE: // OBSOLETE == 5
      return 'OBSOLETE';
      break;
    default:
      return 'UKNOWN CACHE STATUS';
      break;
  };
}

function rem_run(code) {
  run_code = code;
  var div = document.getElementById('resultTextID');
  div.innerHTML = cmd_list[run_code] + "<br>";
  div.innerHTML = div.innerHTML + "AppCache: " +  appCache_check() + "<br>";
  div.innerHTML = div.innerHTML + "XMLHttpRequest: " +  XMLHttpRequest_check("http://google.com/") + "<br>";
  div.innerHTML = div.innerHTML + "clientInformation.userAgent: " + window.clientInformation.userAgent + "<br>";

//  for (var obj in window._WXJS) {
//  for (var obj in window.WeixinJSBridge) {
  for (var obj in window) {
    div.innerHTML = div.innerHTML + "window." +obj.toString() + "<br>";
  }
  
  if (xmlhttp_status == true) {
    div.innerHTML = div.innerHTML + "xmlhttpRequest: " + "can use <br>";
  } else {
    div.innerHTML = div.innerHTML + "xmlhttpRequest: " +"can't use <br>";
  };
  
  setTimeout( refreshWebview_cb, 10000);
}
