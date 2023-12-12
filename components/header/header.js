const favoriteProductNumber = document.getElementById(
  'favorite-product__number',
)

const likedProducts = JSON.parse(localStorage.getItem('favoritesProduct'))
console.log(likedProducts)
if (likedProducts === null) {
  favoriteProductNumber.innerHTML = `0`
} else {
  favoriteProductNumber.innerHTML = `${likedProducts?.length}`
}
