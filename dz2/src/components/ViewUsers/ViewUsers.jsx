import "./style.css";
const products = [
  {
    id: 1,
    title: "Urban Backpack",
    category: "Bags",
    price: 49.99,
    color: "Black",
    img: "https://picsum.photos/seed/backpack/400/300",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 89.5,
    color: "White",
    img: "https://picsum.photos/seed/headphones/400/300",
  },
  {
    id: 3,
    title: "Coffee Mug",
    category: "Kitchen",
    price: 14.99,
    color: "Blue",
    img: "https://picsum.photos/seed/mug/400/300",
  },
  {
    id: 4,
    title: "Desk Lamp",
    category: "Home",
    price: 32,
    color: "Silver",
    img: "https://picsum.photos/seed/lamp/400/300",
  },
  {
    id: 5,
    title: "Running Shoes",
    category: "Sport",
    price: 74.99,
    color: "Red",
    img: "https://picsum.photos/seed/shoes/400/300",
  },
  {
    id: 6,
    title: "Smart Watch",
    category: "Electronics",
    price: 129.99,
    color: "Black",
    img: "https://picsum.photos/seed/watch/400/300",
  },
  {
    id: 7,
    title: "Notebook Set",
    category: "Stationery",
    price: 11.5,
    color: "Green",
    img: "https://picsum.photos/seed/notebook/400/300",
  },
  {
    id: 8,
    title: "Travel Bottle",
    category: "Travel",
    price: 19.99,
    color: "Orange",
    img: "https://picsum.photos/seed/bottle/400/300",
  },
  {
    id: 9,
    title: "Gaming Mouse",
    category: "Gaming",
    price: 39.99,
    color: "Gray",
    img: "https://picsum.photos/seed/mouse/400/300",
  },
  {
    id: 10,
    title: "Bluetooth Speaker",
    category: "Audio",
    price: 59.99,
    color: "Purple",
    img: "https://picsum.photos/seed/speaker/400/300",
  },
  {
    id: 11,
    title: "Leather Wallet",
    category: "Accessories",
    price: 27.5,
    color: "Brown",
    img: "https://picsum.photos/seed/wallet/400/300",
  },
  {
    id: 12,
    title: "Yoga Mat",
    category: "Fitness",
    price: 24.99,
    color: "Pink",
    img: "https://picsum.photos/seed/yoga/400/300",
  },
  {
    id: 13,
    title: "Sunglasses",
    category: "Fashion",
    price: 44.99,
    color: "Black",
    img: "https://picsum.photos/seed/sunglasses/400/300",
  },
  {
    id: 14,
    title: "Office Chair",
    category: "Furniture",
    price: 159.99,
    color: "Dark Gray",
    img: "https://picsum.photos/seed/chair/400/300",
  },
  {
    id: 15,
    title: "Plant Pot",
    category: "Garden",
    price: 16.75,
    color: "White",
    img: "https://picsum.photos/seed/plant/400/300",
  },
  {
    id: 16,
    title: "Camera Strap",
    category: "Photography",
    price: 21.99,
    color: "Black",
    img: "https://picsum.photos/seed/camera/400/300",
  },
  {
    id: 17,
    title: "Winter Jacket",
    category: "Clothing",
    price: 119.99,
    color: "Navy",
    img: "https://picsum.photos/seed/jacket/400/300",
  },
  {
    id: 18,
    title: "Minimal Clock",
    category: "Decor",
    price: 35.99,
    color: "Gold",
    img: "https://picsum.photos/seed/clock/400/300",
  },
  {
    id: 19,
    title: "Portable Charger",
    category: "Electronics",
    price: 29.99,
    color: "White",
    img: "https://picsum.photos/seed/charger/400/300",
  },
  {
    id: 20,
    title: "Classic Book",
    category: "Books",
    price: 12.99,
    color: "Beige",
    img: "https://picsum.photos/seed/book/400/300",
  },
];

function ProductCard({ product, isPremium }) {
  return (
    <div className="card" onClick={() => console.log(product)}>
      <img src={product.img} alt={product.title} />
      {isPremium && <span className="premium">Премиум</span>}
      <h3>{product.title}</h3>
      <p>Категория: {product.category}</p>
      <p>Цена: ${product.price}</p>
      <p>Цвет: {product.color}</p>
    </div>
  );
}

function App() {
  return (
    <div className="cards">
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          product={product}
          isPremium={i < 10}
        />
      ))}
    </div>
  );
}

export default App;