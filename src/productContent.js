const products = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB",
    price: 139999.99,
    category: "Smartphones",
    description: "Новейший iPhone с титановым корпусом, камерой 48 Мп и чипом A17 Pro. Профессиональная фотография и видеосъемка в кармане.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop"
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra 512GB",
    price: 129999.99,
    category: "Smartphones",
    description: "Флагманский смартфон Samsung с S Pen, камерой 200 Мп и AI-функциями. Максимальная производительность для профессионалов.",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop"
  },
  {
    id: 3,
    title: "MacBook Pro 16\" M3 Max",
    price: 349999.99,
    category: "Laptops",
    description: "Профессиональный ноутбук Apple с чипом M3 Max, 36GB RAM и 1TB SSD. Идеален для видеомонтажа и разработки.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop"
  },
  {
    id: 4,
    title: "ASUS ROG Strix RTX 4090 24GB",
    price: 189999.99,
    category: "Graphics Cards",
    description: "Топовая видеокарта для игр в 4K и профессиональной работы. Революционная архитектура Ada Lovelace.",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop"
  },
  {
    id: 5,
    title: "Sony WH-1000XM5 Wireless",
    price: 34999.99,
    category: "Headphones",
    description: "Беспроводные наушники с лучшим в классе шумоподавлением. 30 часов автономной работы.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
  },
  {
    id: 6,
    title: "iPad Pro 12.9\" M2 Wi-Fi 256GB",
    price: 114999.99,
    category: "Tablets",
    description: "Профессиональный планшет Apple с чипом M2 и дисплеем Liquid Retina XDR. Поддержка Apple Pencil 2.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop"
  },
  {
    id: 7,
    title: "Samsung 55\" Neo QLED 4K QN95C",
    price: 159999.99,
    category: "TVs",
    description: "Premium телевизор с технологией Mini LED, квантовыми точками и частотой 120 Гц для игр.",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop"
  },
  {
    id: 8,
    title: "Dell XPS 13 Plus i7-12700H",
    price: 149999.99,
    category: "Laptops",
    description: "Ультрабук премиум-класса с процессором Intel 12-го поколения, 16GB RAM и 1TB SSD.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop"
  },
  {
    id: 9,
    title: "Nintendo Switch OLED",
    price: 36999.99,
    category: "Gaming",
    description: "Игровая консоль с OLED-экраном 7 дюймов, улучшенной подставкой и 64GB встроенной памяти.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop"
  },
  {
    id: 10,
    title: "AirPods Pro 2 с MagSafe",
    price: 24999.99,
    category: "Headphones",
    description: "Беспроводные наушники Apple с активным шумоподавлением и пространственным звуком.",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&h=500&fit=crop"
  },
  {
    id: 11,
    title: "Canon EOS R5 Body",
    price: 389999.99,
    category: "Cameras",
    description: "Профессиональная беззеркальная камера с разрешением 45 Мп и записью видео 8K.",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop"
  },
  {
    id: 12,
    title: "Dyson V15 Detect Absolute",
    price: 64999.99,
    category: "Home Appliances",
    description: "Беспроводной пылесос с лазерным обнаружением пыли и автоматической адаптацией мощности.",
    image: "https://i.simpalsmedia.com/thumbor/500x0/i.simpalsmedia.com/marketplace/products/original/878b5195855bc5ad4c441d47f0899051.jpg"
  },
  {
    id: 13,
    title: "Apple Watch Ultra 2",
    price: 89999.99,
    category: "Wearables",
    description: "Экстремальные смарт-часы с титановым корпусом, GPS и автономностью до 36 часов.",
    image: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=500&h=500&fit=crop"
  },
  {
    id: 14,
    title: "Tesla Model S Plaid",
    price: 11999999.99,
    category: "Electric Vehicles",
    description: "Электрический седан с разгоном 0-100 км/ч за 2.1 секунды и запасом хода 628 км.",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=500&fit=crop"
  },
  {
    id: 15,
    title: "Bose QuietComfort 45",
    price: 32999.99,
    category: "Headphones",
    description: "Беспроводные наушники с превосходным шумоподавлением и 24-часовой автономностью.",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop"
  },
  {
    id: 16,
    title: "AMD Ryzen 9 7950X",
    price: 54999.99,
    category: "Processors",
    description: "16-ядерный процессор на архитектуре Zen 4 с базовой частотой 4.5 ГГц для экстремальных задач.",
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500&h=500&fit=crop"
  },
  {
    id: 17,
    title: "LG OLED55C3PUA 55\"",
    price: 129999.99,
    category: "TVs",
    description: "OLED телевизор с процессором α9 Gen6 AI, поддержкой Dolby Vision и HDMI 2.1 для игр.",
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500&h=500&fit=crop"
  },
  {
    id: 18,
    title: "DJI Mini 4 Pro",
    price: 89999.99,
    category: "Drones",
    description: "Компактный дрон с 4K камерой, 3-осевым подвесом и временем полета до 34 минут.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop"
  },
  {
    id: 19,
    title: "Nikon Z9 Body",
    price: 449999.99,
    category: "Cameras",
    description: "Профессиональная беззеркальная камера с разрешением 45.7 Мп и записью видео 8K/30p.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop"
  },
  {
    id: 20,
    title: "Microsoft Surface Studio 2+",
    price: 449999.99,
    category: "Computers",
    description: "Моноблок для творчества с сенсорным экраном 28\" и поддержкой Surface Pen.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop"
  },
  {
    id: 21,
    title: "Xiaomi Mi 13 Ultra 512GB",
    price: 89999.99,
    category: "Smartphones",
    description: "Флагманский смартфон с камерой Leica, чипом Snapdragon 8 Gen 2 и быстрой зарядкой 90W.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
  },
  {
    id: 22,
    title: "PlayStation 5 Digital Edition",
    price: 44999.99,
    category: "Gaming",
    description: "Игровая консоль нового поколения с SSD 825GB и поддержкой игр в 4K.",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&h=500&fit=crop"
  },
  {
    id: 23,
    title: "NVIDIA GeForce RTX 4070 Ti",
    price: 79999.99,
    category: "Graphics Cards",
    description: "Видеокарта для игр в 1440p с технологиями DLSS 3 и Ray Tracing третьего поколения.",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop"
  },
  {
    id: 24,
    title: "Sonos Arc Soundbar",
    price: 89999.99,
    category: "Audio",
    description: "Премиальная звуковая панель с поддержкой Dolby Atmos и 11 встроенными динамиками.",
    image: "https://plus.unsplash.com/premium_photo-1677159499898-b061fb5bd2d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29ub3MlMjBBcmMlMjBTb3VuZGJhciUyMDUwMHB4fGVufDB8fDB8fHww"
  },
  {
    id: 25,
    title: "Google Pixel 8 Pro 256GB",
    price: 79999.99,
    category: "Smartphones",
    description: "Смартфон Google с чипом Tensor G3, камерой 50 Мп и 7 годами обновлений Android.",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop"
  },
  {
    id: 26,
    title: "iRobot Roomba j7+",
    price: 74999.99,
    category: "Home Appliances",
    description: "Робот-пылесос с ИИ для распознавания препятствий и автоматической очисткой мусоросборника.",
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500&h=500&fit=crop"
  },
  {
    id: 27,
    title: "Samsung Galaxy Tab S9 Ultra",
    price: 119999.99,
    category: "Tablets",
    description: "Планшет с экраном 14.6\" Dynamic AMOLED 2X, процессором Snapdragon 8 Gen 2 и S Pen.",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop"
  },
  {
    id: 28,
    title: "Meta Quest 3 128GB",
    price: 54999.99,
    category: "VR",
    description: "VR-гарнитура смешанной реальности с процессором Snapdragon XR2 Gen 2 и разрешением 2064x2208.",
    image: "https://www.kivano.kg/images/product/134727/171082994263056_full.png"
  },
  {
    id: 29,
    title: "Garmin Fenix 7X Solar",
    price: 89999.99,
    category: "Wearables",
    description: "Мультиспортивные GPS-часы с солнечной зарядкой и автономностью до 28 дней.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
  },
  {
    id: 30,
    title: "Breville Barista Express",
    price: 64999.99,
    category: "Home Appliances",
    description: "Полуавтоматическая кофемашина с встроенной кофемолкой и системой предварительного заваривания.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop"
  }
];


export default products;

