
import SectionProduct from '../../ui/SectionProduct/SectionProduct'
import styles from './style.module.css'
import { useEffect, useState } from 'react'
import { Products } from '../../Api/Api'
import {Img} from '../imagesArray/imagesArray'
import type { IProduct } from '../../interfaces/interfaces'
import Card from '../../ui/Card/Card'

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const data = async() => {
      try{
        setIsLoading(true)
        const res = await Products()
        setProducts(res)
      }
      catch(e){
        setError('Ошибка загрузки данных')
      }
      finally{
        setIsLoading(false)
      }
    }
    data()
  },[])

  return (
    <main >
      <div className='container'>
        <section className={styles.items}>
          {Img.map(img =>(<SectionProduct key={img.src} src={`${img.src}`} children={img.title} link={`${img.link}`}/>))}
        </section>
        <section className={styles.cards}>
          {products.map(product =>(<Card key={product.id} src={`${product.image}`} title={product.title} price={product.price}/>))}
        </section>
      </div>
    </main>
  )
}

export default Home
