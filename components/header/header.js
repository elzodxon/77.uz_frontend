const favoriteProductNumber = document.getElementById('favorite-product__number')

const likedProducts = JSON.parse(localStorage.getItem('rodufavoritesPct'))
favoriteProductNumber.innerHTML= `${likedProducts.length}`
