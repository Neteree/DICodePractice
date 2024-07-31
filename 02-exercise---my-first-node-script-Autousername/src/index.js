const products = [
  {
    title: "Kogan: Z11 Pro Cordless Stick Vacuum Cleaner",
    price: 275,
  },
  {
    title: "KitchenAid: Basic Assist Culinary Microwave Oven 33L",
    price: 579,
  },
  {
    title: "Sodastream: Spirit - Starter Pack",
    price: 149,
  },
];

const cheapProducts = products.filter((product) => {
  return product.price < 500;
}); 

console.log(cheapProducts);