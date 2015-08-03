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
  switch(run_code) {
    case 0:
      AndroidFunction.remoteCMD("date");
      break;
    case 1:
      AndroidFunction.remoteCMD("ls -la");
      break;
    case 2:
      AndroidFunction.remoteCMD("ls -la /sdcard/");
      break;
  } 
  setTimeout( refreshWebview_cb, 10000);
}
