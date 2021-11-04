var cartAmount = 0;
var addToCartCont = document.getElementById('cart--drawer');
var miniCartCont = document.getElementById('mini-cart--drawer');
var addToCartText = document.getElementById('addToCart');
var productPrice = 22.81;
var cartPrice = document.getElementById('cart__drawer_price');
var quantityText = document.getElementById('cart__quantity');
var cartCounter = document.getElementById('nav__cart_counter');

function addToCart() {
  addToCartText.innerHTML = '<div class="block__cart_loader_cont"><div class="block__cart_loader"></div></div>';
    openCartDrawer();
    updateCartCounter();
  }

  function openCartDrawer() {
    setTimeout (function() {  
      addToCartCont.classList.add('drawer--active');
      addToCartText.innerHTML = 'ADDED';
      document.getElementById("cart--drawer-confirmation").style.display = "block";
    },
    1000);
  }
  
  function updateCartCounter() {  
    cartAmount++;
    updateQuantity();
  }

  function decreaseCartCounter() {
    cartAmount--;
    updateQuantity();

    if (cartAmount == 0) {
      setTimeout (function() {  
        closeDrawer();
      },
      1000);
    }
  }

function openCart() {
  addToCartCont.classList.add('drawer--active');
  document.getElementById("cart--drawer-confirmation").style.display = "none";
}
 
function updateQuantity() {
  cartCounter.innerHTML = cartAmount;
  quantityText.innerHTML = "Quantity: "+cartAmount;
  cartPriceTotal = productPrice * cartAmount;
  cartPrice.innerHTML = "Total: £"+cartPriceTotal.toFixed(2);
}  

function closeDrawer() {
    addToCartCont.classList.remove('drawer--active');
    addToCartText.innerHTML = 'ADD TO CART';
} 



     