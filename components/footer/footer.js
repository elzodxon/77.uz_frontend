import { footerList, generateListItem } from './footerList';

const ulElement = document.getElementById('footerList');

footerList.forEach((item) => {
  ulElement.innerHTML += generateListItem(item);
});
