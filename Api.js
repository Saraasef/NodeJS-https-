const products = [
  {
    id: " 1",
    info: "This is the latest and greatest product from Derp corp.",
    image: "http://placehold.it/300x300/999/CCC",
    detail: "Lorem ipsum dolor sit amet",
  },
  {
    id: " 2",
    detail: "Lorem ipsum dolor sit amet",
    offer: "BOGOF",
    image: "http://placehold.it/300x300/999/CCC",
  },
  {
    id: " 3",
    detail: "Lorem ipsum dolor sit amet",
    image: "http://placehold.it/300x300/999/CCC",
  },
];

const profile = [
  { name: "Shyam", email: "shyamjaiswal@gmail.com" },
  { name: "Bob", email: "bob32@gmail.com" },
  { name: "Jai", email: "jai87@gmail.com" },
];
const basket = [
  {
    productId: 1,
    count: 3,
    price: 2000,
  },
  {
    productId: 2,
    count: 0,
    price: 2020,
  },
  {
    productId: 3,
    count: 10,
    price: 2300,
  },
];

module.exports = {
  products,
  profile,
  basket,
};
