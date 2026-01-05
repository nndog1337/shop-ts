import { createContext, useContext, useState, type ReactNode } from "react"
import type { IProduct } from "../../interfaces/interfaces"

interface CartItem extends IProduct{
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: IProduct) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const ContextProvider = ({ children }: {children: ReactNode}) => {

  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: IProduct) => {
    setCart(prev => {
      const inCart = cart.find((item) => item.id === product.id)
      if(inCart){
        return prev.map(item => item)
      }else{
        return [...prev, { ...product, quantity: 1 }]
      }
    }
    )
  }

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if(quantity < 1){
      removeFromCart(productId)
      return
    }

    setCart(prev => 
      prev.map(item => item.id === productId ? { ...item, quantity } : item)
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const totalPrice = Math.ceil(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0))


  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default ContextProvider

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('Ошибка контекста')
  }
  return context
}
