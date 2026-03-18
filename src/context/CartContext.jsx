import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existing = state.cartItems.find(
                (item) => item._id === action.payload._id
            );

            if (existing) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item._id === action.payload._id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    ),
                };
            }

            return {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
            };
        }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item._id !== action.payload
                ),
            };
        case "INCREASE_QTY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item._id === action.payload
                        ? { ...item, qty: item.qty + 1 }
                        : item
                ),
            };

        case "DECREASE_QTY":
            return {
                ...state,
                cartItems: state.cartItems
                    .map((item) =>
                        item._id === action.payload
                            ? { ...item, qty: item.qty - 1 }
                            : item
                    )
                    .filter((item) => item.qty > 0),
            };

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cartItems: [],
    });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
