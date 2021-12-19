
    var cartItems = JSON.parse(localStorage.getItem('ebayCart'))
    
    sum=0;
    for(let s=0;s<cartItems.length;s++){
        sum+= Number(cartItems[s].price);
    }
//     console.log(sum);
    var cartCount = document.querySelector('.cartItemCount');
    cartCount.textContent=cartItems.length;
    var cartCount1 = document.querySelector('.cartItemCount2');
    cartCount1.textContent=cartItems.length;

    var totalPriceWithoutCod = document.getElementById('totalPriceWithoutCod');
    totalPriceWithoutCod.textContent=`RS ${sum}`
    var ebayTotal = sum+80;
    var totalPriceWithoutCod = document.getElementById('totalPriceWithCod');
    totalPriceWithoutCod.textContent=`RS ${ebayTotal}`
    
    localStorage.setItem('ebayCartTotla',JSON.stringify(ebayTotal))


// appending all cart items
    
    for(let i=0;i<cartItems.length;i++){
        var cartBox1 = document.querySelector('.cartBox1');
        
        var cartSingleItemDetails = document.createElement('div');
        cartSingleItemDetails.setAttribute('class','cartSingleItemDetails')
        cartBox1.append(cartSingleItemDetails);

        var p = document.createElement('p');
        p.setAttribute('class','sellerName');
        p.textContent=`${cartItems[i].types.category} > `;
        cartSingleItemDetails.append(p)

        var a1 = document.createElement('a');
        a1.setAttribute('href','#');
        a1.textContent=cartItems[i].types.subCategory;
        p.append(a1)

        var hr1 = document.createElement('hr');
        cartSingleItemDetails.append(hr1)

        var tbl = document.createElement('table');
        tbl.setAttribute('class','cartSingleItemDetailsTable');
        cartSingleItemDetails.append(tbl)

        var tr1 = document.createElement('tr');
        tbl.append(tr1)

        var td1 = document.createElement('td');
        td1.setAttribute('rowspan','4');
        tr1.append(td1);

        var img = document.createElement('img');
        img.setAttribute('src',cartItems[i].imageUrl);
        img.setAttribute('class','img1')
        td1.append(img);

        var td2 = document.createElement('td');
        td2.setAttribute('rowspan','3');
        td2.setAttribute('colspan','2');
        tr1.append(td2);

        var h4 = document.createElement('h4');
        h4.textContent=cartItems[i].title;
        td2.append(h4);

        var p1 = document.createElement('p');
        p1.setAttribute('id','description');
        p1.textContent=cartItems[i].description;
        td2.append(p1)

        var td3 = document.createElement('td');
        td3.setAttribute('class','c3');
        tr1.append(td3);

        var spn = document.createElement('span');
        spn.textContent='Qty';
        td3.append(spn);

        var slt = document.createElement('select');
        slt.setAttribute('id','slt')
        td3.append(slt);
        // slt.addEventListener('change',function myfun(i){
            
        //     let pdt = document.querySelector('#slt').value;
        //     console.log(pdt)

        // })

        var op1 = document.createElement('option');
        op1.setAttribute('value','1')
        op1.textContent='1';
        slt.append(op1);

        var op2 = document.createElement('option');
        op2.setAttribute('value','2')
        op2.textContent='2';
        slt.append(op2);

        var op3 = document.createElement('option');
        op3.setAttribute('value','3')
        op3.textContent='3';
        slt.append(op3);


        var td4 = document.createElement('td');
        td4.setAttribute('class','cartSingleItemPrice');
        td4.textContent=`INR RS ${cartItems[i].price}`
        tr1.append(td4);

        var tr2 = document.createElement('tr');
        tbl.append(tr2)

        var td5 = document.createElement('td');
        td5.setAttribute('class','c3');
        td5.textContent=`USPS First Class`
        tr2.append(td5);

        var td6 = document.createElement('td');
        td6.textContent=`Free shipping`
        tr2.append(td6);

        var tr3 = document.createElement('tr');
        tbl.append(tr3)

        var td7 = document.createElement('td');
        tr3.append(td7);

        var td8 = document.createElement('td');
        tr3.append(td8);

        var tr4 = document.createElement('tr');
        tbl.append(tr4)

        var td9 = document.createElement('td');
        tr4.append(td9);

        var td11 = document.createElement('td');
        tr4.append(td11);

        var td12 = document.createElement('td');
        td12.setAttribute('class','c3')
        tr4.append(td12);

        var a2 = document.createElement('a');
        a2.setAttribute('href','#');
        a2.textContent=`Save it later`;
        td12.append(a2)


        var td13 = document.createElement('td');
        tr4.append(td13);

        var a3 = document.createElement('a');
        a3.setAttribute('href','#');
        a3.textContent=`Remove`;
        a3.addEventListener('click',function removeItem(){
            // arr= [8,9,3,4,5,1,6,7]
            // arr.splice(1,1)
            // console.log(arr);
            
            cartItems.splice(i,1);
            console.log(cartItems);
            localStorage.removeItem('ebayCart');
            localStorage.setItem('ebayCart',JSON.stringify(cartItems));
            window.location.reload();
        })
        td13.append(a3)
    }

    var cartRemoveAll = document.getElementById('clearCart');
    cartRemoveAll.addEventListener('click',function rem(){
        console.log('ok')
        localStorage.removeItem('ebayCart');
        window.location.reload();
    })
