//-----------------------------------array-----------------------------------//

const flowers = [{
        name: "Rose",
        image: "./images/rose.jpg",
        description: "long stem, deep pink",
        symbolism: "gentleness, admiration, gratitude.",
        price: 3.50,
        qtty: 1,
    },
    {
        name: "Buttercup",
        image: "./images/ranunkeln.jpg",
        description: "medium-lenght stem, purple",
        symbolism: "playfulness, childishness, charm, and humility.",
        price: 2.50,
        qtty: 1,
    },
    {
        name: "Peony",
        image: "./images/peonies.jpg",
        description: "long stem, pale pink",
        symbolism: "bashfulness, good luck, compassion.",
        price: 4.20,
        qtty: 1,
    },
    {
        name: "Tulip",
        image: "./images/tulips.jpg",
        description: "medium-length stem, pink",
        symbolism: "affection, caring, good wishes, and love.",
        price: 2.30,
        qtty: 1,
    },

    {
        name: "Tulip",
        image: "./images/tulips_striped.jpg",
        description: "long stem, white, magenta-striped",
        symbolism: "a lover’s beautiful eyes",
        price: 4.00,
        qtty: 1,
    },

    {
        name: "Sunflower",
        image: "./images/sunflower.jpg",
        description: "long stem",
        symbolism: "loyalty, adoration",
        price: 1.50,
        qtty: 1,
    },
    {
        name: "Begonia",
        image: "./images/begonia.jpg",
        description: "10 cm diameter-vase, red",
        symbolism: "caution and consideration, good communication",
        price: 8.50,
        qtty: 1,
    },
    {
        name: "Bouquet romantic",
        image: "./images/bouquet1.jpg",
        description: "composition of white and pink roses, yellow carnations, white daisies",
        symbolism: "A gift that leaves a lasting impression.",
        price: 35.99,
        qtty: 1,
    },
    {
        name: "Bouquet modern",
        image: "./images/bouquet2.jpg",
        description: "composition of thea and white roses, leaves and berries",
        symbolism: "modern composition for any occasion.",
        price: 45.99,
        qtty: 1,
    }
];

//-----------------------------------array-----------------------------------//


//-----------------------------------cards-----------------------------------//
let plusBtns = document.getElementsByClassName("plus");
let minusBtns = document.getElementsByClassName("minus");
let deleteBtns = document.getElementsByClassName("delete");

for (let val in flowers) {
    document.getElementById("result").innerHTML += `<div>
<div class="card shadow p-2 mb-5 bg-body-tertiary rounded h-90 mx-auto" style="width: 19rem;">
<h5 class="card-name text-center"> <b>${flowers[val].name}</b></h5>
<img src="${flowers[val].image}" class="img-thumbnail mt-2" alt="${flowers[val].name}" style="height:16rem">
<div class="card-body">

  <h5 class="card-price text-center"><b>Price: </b> € ${flowers[val].price.toFixed(2)} </h5>
  <hr>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button type="button" class="btn btn-outline-dark me-md-2 " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="${val}">Details</button>
<button type="button" class="btn btn-dark addToCart">Add to cart</button>
</div>
 </div>
</div>
</div>
</div>`;
}

//-----------------------------------cards-----------------------------------//

//-----------------------Modal displays card details------------------------//
const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
        // Extract info from data-bs-* attributes
    const index = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-header')
    const modalBody = exampleModal.querySelector('.modal-body')
    const modalText = exampleModal.querySelector('.modal-text')
    const modalPrice = exampleModal.querySelector('.modal-price')


    modalTitle.textContent = `${flowers[index].name}`
    modalBody.innerHTML = `<img src="${flowers[index].image}" class="img-thumbnail w-100" style="height:25rem;" alt="${flowers[index].name}">`
    modalText.innerHTML = `<b>Product description:</b> ${flowers[index].description}. <br> <b>Symbolism: </b>${flowers[index].symbolism}`
    modalPrice.innerHTML = `<b>Price:</b> ${flowers[index].price.toFixed(2)} €`
        // modalBody.innerHTML = `${flowers[index].description}`
})

//-----------------------Modal displays card details------------------------//

//---------------------------add to Cart function--------------------------//
let cart = []; //empty array
//links the button to the cart
let btns = document.getElementsByClassName("addToCart");
// console.log(btns)
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        // console.log(i);
        addToCart(flowers[i]); // a = products[i]  Here we added a function. When clicking the button "Add to cart", the function (called here but declared below) will push to the cart the item corresponding to a specific index value.
        total();
    })
}

function addToCart(obj) { //  obj is a general parameter. "if find" helps to search for a specific element in the cart. If it's already there, it won't be added again but just the displayed quantity will change. The find function works only on arrays.
    if (cart.find(function(val) { return val.name == obj.name })) { // () => 
        obj.qtty++;
    } else {
        cart.push(obj); //this function pushes items to the cart
    }
    // console.table(cart); //shows the data in a table in the console
    createCartInHTML();
    countItems() //function below
    display() //function below
}

//---------------------------add to Cart function--------------------------//


//-----------------------------------cart---------------------------------//
// shopping cart is displayed only when items are added to it
function createCartInHTML() {
    document.getElementById("basket").innerHTML = `Shopping cart`;
    document.getElementById("summary").innerHTML = `Summary <hr>`;
    document.getElementById("form").innerHTML = `
<form id="form">
<label for="name">Name:</lable><br>
            <input type="text" id="name" name="name" class="form-control">
            <label for="address">Address:</lable>
            <input type="text" id="address" name="address" class="form-control">
            <label for="email">email:</lable>
            <input type="text" id="email" name="email" placeholder="example@gmail.com" class="form-control"><br> 
            <input type="submit" value="Buy now" id="button" class="btn btn-outline-dark" ></input>
           
            </form>
            `;


    document.getElementById("payment").innerHTML = `
<form>
<label for="payment methods"> Payment Method:</label>
<select id="methods" name="methods" class="form-select">
<option value="visa" >VISA</option>
<option value="mastercard">MASTERCARD</option>
<option value="PayPal">PayPal</option>
<option value="Klarna">Klarna</option>
</form>
`
    document.getElementById("delivery").innerHTML =
        `<form>
<label for="shipping"> Shipping:</label>
<select id="shipping" name="shipping" class="form-select" mb-0 pb-0>
<option value="express">Express-Delivery- €5.00</option>
</form>`;

    document.getElementById("code").innerHTML = `
<form onsubmit="">
<label style="width:50px;">Coupon:</label><br>
<input type="text" name="coupon" id="in" class="coupon" title="Enter coupon" >
<span id="usernameError"></span>
<input type="button" value="Apply" onClick="validate(coupon)" id="btn-code" /></form>

<span id="message"></span>
<span id="err"></span>`


    document.getElementById("back").innerHTML = `<a href="./index.html"><i class="bi bi-arrow-left-short"></i> Back to shop</a>`

    document.getElementById("cart").innerHTML = "";
    for (let val of cart) {
        // 

        document.getElementById("cart").innerHTML +=
            `<hr> 
<div class="d-flex justify-content-evenly align-items-center text-start flex-direction-row" >
<p class="img img-fluid align-items-center mt-3 id="img"><img src="${val.image}" style="border-radius:10%;width:8vw; height:8vh;" id="img"
></p>
<p class="name" style="text-align:left; font-size:1rem; width:10%;" > ${val.name} </p>
<p class="price" style="text-align:left; font-size:1rem;;width:12%;">€ ${val.price.toFixed(2)} </p>
<div class="quantity">
<p class="plus" style="text-align:left;"><i class="fa-solid fa-plus"></i></p>
<div class="qtty align-items-center text-center">${val.qtty}</div>
<p class="minus" style="text-align:left; "><i class="fa-solid fa-minus"></i></p></div>
<div class="delete align-items-left text-center" style="color:black;"><i class="bi bi-x-circle"></i></div>
<hr>
`;

        //EventListener added to the "Apply" button. 
        //If the coupon is valid, it will call the "total" function to update the total price.

        document.getElementById('btn-code').addEventListener('click', function() {
            let couponCode = document.getElementById('in').value;
            if (validate(couponCode)) {
                total();
            }
        });

    }


    //this EventListener increases the amounts of item in the cart

    for (let i = 0; i < plusBtns.length; i++) {
        plusBtns[i].addEventListener("click", function() {
            cart[i].qtty++;
            document.getElementsByClassName("qtty")[i].innerHTML = cart[i].qtty;
            total();
            countItems() //function below
        })

        //this EventListener reduces the amounts of item in the cart
        minusBtns[i].addEventListener("click", function() {
            if (cart[i].qtty == 1) {
                cart.splice(i, 1);
                createCartInHTML();
                total();
                // -----
            } else {
                cart[i].qtty--;
                document.getElementsByClassName("qtty")[i].innerHTML = cart[i].qtty;
                total();
            }
            countItems() //function below
        })

        //this EventListener removes the item from the cart
        deleteBtns[i].addEventListener("click", function() {
            cart[i].qtty = 1;
            cart.splice(i, 1);

            countItems() //function below
            createCartInHTML();
            total();
        })
    }

}

//Form validation
// Get the form element and add a submit event listener
const myForm = document.getElementById("form");
myForm.addEventListener("submit", validateForm);

function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    // Check if any field is empty
    if (name === "" || email === "" || address === "") {
        // Show an error message
        Swal.fire({
            posiiton: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Please fill out all fields",
            timer: 1500
        });
    } else {
        // Show a success message and submit the form
        Swal.fire({
            posiiton: "top-end",
            icon: "success",
            title: "Thank you for your order",
            text: "Your order has been submitted.",
            timer: 1500
        }).then(() => myForm.submit());
    }
}



//coupon validation
function validate(coupon) {
    var myRe = "LUCKY100";
    var coupon = myRe.trim();
    var input = document.getElementById('in').value;

    if (input.toUpperCase() == coupon.toUpperCase()) {
        document.getElementById('message').innerHTML = "Coupon applied!";
        document.getElementById('err').innerHTML = "";
        return true;
    } else {

        // check if the coupon is already applied to the total
        var discountedTotal = document.getElementById('subtotal').textContent;
        if (discountedTotal.indexOf('- €20') >= 0) {
            document.getElementById('err').innerHTML = "Coupon already applied!";
        } else {
            document.getElementById('err').innerHTML = "Invalid coupon";
        }
        document.getElementById('message').innerHTML = "";
        return false;

    }
}
total()


//this function displays the total price and a discount above 69€, if applicable
//a €10 discount is calculated if the coupon "LUCKY100" is applied
function total() {
    let total = 0;
    let discountedTotal = 0;
    let discount = 0;
    let shipping = 5;
    let myRe = 'LUCKY100';
    let input = document.getElementById('in').value;
    let coupon = input.toUpperCase() === myRe.toUpperCase();
    let couponApplied = false;

    for (let val of cart) {
        total = total + (val.price * val.qtty) + shipping;
    }


    document.getElementById("total").innerHTML = `<b>TOTAL PRICE</b> <small style=" font-size: 1rem;">(including shipping)</small>: &nbsp&nbsp&nbsp<b> €${total.toFixed(2)}</b>`;

    // checks if the coupon is valid and the order value is above 100
    if (coupon && total >= 100 && !couponApplied) {
        discount = 20; // €20 discount

        discountedTotal = (total - discount);
        document.getElementById("discount").innerHTML = `- €20 on orders above €100`;
        document.getElementById("subtotal").innerHTML = `<b>DISCOUNTED TOTAL: &nbsp&nbsp&nbsp€ ${discountedTotal.toFixed(2)}</b> `

    } else if (coupon && total >= 69 && total <= 99.99 && !couponApplied) {
        discount = total - (total * 0.9);
        discountedTotal = Math.floor(total - [(total * 10) / 100]);
        document.getElementById("discount").innerHTML = `DISCOUNT &nbsp(10% on orders above € 69): &nbsp&nbsp&nbsp - € ${discount.toFixed(2)} `;
        document.getElementById("subtotal").innerHTML = `<b>DISCOUNTED TOTAL: &nbsp&nbsp&nbsp€ ${discountedTotal.toFixed(2)}</b> `

    } else if (total == 0 && !couponApplied) {

        document.getElementById("basket").style.display = "none";
        document.getElementById("check-out").style.display = "none";
        document.getElementById("summary").style.display = "none";
        document.getElementById("form").style.display = "none";
        document.getElementById("payment").style.display = "none";
        document.getElementById("delivery").style.display = "none";
        document.getElementById("order").style.display = "none";
        document.getElementById("discount").style.display = "none";
        document.getElementById("subtotal").style.display = "none";
        document.getElementById("back").style.display = "none";

    } else { //no discounts and no message below 69€
        discountedTotal = total;
        discount = 0;
        document.getElementById("discount").innerHTML = "";
        document.getElementById("subtotal").innerHTML = `<b>TOTAL: &nbsp&nbsp&nbsp€ ${discountedTotal.toFixed(2)}</b>`;

    }

}


//this function displays the count of total items in the cart
function countItems() {
    let totalItems = 0;
    for (let i in cart) {
        totalItems += cart[i].qtty;
    }
    document.getElementById("itemTotal").innerHTML = `<b>${totalItems} ITEM(S)</b>`;
    return totalItems
}

//this function displays part of the cart content ONLY when items are added to the cart.
function display() {
    if (cart.length == 0) {

        document.getElementById("basket").style.display = "none";

    } else {
        document.getElementById("background").style.backgroundColor = "black";
        document.getElementById("basket").style.display = "inline";
        document.getElementById("check-out").style.backgroundColor = "whitesmoke";
        document.getElementById("check-out").style.borderRadius = "1em";
        document.getElementById("check-out").style.width = "23rem";
        document.getElementById("check-out").style.margin = "auto";

    }
}
display()

//-----------------------------------cart---------------------------------//


//----------------------scroll-to-top button element----------------------//
const button = document.getElementById("scrollToTop");

// hides the button initially
button.style.display = "none";

// shows/hides the button as the user scrolls
window.onscroll = function() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 350,
        behavior: 'smooth'
    });

}
//----------------------scroll-to-top button element----------------------//