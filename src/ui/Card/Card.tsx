import { Link } from 'react-router'
import styles from './style.module.css'
import Button from '../Button/Button'

interface CardProps{
  src: string
  title: string
  price: number
  id: number
}

const Card = (Props: CardProps) => {
  const {
    src,
    title,
    price,
    id
  } = Props
  const priceButton = `${price}$`
  return (
    <article className={styles.Article}>
      <div className={styles.imgWrapper}><Link to={`/card/${id}`}><img src={src} alt="" /></Link></div>
      <div className={styles.infoWrapper}>
        <Link to={`/card/${id}`}><p>{title}</p></Link>
        <Button type='button' children={priceButton} className={styles.button}/>
      </div>
    </article>
  )
}

export default Card
