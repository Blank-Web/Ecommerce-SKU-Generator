const tr = document.getElementsByTagName('tr');
let brandTracker = "";
let shirtSizeTracker = "";
let colorTracker = "";
let printSizeTracker = "";
let printLocationTracker = "";

let brandBody = document.querySelectorAll("#brandBody tr");

var text = "";
var textC = text.textContent;

let brandButtonTracker = 0;


function saveSkuBrand(clicked_id){
    brandButtonTracker++;
    brandTracker = clicked_id;


    for (let i=0;i<brandBody.length;i++){
    brandBody[i].style.backgroundColor="transparent";
    }

    if (brandTracker == text.textContent){
        if (brandTracker == ""){
            document.getElementById(`${brandTracker}`).style.backgroundColor="#05bb94"; //darker green
        }else{
        document.getElementById(`${brandTracker}`).style.backgroundColor= "#05bb94"; //cream
        }
    } else {
        document.getElementById(`${brandTracker}`).style.backgroundColor="#05bb94"; //darker green
    }

    if (brandTracker !== text.textContent){
        document.getElementById(textC).style.border="2px solid rgb(245 197 100)";

    }
}


async function mouseOver (hovered_id){
    if (brandButtonTracker == 0){
        document.getElementById(hovered_id).style.backgroundColor="#83e7d2"; //lighter green
    } else if (brandButtonTracker !== 0){
            if (hovered_id !== brandTracker && hovered_id !== text.textContent){
                document.getElementById(hovered_id).style.backgroundColor="#83e7d2"; //lighter green
            }else if (hovered_id == brandTracker && hovered_id !== text.textContent){
                document.getElementById(hovered_id).style.backgroundColor="#05bb94"; //darker green
            } else if ( hovered_id == text.textContent){
                document.getElementById(hovered_id).style.backgroundColor="#83e7d2"; //lighter green
            }
    }
}

async function mouseOut (out_id){
    if (out_id == brandTracker && out_id !== text.textContent){
        document.getElementById(out_id).style.backgroundColor="#05bb94"; //darker green
    } else if (out_id == text.textContent){
        document.getElementById(out_id).style.backgroundColor="rgba(245, 197, 100, 0.2)";
    } else if ( out_id !== text.textContent && out_id !== brandTracker){
        document.getElementById(out_id).style.backgroundColor="transparent";
    } else if (out_id == brandTracker && out_id == text.textContent){
        document.getElementById(out_id).style.backgroundColor="#05bb94"; //darker green
    }else {document.getElementById(out_id).style.backgroundColor="transparent";}
}




async function displaySkuBrand(){
textC = brandTracker;
text = document.getElementById("brandSKU");
document.getElementById(`${brandTracker}`).style.backgroundColor="#05bb94";
text.innerHTML = `${brandTracker}`;
document.getElementById(`${brandTracker}`).style.backgroundColor="rgb(245 197 100)";
brandButtonTracker++;
}


    


