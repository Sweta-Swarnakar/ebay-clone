function navbar()
{
    return `   <div id="header">
    <div id="main">
        <div>
            <div>Hi! <span class="decoration"><a href="signin.html"> Sign in</a></span> or <span class="decoration"> <a href="signup.html">register</a> </span></div>
            <div>Daily Deals</div>
            <div>Help & Contact</div>
        </div>
        <div class="setCenter" id="right">
            <div>Sell</div>
            <div>
                <ul>
                    <li>
                        <a href="#">Watchlist <span><select name="" id="" class="borderRemove"></select></span></a>
                        <ul>
                            <h2 id="watching">Please <span>
                                    <li><a href="signin.html">Sign in</a></li>
                                </span> to view items you are watching</h2>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">My eBay <span><select name="" id="" class="borderRemove"></select></span></a>
                        <ul>
                            <li class="blockList"><a href="#">Summary</a></li>
                            <li class="blockList"><a href="#">Recently Viewed</a></li>
                            <li class="blockList"><a href="#">Bids/Ofers</a></li>
                            <li class="blockList"><a href="#">Watchlist</a></li>
                            <li class="blockList"><a href="#">Purchase History</a></li>
                            <li class="blockList"><a href="#">Buy Again</a></li>
                            <li class="blockList"><a href="#">Selling</a></li>
                            <li class="blockList"><a href="#">Saved Searches</a></li>
                            <li class="blockList"><a href="#">Saved Sellers</a></li>
                            <li class="blockList"><a href="#">Messages</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div><i class="far fa-bell"></i></div>
            <div>
            <a href="cart.html"><i class="fas fa-shopping-cart"><sup id="cartSup"></sup></i></a>
                
            </div>
        </div>
    </div>
    <div class="setCenter" id="main2">
        <div><img id="ebay" src="https://cdn-icons-png.flaticon.com/512/888/888848.png" alt=""></div>
        <div>
            <ul>
                <li>
                   <div id="margin" class="setCenter z lightBlack">Shop by<br>Category <span><select name=""id="" class="borderRemove"></select></span></div>
                    <ul>
                        <li class="blockList2"><a href="#">Collectibles & art</a></li>
                        <li class="blockList2"><a href="#">Home & garden</a></li>
                        <li class="blockList2"><a href="#">Sporting goods</a></li>
                        <li class="blockList2"><a href="#">Electronics</a></li>
                        <li class="blockList2"><a href="#">Auto Parts & Accessories</a></li>
                        <li class="blockList2"><a href="#">Toys & hobbies</a></li>
                        <li class="blockList2"><a href="#">Fashion</a></li>
                        <li class="blockList2"><a href="#">Musical instruments & gear</a></li>
                        <li class="blockList2"><a href="#">Other Categories</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="height" id="center">
            <div class="setCenter lightBlack"><i class="fas fa-search"></i></div>
            <div><input id="search" type="text" placeholder=" Search for anything"></div>
            <div class="setCenter"><select style="border: 0;" class="lightBlack selectStyle font12" name="" id="" class="borderRemove">
                    <option>All Category</option>
                    <option>Antiques</option>
                    <option>Art</option>
                    <option>Baby</option>
                    <option>Books</option>
                    <option>Business & Industrial</option>
                    <option>Cameras & Photo</option>
                    <option>Cell Phones & Accessories</option>
                    <option>Coins & Paper Money</option>
                    <option>Collectibles</option>
                    <option>Computers/Tablets & Networking</option>
                    <option>Consumer Electronics</option>
                    <option>Crafts</option>
                    <option>Dolls & Bears</option>
                    <option>DVDs & Movies</option>
                    <option>eBay Motors</option>
                    <option>Entertainment & Memorabillia</option>
                    <option>Gift Cards & Coupons</option>
                    <option>Health & Beauty</option>
                    <option>Home & Garden</option>
                    <option>Jewelry & Watches</option>
                    <option>Music</option>
                    <option>Music</option>
                    <option>Musical Instruments & Gear</option>
                    <option>Pet Supplies</option>
                    <option>Pottery & Glass</option>
                    <option>Real State</option>
                    <option>Specialty Services</option>
                    <option>Sporting Goods</option>
                    <option>Sports Mem, Cards & Fan Shop</option>
                    <option>Stamps</option>
                    <option>Tickets & Experiences</option>
                    <option>Toys & Hobbies</option>
                    <option>Travel</option>
                    <option>Video Games & Consoles</option>
                    <option>Everything Else</option>
                </select></div>
        </div>
        <div class="height"><button>Search</button></div>
        <div id="advance">
            <a class="lightBlack font13" href="#">Advanced</a>
        </div>
    </div>
    <div id="headTag">
        <div><a href="">Home</a></div>
        <div><i class="fas fa-heart"></i><span> <a href="">Saved</a></span></div>
        <div><a href="product.html">Electronics</a></div>
        <div><a href="">Fashion</a></div>
        <div><a href="">Health & Beauty</a></div>
        <div><a href="">Home & Garden</a></div>
        <div><a href="">Sports</a></div>
        <div><a href="">Collectibles and art</a></div>
        <div><a href="">Industrial equipment</a></div>
        <div><a href="">Motors</a></div>
        <div><a href="">Deals</a></div>
        <div><a href="">Sell</a></div>
    </div>
</div>        
`
}

export default navbar;