export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  sizes: string[];
  colors: string[];
  description: string;
  badge?: string;
  isNew?: boolean;
  isTrending?: boolean;
};

export const CATEGORIES = [
  { id: "jackets", name: "Outerwear", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop" },
  { id: "jerseys", name: "Jerseys", image: "https://images.unsplash.com/photo-1616124619460-ff4ed8f4683c?q=80&w=1000&auto=format&fit=crop" },
  { id: "shirts", name: "Tees", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop" },
  { id: "jeans", name: "Bottoms", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop" },
  { id: "accessories", name: "Accessories", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop" },
  { id: "sneakers", name: "Sneakers", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop" },
];

export const COLLECTIONS = [
  { id: "summer", name: "Summer Archive", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop" },
  { id: "vintage", name: "Vintage Collection", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop" },
  { id: "oversized", name: "Oversized Essentials", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop" },
  { id: "street-essentials", name: "Street Essentials", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop" },
  { id: "premium", name: "Premium Collection", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Oversized Heavyweight Hoodie",
    price: 6500,
    originalPrice: 8000,
    category: "jackets",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Washed Blue"],
    description: "Premium heavyweight cotton hoodie with an oversized fit and dropped shoulders. Features a double-layered hood and minimal branding.",
    badge: "Sale",
    isNew: true,
    isTrending: true,
  },
  {
    id: "p2",
    name: "Vintage Wash Denim Jacket",
    price: 8500,
    category: "jackets",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Vintage Blue", "Washed Black"],
    description: "Classic denim jacket crafted from rigid vintage-wash denim. Features silver-tone hardware and relaxed fit.",
    isTrending: true,
  },
  {
    id: "p3",
    name: "Essential Boxy T-Shirt",
    price: 2500,
    category: "shirts",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Earth"],
    description: "Our signature boxy fit t-shirt made from thick, durable organic cotton.",
    isNew: true,
  },
  {
    id: "p4",
    name: "Cargo Parachute Pants",
    price: 7200,
    category: "jeans",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop"
    ],
    sizes: ["28", "30", "32", "34"],
    colors: ["Olive", "Black"],
    description: "Wide-leg parachute pants with multiple cargo pockets and adjustable drawstrings at the hem.",
    badge: "Limited",
    isTrending: true,
  },
  {
    id: "p5",
    name: "Retro Football Jersey",
    price: 4500,
    category: "jerseys",
    images: [
      "https://images.unsplash.com/photo-1616124619460-ff4ed8f4683c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616124619460-ff4ed8f4683c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1000&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Blue/White", "Red/Black"],
    description: "A nod to 90s football kits. Lightweight, breathable polyester with retro collar details.",
    isNew: true,
  },
  {
    id: "p6",
    name: "Chunky Leather Loafers",
    price: 12000,
    category: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop"
    ],
    sizes: ["8", "9", "10", "11"],
    colors: ["Black"],
    description: "Premium leather loafers featuring a chunky rubber sole for a modern streetwear edge.",
  },
  {
    id: "p7",
    name: "Utility Chest Rig",
    price: 3200,
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000&auto=format&fit=crop"
    ],
    sizes: ["OS"],
    colors: ["Black", "Olive"],
    description: "Adjustable utility chest rig with tactical compartments. Water-resistant nylon.",
    isTrending: true,
  },
  {
    id: "p8",
    name: "Graphic Print Longsleeve",
    price: 3800,
    category: "shirts",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1000&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Washed Black", "Vintage White"],
    description: "Oversized longsleeve featuring exclusive archive graphics on the back and sleeves.",
    isNew: true,
  }
];

export const BUNDLE_DATA = {
  price: 15000,
  value: 35000,
  items: 10,
  features: [
    "10 Hand-picked Premium Pieces",
    "Guaranteed 2 Outerwear Items",
    "Exclusive Unreleased Designs",
    "Free Worldwide Express Shipping"
  ]
};
