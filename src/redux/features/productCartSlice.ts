import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//cart item types start

type InitialState = {
  value: CartState;
};

type CartState = {
  cartItems: CartItem[];
  itemPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  vat: number;
};

type CartItem = {
  id: string;
  qty?: number;
  name: string;
  price: number;
  inputQty?: number;
};

const initialState: InitialState = {
  value: {
    cartItems: [],
    itemPrice: 0,
    shippingPrice: 50,
    taxPrice: 0,
    totalPrice: 0,
    vat: 0,
  },
};

//add decimals
const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2); // 12.3456 to 12.35
};

// cart item types end

export const cart = createSlice({
  name: "Product Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItems = action.payload;
      const existItem = state.value.cartItems.find((x) => x.id === newItems.id);

      if (!existItem) {
        newItems.qty = 1;

        state.value.cartItems.push(newItems);
      } else {
        existItem.qty = (existItem.qty || 0) + 1;
      }

      // Calculate the prices here
      state.value.itemPrice = parseFloat(
        addDecimals(
          state.value.cartItems.reduce(
            (acc, item) => acc + item.price * (item.qty || 0),
            0
          )
        )
      );
    },

    addToCartButton: (state, action: PayloadAction<CartItem>) => {
      const newItems = action.payload;
      const existItem = state.value.cartItems.find((x) => x.id === newItems.id);

      if (!existItem) {
        newItems.qty = action.payload.inputQty;
        state.value.cartItems.push(newItems);
      } else {
        existItem.qty = (existItem.qty || 0) + action.payload.inputQty!;
      }

      // Calculate the prices here
      state.value.itemPrice = parseFloat(
        addDecimals(
          state.value.cartItems.reduce(
            (acc, item) => acc + item.price * (item.qty || 0),
            0
          )
        )
      );
    },

    //remove products from cart
    removeProducts: (state, action: PayloadAction<CartItem>) => {
      const newItems = action.payload;
      const existItem = state.value.cartItems.find((x) => x.id === newItems.id);

      if (!existItem) {
        //If the item doesn't exist in the cart, do nothing
        return;
      } else {
        //update the quantity if the item already exist
        existItem.qty = (existItem.qty || 0) - 1;

        if (existItem.qty <= 0) {
          state.value.cartItems = state.value.cartItems.filter(
            (item) => item.id !== newItems.id
          );
        }
      }

      // Calculate the prices here
      state.value.itemPrice = parseFloat(
        addDecimals(
          state.value.cartItems.reduce(
            (acc, item) => acc + item.price * (item.qty || 0),
            0
          )
        )
      );
    },

    //completely remove from the cart
    removeFromTheCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.value.cartItems = state.value.cartItems.filter(
        (item) => item.id !== itemIdToRemove
      );

      // Recalculate prices based on the updated cartItems
      state.value.itemPrice = parseFloat(
        addDecimals(
          state.value.cartItems.reduce(
            (acc, item) => acc + item.price * (item.qty || 0),
            0
          )
        )
      );
    },

    //empty cart

    emptyCart: (state) => {
      state.value.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeProducts,
  addToCartButton,
  removeFromTheCart,
  emptyCart,
} = cart.actions;
export default cart.reducer;
