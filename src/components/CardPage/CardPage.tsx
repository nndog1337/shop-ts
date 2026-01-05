import styles from './style.module.css'
import { useEffect, useState } from "react"
import type { IProduct } from "../../interfaces/interfaces"
import { fetchProduct } from "../../Api/Api"
import Button from '../../ui/Button/Button'

interface CardPageProps{
  id:number
}

const CardPage = (Props:CardPageProps) => {
  const{
    id
  } = Props

  const [product, setProduct] = useState<IProduct | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const priceButton = `${product?.price}$`

  useEffect(() => {
    const data = async () =>{
      try{
        setIsLoading(true)
        const response = await fetchProduct(id)
        setProduct(response)
      }
      catch(error){
        setError('Ошибка загрузки данных')
      }
      finally{
        setIsLoading(false)
      }
  }
  data()
  },[id]
)

  if (isLoading) {
  return (
    <main className={styles.main}>
      <p style={{textAlign: 'center', fontSize: '32px'}}>Loading...</p>
    </main>
    );
  }

  if (error) {
    return (
      <main className={styles.main}>
        <p style={{textAlign: 'center', fontSize: '32px'}}>Error...</p>
      </main>
    );
  }


  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.info}>
          <div className={styles.imageWrapper}>
            <p>Category: {product?.category}</p>
            <img src= {product?.image} alt="" />
          </div>
          <div className={styles.name}>
            <p>Title: {product?.title}</p>
            <p>Price: {product?.price}</p>
            <p>Rating: {product?.rating?.rate}/5</p>
            <Button type='button' children={priceButton} className={styles.Buy}/>
          </div>
        </div>
        <p className={styles.desc}>{product?.description}</p>
      </div>
    </main>
  )
}

export default CardPage
