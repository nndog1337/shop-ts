
import SectionProduct from '../../ui/SectionProduct/SectionProduct'
import styles from './style.module.css'
import { useEffect, useState } from 'react'
import { fetchPostProducts, fetchProducts } from '../../Api/Api'
import {Img} from '../../Arrays/imagesArray'
import Card from '../../ui/Card/Card'
import type { IProduct } from '../../interfaces/interfaces'
import Button from '../../ui/Button/Button'
import Modal from '../Modal/Modal'

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const data = async() => {
      try{
        setIsLoading(true)
        const res = await fetchProducts(10)
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

  const clickHandler = () => {
    setIsModalOpen(prev => !prev)
  }

  const addProduct = async (product: IProduct) => {
  try {
    const res = await fetchPostProducts(product)
    
    setProducts(prev => [...prev, {
      ...product,
      id: res.id || Date.now() 
    }])
    
    setIsModalOpen(false)
    
  } catch (error) {
    setError('Не удалось добавить товар')
  }
}

  


  return (
    <main >
      <div className='container'>
        <section className={styles.items}>
          {Img.map(img =>(<SectionProduct key={img.src} src={`${img.src}`} children={img.title} link={`${img.link}`}/>))}
        </section>
        <div className={styles.buttonWrapper}><Button type='button' children={'Добавить товар'} className={styles.button} onClick={clickHandler}/></div>

        <section className={styles.cards}>
          {isModalOpen ? <Modal onSubmit={addProduct}/> : null}
          {error ? <p style={{textAlign: 'center', fontSize: '32px'}}>Error...</p> :
          isLoading 
          ? <p style={{textAlign: 'center', fontSize: '32px'}}>Loading...</p> 
          : products.map(product =>(<Card key={product.id} product={product}/>))}
        </section>
      </div>
    </main>
  )
}

export default Home
