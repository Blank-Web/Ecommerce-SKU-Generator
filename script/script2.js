let brandBody = document.querySelectorAll("#brandBody tr");

const darkGreen = "#05bb94";
const lightGreen = "#83e7d2";
const gold = "#F5C564";
const lightGold = "rgba(245, 197, 100, 0.2)";
const goldBorder = "2px solid #F5C564";

let brandSku = "";
let writtenBrandSku = "";

let clickBrandTracker = 0;
let displaySkuBrandTracker = 0;

async function clickBrand(click_id){

    let cellId = document.getElementById(click_id);
    clickBrandTracker++

    if (click_id == writtenBrandSku.textContent && displaySkuBrandTracker !== 0){
        cellId.style.backgroundColor = gold;
    } else if (click_id == brandSku && clickBrandTracker !== 0){
        cellId.style.backgroundColor = darkGreen;
    } else if (click_id !== writtenBrandSku.textContent && displaySkuBrandTracker !== 0){
        for (let i=0;i<brandBody.length;i++){
            brandBody[i].style.backgroundColor="transparent";
        }
        document.getElementById(`${writtenBrandSku.textContent}`).style.backgroundColor = gold;
    }else if ((click_id !== brandSku) && (click_id !== writtenBrandSku.textContent)){
        for (let i=0;i<brandBody.length;i++){
            brandBody[i].style.backgroundColor="transparent";
        }
        
        cellId.style.backgroundColor = darkGreen;
    }

    brandSku = click_id;
}


async function mouseOver(hover_id){
    let cellId = document.getElementById(hover_id);

    if (hover_id == writtenBrandSku.textContent && displaySkuBrandTracker !== 0){
        cellId.style.backgroundColor = gold;
    } else if (hover_id == brandSku && clickBrandTracker !== 0){
        cellId.style.backgroundColor = darkGreen;
    } else if (hover_id !== writtenBrandSku.textContent && hover_id !== brandSku){
        cellId.style.backgroundColor = lightGreen;
    } else cellId.style.backgroundColor = lightGreen;
    
}


async function mouseOut(out_id){
    let cellId = document.getElementById(out_id);

    if (out_id == writtenBrandSku.textContent && displaySkuBrandTracker !== 0){
        cellId.style.backgroundColor = gold;
    } else if (out_id == brandSku && clickBrandTracker !== 0){
        cellId.style.backgroundColor = darkGreen;
    } else if (out_id !== writtenBrandSku.textContent && out_id !== brandSku){
        cellId.style.backgroundColor = "transparent";
    } else cellId.style.backgroundColor = "transparent";
}


//not finished editing the codes below - idagdag yung mga codes sa iba't-ibang condition tulad ng sa taas.
function displaySkuBrand(){
    displayedBrandSku = brandSku;
    writtenBrandSku = document.getElementById("submittedBrandSku");
    writtenBrandSku.innerText = brandSku;

    document.getElementById(brandSku).style.backgroundColor = gold;
    displaySkuBrandTracker++

}