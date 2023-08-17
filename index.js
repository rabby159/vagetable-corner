// items count 1st system 
/*
const cartButton =  document.getElementById('cart');
const itemCountElement = document.getElementById('items');
const itemCountSmall = document.getElementById('small-count');

let itemCount = 0;
let incrementValue = 1;

cartButton.addEventListener('click', function(){
    itemCount += incrementValue;

    itemCountElement.textContent = itemCount.toString();
    itemCountSmall.textContent = itemCount.toString();

});
*/

// items count 2st system 
let itemCount = 0;
let incrementValue = 1;

function productCount(target){

    itemCount += incrementValue;

    document.getElementById('items').innerText = itemCount;
    document.getElementById('small-count').innerText = itemCount;

    



}
