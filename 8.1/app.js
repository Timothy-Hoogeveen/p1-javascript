let titel = document.getElementById("titel")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

function multiply(){
  let answer =  input1.value * input2.value

  titel.innerText = answer


}

function minus(){
        let answer =  input1.value - input2.value
      
        titel.innerText = answer

}

function add(){
    let answer =  Number(input1.value) + Number(input2.value)
      
    titel.innerText = answer

}

function devide(){
    let answer =  input1.value / input2.value
      
    titel.innerText = answer

}