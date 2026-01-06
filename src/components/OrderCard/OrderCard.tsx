import styles from './style.module.css'
import type { CartProps } from '../../interfaces/interfaces'

const OrderCard = ({product}: CartProps ) => {
  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.title}  />
      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
        <p>Цена за шт: {product.price} руб.</p>
        
        <div className={styles.quantityControls}>
          <span className={styles.quantity}>{product.quantity} шт.</span>
        </div>

        <p>
          Итого: {product.price * product.quantity} $.
        </p>
      </div>
    </div>
  )
}

export default OrderCard
