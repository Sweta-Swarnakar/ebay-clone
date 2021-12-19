let thumbnails = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");

let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");

buttonLeft.addEventListener("click", function () {
  slider.scrollLeft -= 150;
});

buttonRight.addEventListener("click", function () {
  slider.scrollLeft += 150;
});

let bySize = document.getElementsByClassName("thumbnail");
let sizeSlider = document.getElementById("slider-1");

let buttonRight_1 = document.getElementById("slide-right-1");
let buttonLeft_1 = document.getElementById("slide-left-1");

buttonLeft_1.addEventListener("click", function () {
  sizeSlider.scrollLeft -= 200;
});

buttonRight_1.addEventListener("click", function () {
  sizeSlider.scrollLeft += 200;
});

let limitedTime = document.getElementsByClassName("thumbnail");
let DealSlider = document.getElementById("slider-2");

let buttonRight_2 = document.getElementById("slide-right-2");
let buttonLeft_2 = document.getElementById("slide-left-2");

buttonLeft_2.addEventListener("click", function () {
  DealSlider.scrollLeft -= 200;
});

buttonRight_2.addEventListener("click", function () {
  DealSlider.scrollLeft += 200;
});
var Data;
//data coming from backend;

const API_URL = "http://127.0.0.1:5000/api/products/";

searchProducts(API_URL);

async function searchProducts(url) {
  try {
    let response = await fetch(url);
    Data = await response.json();
    //console.log(Data);
    showProducts(Data);
  } catch (err) {
    console.log("err:", err);
  }
}



function handlePriceSort() {
  var selected = document.getElementById("sortByprice").value;
  console.log(Data);
  Data.forEach((ele) => (ele.price = Number(ele.price)));

  if (selected === "low") {
    Data.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  if (selected === "high") {
    Data.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  //console.log(Data);
  showProducts();
}
function handleNameSort() {
  var selected = document.getElementById("sortByName").value;
  //console.log(selected);
  if (selected === "asc") {
    Data.sort(function (a, b) {
      return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
    });
  }
  if (selected === "dsc") {
    Data.sort(function (a, b) {
      return a.title > b.title ? -1 : b.title > a.title ? 1 : 0;
    });
  }
  console.log(Data);
  showProducts();
}
//var output = product.filter(searchByName);

// var search = document.getElementById("search"); //add id of search-bar
// search.addEventListener("input", searchByName);
// function searchByName(el) {
//   var searchProd = Data.filter(function (item) {
//     return item.title.includes(search.value);
//   });
//   showProducts(searchProd);
// }

//showProducts(Data);

var gridBox = document.querySelector(".grid-box");
function showProducts() {
  gridBox.innerHTML = "";
  for (let i = 0; i < Data.length; i++) {
    let largeBox = document.createElement("div");
    largeBox.setAttribute("class", "largee-box");
    gridBox.append(largeBox);

    let imageBox = document.createElement("div");
    imageBox.setAttribute("class", "image-box");
    largeBox.append(imageBox);

    largeBox.addEventListener('click',function toCart(){
      localStorage.setItem('cartCheckOut',JSON.stringify(Data[i]));
      window.location.href='productDetails.html';
    })

    var img = document.createElement("img");
    img.setAttribute("src", Data[i].imageUrl);
    imageBox.append(img);

    let textBox = document.createElement("div");
    textBox.setAttribute("class", "textbox");
    largeBox.append(textBox);

    let p = document.createElement("p");
    p.textContent = "SPONSORED";
    textBox.append(p);

    let strong = document.createElement("strong");
    strong.textContent = Data[i].title;
    textBox.append(strong);

    let h4 = document.createElement("h2");
    h4.style.fontStyle = "italic";
    h4.textContent = "INR RS " + Data[i].price;
    textBox.append(h4);

    let p1 = document.createElement("p");
    p1.textContent = `color : ${Data[i].color}`;
    textBox.append(p1);

    let p2 = document.createElement("p");
    if (Math.floor(Data[i].rating.rate) < 6) {
      p2.style.color = "red";
    } else {
      p2.style.color = "green";
    }
    p2.textContent = `Rating : ${Data[i].rating.rate} date : ${Data[i].date}`;
    textBox.append(p2);
  }
}

// function addToCart(item) {
//   var prodInfo = JSON.parse(localStorage.getItem("ebay-product")) || [];
//   var isFound = false;
//   prodInfo.forEach((element) => {
//     if (element.id == item.id) {
//       isFound = true;
//     }
//   });
//   if (!isFound) {
//     item.quantity = 1;
//     prodInfo.push(item);
//     alert(item.type + " added to cart");
//     localStorage.setItem("ebay-product", JSON.stringify(prodInfo));
//   } else {
//     alert("This item is already present in your cart");
//   }
// }

// By search in navbar by product name or color name

const SEARCH_API ='http://127.0.0.1:5000/api/products/'

let search_div = document.getElementById("grid-item"); 
let btn = document.querySelector('#btn-search');
btn.addEventListener('click', searchByProductName)

//searchByProductName(SEARCH_API);

async function searchByProductName() {

  let searchTerm = document.getElementById("search").target.value ;


  if(searchTerm && searchTerm !== "") {
   try{
 
     let res = await fetch(url);
      Data = await res.json();
     console.log(Data);
     // searchProducts()
     
     }catch(err){
       console.log("err:", err)
     }
 
   search.value = ''
  } else {
   window.location.reload()
  }
}