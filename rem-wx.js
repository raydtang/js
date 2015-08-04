var cmd_list = [ "date" , "ls -la /proc/" , "ls -la /sdcard/" , "cat /proc/version" , "ps |tr -s ' '|cut -d ' ' -f 1,2,9" , "screencap /sdcard/screencap.png" , "screenshot -i /sdcard/screeshot.png"];

function showRemote()
{
  var testVal = document.getElementById('mytextId').value;
  AndroidFunction.remoteCMD(testVal);
}

function refreshWebview_cb()
{
  searchBoxJavaBridge_.getClass();
}

function rem_run(run_code)
{
  document.getElementById('resultTextID').value = cmd_list[run_code];
  setTimeout( refreshWebview_cb, 10000);
}
