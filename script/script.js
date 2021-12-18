let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 150;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 150;
})
// updated by shahnawaz

async function allProducts(){
    let res = await fetch(`http://127.0.0.1:5000/api/products/`);
    let data = await res.json()
    console.log(data);
    showDeta(data)
    
}
allProducts()


var gridBox = document.querySelector('.grid-box');
function showDeta(data){
    for(let i=0; i<data.length;i++){
        let largeBox = document.createElement('div');
        largeBox.setAttribute('class','largee-box');
        gridBox.append(largeBox);
    
            let imageBox = document.createElement('div');
            imageBox.setAttribute('class','image-box');
            largeBox.append(imageBox);
    
                var img = document.createElement('img');
                img.setAttribute('src',data[i].imageUrl);
                largeBox.append(img);
    
            let textBox = document.createElement('div');
            textBox.setAttribute('class','textbox');
            largeBox.append(textBox);
    
               let p = document.createElement('p');
                p.textContent='SPONSORED'
                textBox.append(p);
    
    
                let strong = document.createElement('strong');
                strong.textContent=data[i].title
                textBox.append(strong);
    
                let h4 = document.createElement('h2');
                h4.style.fontStyle='italic'
                h4.textContent="INR RS " + data[i].price;
                textBox.append(h4);

    
                let p1 = document.createElement('p');
                p1.textContent=`color : ${data[i].color}`
                textBox.append(p1);
    
                let p2 = document.createElement('p');
                if(Math.floor(data[i].rating.rate)<6){
                    p2.style.color='red';
                }
                else{
                    p2.style.color='green';
                }
                p2.textContent=`Rating : ${data[i].rating.rate} date : ${data[i].date}`
                textBox.append(p2);
    
    }


}