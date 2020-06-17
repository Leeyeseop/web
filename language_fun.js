
function loadXMLDoc(text,loc) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://raw.githubusercontent.com/Leeyeseop/web/master/strings.xml", true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this.response,text,loc);
    }
  };
}

function myFunction(xml,text,loc) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xml,"text/xml");
  var x = xmlDoc.getElementsByTagName(text);
  txt = "";
  for (i = 0; i< x.length; i++) {
    txt += x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById(loc).innerHTML = txt;
}
