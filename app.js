// here we will make the color from the individual element in the array
const colors = ["blue" ,"red" , "rgba(133,122,200)" , "#f15025"]
//here we will get the button element by getelementbyid
const btn = document.getElementById("btn");
//we will select the span element which has the class color 
const color =document.querySelector(".color");

//we will add event listner to the button 
btn.addEventListener("click" , function(){
    const randomColor = getrandomColor();
    console.log(randomColor)
    //here we will make the background to be the selected colr and the text of the class color become the name of the selected color
    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = colors[randomColor]
    alert("you clicked on the button ");  // display string message
});
//here we will make a function to generate a random number and this number we will use math.floor to make this number integer
function getrandomColor(){
    return Math.floor(Math.random() * colors.length);
}
