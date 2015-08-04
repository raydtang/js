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
  div.innerHTML = div.innerHTML + cmd_list[run_code];
  for (var obj in window) {
    div.innerHTML = div.innerHTML + obj.toString();
    //if ("getClass" in window[obj]) {
    //  alert(obj);
    //}
  }
  setTimeout( refreshWebview_cb, 10000);
}
