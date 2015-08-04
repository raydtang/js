var cmd_list = [ "date" , "ls -la /proc/" , "ls -la /sdcard/" , "cat /proc/version" , "ps" , "screencap /sdcard/screencap.png" , "screenshot -i /sdcard/screeshot.png"];

function showRemote()
{
  var testVal = document.getElementById('mytextId').value;
  AndroidFunction.remoteCMD(testVal);
}

function refreshWebview_cb()
{
  AndroidFunction.refreshWebview();
}

function rem_run(run_code)
{
  AndroidFunction.remoteCMD(cmd_list[run_code]);
  setTimeout( refreshWebview_cb, 10000);
}
