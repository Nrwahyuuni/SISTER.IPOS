function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rVWaXtf8mk":
        Script1();
        break;
      case "6hhwJjnybQg":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume=0.0;
}

