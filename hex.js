// we will form the backgroundcolor from 6 elements (1color) from the following array
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//here we will get the button element by getelementbyid
const btn = document.getElementById("btn");
//we will select the span element which has the class color 
const color =document.querySelector(".color");

btn.addEventListener("click" , function(){
    let hexColor ="#"
    for(let i = 0; i <6; i++){
        //here we will add 6 random elements from the hex array to hexColor # 
        hexColor += hex[getrandomColor()]
    }
    console.log(hexColor);
    
    color.textContent = hexColor
//here we will make the background to be the selected colr and the text of the class color become the name of the selected color
    document.body.style.backgroundColor = hexColor
});
//here we will make a function to generate a random number and this number we will use math.floor to make this number integer
function getrandomColor(){
    return Math.floor(Math.random() * hex.length);
}
