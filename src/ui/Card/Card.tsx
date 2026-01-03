import styles from './style.module.css'

interface CardProps{
  src: string
  title: string
  price: number
}

const Card = (Props: CardProps) => {
  const {
    src,
    title,
    price
  } = Props
  return (
    <article className={styles.Article}>
      <div className={styles.imgWrapper}><img src={src} alt="" /></div>
      <div className={styles.infoWrapper}>
        <p>{title}</p>
        <p>{price}$</p>
      </div>
    </article>
  )
}

export default Card
