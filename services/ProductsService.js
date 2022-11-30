const PRODUCTS = [
    {
        id: 1,
        name: "Pap and Steak",
        price: 120,
        image: require("../assets/product_images/pap_steak.jpg"),
        description:
          "Only Pap and Steak",
    },
    {
        id: 2,
        name: "Papa and Mogodu/ Pap and Tripe",
        price: 79,
        image: require("../assets/product_images/pap_tripe.jpg"),
        description:
            "Pap and tripe with some gravy on it",
    },
    {
    id: 3,
    name: "Pap and Wors",
    price: 130,
    image: require("../assets/product_images/pap_wors.jpg"),
    description: "Pap and wors with spinach and gravy"
    },
    {
        id: 4,
        name: "Big burger",
        price: 88.99,
        image: require("../assets/product_images/Burger.jpg"),
        description: "It has a signle big burger, lettice, tomato and sources"
    },
    {
        id: 5,
        name: "Extra gravy",
        price: 20,
        image: require("../assets/product_images/gravy.jpg"),
        description: "Some extra gravy with some "
    },
    {
        id: 6,
        name: "Soft Drink 2L",
        price: 30,
        image: require("../assets/product_images/coke_2L.png"),
        description: "Any flavour of soft drink 2 litre"
    },
    {
        id: 7,
        name: "Coke class",
        price: 13,
        image: require("../assets/product_images/Coke_class.jpg"),
        description: "SOft drink in a class"
    },
    {
        id: 8,
        name: "Steak",
        price: 50,
        image: require("../assets/product_images/steak.jpg"),
        description: "Steak or T-Bone with some chips"
    },
    {
        id: 9,
        name: "Pizza",
        price: 90,
        image: require("../assets/product_images/Pizza.jpeg"),
        description: "You choose any flavour available for Pizza"
    }
]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}