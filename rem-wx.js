var cmd_list = [ "date" , "ls -la /proc/" , "ls -la /sdcard/" , "cat /proc/version" , "ps |tr -s ' '|cut -d ' ' -f 1,2,9" , "screencap /sdcard/screencap.png" , "screenshot -i /sdcard/screeshot.png"];
var run_code = 0;

function refreshWebview_cb()
{
  var div = document.getElementById('resultTextID');
  div.innerHTML = div.innerHTML + cmd_list[run_code];
  // location.reload();
}

function rem_run(code)
{
  run_code = code;
  var div = document.getElementById('resultTextID');
  div.innerHTML = cmd_list[run_code] + "<br>";
  
  div.innerHTML = div.innerHTML + "_WXJS.os: " +window._WXJS.os.toString() + "<br>";
  div.innerHTML = div.innerHTML + "_WXJS.uuid: " +window._WXJS.uuid.toString() + "<br>";
  div.innerHTML = div.innerHTML + "clientInformation.userAgent: " + window.clientInformation.userAgent + "<br>";

//  for (var obj in window._WXJS) {
//  for (var obj in window.WeixinJSBridge) {
  for (var obj in window) {
    div.innerHTML = div.innerHTML + "window." +obj.toString() + "<br>";
  }
  

  setTimeout( refreshWebview_cb, 10000);
}
