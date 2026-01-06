import { Link } from 'react-router'
import styles from './style.module.css'
import Button from '../Button/Button'
import type { IProduct } from '../../interfaces/interfaces'
import { useCart } from '../../components/Provider/Context'



const Card = ({product}: {product:IProduct}) => {
  const priceButton = `${product.price}$`
  const { cart, addToCart } = useCart()
  
  const handleAddToCart = () => {
    addToCart(product)
  }
  return (
    <article className={styles.Article}>
      <div className={styles.imgWrapper}><Link to={`/card/${product.id}`}><img src={product.image} alt="" /></Link></div>
      <div className={styles.infoWrapper}>
        <Link to={`/card/${product.id}`}><p>{product.title}</p></Link>
        {cart.find(({id}) => id === product.id) 
        ? <Button type='button' children={'В корзине'} className={`${styles.button} ${styles.buttonActive}`} onClick={handleAddToCart}/> 
        : <Button type='button' children={priceButton} className={styles.button} onClick={handleAddToCart}/>}
      </div>
    </article>
  )
}

export default Card
