var data = JSON.parse(localStorage.getItem('cartCheckOut'));
    console.log(data)
    // function clickimg(smallImg){
    //     var fullImg = document.getElementById("image-box") ;  //change small image path to main image
    //     fullImg.src = smallImg.src
    // }

    var img = document.getElementById('mainImage');
    img.src=data.imageUrl;

    var img = document.getElementById('mainImage1');
    img.src=data.imageUrl;
    var img = document.getElementById('mainImage2');
    img.src=data.imageUrl;
    var img = document.getElementById('mainImage3');
    img.src=data.imageUrl;
    var img = document.getElementById('mainImage4');
    img.src=data.imageUrl;
    // var img = document.getElementById('mainImage5');
    // img.src=data.imageUrl;




    


    var title = document.getElementById('checkOutTitle');
    title.textContent=data.title;

    var rateCount = document.getElementById('checkOutRatingCount');
    rateCount.textContent=data.rating.count;

    var des = document.getElementById('checkOutDes');
    des.textContent=data.description;

    var price = document.getElementById('checkOutPrice');
    price.textContent=`INR  Rs ${data.price}`;

    var price1 = document.getElementById('checkOutPrice1');
    price1.textContent=`INR  Rs ${Number(data.price)+500}`;
    
    var color = document.getElementById('checkOutColor');
    color.textContent=data.color;

    var type = document.getElementById('checkOutSubCategory');
    type.textContent=data.types.subCategory;

    var rating = document.getElementById('checkOutRating');
    rating.textContent=data.rating.rate;
    if(data.rating.rate<5){
        rating.style.color='red';
    }
    else{
        rating.style.color='green';
    }

    var category = document.getElementById('checkOutCategory');
    category.textContent=data.types.category;

    var date = document.getElementById('checkOutDate');
    date.textContent=data.date;
    

    var cartItems = JSON.parse(localStorage.getItem('ebayCart')) || [];
function addToCart(){
    
    // localStorage.setItem('cartCheckOut',JSON.stringify(data[i]));
            // window.location.href='productDetails.html';
            
            let flag =true;
            for(let j=0;j<cartItems.length;j++){
                if(data.id==cartItems[j].id){
                    alert('item is already available')
                    let ssp= document.getElementById("cartSup")
                    ssp.textContent=cartItems.length;
                    flag=false;
                    break;
                }
            //  console.log('cartItem with ',j,cartItems[j].id);
            }
            if(flag){
                alert('added successfully !')
                cartItems.push(data)
                localStorage.setItem('ebayCart',JSON.stringify(cartItems));
                let ssp= document.getElementById("cartSup")
                ssp.textContent=cartItems.length;
                window.location.href='cart.html'
            }
    
}