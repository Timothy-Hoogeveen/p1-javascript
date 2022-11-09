let titel = document.getElementById("titel")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

function multiply(){

    if (input1.value > 0 && input2.value > 0 ) {

        let answer =  input1.value * input2.value

        titel.innerText = answer
    } else {
        titel.innerText = "getal is te laag"
    }



}

function minus(){

    if (input1.value > 0 && input2.value > 0 ){
        let answer =  input1.value - input2.value
      
        titel.innerText = answer
        
    }
      

}

function add()
 
      if (input1.value > 0 && input2.value > 0 ){
        let answer =  input1.value - input2.value
      
        titel.innerText = answer
}

function devide()

    if (input1.value > 0 && input2.value > 0 ){
        let answer =  input1.value - input2.value
      
        titel.innerText = answer

}