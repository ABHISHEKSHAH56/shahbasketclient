import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: 'Pyaz',
      englishName: 'Onion',
      baseQty: '1 Kg',
      tag: 'Fresh',
      basePrice: 200,
      categorey: 'Root Veggi',
      image: require('../../assets/Product/Green-Onion.jpg'),
      description: 'Kanda Bhaji, Pyaz Tamatar ki Sabzi'
    },
    {
      id: 2,
      name: 'Nimbu',
      englishName: 'Lemon',
      description: 'Nimbu ka Achar ',
      baseQty: '250 gm',
      tag: 'Best Deal',
      basePrice: 40,
      image: require('../../assets/Product/Peppermint.jpg'),

    },
    {
      id: 3,
      name: 'Matar',
      englishName: 'Peas',
      tag: 'Fresh',
      description: 'Aloo Matar, Matar Paneer, Matar Paratha',
      baseQty: '1 Kg',
      basePrice: 80,
      image: require('../../assets/Product/Green-Peas.jpg'),
    },
    {
      id: 4,
      name: 'Kathal',
      englishName: 'Jackfruit',
      description: 'Kathal Biryani/Pulao, Kathal ki Sabzi, Kathal ka Achar',
      baseQty: '1 Kg',
      categorey: 'Flower Veggi',
      tag: 'Best Deal',
      basePrice: 200,
      image: require('../../assets/Product/Jackfruit.jpg'),
    },
    {
      id: 5,
      name: 'Parwal',
      englishName: 'Pointed Gourd',
      categorey: 'Root Veggi',
      tag: 'Fresh',
      description: 'Parwal ki Sabzi',
      baseQty: '1 Kg',
      basePrice: 200,
      image: require('../../assets/Product/Pointed-Gourd.jpg'),
    },

  ],
  cart: [],


};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: [...state.cart, { ...item, qty: item.baseQty, price: item.basePrice }],
        products: state.products.map((item) => item.id === action.payload.id ? { ...item, qty: item.baseQty, price: item.basePrice, isCart: true } : item)
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        products: state.products.map((item) => item.id === action.payload.id ? { ...item, isCart: false } : item)

      };
    case actionTypes.ADJUST_ITEM_QTY:

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty, price: action.payload.price }
            : item
        ),
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty, price: action.payload.price }
            : item

        )

      };

    case 'ORDER_DISPATCH': return {
      ...state,
      products: state.products.map((item) => item.isCart ? { ...item, isCart: false } : item),
      cart: []
    }

    default:
      return state;
  }
};

export default shopReducer;
