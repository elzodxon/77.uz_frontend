const favoriteProductNumber = document.getElementById('favorite-product__number')

const likedProducts = JSON.parse(localStorage.getItem('favoritesProduct'))
console.log(likedProducts)
favoriteProductNumber.innerHTML= `${likedProducts?.length}`
