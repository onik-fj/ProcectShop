// const cardProducts = document.querySelector('.products-wrapper');
// function createCardsRestaurants(restaurant){

//   const { image, name, description, price, simplePrice } = restaurant;

//   const cardProduct = document.createElement('div');
//   cardProduct.className = 'product';
//   cardProduct.info = { image, name, description, price, simplePrice };

//   card = `<div class="img">
//             <img src="${image}" alt="">
//           </div>
//           <a href="./card.html" class="title">${name}</a>
//           <p class="description">${description}</p>
//           <div class="price">
//             <b>${price}₽/шт</b> <span>За ${simplePrice}₽.</span>
//             <a href="" class="to-cart">В корзину</a>
//           </div>`;
//   cardProduct.insertAdjacentHTML('beforeend', card);
//   cardProducts.insertAdjacentElement('beforeend',cardProduct);
// }
// function init(){
//   getData('baseCards.json').then(function(data){
//     data.forEach(createCardsRestaurants);
//   });
// }
// init();