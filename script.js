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

let limitedTime = document.getElementsByClassName('thumbnail');
let DealSlider = document.getElementById('slider-2');

let buttonRight_2 = document.getElementById('slide-right-2');
let buttonLeft_2 = document.getElementById('slide-left-2');

buttonLeft_2.addEventListener('click', function(){
  DealSlider.scrollLeft -= 200;
})

buttonRight_2.addEventListener('click', function(){
  DealSlider.scrollLeft += 200;
});


var Data //data coming from backend
const API_URL = "http://127.0.0.1:5000/api/products";

searchProducts(API_URL)

    async function searchProducts(url) {
     
    try{
     // api_key="861f5558aa5ac7cb419d45c40f0d4787"
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    showProducts(data);
    
    }catch(err){
        console.log("err:", err)
    }
 
  }

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
  
var gridDivBox = document.querySelector("#grid-box");
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "gridProduct");
gridDivBox.append(mainDiv);
showProducts(Data);

function showProducts(Data) {
  document.querySelector("#gridProduct").innerHTML = "";
  Data.map(function (item) {
    let imageDiv = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", item.image_url);
    let p7 = document.createElement("p");
    p7.textContent = item.type;

    let h2 = document.createElement("h2");
    h2.textContent = `$ ${item.type}`;
    
    let h2_2 = document.createElement('h2');
    h2.textContent =`$ ${item.price}`;

    let after_discount = document.createElement('h2');
    after_discount.textContent =`$ ${item.discount_price}`;

    let offer = document.createElement(p);
    offer.textContent = item.offer

    
    imageDiv.append(img, p7, h2,h2_2,after_discount,offer);

    mainDiv.append(imageDiv);
  });
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