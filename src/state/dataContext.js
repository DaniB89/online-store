import { createContext } from 'react';

/**
 * Its a promise / interface
 * a description of the date structure
 * but not implementation
 */
const DataContext = createContext{
    cart: [],
    user: {},

    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {}
}

export default DataContext
