import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import OrderCard from '../OrderCard/OrderCard'
import { useCart } from '../Provider/Context'
import styles from './style.module.css'

const OrderForm = () => {
  const{ cart, totalPrice } = useCart()
  return (
    <form className={styles.form} action="">
      <div className={styles.cardWrapper}>
        {cart.map((product) => <OrderCard key={product.id} product={product}/>)}
      </div>
      <div className={styles.info}>
        <p>Итого: {totalPrice}$</p>
        <Input type='text' placeholder='Введите имя' required/>
        <Input type='number' placeholder='Введите номер телефона' required/>
        <Button type='submit' children={'Оформить заказ'}/>
      </div>
    </form>
  )
}

export default OrderForm
