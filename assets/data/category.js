document.addEventListener("DOMContentLoaded", function () {
   const categoryList = document.getElementById("category-list");

   let jsonData = [
      {
         title: "Товары для животных",
         addsAmount: "4147 объявлений",
         svgImage: `

      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_3777)">
<path d="M31.7498 12.832C31.5239 9.50903 30.1223 6.41577 27.7446 4.03809C25.1406 1.43408 21.6785 0 17.9956 0C17.468 0 17.0405 0.427734 17.0405 0.955322V12.832H31.7498Z" fill="CurrentCOlor"/>
<path d="M6.11938 12.832V12.1118C6.11938 9.97363 4.37988 8.23413 2.2417 8.23413H1.26782C0.740234 8.23413 0.3125 8.66187 0.3125 9.18945C0.3125 9.71704 0.740234 10.1445 1.26782 10.1445H2.2417C3.32642 10.1445 4.20898 11.0271 4.20898 12.1118V12.832H6.11938Z" fill="CurrentCOlor"/>
<path d="M26.5811 19.7722C28.1135 19.7722 29.5332 20.2627 30.6926 21.0942C31.5203 19.7703 31.9109 18.2905 31.7827 16.8782V14.7424H4.2085V16.9233C4.2085 18.2273 4.51318 19.4612 5.0542 20.5583C6.02466 20.0564 7.12549 19.7722 8.2915 19.7722C11.6143 19.7722 14.4084 22.0769 15.1609 25.1716H19.7117C20.4641 22.0769 23.2583 19.7722 26.5811 19.7722Z" fill="CurrentCOlor"/>
<path d="M8.2915 21.6829C5.44702 21.6829 3.13281 23.9968 3.13281 26.8413C3.13281 29.6858 5.44702 32 8.2915 32C11.136 32 13.4502 29.6858 13.4502 26.8413C13.4502 23.9968 11.136 21.6829 8.2915 21.6829ZM8.2915 29.9351C6.58569 29.9351 5.19775 28.5474 5.19775 26.8413C5.19775 25.1355 6.58569 23.7478 8.2915 23.7478C9.99731 23.7478 11.3853 25.1355 11.3853 26.8413C11.3853 28.5474 9.99731 29.9351 8.2915 29.9351Z" fill="CurrentCOlor"/>
<path d="M8.29175 25.6582C7.63916 25.6582 7.1084 26.189 7.1084 26.8413C7.1084 27.4939 7.63916 28.0247 8.29175 28.0247C8.94434 28.0247 9.4751 27.4939 9.4751 26.8413C9.4751 26.189 8.94409 25.6582 8.29175 25.6582Z" fill="CurrentCOlor"/>
<path d="M31.7402 26.8413C31.7402 23.9968 29.426 21.6829 26.5815 21.6829C23.7371 21.6829 21.4229 23.9968 21.4229 26.8413C21.4229 29.6858 23.7371 32 26.5815 32C29.426 32 31.7402 29.6858 31.7402 26.8413ZM26.5815 29.9351C24.8757 29.9351 23.4878 28.5474 23.4878 26.8413C23.4878 25.1355 24.8757 23.7478 26.5815 23.7478C28.2874 23.7478 29.6753 25.1355 29.6753 26.8413C29.6753 28.5474 28.2874 29.9351 26.5815 29.9351Z" fill="CurrentCOlor"/>
<path d="M26.5813 25.6582C25.9287 25.6582 25.3979 26.189 25.3979 26.8413C25.3979 27.4939 25.9287 28.0247 26.5813 28.0247C27.2339 28.0247 27.7646 27.4939 27.7646 26.8413C27.7646 26.189 27.2339 25.6582 26.5813 25.6582Z" fill="CurrentCOlor"/>
</g>
<defs>
<clipPath id="clip0_1_3777">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
      `,
         subcategories: [
            {
               subcategoryTitle: "Смартфоны",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
            {
               subcategoryTitle: "Аксессуары для смартфонов и телефонов",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
         ],
      },
      {
         title: "Для женщин",
         addsAmount: "4147 объявлений",
         svgImage: `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="CurrentColor"/>
</svg>

    `,
         subcategories: [
            {
               subcategoryTitle: "Смартфоны",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
            {
               subcategoryTitle: "Смартфоны",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
            // add more subcategories as needed
         ],
      },
      {
         title: "Товары для животных",
         addsAmount: "4147 объявлений",
         svgImage: `

      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_3777)">
<path d="M31.7498 12.832C31.5239 9.50903 30.1223 6.41577 27.7446 4.03809C25.1406 1.43408 21.6785 0 17.9956 0C17.468 0 17.0405 0.427734 17.0405 0.955322V12.832H31.7498Z" fill="CurrentCOlor"/>
<path d="M6.11938 12.832V12.1118C6.11938 9.97363 4.37988 8.23413 2.2417 8.23413H1.26782C0.740234 8.23413 0.3125 8.66187 0.3125 9.18945C0.3125 9.71704 0.740234 10.1445 1.26782 10.1445H2.2417C3.32642 10.1445 4.20898 11.0271 4.20898 12.1118V12.832H6.11938Z" fill="CurrentCOlor"/>
<path d="M26.5811 19.7722C28.1135 19.7722 29.5332 20.2627 30.6926 21.0942C31.5203 19.7703 31.9109 18.2905 31.7827 16.8782V14.7424H4.2085V16.9233C4.2085 18.2273 4.51318 19.4612 5.0542 20.5583C6.02466 20.0564 7.12549 19.7722 8.2915 19.7722C11.6143 19.7722 14.4084 22.0769 15.1609 25.1716H19.7117C20.4641 22.0769 23.2583 19.7722 26.5811 19.7722Z" fill="CurrentCOlor"/>
<path d="M8.2915 21.6829C5.44702 21.6829 3.13281 23.9968 3.13281 26.8413C3.13281 29.6858 5.44702 32 8.2915 32C11.136 32 13.4502 29.6858 13.4502 26.8413C13.4502 23.9968 11.136 21.6829 8.2915 21.6829ZM8.2915 29.9351C6.58569 29.9351 5.19775 28.5474 5.19775 26.8413C5.19775 25.1355 6.58569 23.7478 8.2915 23.7478C9.99731 23.7478 11.3853 25.1355 11.3853 26.8413C11.3853 28.5474 9.99731 29.9351 8.2915 29.9351Z" fill="CurrentCOlor"/>
<path d="M8.29175 25.6582C7.63916 25.6582 7.1084 26.189 7.1084 26.8413C7.1084 27.4939 7.63916 28.0247 8.29175 28.0247C8.94434 28.0247 9.4751 27.4939 9.4751 26.8413C9.4751 26.189 8.94409 25.6582 8.29175 25.6582Z" fill="CurrentCOlor"/>
<path d="M31.7402 26.8413C31.7402 23.9968 29.426 21.6829 26.5815 21.6829C23.7371 21.6829 21.4229 23.9968 21.4229 26.8413C21.4229 29.6858 23.7371 32 26.5815 32C29.426 32 31.7402 29.6858 31.7402 26.8413ZM26.5815 29.9351C24.8757 29.9351 23.4878 28.5474 23.4878 26.8413C23.4878 25.1355 24.8757 23.7478 26.5815 23.7478C28.2874 23.7478 29.6753 25.1355 29.6753 26.8413C29.6753 28.5474 28.2874 29.9351 26.5815 29.9351Z" fill="CurrentCOlor"/>
<path d="M26.5813 25.6582C25.9287 25.6582 25.3979 26.189 25.3979 26.8413C25.3979 27.4939 25.9287 28.0247 26.5813 28.0247C27.2339 28.0247 27.7646 27.4939 27.7646 26.8413C27.7646 26.189 27.2339 25.6582 26.5813 25.6582Z" fill="CurrentCOlor"/>
</g>
<defs>
<clipPath id="clip0_1_3777">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
      `,
         subcategories: [
            {
               subcategoryTitle: "Смартфоны",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
            {
               subcategoryTitle: "Аксессуары для смартфонов и телефонов",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
         ],
      },
      {
         title: "Для женщин",
         addsAmount: "4147 объявлений",
         svgImage: `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="CurrentColor"/>
</svg>

    `,
         subcategories: [
            {
               subcategoryTitle: "Смартфоны",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
            {
               subcategoryTitle: "Смартфоны",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
            // add more subcategories as needed
         ],
      },
      {
         title: "Товары для животных",
         addsAmount: "4147 объявлений",
         svgImage: `

      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_3777)">
<path d="M31.7498 12.832C31.5239 9.50903 30.1223 6.41577 27.7446 4.03809C25.1406 1.43408 21.6785 0 17.9956 0C17.468 0 17.0405 0.427734 17.0405 0.955322V12.832H31.7498Z" fill="CurrentCOlor"/>
<path d="M6.11938 12.832V12.1118C6.11938 9.97363 4.37988 8.23413 2.2417 8.23413H1.26782C0.740234 8.23413 0.3125 8.66187 0.3125 9.18945C0.3125 9.71704 0.740234 10.1445 1.26782 10.1445H2.2417C3.32642 10.1445 4.20898 11.0271 4.20898 12.1118V12.832H6.11938Z" fill="CurrentCOlor"/>
<path d="M26.5811 19.7722C28.1135 19.7722 29.5332 20.2627 30.6926 21.0942C31.5203 19.7703 31.9109 18.2905 31.7827 16.8782V14.7424H4.2085V16.9233C4.2085 18.2273 4.51318 19.4612 5.0542 20.5583C6.02466 20.0564 7.12549 19.7722 8.2915 19.7722C11.6143 19.7722 14.4084 22.0769 15.1609 25.1716H19.7117C20.4641 22.0769 23.2583 19.7722 26.5811 19.7722Z" fill="CurrentCOlor"/>
<path d="M8.2915 21.6829C5.44702 21.6829 3.13281 23.9968 3.13281 26.8413C3.13281 29.6858 5.44702 32 8.2915 32C11.136 32 13.4502 29.6858 13.4502 26.8413C13.4502 23.9968 11.136 21.6829 8.2915 21.6829ZM8.2915 29.9351C6.58569 29.9351 5.19775 28.5474 5.19775 26.8413C5.19775 25.1355 6.58569 23.7478 8.2915 23.7478C9.99731 23.7478 11.3853 25.1355 11.3853 26.8413C11.3853 28.5474 9.99731 29.9351 8.2915 29.9351Z" fill="CurrentCOlor"/>
<path d="M8.29175 25.6582C7.63916 25.6582 7.1084 26.189 7.1084 26.8413C7.1084 27.4939 7.63916 28.0247 8.29175 28.0247C8.94434 28.0247 9.4751 27.4939 9.4751 26.8413C9.4751 26.189 8.94409 25.6582 8.29175 25.6582Z" fill="CurrentCOlor"/>
<path d="M31.7402 26.8413C31.7402 23.9968 29.426 21.6829 26.5815 21.6829C23.7371 21.6829 21.4229 23.9968 21.4229 26.8413C21.4229 29.6858 23.7371 32 26.5815 32C29.426 32 31.7402 29.6858 31.7402 26.8413ZM26.5815 29.9351C24.8757 29.9351 23.4878 28.5474 23.4878 26.8413C23.4878 25.1355 24.8757 23.7478 26.5815 23.7478C28.2874 23.7478 29.6753 25.1355 29.6753 26.8413C29.6753 28.5474 28.2874 29.9351 26.5815 29.9351Z" fill="CurrentCOlor"/>
<path d="M26.5813 25.6582C25.9287 25.6582 25.3979 26.189 25.3979 26.8413C25.3979 27.4939 25.9287 28.0247 26.5813 28.0247C27.2339 28.0247 27.7646 27.4939 27.7646 26.8413C27.7646 26.189 27.2339 25.6582 26.5813 25.6582Z" fill="CurrentCOlor"/>
</g>
<defs>
<clipPath id="clip0_1_3777">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
      `,
         subcategories: [
            {
               subcategoryTitle: "Смартфоны",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
            {
               subcategoryTitle: "Аксессуары для смартфонов и телефонов",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
         ],
      },
      {
         title: "Для женщин",
         addsAmount: "4147 объявлений",
         svgImage: `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.324 24.06L21.216 22.7827L20.9213 21.6027C24.4453 21.0094 26.2586 19.9534 26.3386 19.9067C26.5279 19.796 26.6453 19.5947 26.6613 19.376C26.676 19.1573 26.5786 18.9427 26.4066 18.8053C26.3827 18.7867 24 16.8187 24 10C24 4.24931 22.6547 1.33331 20 1.33331H19.6067C18.6493 0.408 17.9307 0 16 0C13.4947 0 8 2.51869 8 10C8 16.8187 5.61731 18.7867 5.6 18.8C5.42269 18.9333 5.32269 19.1453 5.33331 19.3667C5.34531 19.5894 5.46531 19.7894 5.656 19.904C5.736 19.952 7.532 21.0133 11.0773 21.6053L10.7826 22.7826L5.67469 24.06C2.33331 24.896 0 27.8853 0 31.3333C0 31.7013 0.298687 32 0.666687 32H31.3334C31.7014 32 32.0001 31.6987 32.0001 31.3307C32 27.8853 29.6667 24.896 26.324 24.06Z" fill="CurrentColor"/>
</svg>

    `,
         subcategories: [
            {
               subcategoryTitle: "Смартфоны",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
            {
              subcategoryTitle: "Аксессуары для смартфонов и телефонов",
              subcategoryInner: [
                 { subcategoryInnerItem: "Samsung" },
                 { subcategoryInnerItem: "Iphone" },
                 // add subcategoryInnerItems as needed
              ],
           },
            {
               subcategoryTitle: "Смартфоны",
               subcategoryInner: [
                  { subcategoryInnerItem: "Samsung" },
                  { subcategoryInnerItem: "Iphone" },
                  // add subcategoryInnerItems as needed
               ],
            },
            // add more subcategories as needed
         ],
      },

      // Add more data as needed
   ];
   jsonData = JSON.parse(JSON.stringify(jsonData));
   console.log(jsonData);

   function generateSubcategoryInner(subcategoryInner) {
      return subcategoryInner
         .map((subInner) => {
            const subInnerTitle = Object.keys(subInner)[0];
            const subInnerLink = subInner[subInnerTitle];
            return `
      <li class="subcategory-inner__item"> <a> ${subInnerLink}</a></li>`;
         })
         .join("");
   }

   function generateSubcategory(subcategories) {
      return subcategories
         .map((subcategory) => {
            const subcategoryTitle = subcategory.subcategoryTitle;
            const subcategoryItem = generateSubcategoryInner(
               subcategory.subcategoryInner
            );
            return `
        <li class="subcategory__item">
        <div>
        <p class="subcategory__item-title">${subcategoryTitle}</p>
        <svg class=
        "icon-inner" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6L12 10L8 14" stroke="CurrentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
      <div class="subcategory-links">
      <div class="dropdown-menu">
      <svg class="icon-left" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1998 22.4L12.7998 16L19.1998 9.60003" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          <h3 class="dropdown-menu__title">${subcategoryTitle}</h3>
      </div>
      <ul class="subcategory-links__menu">${subcategoryItem}</ul>
      </div>
        </li>
        `;
         })
         .join("");
   }
   function generateCategoryCards(categories) {
      return categories
         .map((category) => {
            const categoryCard = `
      <li class="category-card">
      <div class="category" >
      <div class="category__icon">
      ${category.svgImage}
      </div>
      <div class="category__text">
      <h2 class="category__name">${category.title} <span class="adds__amount">
      ${category.addsAmount}</span></h2>

      <svg class="subcategory-revealer"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
         d="M8 6L12 10L8 14"
         stroke="CurrentColor"
         stroke-width="1.5"
         stroke-linecap="round"
         stroke-linejoin="round" />
   </svg>
      </div>
      </div>
<ul class="subcategory">
${generateSubcategory(category.subcategories)}</ul>
      </li>
      `;
            return categoryCard;
         })
         .join("");
   }
   const windowWidth = window.innerWidth;
   console.log(`Window width ${windowWidth}px`);


   categoryList.innerHTML = generateCategoryCards(jsonData);


   const dropdownMenuTitle = document.querySelector(".dropdown-menu__title");
   const subcategoryItem = document.querySelectorAll(".subcategory__item");
   const categoryCards = document.querySelectorAll(".category");
   const subcategory = document.querySelectorAll(".subcategory");
   const subcategoryLinks = document.querySelectorAll(".subcategory-links");

   for (let i = 0; i < categoryCards.length; i++) {
    categoryCards[i].addEventListener("click", () => {
       // Toggle "active" class for the clicked category
       subcategory[i].classList.toggle("active");
        categoryCards[i].classList.toggle('activeNow');
       // Remove "active" class from other subcategories
       for (let j = 0; j < subcategory.length; j++) {
          if (j !== i) {
             subcategory[j].classList.remove("active");
             categoryCards[j].classList.remove('activeNow');
          }
       }
    });
 }
//
for (let i = 0; i < subcategoryItem.length; i++) {
  subcategoryItem[i].addEventListener("click", function () {
     // Toggle "active" class for the clicked subcategory
     subcategoryLinks[i].classList.toggle("active");

     // Hide other subcategories when one is active
     for (let j = 0; j < subcategoryLinks.length; j++) {
        if (j !== i) {
           subcategoryLinks[j].classList.remove("active");
        }
     }
  });
}
//
const iconLeft = document.querySelectorAll(".icon-left");

for (let i = 0; i < iconLeft.length; i++) {
   iconLeft[i].addEventListener("click", function () {
      // Remove "active" class from all subcategory-links
      for (let j = 0; j < subcategoryLinks.length; j++) {
         subcategoryLinks[j].classList.remove("active");
      }
   });
}
  //

  const subcategoryInnerItem = document.querySelectorAll(".subcategory-inner__item");

for (let i = 0; i < subcategoryInnerItem.length; i++) {
   subcategoryInnerItem[i].addEventListener("click", function () {
      // Remove "active" class from all subcategories and subcategory-links
      for (let j = 0; j < subcategory.length; j++) {
         subcategory[j].classList.remove("active");
      }
      for (let j = 0; j < subcategoryLinks.length; j++) {
         subcategoryLinks[j].classList.remove("active");
      }
   });
  }

});
//    for (let i = 0; i < categoryCards.length; i++) {
//       categoryCards[i].addEventListener("click", () => {
//          subcategory[i].classList.toggle("active");
//       });
//    }
//    for (let i = 0; i < subcategoryItem.length; i++) {
//       subcategoryItem[i].addEventListener("click", function () {
//          subcategoryLinks[i].classList.toggle("active");
//       });
//    }

//    for (let i = 0; i < dropdownMenuTitle.length; i++) {
//       dropdownMenuTitle[i].addEventListener("click", function (e) {
//          e.srtopPropagation();
//          subcategory[i].classList.remove("active");
//       });
//    }
