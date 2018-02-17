'use strict';

Product.all = [];
Product.container = document.getElementById('image_container');
Product.justViewed = [];
Product.pics = [document.getElementById('pic1'), document.getElementById('pic2'), document.getElementById('pic3')];
Product.tally = document.getElementById('tally');
Product.totalClicks = 1;


function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
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

function randomIndexGen(){
  return Math.floor(Math.random() * Product.all.length);
}

function displayRandomProduct(){
  var currentSelection = [];
  currentSelection[0] = randomIndexGen();
  while(Product.justViewed.indexOf(currentSelection[0]) !== -1){
    console.error('Repeat. Re-run.');
    currentSelection[0] = randomIndexGen();
  }
  currentSelection[1] = randomIndexGen();
  while(currentSelection[0] === currentSelection[1] || Product.justViewed.indexOf(currentSelection[1]) !== -1){
    console.error('Repeat. Re-run.');
    currentSelection[1] = randomIndexGen();
  }
  currentSelection[2] = randomIndexGen();
  while(currentSelection[0] === currentSelection[2]|| currentSelection[1] === currentSelection[2] || Product.justViewed.indexOf(currentSelection[2]) !== -1){
    console.error('Repeat. Re-run.');
    currentSelection[2] = randomIndexGen();
  }

  for(var i = 0; i < 3; i++){
    Product.pics[i].src = Product.all[currentSelection[i]].filepath;
    Product.pics[i].id = Product.all[currentSelection[i]].name;
    Product.all[currentSelection[i]].views += 1;
    Product.justViewed[i] =
    currentSelection[i];
  }
}

function handleClick(event){
  console.log(Product.totalClicks, 'total clicks');
  if(Product.totalClicks === 25){
    Product.container.removeEventListener('click', handleClick);
    displayChart();
  }
  if(event.target.id === 'image-container'){
    return alert('Please click on an image.');
  }
  Product.totalClicks += 1;
  for(var i = 0; i < Product.all.length; i++){
    if(event.target.id === Product.all[i].name){
      Product.all[i].votes +=1;
      console.log(event.target.id + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views.');
    }
  }
  displayRandomProduct();
}

// function showTally(){
//   for(var i = 0; i < Product.all.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = Product.all[i].name + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views.';
//     Product.tally.appendChild(liEl);
//   }
// }

Product.container.addEventListener('click', handleClick);
displayRandomProduct();

function displayChart(){
  var data = [];
  // var labelName = [];
  var labelColors = 'red';
  for(var i = 0; i < Product.all.length; i++){
    data.push(Product.all[i].votes);
  }

  // for(var j=0; j < Product.all.length; j++){
  //   var names = data[j].Product.name;
  //   labelName.push(names);
  // }
  //this is the name for each product
  // var labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

  var ctx = document.getElementById('chart').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
      datasets: [{
        label: '# of Votes',
        data: data,
        backgroundColor: labelColors
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
