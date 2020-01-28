// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Nike Mens Air Presto Essential Shoes",
    category: "Clothing and Shoes",
    price: 149.95,
    productlink: "click to buy product" ,
    description:
      "The Nike Air Presto Shoe delivers the same unrivaled fit and comfort that marked the 2000 debut of the original.",
      url: "https://www.amazon.com/gp/product/B00BXSM39O/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00BXSM39O&linkCode=as2&tag=109d39-20&linkId=d789384f207864e568b30ed995238f2f" ,
      popular: true,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71tXY4UKjqL._UY625_.jpg",
      //"https://media.hypedc.com/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/_/o/_o8a4329_2.jpg"
    ]
  },
  {
    id: 2,
    name: "CASIO F91W-1 Casual Sport Watch",
    category: "Jewelry and Watches",
    price: 11.21,
    productlink: "click to buy product" ,

    description:
      "Made in USA and Imported, Micro Light, Hourly Time Signal, Auto Calendar      ",
      url: "https://www.amazon.com/gp/product/B00006I551/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00006I551&linkCode=as2&tag=109d39-20&linkId=cbdb3e0bf9aa1c42eab3682a04cbb9bd" ,
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/611%2BNkb%2BMQL._UX466_.jpg",
      //"https://i.ytimg.com/vi/XJGI-v31-dk/maxresdefault.jpg"
    ]
  },
  {
    id: 3,
    name: "Seiko Men's Analogue Classic Solar Powered Watch with Stainless Steel Strap",
    category: "Jewelry and Watches",
    price: 92,
    productlink: "click to buy product" ,
    description: "Day-date box, Stainless Steel Case, Case Size 38 millimeters    ",
    url: "https://amzn.to/36xmxdY",
   
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/81XUKQex4nL._UY445_.jpg",
      //"data:image/jpeg;base64,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"
    ]
  },
  {
    id: 4,
    name: "Harry Potter: The Illustrated Collection (Books 1-3 Boxed Set)",
    category: "Books",
    price: 64.99,
    productlink: "click to buy product" ,
    url: "https://amzn.to/2RwgVMH",
    description: "The first three books in the Harry Potter series, gorgeously illustrated in full color by Jim Kay, now available in a collectible boxed set!",

    popular: true,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/51Sq3lrO%2BjL._SY434_BO1,204,203,200_.jpg"
    ]
  },
  {
    id: 5,
    name: "Dell SE2717HR RVJXC 27 Full HD 1920 X 1080 Monitor",
    category: "Computers",
    price: 149,
    productlink: "click to buy product" ,
    url: "https://amzn.to/2Rxqz1q",
    description:
      "Simple, stylish design with the thin glossy bezels, mattescreen and sturdy base for a clean, sleek look",

    popular: true,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71gdL%2BtIPaL._SX569_.jpg",
     // "https://i5.walmartimages.com/asr/d2c34ad5-60b9-4aad-b807-5b19b8e31a63_1.b3a876b3ed8a7ac887903be841210134.jpeg"
    ]
  },

  {
    id: 7,
    name: "Swatch Skin Quartz Movement White Dial Unisex Watch SFN124",
    category: "Jewelry and Watches",
    price: 104.99,
    description: "Movement: Quartz, Case material: Plastica, Case size: 34 mm    ",
    productlink: "click to buy product" ,
    url: "https://amzn.to/2GwcRpi",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/51url0-JYHL._UX679_.jpg"
    ]
  },
  {
    id: 8,
    name: "adidas Originals Men's Gazelle Sneaker",
    category: "Clothing and Shoes",
    price: 25.73,
    productlink: "click to buy product" ,
    url: "https://www.amazon.com/gp/product/B01HIS1IQG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HIS1IQG&linkCode=as2&tag=109d39-20&linkId=eac21e1d2747ae16664e6c0c34ff2b90",
    description: "100% Textile, Imported, Rubber sole, Premium shiny leather upper is soft and durable    ",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/51ArALLO9mL._UY625_.jpg",
      //"https://images-na.ssl-images-amazon.com/images/I/71pqv%2BgdgzL._UL1500_.jpg"
    ]
  },
  {
    id: 9,
    name: "Logitech Wireless Touch Keyboard K400 Plus with Built-In Touchpad",
    category: "Computers",
    price: 26.80,
    description: "Wireless HTPC keyboard for PC connected TVs, 80-keys, Media-friendly TV keyboard, Plug-and-play setup",
    productlink: "click to buy product" ,
    url: "https://amzn.to/2O6LlD5 ",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71uvJNoX0UL._SX425_.jpg"
    ]
  },
  {
    id: 10,
    name: "Swatch Originals Quartz Movement Blue Dial Unisex Watch GN254",
    category: "Jewelry and Watches",
    price: 55.23,
    description: "Movement: Quartz, Case material: Plastica, Case size: 34 mm    ",
    productlink: "click to buy product" ,
    url: "https://amzn.to/312K7he",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/61aMYhviqZL._UX679_.jpg"
    ]
  },
  {
    id: 11,
    name: "Dell S2316M IPS 23 6ms Widescreen LED Backlight LCD Monitor No HDMI Black",
    category: "Computers",
    price: 299.9,
    productlink: "click to buy product" ,
    url: "https://amzn.to/36xAQiB",
    description:
      "Stylish design: Enjoy the elegance of thin, glossy bezels, a sturdy base, and intuitive capacitive touch buttons.",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71o6Sj%2BjK5L._SX569_.jpg"
    ]
  },
  {
    id: 12,
    name: "Invicta Men's Pro Diver Stainless Steel Quartz Watch with Silicone Strap, White, 26",
    category: "Jewelry and Watches",
    productlink: "click to buy product" ,
    price: 104.95,
    description:
      "Blue and Gold Skeletonized Dial with Gold Tone and White Hands and Hour Markers; 18k Gold Ion-Plated Stainless Steel Case; White Silicone Strap with 18k Gold Ion-Plated Stainless Steel Accents",
    url: "https://amzn.to/2U3xjWt",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71ZOObWCQcL._UY741_.jpg",
     // "https://cdn2.jomashop.com/media/catalog/product/i/n/invicta-mako-pro-diver-automatic-men_s-watch-8926.jpg"
    ]
  }
];

// List of item categories.
const categories = [
  {
    name: "All categories",
    icon: "list"
  },
  {
    name: "Clothing and Shoes",
    icon: "group"
  },
  {
    name: "Jewelry and Watches",
    icon: "watch"
  },
  {
    name: "Books",
    icon: "menu_book"
  },
  {
    name: "Computers",
    icon: "computer"
  }
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
  {
    name: "Product categories",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name + "&itemCategoryClicked=true",
        icon: x.icon
      };
    })
  },

];


export { sampleProducts, categories, dataForTheMenu };
