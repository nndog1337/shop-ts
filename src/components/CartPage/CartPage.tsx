import { Link } from "react-router"
import { useCart } from "../Provider/Context"
import styles from './style.module.css'
import Button from "../../ui/Button/Button"

const CartPage = () => {
  const { 
    cart,
    removeFromCart, 
    updateQuantity,
    clearCart,
    totalPrice 
  } = useCart()
  
  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Ваша корзина пуста</h2>
        <Link to="/">
          <Button type='button' children={'Вернуться на главную'}/>
        </Link>
      </div>
    )
  }
  

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.products}>
          {cart.map(product => (
            <div key={product.id} className={styles.product}>
              <img src={product.image} alt={product.title}  />
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>Цена за шт: {product.price} руб.</p>
                
                <div className={styles.quantityControls}>
                  <Button type='button' className={styles.quantityButton} onClick={() => updateQuantity(product.id!, product.quantity - 1)} children={'-'}/>
                  <span className={styles.quantity}>{product.quantity} шт.</span>
                  <Button type='button' className={styles.quantityButton} onClick={() => updateQuantity(product.id!, product.quantity + 1)} children={'+'}/>
                </div>

                <p className={styles.productTotal}>
                  Итого: {product.price * product.quantity} $.
                </p>

                <Button type='button' onClick={() => removeFromCart(product.id!)} children={'Удалить товар'}/>
            </div>
          </div>))
          }
        </div>

        <div className={styles.cartSum}>
          <h2 className={styles.totalPrice}>
            Общая сумма: {totalPrice} $.
          </h2>
        
          <div className={styles.sumButtons}>
            <Button 
              type='button'
              onClick={clearCart} 
              className={styles.clearButton}
              children={'Очистить корзину'}
            />
            <Button 
              type='button'
              className={styles.checkoutButton}
              children={'Оформить заказ '}
            />
          </div>
        </div>
      </div>
    </main>
  )
}



export default CartPage
