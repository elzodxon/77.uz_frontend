export const dataList = [
  { text: 'Доска объявлений', link: '#' },
  { text: 'Условия пользования', link: '#' },
  { text: '+998 88 500 50 00', link: 'tel:+998885005000' },
]

export function generateListItem(item) {
  return `
        <li class="footer-info__item">
          <a href="${item.link}" class="footer-info__link">
            <img src="../../assets/img/footer/symbol.svg" alt="" />
            ${item.text}
          </a>
        </li>
      `
}
