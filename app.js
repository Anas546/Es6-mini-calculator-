// Add Fun...
document.querySelector("#doAdd").addEventListener("click",() =>{
let add1 = +document.querySelector("#add1").value
let add2 = +document.querySelector("#add2").value 
let addResult =  add1 + add2
document.querySelector("#addResult").innerHTML = addResult
})

// Sub Fun...
document.querySelector("#doSub").addEventListener("click",() =>{
  let sub1 = +document.querySelector("#sub1").value
  let sub2 = +document.querySelector("#sub2").value 
  let subResult =  sub1 - sub2
  document.querySelector("#subResult").innerHTML = subResult
  })
  
// mul Fun...
document.querySelector("#doMul").addEventListener("click",() =>{
  let mul1 = +document.querySelector("#mul1").value
  let mul2 = +document.querySelector("#mul2").value 
  let mulResult =  mul1 * mul2
  document.querySelector("#mulResult").innerHTML = mulResult
  })
  
// Div Fun...
document.querySelector("#doDiv").addEventListener("click",() =>{
  let div1 = +document.querySelector("#div1").value
  let div2 = +document.querySelector("#div2").value 
  let divResult =  div1 / div2
  document.querySelector("#divResult").innerHTML = divResult
  })
