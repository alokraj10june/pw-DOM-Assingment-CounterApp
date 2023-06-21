//get the element
let btn=document.getElementById("decrement");
let btn2=document.getElementById("increment");
let resetbtn=document.getElementById("reset");
let btn3=document.getElementById("number");

//decrement button
btn.addEventListener("click",()=>{
    const value=Number(number.innerText);
    if(value>0){
        number.innerText=value-1;
    }else{
        alert("negative value not allowed")
    }
});
//increment button
btn2.addEventListener("click",()=>{
    const value=Number(number.innerText);
    if(value>=10){
        alert("10+value are not allowed")
    }else{
        number.innerText=value+1;
    }
});
//Reset button
resetbtn.addEventListener("click",()=>{
    number.innerText=0;
})