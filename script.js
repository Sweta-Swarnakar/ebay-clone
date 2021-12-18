let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 150;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 150;
});

let bySize = document.getElementsByClassName('thumbnail');
let sizeSlider = document.getElementById('slider-1');

let buttonRight_1 = document.getElementById('slide-right-1');
let buttonLeft_1 = document.getElementById('slide-left-1');

buttonLeft_1.addEventListener('click', function(){
  sizeSlider.scrollLeft -= 200;
})

buttonRight_1.addEventListener('click', function(){
  sizeSlider.scrollLeft += 200;
});

var Data //data coming from backend

function handlePriceSort() {
    var selected = document.getElementById("sortByprice").value;
    //console.log(selected);
    if(selected === "low"){
      Data = Data.sort(function (a, b) {
        return a.MRP - b.MRP
      })
    }
    if(selected === "high"){
      Data = Data.sort(function (a, b) {
        return b.MRP - a.MRP
      })
    }
    console.log(Data);
    //showProducts(Data)
  }
  function handleNameSort() {
    var selected = document.getElementById("sortByName").value;
    //console.log(selected);
    if(selected === "asc"){
      Data = Data.sort(function (a, b) {
        return a.type > b.type ? 1 : b.type > a.type ? -1 : 0 
      })
    }
    if(selected === "dsc"){
      Data = Data.sort(function (a, b) {
        return a.type > b.type ? -1 : b.type > a.type ? 1 : 0 
      })
    }
    console.log(Data);
    //showProducts(Data)
  }
  //var output = product.filter(searchByName);
  
  var search =  document.getElementById("");  //add id of search-bar
  search.addEventListener("input", searchByName)
  function searchByName(el) {
   var searchProd = Data.filter(function (item) {
     return item.type.includes(search.value) 
   })
   showProducts(searchProd)
  }


  function addToCart(item) {
    var prodInfo = JSON.parse(localStorage.getItem("ebay-product")) || [];
    var isFound = false;
    prodInfo.forEach((element) => {
      if (element.id == item.id) {
        isFound = true;
      }
    });
    if (!isFound) {
      item.quantity = 1;
      prodInfo.push(item);
      alert(item.type + " added to cart");
      localStorage.setItem("ebay-product", JSON.stringify(prodInfo));
    } else {
      alert("This item is already present in your cart");
    }
  }