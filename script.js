const input = document.querySelector(".idNumber");
const button =document.querySelector("#btn");
var oddNumber = true
let sumOdd = 0
let sumEven = 0
button.addEventListener("click", () =>{
    if (input.value.length !==11 || input.value.charAt(0) === "0" ) {
        let newH1 = document.createElement("h1")
        let resultH1 = document.createTextNode("Invalid ID Number!")
        newH1.appendChild(resultH1)
        document.body.appendChild(newH1)
        setTimeout(function(){
            newH1.remove()
        }, 1000)
        return
    }
    let newArray = input.value.split('')
    console.log(newArray);
        for (var i = 0; i < newArray.length -2; i+=2) {
             if (parseInt(newArray[i])){
                sumOdd += parseInt(newArray[i]);
             }
        }
        console.log(sumOdd);
        for (var i = 1; i < newArray.length -2; i+=2) {
            if (parseInt(newArray[i])){
               sumEven += parseInt(newArray[i]);
            }
       }
       console.log(sumEven);
       const onuncuRakam = ((sumOdd * 7) - (sumEven)) %10
       const onbirincirakam = (sumOdd + sumEven + onuncuRakam) %10
       if (onuncuRakam == newArray[9] && onbirincirakam == newArray[10]) {
        let newH1 = document.createElement("h1")
        let resultH1 = document.createTextNode("Valid ID Number!")
        newH1.appendChild(resultH1)
        document.body.appendChild(newH1)
        setTimeout(function(){
            newH1.remove()
        }, 1000)
       }
       else {
        let newH1 = document.createElement("h1")
        let resultH1 = document.createTextNode(`${input.value} Invalid ID Number!`);
        newH1.appendChild(resultH1)
        document.body.appendChild(newH1)
       }
       console.log(onuncuRakam);
       console.log(onbirincirakam);
       input.value = ""
       newArray = []
       sumEven = 0
       sumOdd = 0
})