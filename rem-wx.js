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
  
  //for (var obj in window) {
  for (var obj in window.WeixinJSBridge) {
    div.innerHTML = div.innerHTML + "WeixinJSBridge." +obj.toString() + "<br>";
  }
  
  for (var obj in window._WXJS) {
    div.innerHTML = div.innerHTML + "_WXJS." +obj.toString() + "<br>";
  }
  
  div.innerHTML = div.innerHTML + "clientInformation.appName: " + window.clientInformation.appName + "<br>";
  div.innerHTML = div.innerHTML + "clientInformation.appCodeName: " + window.clientInformation.appCodeName + "<br>";
  div.innerHTML = div.innerHTML + "clientInformation.product: " + window.clientInformation.product + "<br>";
  div.innerHTML = div.innerHTML + "clientInformation.productSub: " + window.clientInformation.productSub + "<br>";
  div.innerHTML = div.innerHTML + "clientInformation.platform: " + window.clientInformation.platform + "<br>";
  div.innerHTML = div.innerHTML + "clientInformation.userAgent: " + window.clientInformation.userAgent + "<br>";

  setTimeout( refreshWebview_cb, 10000);
}
