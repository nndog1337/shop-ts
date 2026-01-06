import { Link } from "react-router"
import { useCart } from "../Provider/Context"
import styles from './style.module.css'
import Button from "../../ui/Button/Button"
import CardInCart from "../CardInCart/CardInCart"
import { useState } from "react"
import OrderForm from "../OrderForm/OrderForm"

const CartPage = () => {
  const { 
    cart,
    clearCart,
    totalPrice 
  } = useCart()

  const[order, setOrder] = useState(false)
  
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

  const onOrderHandler = () => {
    setOrder(prev => !prev)
  }
  

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.products}>
          {cart.map((product) => <CardInCart key={product.id} product={product}/>)}
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
              onClick={onOrderHandler}
            />
          </div>
        </div>
        {order ? <OrderForm/> : null}
      </div>
    </main>
  )
}



export default CartPage
