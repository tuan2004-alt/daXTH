"use strict";
const getProducts = async () => {
    const response = await fetch('https://product-7ffbf-default-rtdb.firebaseio.com/products.json');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const products = Object.values(data || {});
    return products;
};
const productContainer = document.querySelector('.product-container');
getProducts()
    .then(products => products.forEach(product => {
    const productHTML = `
                <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="box">
            <a href="">
              <div class="img-box">
                <img src="images/${product.image}" alt="">
              </div>
              <div class="detail-box">
                <h6>
                  ${product.name}
                </h6>
                <h6>
                  
                  <span>
    ${product.price}VNĐ
                  </span>
                </h6>
              </div>
            </a>
          </div>
        </div>
      `;
    if (productContainer)
        productContainer.innerHTML += productHTML;
}))
    .catch(error => console.error('Error fetching products:', error));
