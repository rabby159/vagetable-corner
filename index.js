// items count 
let itemCount = 0;
let incrementValue = 1;

function productCount(target){

    //total items count
    itemCount += incrementValue;

    document.getElementById('items').innerText = itemCount;
    document.getElementById('small-count').innerText = itemCount;

    // get product name  in add cart
    const itemName = target.parentNode.parentNode.children[0].innerText;
    const productName =  document.getElementById('product-name');
    
    const li = document.createElement('li');
    li.innerText = itemName;
    productName.appendChild(li);
    

}


