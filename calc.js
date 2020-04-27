alert("Hello!! കയറി വാ മുത്തേ !!! ~ Kevin Jacob  ;-) !!!")
function clickb(val)
 {
document.getElementById("screen").value+=val;

}




function clearb(){
    document.getElementById("screen").value="";
}

function equalClick(val)
{
var text=document.getElementById("screen").value;
var result=eval(text);
document.getElementById("screen").value=result;

}