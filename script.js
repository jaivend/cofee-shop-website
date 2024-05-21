let Navbar = document.querySelector('.navbar');


document.querySelector('#bars-btn').onclick = () =>{
    Navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    CartItem.classList.remove('active');
}


let SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    SearchForm.classList.toggle('active');
    Navbar.classList.remove('active');
    CartItem.classList.remove('active');
}

let CartItem = document.querySelector('.items');

document.querySelector('#cart-btn').onclick = () =>{
    CartItem.classList.toggle('active');
    Navbar.classList.remove('active');
    SearchForm.classList.remove('active');
}

function triggerBtnClick()
{
    document.getElementById('btn').click();
    alert('please go to the menu option')
}

function alertt()
{
    document.getElementById('btnn').click();
    alert('your order is added to cart')
}

function alerttt()
{
    document.getElementById('btnnn').click();
    
    alert("orderd successfully ");
    
    

}

function alert4()
{
    document.getElementById('btn4').click();
    alert('thankyou , we will  call you ')
    

}


document.getElementById("generateBUtton").addEventListener("click", function() {
    var min = 1; // Minimum value
    var max = 100; // Maximum value
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(" ordered sucessfully your oreder no is: " + randomNumber);
  });

  document.getElementById("e").addEventListener("click", function() {
    var min = 1; // Minimum value
    var max = 100; // Maximum value
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(" ordered sucessfully your oreder no is: " + randomNumber);
  });

  document.getElementById("d").addEventListener("click", function() {
    var min = 1; // Minimum value
    var max = 100; // Maximum value
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(" ordered sucessfully your oreder no is: " + randomNumber);
  });

  document.getElementById("c").addEventListener("click", function() {
    var min = 1; // Minimum value
    var max = 100; // Maximum value
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(" ordered sucessfully your oreder no is: " + randomNumber);
  });

  document.getElementById("b").addEventListener("click", function() {
    var min = 1; // Minimum value
    var max = 100; // Maximum value
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(" ordered sucessfully your oreder no is: " + randomNumber);
  });

  document.getElementById("a").addEventListener("click", function() {
    var min = 1; // Minimum value
    var max = 100; // Maximum value
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(" ordered sucessfully your oreder no is: " + randomNumber);
  });

 






let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'ARABICA COFFEE',
        image: 'image/p1.PNG',
        price: 1200
    },
    {
        id: 2,
        name: 'BOTERO COFFEE',
        image: 'image/p2.PNG',
        price: 1200
    },
    {
        id: 3,
        name: 'PATCH ROAST',
        image: 'p3.PNG',
        price: 2200
    },
    {
        id: 4,
        name: 'BARISTA COFFEE',
        image: 'p4.PNG',
        price: 1250
    },
    {
        id: 5,
        name: 'SCARED GROUNDS',
        image: 'p5.PNG',
        price: 3200
    },
    {
        id: 6,
        name: 'PRESTO COFFEE',
        image: 'p6.PNG',
        price: 2000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}






document.getElementById("btn5").addEventListener("click", function() {
    var min = 1; // Minimum value
    var max = 10000; // Maximum value
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(" you are redirecting to the payment page , your order id. is  " + randomNumber );
  });

