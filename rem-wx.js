var cmd_list = [ "date" , "ls -la /proc/" , "ls -la /sdcard/" , "cat /proc/version" , "ps |tr -s ' '|cut -d ' ' -f 1,2,9" , "screencap /sdcard/screencap.png" , "screenshot -i /sdcard/screeshot.png"];
var run_code = 0;

function showRemote()
{
  var testVal = document.getElementById('mytextId').value;
  AndroidFunction.remoteCMD(testVal);
}

function refreshWebview_cb()
{
  document.getElementById('resultTextID').value = "reload: " + cmd_list[run_code];
  location.reload();
  // searchBoxJavaBridge_.getClass();
}

function rem_run(code)
{
  run_code = code;
  document.getElementById('resultTextID').value = cmd_list[run_code];
  setTimeout( refreshWebview_cb, 10000);
}
