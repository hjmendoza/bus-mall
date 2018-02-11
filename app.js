'use strict';

var allProducts = [];

function Product(name, filepath, showCount, clickCount) {
  this.name = name;
  this.filepath = filepath;
  this.showCount = showCount;
  this.clickCount = clickCount;
  allProducts.push(this);
}

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');


var threePics = [];

function displayRandomProduct() {

  let currentSelection = {};
  function randomIndexGen () {
    let randInd = Math.floor(Math.random() * allProducts.length);
    while (currentSelection[randInd]) {
      randInd = Math.floor(Math.random() * allProducts.length);
    }
    currentSelection[randInd] = 1;
    return randInd;
  }

  function singleImg(path) {
    let img = document.getElementById(path);
    img.addEventListener('click', displayRandomProduct);
    var randomIndex = randomIndexGen();
    img.src = allProducts[randomIndex].filepath;
    threePics.push(img);
    return img;
  }
  singleImg('product-pic1');
  singleImg('product-pic2');
  singleImg('product-pic3');
}

displayRandomProduct();