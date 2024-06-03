const initialState = {
  cartItems: [], // массив объектов товаров в корзине
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Проверяем, есть ли товар уже в корзине
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        // Если товар уже есть в корзине, увеличиваем его количество
        return {
          ...state,
          cartItems: state.cartItems.map((item, index) => {
            if (index === existingItemIndex) {
              return {
                ...item,
                quantity:
                  (action.count !== undefined ? action.count : 1) +
                  item.quantity,
              };
            }
            return item;
          }),
        };
      } else {
        // Если товара нет в корзине, добавляем его
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              id: action.payload.id,
              data: action.payload,
              quantity: action.count !== undefined ? action.count : 1,
              price:
                action.payload.discont_price !== null
                  ? action.payload.discont_price
                  : action.payload.price,
            },
          ],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

export default cartReducer;
