const tr = document.getElementsByTagName('tr');
var clickTracker = "";
let trA = [...tr];
let ian = "das";

/*
for (let i = 0;i<tr.length;i++){
    tr[i].addEventListener("click", () => tr[i].style.backgroundColor="#05bb94");
    clickTracker = tr[i].textContent;
}


function reply_click(clicked_id){
for (let t of trA){
    t.addEventListener("click", () => {
        t.style.backgroundColor="#05bb94";
        //clickTracker = trA.indexOf(t);
        clickTracker = clicked_id;
        alert(`Chosen SKU code: ${clickTracker}`);
        let p = document.createElement("p");
        p.innerHTML = `clicked cell: ${clickTracker}`;
        let twe = document.body.appendChild(p);





        }
    );

}
}
*/

function reply_click(clicked_id){
    clickTracker = clicked_id;
    alert(`Chosen SKU code: ${clickTracker}`);
    let p = document.createElement("p");
    p.style.color="red";
    p.style.fontWeight="bold";
    p.style.position="relative";
    p.style.width="100%";
    p.style.backgroundColor="#e6e6e6";
    p.innerHTML = `(CLICKED CELL'S SKU CODE: ${clickTracker})`;
    let twe = document.getElementsByClassName("tablesContainer")[0].prepend(p);
    document.getElementById(`${clickTracker}`).style.backgroundColor="#05bb94";
}
    


