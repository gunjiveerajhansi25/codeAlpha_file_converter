var fileInput=document.getElementById("fileInput");
var result=document.querySelector(".result");
document.getElementById("converButton").addEventListener("click",convertToJNSON);
function covertToJSON() {
    var file=fileInput[0];
    if (file) {
        var reader = new FileReader();
         reader.onload = function(e) {
            var contents=e.target.result;
            var lines = contents.split("\n");
            var jsonData = {};
             
            for(var j=1;j<lines.length;j++) {
                var line = lines[j].trim();
            if(line != "") {
                var parts = line.split(":");
                var key= parts[0].trim();
                var value = parts[1].trim();

                jsonData[key] = value;
            }
            }
            result.innerHtml = "<post>" + JSON.stringify(jsonData,null,2)+"</post>";
         };
         reader.readAsText(file);
    }
}