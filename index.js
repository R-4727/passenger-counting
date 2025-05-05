let countel=document.getElementById("count-el");
let saveel=document.getElementById("save-el");
let count=0
function increment(){
    count += 1;
    countel.innerText=count;
}
function save(){
    let countstr=count+" - ";
    saveel.textContent+=countstr;
    countel.innerText = 0;
    count = 0;
}
