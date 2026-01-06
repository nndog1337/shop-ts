import styles from './style.module.css'
import { useCart } from '../Provider/Context'
import Button from '../../ui/Button/Button'
import type { CartProps } from '../../interfaces/interfaces'


const CardInCart = ({product}:CartProps) => {
  const { 
      removeFromCart, 
      updateQuantity,
    } = useCart()
  return (
    <div key={product.id} className={styles.product}>
      <img src={product.image} alt={product.title}  />
      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
        <p>Цена за шт: {product.price} руб.</p>
        
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
    </div>
  )
}

export default CardInCart
