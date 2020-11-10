let cart = null;

module.exports = class Cart {
  static save(product) {
    if (cart === null) {
      cart = { products: [], totalPrice: 0 };
    }
    const exisitingProductIndex = cart.products.findIndex(
      (e) => e.id == product.id
    );
    console.log(exisitingProductIndex);
    if (exisitingProductIndex >= 0) {
      const exisitingProduct = cart.products[exisitingProductIndex];
      exisitingProduct.qty += 1;

      //cart.products[exisitingProductIndex]=exisitingProduct;
    } else {
      product.qty = 1;
      cart.products.push(product);
    }
    cart.totalPrice += Number(product.product_price);
  }
  static getCart() {
    return cart;
  }
  static delete(id){
    const isExisting=cart.products.findIndex(e=>e.id==id);
    if(isExisting>=0){
      const delProduct=cart.products[isExisting];
      cart.totalPrice-=delProduct.product_price * delProduct.qty;
      cart.products.splice(isExisting,1)
    }
  }
};
