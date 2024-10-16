interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  size: string[];
  price: number;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Cappuccino",
    description:
      "A rich, frothy coffee drink that perfectly balances bold espresso with creamy steamed milk. Topped with a generous layer of velvety milk foam, this Italian classic offers a harmonious blend of flavors. Ingredients: Espresso, steamed milk, and milk foam. Optionally dusted with cocoa powder for an extra touch of indulgence.",
    shortDescription: "Rich espresso with creamy steamed milk and foam.",
    image: require("../assets/images/cappuccino.png"),
    size: ["small", "medium", "large"],
    price: 99,
    category: "Coffee",
  },
  {
    id: 2,
    name: "Latte",
    description:
      "A smooth and comforting coffee beverage that combines the intensity of espresso with the silky texture of steamed milk. Topped with a light layer of foam, the latte offers a milder coffee flavor compared to other espresso drinks. Ingredients: Espresso and steamed milk, with a small amount of milk foam on top. Can be customized with various flavored syrups for added sweetness.",
    shortDescription: "Smooth espresso with silky steamed milk and light foam.",
    image: require("../assets/images/latte-macchiato.png"),
    size: ["small", "medium", "large"],
    price: 79,
    category: "Coffee",
  },
  {
    id: 3,
    name: "Espresso",
    description:
      "The foundation of many coffee drinks, espresso is a concentrated shot of pure coffee flavor. Brewed by forcing hot water through finely-ground coffee beans under high pressure, it results in a strong, bold taste with a distinctive crema on top. Ingredients: Finely ground coffee beans and hot water. Served in a small cup and often enjoyed straight or used as a base for other coffee drinks.",
    shortDescription: "Concentrated shot of pure coffee flavor.",
    image: require("../assets/images/espresso.png"),
    size: ["small", "medium", "large"],
    price: 49,
    category: "Coffee",
  },
  {
    id: 4,
    name: "Americano",
    description:
      "A simple yet satisfying coffee drink that combines the boldness of espresso with the smoothness of hot water. This drink offers a similar strength to drip coffee but with the distinct flavor profile of espresso. Ingredients: Espresso and hot water. The ratio can be adjusted to suit individual preferences for strength and volume.",
    shortDescription: "Bold espresso diluted with hot water.",
    image: require("../assets/images/americano.png"),
    size: ["small", "medium", "large"],
    price: 90,
    category: "Coffee",
  },
  {
    id: 5,
    name: "Mocha",
    description:
      "A delightful fusion of coffee and chocolate, the mocha is perfect for those with a sweet tooth. This indulgent drink combines the rich flavors of espresso and chocolate with the creamy texture of steamed milk. Ingredients: Espresso, steamed milk, chocolate syrup, and often topped with whipped cream and a dusting of cocoa powder or chocolate shavings.",
    shortDescription: "Espresso with chocolate and steamed milk.",
    image: require("../assets/images/mocha.png"),
    size: ["small", "medium", "large"],
    price: 290,
    category: "Coffee",
  },
  {
    id: 6,
    name: "Bunna",
    description: "Just Bunna.",
    shortDescription: "Traditional Ethiopian coffee.",
    image: require("../assets/images/coffee-cup.png"),
    size: ["small", "medium", "large"],
    price: 299,
    category: "Specialty",
  },
  {
    id: 7,
    name: "Decaf Cappuccino",
    description:
      "All the rich, frothy goodness of a classic cappuccino, but without the caffeine. Perfect for evening enjoyment or those sensitive to caffeine. Made with decaffeinated espresso and topped with velvety milk foam.",
    shortDescription: "Caffeine-free version of our classic cappuccino.",
    image: require("../assets/images/cappuccino.png"),
    size: ["small", "medium", "large"],
    price: 99,
    category: "Decaf",
  },
  {
    id: 8,
    name: "Decaf Vanilla Latte",
    description:
      "A smooth and creamy latte made with decaf espresso and infused with rich vanilla flavor. Enjoy the comforting taste of a latte any time of day without the caffeine buzz.",
    shortDescription: "Decaf latte with a hint of vanilla.",
    image: require("../assets/images/latte-macchiato.png"),
    size: ["small", "medium", "large"],
    price: 105,
    category: "Decaf",
  },
  {
    id: 9,
    name: "Pumpkin Spice Latte",
    description:
      "A fall favorite! Our signature latte infused with pumpkin and seasonal spices like cinnamon, nutmeg, and clove. Topped with whipped cream and a sprinkle of pumpkin pie spice for the ultimate autumn indulgence.",
    shortDescription: "Seasonal latte with pumpkin and warm spices.",
    image: require("../assets/images/latte-macchiato.png"),
    size: ["small", "medium", "large"],
    price: 109,
    category: "Seasonal",
  },
  {
    id: 10,
    name: "Peppermint Mocha",
    description:
      "A festive blend of rich chocolate, cool peppermint, and smooth espresso. Topped with whipped cream and crushed candy cane pieces, this holiday favorite brings winter cheer in every sip.",
    shortDescription: "Seasonal mocha with a refreshing peppermint twist.",
    image: require("../assets/images/mocha.png"),
    size: ["small", "medium", "large"],
    price: 115,
    category: "Seasonal",
  },
  {
    id: 11,
    name: "Iced Caramel Macchiato",
    description:
      "A refreshing twist on a classic, featuring cold milk poured over ice, marked with espresso, and finished with a drizzle of vanilla syrup and caramel sauce. The perfect balance of sweet and strong.",
    shortDescription: "Chilled espresso treat with caramel and vanilla.",
    image: require("../assets/images/latte-macchiato.png"),
    size: ["small", "medium", "large"],
    price: 95,
    category: "Cold Drinks",
  },
  {
    id: 12,
    name: "Cold Brew",
    description:
      "Smooth and bold, our cold brew is steeped for 20 hours to bring out a naturally sweet flavor and subtle chocolate notes. Served over ice for a refreshing caffeine boost.",
    shortDescription: "Smooth, slow-steeped cold coffee.",
    image: require("../assets/images/americano.png"),
    size: ["small", "medium", "large"],
    price: 89,
    category: "Cold Drinks",
  },
  {
    id: 13,
    name: "Helwa Juice",
    description:
      "Smooth and bold, our cold brew is steeped for 20 hours to bring out a naturally sweet flavor and subtle chocolate notes. Served over ice for a refreshing caffeine boost.",
    shortDescription: "Smooth, slow-steeped cold coffee.",
    image: require("../assets/images/americano.png"),
    size: ["small", "medium", "large"],
    price: 35,
    category: "Cold Drinks",
  },
];

export default products;
