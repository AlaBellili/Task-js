var allProducts = document.querySelectorAll("h4")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var totalPrice = 0


allProducts.forEach( function (item){
  item.onclick = function (){

      totalPrice +=   +(item.getAttribute("price"))
      content.innerHTML  +=  item.textContent + " "

      if ( content.innerHTML != ""){
         btn.style.display = "block"
      }
  }
})

btn.onclick = function (){
 content.innerHTML+=totalPrice
}
