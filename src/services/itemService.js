// 9 total

var catalog = [
  {
    _id: "strap",
    title: "20mm Brown Leather Strap",
    category: "Strap",
    price: 50.0,
    image: "watch strap leather.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "wallet",
    title: "Stingray Leather Wallet",
    category: "Accessories",
    price: 175.0,
    image: "Stingray-wallet.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "messenger",
    title: "Multipurpose Messengers Bag",
    category: "Carry",
    price: 75.0,
    image: "Messenger-bag.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "belt",
    title: "H La Ceinture Leather Belt",
    category: "Accessories",
    price: 875.0,
    image: "Hermes-belt.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "shoe",
    title: "Parq Blvd Black Leather Oxford",
    category: "Clothing",
    price: 250.0,
    image: "Park-ave-shoes.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "bag",
    title: "Women's Leather Birchkin Bag",
    category: "Carry",
    price: 5000.0,
    image: "Hermes-birkin.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "case",
    title: "Phone Leather Case",
    category: "Accessories",
    price: 25.0,
    image: "Apple-leather-phone-case.jfif",
    minimum: 1,
    description: "Fits all phones",
  },
  {
    _id: "jacket",
    title: "Aviator Commander Leather Jacket",
    category: "Clothing",
    price: 155.0,
    image: "Leather-bomber.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "exotic",
    title: "Acquit, The Buffalo Leather Gloves",
    category: "Accessories",
    price: 95.0,
    image: "Buffalo-gloves.jpg",
    minimum: 1,
    description: "Text text text",
  },
];


class ItemService {
  getCatalog() {
    // logic for server call
    // Retrieve array of products

    // Return mock 
      return catalog;
  }

  saveItem(item) {
    console.log("Todo: Send object to server");
  }

  getItemDetails(id) {

  }

}

export default ItemService;