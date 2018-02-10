'use strict';

var allProducts = [];

function Product(name, filepath, showCount, clickCount) {
  this.name = name;
  this.filepath = filepath;
  this.showCount = showCount;
  this.clickCount = clickCount;
  allProducts.push(this);
}

var bag = new Product('bag', 'img/bag.jpg');
var banana = new Product('banana', 'img/banana.jpg');
var bathroom = new Product('bathroom', 'img/bathroom.jpg');
var boots = new Product('boots', 'img/boots.jpg');
var breakfast = new Product('breakfast', 'img/breakfast.jpg');
var bugglegum = new Product('bubblegum', 'img/bubblegum.jpg');
var chair = new Product('chair', 'img/chair.jpg');
var cthulhu = new Product('cthulhu', 'img/cthulhu.jpg');
var dogduck = new Product('dog-duck', 'img/dog-duck.jpg');
var dragon = new Product('dragon', 'img/dragon.jpg');
var pen = new Product('pen', 'img/pen.jpg');
var petsweep = new Product('pet-sweep', 'img/pet-sweep.jpg');
var tauntaun = new Product('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Product('unicorn', 'img/unicorn.jpg');
var usb = new Product('usb', 'img/usb.gif');
var watercan = new Product('water-can', 'img/water-can.jpg');
var wineglass = new Product('wine-glass', 'img/wine-glass.jpg');

// function randomProduct(){
//   var randomIndex = Math.random() * allProducts.length;
//   var roundRandomIndex = Math.floor(randomIndex);
//   return [allProducts[roundRandomIndex], roundRandomIndex];
// }

// var 



// var choiceCount = 0;

// function getRandThree(){
//   var randomArray = [];
//   for(var i = 0; i < 3; i++){
//     Math.floor(Math.random() * Product.allProducts.length);
//     randomArray.push(Product);
//   }
// }

// getRandThree();

// var imgEl = document.getElementById('product-pic');

function displayRandomProduct() {
  var imgEl1 = document.getElementById('product-pic1');
  imgEl1.addEventListener('click', displayRandomProduct);
  var randomIndex = Math.floor(Math.random() * allProducts.length);
  imgEl1.src = allProducts[randomIndex].filepath;

  var imgEl2 = document.getElementById('product-pic2');
  imgEl2.addEventListener('click', displayRandomProduct);
  randomIndex = Math.floor(Math.random() * allProducts.length);
  imgEl2.src = allProducts[randomIndex].filepath;

  var imgEl3 = document.getElementById('product-pic3');
  imgEl3.addEventListener('click', displayRandomProduct);
  randomIndex = Math.floor(Math.random() * allProducts.length);
  imgEl3.src = allProducts[randomIndex].filepath;
}
displayRandomProduct();

// imgEl.addEventListener('click', displayRandomProduct);
// do {
//   displayRandomProduct();
//   choiceCount += 1;
// }
// while (choiceCount < 25);

//   var imgEl2 = document.createElement('img')
// }