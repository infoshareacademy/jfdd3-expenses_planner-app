if (window.localStorage) {

    var productName = $('#product');
    var productPrice = $('#price');

    console.log(productName);
    console.log(productPrice);

    productName.addEventListener('input', function() {
        localStorage.setItem('name', productName.value);
    });

    productPrice.addEventListener('input', function() {
        localStorage.setItem('price', productPrice.value);
    });
}
