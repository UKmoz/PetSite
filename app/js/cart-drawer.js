var cartAmount = 0;
function addToCart() {
  var addToCart = document.getElementById('cart--drawer');
  var cartCounter = document.getElementById('nav__cart_counter');
  var addToCartText = document.getElementById('addToCart');
  var quantityText = document.getElementById('cart__quantity');
  addToCartText.innerHTML = '<div class="block__cart_loader_cont"><div class="block__cart_loader"></div></div>';
    setTimeout (function() {
      
      addToCart.classList.add('drawer--active');
      addToCartText.innerHTML = '<p class="block__product_button button__format">ADDED</p>';
    },
    1000);
    
    cartAmount++;
    cartCounter.innerHTML = cartAmount;
    quantityText.innerHTML = "Quantity: "+cartAmount;
  }

function closeDrawer() {
    var addToCart = document.getElementById('cart--drawer');
    var addToCartText = document.getElementById('addToCart');
    addToCart.classList.remove('drawer--active');
    addToCartText.innerHTML = '<p class="block__product_button button__format">ADD TO CART</p>';
}  



    // $( "#addToCart" ).click(function() {
    //     setTimeout (function() {
    // $(".cart--drawer").addClass("drawer--active")
    //     },
    //     1000);
    // });
    
    // $( "#closeDrawer" ).click(function() {
    //     $(".cart--drawer").removeClass("drawer--active")
    //     });
    