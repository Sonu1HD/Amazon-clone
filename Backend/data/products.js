const products = [
  {
    title: "Apple iPhone 15 Pro",
    price: 123599,
    description:
      "The Apple iPhone 15 Pro is powered by the advanced A17 Pro chip, delivering exceptional speed, smooth multitasking, and console-level gaming performance. Its 48MP Pro camera system captures stunningly detailed photos and cinematic-quality videos in all lighting conditions. Built with a premium titanium body, the device is lighter yet stronger, offering durability with a sleek finish. The Super Retina XDR display ensures vibrant colors, sharp clarity, and an immersive viewing experience.",
    image:
      "https://images.unsplash.com/photo-1697284958332-93444aeb4efb?q=80&w=880&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.8,
    countInStock: 15,
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    price: 110099,
    description:
      "The Samsung Galaxy S24 Ultra features a groundbreaking 200MP camera that delivers professional-grade photography with incredible clarity and detail. With the integrated S-Pen, users can write, draw, and navigate with precision. Advanced AI-powered features enhance productivity, photography, and daily tasks, while the stunning AMOLED display offers vibrant colors, deep contrast, and smooth scrolling for an unmatched flagship experience.",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1170&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.7,
    countInStock: 12,
  },
  {
    title: "Sony WH-1000XM5 Headphones",
    price: 399,
    description:
      "Sony WH-1000XM5 headphones deliver industry-leading noise cancellation combined with premium sound quality. Designed for comfort during long listening sessions, they feature plush ear cushions, adaptive sound control, and crystal-clear call performance. With a long-lasting battery and fast charging support, these headphones are ideal for travel, work, and immersive music enjoyment.",
    image:
      "https://images.unsplash.com/photo-1583305727488-61f82c7eae4b?q=80&w=687&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.6,
    countInStock: 20,
  },
  {
    title: "Nike Air Force 1",
    price: 620,
    description:
      "The Nike Air Force 1 sneakers feature an iconic basketball-inspired design combined with modern comfort and durability. Crafted with a premium upper and cushioned sole, they provide excellent support and long-lasting wear. Their timeless silhouette makes them a versatile choice for casual outfits and street-style fashion.",
    image:
      "https://images.unsplash.com/photo-1712168332222-c1996322f935?q=80&w=687&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.5,
    countInStock: 25,
  },
  {
    title: "Amazon Echo Dot (5th Gen)",
    price: 999,
    description:
      "The Amazon Echo Dot (5th Gen) is a compact and powerful smart speaker with Alexa built in. Use voice commands to play music, control smart home devices, set alarms, check the weather, and get instant answers. With improved audio performance and a sleek modern design, it blends seamlessly into any room.",
    image:
      "https://plus.unsplash.com/premium_photo-1728978926426-18fdb1d00e8a?q=80&w=1332&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.4,
    countInStock: 30,
  },
  {
    title: "Apple MacBook Air M2",
    price: 100199,
    description:
      "The Apple MacBook Air M2 delivers powerful performance in an ultra-thin and lightweight design. Powered by the Apple M2 chip, it handles multitasking, creative workflows, and everyday computing with ease. The 13.6-inch Liquid Retina display offers sharp visuals and rich colors, while all-day battery life ensures productivity wherever you go.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1170&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.9,
    countInStock: 8,
  },
  {
    title: "PlayStation 5 Console",
    price: 49999,
    description:
      "The PlayStation 5 console brings next-generation gaming to life with ultra-fast SSD performance, stunning ray-traced graphics, and immersive 3D audio. Experience near-instant load times, smooth gameplay, and exclusive titles designed to push gaming to new heights. Built for serious gamers and entertainment enthusiasts alike.",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1170&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.8,
    countInStock: 10,
  },
  {
    title: "Apple Watch Series 9",
    price: 6429,
    description:
      "Apple Watch Series 9 is designed to help you stay active, healthy, and connected. It features advanced health monitoring, workout tracking, heart rate measurement, and seamless integration with your iPhone. With a sleek design and customizable bands, it suits both fitness routines and everyday wear.",
    image:
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=687&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.6,
    countInStock: 18,
  },
  {
    title: "OnePlus 12 5G Smartphone",
    price: 69999,
    description:
      "The OnePlus 12 5G smartphone delivers flagship-level performance with a powerful Snapdragon processor, smooth AMOLED display, and ultra-fast 5G connectivity. Designed for speed and efficiency, it offers an advanced camera system, fast charging technology, and a premium build for users who demand top-tier performance.",
    image: "https://images.unsplash.com/photo-1611746869696-d09bce200020?q=80&w=1170&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.6,
    countInStock: 14,
  },
  {
    title: "Dell Inspiron 15 Laptop",
    price: 58999,
    description:
      "The Dell Inspiron 15 laptop is designed for everyday productivity with a powerful processor, full HD display, and reliable performance. Ideal for students and professionals, it offers smooth multitasking, long battery life, and a comfortable keyboard for extended work sessions.",
    image: "https://m.media-amazon.com/images/I/712WiT-wexL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Electronics",
    rating: 4.4,
    countInStock: 10,
  },
  {
    title: "JBL Flip 6 Bluetooth Speaker",
    price: 11999,
    description:
      "The JBL Flip 6 portable Bluetooth speaker delivers powerful sound with deep bass and crystal-clear audio. Featuring a rugged waterproof design and long-lasting battery, it’s perfect for outdoor adventures, travel, and parties.",
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=1170&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.5,
    countInStock: 28,
  },
  {
    title: "Samsung 27-inch Curved Monitor",
    price: 21999,
    description:
      "This Samsung 27-inch curved monitor offers an immersive viewing experience with a sleek curved design and full HD resolution. Ideal for gaming, work, and entertainment, it reduces eye strain while delivering smooth visuals and vibrant colors.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1170&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.5,
    countInStock: 16,
  },

  /* -------- HOME PRODUCTS -------- */

  {
    id: 101,
    title: "Wakefit Memory Foam Mattress (Queen Size)",
    price: 12499,
    description:
      "The Wakefit Memory Foam Mattress is designed to provide optimal comfort and spinal alignment with its medium-firm feel and 7-zone body support. Made from high-quality breathable foam, it adapts to your body shape and reduces pressure points, ensuring a restful and rejuvenating sleep every night.",
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.5,
    countInStock: 12,
  },
  {
    id: 102,
    title: "Philips LED Smart Ceiling Light 36W",
    price: 2199,
    description:
      "The Philips LED Smart Ceiling Light offers customizable brightness and color temperature controlled via mobile app or voice assistants. Designed for energy efficiency and long-lasting performance, it enhances your living space with modern lighting solutions and smart home integration.",
    image:
      "https://m.media-amazon.com/images/I/51pItTTreKL._AC_UL480_FMwebp_QL65_.jpg",
    category: "Home",
    rating: 4.3,
    countInStock: 20,
  },
  {
    title: "Wooden Bookshelf Storage Unit",
    price: 7499,
    description:
      "This wooden bookshelf storage unit combines modern design with functional storage space. Crafted from durable engineered wood, it is perfect for organizing books, décor items, and essentials while enhancing the aesthetics of your living space.",
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.4,
    countInStock: 11,
  },
  {
    title: "Luxury Cotton Bath Towel Set",
    price: 1899,
    description:
      "This luxury cotton bath towel set is made from soft, highly absorbent fabric that provides a spa-like experience at home. Designed for durability and comfort, these towels retain softness even after multiple washes.",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.5,
    countInStock: 30,
  },
  {
    title: "Electric Kettle 1.5L",
    price: 2199,
    description:
      "This electric kettle features rapid boiling technology, automatic shut-off, and a sleek stainless-steel design. Ideal for making tea, coffee, and instant meals quickly and safely.",
    image: "https://images.unsplash.com/photo-1590080877777-8a0b8a8bb4b3?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.3,
    countInStock: 26,
  },
  {
    title: "Premium Door Mat (Anti-Slip)",
    price: 899,
    description:
      "This premium anti-slip door mat is designed to trap dust and moisture effectively, keeping your home clean. Durable and easy to maintain, it is suitable for both indoor and outdoor use.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.2,
    countInStock: 40,
  },
  {
    title: "Queen Size Cotton Bedsheet Set",
    price: 1799,
    description:
      "This queen size cotton bedsheet set is made from soft, breathable fabric that ensures comfort throughout the night. Designed with elegant patterns and durable stitching, it enhances bedroom décor while providing long-lasting quality and easy maintenance.",
    image: "https://m.media-amazon.com/images/I/71um41qJNQL._AC_UL480_FMwebp_QL65_.jpg",
    category: "Home",
    rating: 4.4,
    countInStock: 30,
  },
  {
    title: "Ergonomic Office Chair",
    price: 12499,
    description:
      "This ergonomic office chair is designed to support long working hours with adjustable height, lumbar support, and breathable mesh backing. Ideal for home offices, it promotes proper posture and reduces back strain.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.6,
    countInStock: 12,
  },
  {
    title: "Wooden Study Table",
    price: 8999,
    description:
      "This wooden study table offers a spacious surface and sturdy construction, making it ideal for work, study, or creative tasks. Its modern design fits seamlessly into any home or office environment.",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.3,
    countInStock: 10,
  },
  {
    title: "Decorative Cushion Covers (Set of 5)",
    price: 1299,
    description:
      "These decorative cushion covers add style and comfort to your living space. Crafted from premium fabric with vibrant patterns, they are easy to clean and perfect for sofas, beds, and lounge areas.",
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.5,
    countInStock: 35,
  },
  {
    title: "Stainless Steel Cookware Set (5 pcs)",
    price: 4999,
    description:
      "This stainless steel cookware set is designed for durability and even heat distribution. Suitable for everyday cooking, it works on multiple cooktops and offers easy maintenance with long-lasting performance.",
    image: "https://m.media-amazon.com/images/I/71-7paoGCCL._AC_UL480_FMwebp_QL65_.jpg",
    category: "Home",
    rating: 4.6,
    countInStock: 18,
  },
  {
    title: "Indoor LED Floor Lamp",
    price: 3499,
    description:
      "This modern LED floor lamp provides warm ambient lighting and enhances home décor. Designed with energy-efficient LEDs and a sleek profile, it is perfect for living rooms, bedrooms, and reading corners.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.4,
    countInStock: 22,
  },
  {
    title: "Premium Wooden Shoe Rack (4 Tier)",
    price: 4599,
    description:
      "This premium wooden shoe rack features a sturdy four-tier design that can neatly organize multiple pairs of footwear. Crafted from durable wood, it adds elegance to your entryway while keeping shoes easily accessible and clutter-free.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.4,
    countInStock: 14,
  },
  {
    title: "Automatic Room Air Freshener",
    price: 1299,
    description:
      "This automatic room air freshener continuously releases a pleasant fragrance to keep your home fresh and welcoming. Designed with adjustable spray intervals, it is ideal for bedrooms, living rooms, and offices.",
    image: "https://m.media-amazon.com/images/I/719vFw17GOL._AC_UL480_FMwebp_QL65_.jpg",
    category: "Home",
    rating: 4.2,
    countInStock: 30,
  },
  {
    title: "Luxury Velvet Curtain Set (2 Panels)",
    price: 3499,
    description:
      "These luxury velvet curtains provide excellent light blocking and insulation while enhancing the aesthetic appeal of your living space. Soft to touch and easy to maintain, they add a rich and elegant look to any room.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.6,
    countInStock: 16,
  },
  {
    title: "Stainless Steel Kitchen Storage Containers (Set of 6)",
    price: 2799,
    description:
      "This stainless steel kitchen storage container set is perfect for keeping dry ingredients fresh and organized. Designed with airtight lids, it ensures food safety while adding a modern touch to your kitchen.",
    image: "https://m.media-amazon.com/images/I/81NjheH3hfL._AC_UL480_FMwebp_QL65_.jpg",
    category: "Home",
    rating: 4.5,
    countInStock: 22,
  },
  {
    title: "Foldable Ironing Board with Adjustable Height",
    price: 3999,
    description:
      "This foldable ironing board features adjustable height settings and a sturdy frame for comfortable ironing. Its compact design allows easy storage, making it ideal for apartments and small spaces.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.3,
    countInStock: 12,
  },
  {
    title: "Bathroom Organizer Shelf with Towel Holder",
    price: 1899,
    description:
      "This bathroom organizer shelf provides ample storage space for toiletries while keeping towels neatly arranged. Made from rust-resistant material, it is durable, easy to install, and perfect for modern bathrooms.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1170&auto=format&fit=crop",
    category: "Home",
    rating: 4.4,
    countInStock: 20,
  },


  /* -------- FASHION PRODUCTS -------- */

  {
    id: 206,
    title: "Men's Wool Blend Scarf",
    price: 899,
    description:
      "This men's wool blend scarf is crafted from soft, warm fabric designed to provide comfort during cold winter days. Lightweight yet insulating, it pairs effortlessly with coats, jackets, and sweaters, making it a stylish and functional accessory for everyday wear.",
    image:
      "https://m.media-amazon.com/images/I/41QB+2oYTrL._AC_UL480_FMwebp_QL65_.jpg",
    category: "Fashion",
    rating: 4.2,
    countInStock: 30,
  },
  {
    title: "Men's Formal Slim Fit Shirt",
    price: 1599,
    description:
      "This men’s formal slim fit shirt is tailored for a sharp and professional look. Made from breathable fabric, it offers all-day comfort and pairs perfectly with trousers or suits for office and formal occasions.",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.4,
    countInStock: 32,
  },
  {
    title: "Women's Printed Maxi Dress",
    price: 2799,
    description:
      "This women’s printed maxi dress features a flowy silhouette and stylish design, making it perfect for casual outings and festive occasions. Crafted from soft fabric, it provides elegance, comfort, and effortless style.",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.5,
    countInStock: 18,
  },
  {
    title: "Men's Sports Running Shoes",
    price: 3499,
    description:
      "These men’s sports running shoes are designed for comfort and performance with cushioned soles and breathable materials. Ideal for jogging, workouts, and daily activities, they provide excellent grip and support.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.6,
    countInStock: 21,
  },
  {
    title: "Women's Leather Shoulder Bag",
    price: 4599,
    description:
      "This women’s leather shoulder bag combines premium craftsmanship with practical storage. Designed for daily use, it complements both casual and formal outfits while offering durability and timeless style.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.7,
    countInStock: 14,
  },
  {
    title: "Men's Slim Fit Casual Shirt",
    price: 1499,
    description:
      "This men’s slim fit casual shirt is crafted from breathable cotton fabric for all-day comfort. Its versatile design makes it suitable for casual outings, office wear, and weekend styling.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.4,
    countInStock: 28,
  },
  {
    title: "Women's Cotton Kurti",
    price: 1299,
    description:
      "This women’s cotton kurti features a stylish design and lightweight fabric, making it perfect for daily wear and casual occasions. Comfortable, breathable, and easy to style with leggings or jeans.",
    image: "https://m.media-amazon.com/images/I/71LksbvZ4ML._AC_UL480_FMwebp_QL65_.jpg",
    category: "Fashion",
    rating: 4.5,
    countInStock: 32,
  },
  {
    title: "Men's Leather Wallet",
    price: 999,
    description:
      "This men’s leather wallet is crafted from premium-quality leather with a slim, durable design. It features multiple card slots and compartments, combining functionality with classic style.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.3,
    countInStock: 40,
  },
  {
    title: "Women's Running Shoes",
    price: 3299,
    description:
      "These women’s running shoes are designed for comfort and performance, featuring cushioned soles, breathable material, and excellent grip. Ideal for workouts, jogging, and daily active wear.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.6,
    countInStock: 20,
  },
  {
    title: "Unisex Winter Gloves",
    price: 799,
    description:
      "These unisex winter gloves are made from soft, insulating material to keep your hands warm in cold weather. Designed for comfort and flexibility, they are perfect for daily winter use.",
    image: "https://images.unsplash.com/photo-1542219550-37153d387c27?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.2,
    countInStock: 45,
  },
  {
    title: "Women's Stylish Sling Bag",
    price: 2399,
    description:
      "This women’s stylish sling bag features a compact yet spacious design with premium finishing. Ideal for daily use and outings, it complements both casual and semi-formal outfits.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.5,
    countInStock: 18,
  },
  {
    title: "Men's Classic Analog Watch",
    price: 4999,
    description:
      "This men’s classic analog watch features a sleek dial, durable strap, and precise timekeeping. Designed for both formal and casual wear, it adds timeless elegance to any outfit.",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.5,
    countInStock: 18,
  },
  {
    title: "Women's Casual Denim Jacket",
    price: 2899,
    description:
      "This women’s casual denim jacket is crafted from durable fabric with a flattering fit. Perfect for layering, it complements casual outfits and provides comfort during cool weather.",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.6,
    countInStock: 22,
  },
  {
    title: "Unisex Sports Cap",
    price: 699,
    description:
      "This unisex sports cap offers lightweight comfort and sun protection. Made from breathable fabric with an adjustable strap, it is ideal for outdoor activities, workouts, and casual wear.",
    image: "https://m.media-amazon.com/images/I/41t-KNjnj6L._AC_UL480_FMwebp_QL65_.jpg",
    category: "Fashion",
    rating: 4.3,
    countInStock: 40,
  },
  {
    title: "Women's Fashionable Sunglasses",
    price: 1799,
    description:
      "These women’s fashionable sunglasses feature UV-protected lenses and a stylish frame design. Perfect for sunny days, they offer eye protection while elevating your everyday look.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.4,
    countInStock: 26,
  },
  {
    title: "Men's Comfortable Flip Flops",
    price: 999,
    description:
      "These men’s comfortable flip flops are designed for everyday wear with cushioned soles and durable straps. Ideal for casual outings, beachwear, and home use.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.2,
    countInStock: 35,
  },
  {
    title: "Women's Ethnic Printed Dupatta",
    price: 1199,
    description:
      "This women’s ethnic printed dupatta is crafted from lightweight fabric with vibrant patterns. Perfect for pairing with kurtis and traditional outfits, it adds elegance and color to your look.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1170&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.5,
    countInStock: 28,
  },



  /* -------- ELECTRONICS PRODUCTS -------- */

  {
    id: 401,
    title: "Wireless Bluetooth Headphones",
    price: 2499,
    description:
      "These wireless Bluetooth headphones deliver immersive sound with deep bass and clear highs. Designed for comfort and portability, they feature long battery life, fast pairing, and reliable connectivity, making them ideal for music, calls, and everyday use.",
    image:
      "https://m.media-amazon.com/images/I/71quB2GTUKL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Electronics",
    rating: 4.4,
    countInStock: 50,
  },
  {
    title: "Samsung Galaxy Buds2 Pro",
    price: 17999,
    description:
      "Samsung Galaxy Buds2 Pro deliver immersive Hi-Fi sound with advanced active noise cancellation for a premium listening experience. Designed for comfort and long wear, they feature intelligent audio switching, crystal-clear call quality, and seamless integration with Samsung Galaxy devices.",
    image: "https://m.media-amazon.com/images/I/31hfYl3FPdL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Electronics",
    rating: 4.6,
    countInStock: 24,
  },
  {
    title: "Apple iPad 10th Generation",
    price: 44999,
    description:
      "The Apple iPad 10th Generation features a powerful processor and a stunning Liquid Retina display, making it perfect for entertainment, learning, and productivity. With support for Apple Pencil and keyboard accessories, it adapts effortlessly to both work and creative needs.",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1170&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.7,
    countInStock: 15,
  },
  {
    title: "GoPro HERO12 Black Action Camera",
    price: 39999,
    description:
      "The GoPro HERO12 Black is built for adventure with rugged durability, waterproof design, and stunning 5.3K video recording. Capture smooth footage using advanced image stabilization, even in extreme conditions, making it ideal for travel, sports, and outdoor activities.",
    image: "https://images.unsplash.com/photo-1625420055396-d61b846ce03c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R29Qcm8lMjBIRVJPMTIlMjBCbGFjayUyMEFjdGlvbiUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics",
    rating: 4.8,
    countInStock: 10,
  },
  {
    title: "HP LaserJet Wireless Printer",
    price: 18999,
    description:
      "The HP LaserJet wireless printer offers fast, high-quality printing with seamless Wi-Fi connectivity. Designed for home and small office use, it delivers sharp text, reliable performance, and convenient mobile printing options.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1170&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.4,
    countInStock: 18,
  },
  {
    title: "Sony Bravia 55-inch 4K Smart TV",
    price: 64999,
    description:
      "The Sony Bravia 55-inch 4K Smart TV delivers breathtaking picture quality with vibrant colors and exceptional clarity. Powered by smart features and a powerful processor, it provides seamless access to streaming apps, immersive sound, and an enhanced home entertainment experience.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1170&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.7,
    countInStock: 9,
  },
  {
    title: "Seagate 2TB External Hard Drive",
    price: 6999,
    description:
      "The Seagate 2TB external hard drive offers reliable and portable storage for backups, media, and important files. With high-speed data transfer and a compact design, it is ideal for professionals, students, and everyday users.",
    image: "https://m.media-amazon.com/images/I/71VDyTlZCwL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Electronics",
    rating: 4.5,
    countInStock: 35,
  },

  /* -------- WINTER PRODUCTS -------- */
  {
    title: "Men's Winter Jacket",
    price: 3499,
    description:
      "Warm and stylish men's winter jacket made with insulated padding and a water-resistant outer layer. Perfect for cold weather and daily wear.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=60",
    category: "Winter",
    rating: 4.5,
    countInStock: 25,
  },
  {
    title: "Women's Woolen Coat",
    price: 4299,
    description:
      "Elegant woolen coat for women featuring a soft inner lining and classic design to keep you warm and fashionable during winter.",
    image:
      "https://images.unsplash.com/photo-1542060748-10c28b62716b?w=600&auto=format&fit=crop&q=60",
    category: "Winter",
    rating: 4.6,
    countInStock: 18,
  },
  {
    title: "Unisex Winter Beanie",
    price: 499,
    description:
      "Soft knitted unisex beanie that provides warmth and comfort. Ideal for casual outings and cold mornings.",
    image:
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=600&auto=format&fit=crop&q=60",
    category: "Winter",
    rating: 4.2,
    countInStock: 60,
  },
  {
    title: "Thermal Innerwear Set",
    price: 1299,
    description:
      "High-quality thermal innerwear set designed to retain body heat and keep you comfortable throughout winter.",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60",
    category: "Winter",
    rating: 4.4,
    countInStock: 35,
  },
  {
    title: "Winter Gloves",
    price: 699,
    description:
      "Insulated winter gloves with a soft inner lining to keep your hands warm in freezing temperatures.",
    image:
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?w=600&auto=format&fit=crop&q=60",
    category: "Winter",
    rating: 4.1,
    countInStock: 50,
  },
  {
    title: "Woolen Scarf",
    price: 899,
    description:
      "Premium woolen scarf that adds warmth and style to your winter outfits. Soft and comfortable for daily use.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=60",
    category: "Winter",
    rating: 4.3,
    countInStock: 45,
  },
  {
    title: "Men's Snow Boots",
    price: 3799,
    description:
      "Durable snow boots with anti-slip soles and insulated interiors, perfect for snowy and icy conditions.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60",
    category: "Winter",
    rating: 4.6,
    countInStock: 20,
  },
  {
    title: "Women's Winter Sweater",
    price: 1999,
    description:
      "Cozy knitted sweater made from soft fabric to provide warmth and comfort during cold days.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?w=600&auto=format&fit=crop&q=60",
    category: "Winter",
    rating: 4.4,
    countInStock: 30,
  },
  {
    title: "Unisex Hooded Sweatshirt",
    price: 1799,
    description:
      "Warm hooded sweatshirt with fleece lining, suitable for both men and women during winter season.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60",
    category: "Winter",
    rating: 4.2,
    countInStock: 40,
  },
  {
    title: "Electric Heating Blanket",
    price: 2999,
    description:
      "Soft electric heating blanket with adjustable temperature settings to keep you warm on cold winter nights.",
    image:
      "https://images.unsplash.com/photo-1600369671236-e74521d4b8c0?w=600&auto=format&fit=crop&q=60",
    category: "Winter",
    rating: 4.7,
    countInStock: 15,
  },
  {
    title: "best Product Ever",
    price: 799,
    description:
    "Fire Boltt ",
    image: "https://m.media-amazon.com/images/I/31sW1CJ6TvL._SY300_SX300_QL70_FMwebp_.jpg",
    category: "Signin",
    rating: 4.5,
    countInStock: 20,
  }

];
export default products;
