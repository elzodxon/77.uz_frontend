// JSONDATA OF CATEGORY
const jsonData = [
  {
    id: 25,
    name: 'Mобильные телефоны',
    ads_count: 54,
    icon: null,
    childs: [
      {
        id: 44,
        name: 'smartphone ru',
        childs: [
          {
            id: 40,
            name: 'Samsung',
          },
          {
            id: 41,
            name: 'IPhone',
          },
        ],
      },
    ],
  },
  {
    id: 19,
    name: 'Для женщин',
    ads_count: 8,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%94%D0%BB%D1%8F_%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD_gOhqhpL.png',
    childs: [
      {
        id: 29,
        name: 'Сумки и чемоданы',
      },
      {
        id: 26,
        name: 'Личная гигиена',
      },
      {
        id: 23,
        name: 'Аксессуары',
        childs: [
          {
            id: 39,
            name: 'Часы Касио i360',
          },
        ],
      },
      {
        id: 24,
        name: 'Канцелярия',
      },
      {
        id: 27,
        name: 'Автотовары',
      },
      {
        id: 32,
        name: 'Красота',
      },
    ],
  },
  {
    id: 38,
    name: 'Спорт и отдых',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%A1%D0%BF%D0%BE%D1%80%D1%82_%D0%B8_%D0%BE%D1%82%D0%B4%D1%8B%D1%85.png',
    childs: [],
  },
  {
    id: 45,
    name: 'Сумка',
    ads_count: 2,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B_n788dr7.svg',
    childs: [
      {
        id: 46,
        name: 'Женские сумки',
        childs: [
          {
            id: 47,
            name: 'Gucci',
          },
        ],
      },
    ],
  },
  {
    id: 35,
    name: 'Бытовая техника',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%9C%D0%B0%D0%B8%D1%88%D0%B8%D0%B9_%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0.png',
    childs: [],
  },
  {
    id: 37,
    name: 'Электроника',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0.png',
    childs: [
      {
        id: 28,
        name: 'Домашняя утварь',
      },
      {
        id: 42,
        name: 'Ноутбуки',
      },
    ],
  },
  {
    id: 36,
    name: 'Здоровье',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%97%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5.png',
    childs: [],
  },
  {
    id: 30,
    name: 'Для мужчин',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%94%D0%BB%D1%8F_%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD.png',
    childs: [
      {
        id: 31,
        name: 'Здоровье',
      },
      {
        id: 34,
        name: 'Мототранспорт',
      },
      {
        id: 33,
        name: 'Новые легковые автомобили',
      },
    ],
  },
  {
    id: 48,
    name: 'Детские товари',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/icons8-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D1%8B-48.png',
    childs: [
      {
        id: 49,
        name: 'Для малчиков',
        childs: [
          {
            id: 53,
            name: 'Брюки',
          },
        ],
      },
    ],
  },
  {
    id: 25,
    name: 'Mобильные телефоны',
    ads_count: 54,
    icon: null,
    childs: [
      {
        id: 44,
        name: 'smartphone ru',
        childs: [
          {
            id: 40,
            name: 'Samsung',
          },
          {
            id: 41,
            name: 'IPhone',
          },
        ],
      },
    ],
  },
  {
    id: 19,
    name: 'Для женщин',
    ads_count: 8,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%94%D0%BB%D1%8F_%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD_gOhqhpL.png',
    childs: [
      {
        id: 29,
        name: 'Сумки и чемоданы',
      },
      {
        id: 26,
        name: 'Личная гигиена',
      },
      {
        id: 23,
        name: 'Аксессуары',
        childs: [
          {
            id: 39,
            name: 'Часы Касио i360',
          },
        ],
      },
      {
        id: 24,
        name: 'Канцелярия',
      },
      {
        id: 27,
        name: 'Автотовары',
      },
      {
        id: 32,
        name: 'Красота',
      },
    ],
  },
  {
    id: 38,
    name: 'Спорт и отдых',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%A1%D0%BF%D0%BE%D1%80%D1%82_%D0%B8_%D0%BE%D1%82%D0%B4%D1%8B%D1%85.png',
    childs: [],
  },
  {
    id: 45,
    name: 'Сумка',
    ads_count: 2,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B_n788dr7.svg',
    childs: [
      {
        id: 46,
        name: 'Женские сумки',
        childs: [
          {
            id: 47,
            name: 'Gucci',
          },
        ],
      },
    ],
  },
  {
    id: 35,
    name: 'Бытовая техника',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%9C%D0%B0%D0%B8%D1%88%D0%B8%D0%B9_%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0.png',
    childs: [],
  },
  {
    id: 37,
    name: 'Электроника',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0.png',
    childs: [
      {
        id: 28,
        name: 'Домашняя утварь',
      },
      {
        id: 42,
        name: 'Ноутбуки',
      },
    ],
  },
  {
    id: 36,
    name: 'Здоровье',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%97%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5.png',
    childs: [],
  },
  {
    id: 30,
    name: 'Для мужчин',
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/Property_1%D0%94%D0%BB%D1%8F_%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD.png',
    childs: [
      {
        id: 31,
        name: 'Здоровье',
      },
      {
        id: 34,
        name: 'Мототранспорт',
      },
      {
        id: 33,
        name: 'Новые легковые автомобили',
      },
    ],
  },
  {
    id: 48,
    name: "Детские товари kids' products",
    ads_count: 0,
    icon: 'https://admin.77.uz/media/categories/icons8-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D1%8B-48.png',
    childs: [
      {
        id: 49,
        name: 'Для малчиков for boys',
        childs: [
          {
            id: 53,
            name: 'Брюки shoes',
          },
        ],
      },
    ],
  },
]