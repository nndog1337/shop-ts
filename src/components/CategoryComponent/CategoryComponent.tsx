import styles from './style.module.css'
import { useEffect, useState } from "react"
import { fetchAllProducts } from '../../Api/Api'
import type { IProduct } from '../../interfaces/interfaces'
import Card from "../../ui/Card/Card"

interface CategoryComponentProps{
  category: string
}

const CategoryComponent = (Props: CategoryComponentProps) => {
  const {
    category
  } = Props

  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const data = async() => {
      try{
        setIsLoading(true)
        const res = await fetchAllProducts()
        const filteredProducts = res.filter((item) => item.category === category)
        console.log(res)
        setProducts(filteredProducts)
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
    <main>
      <div className="container">
        <div className={styles.wrapper}>
          {products.map(product =>(<Card key={product.id} src={`${product.image}`} title={product.title} price={product.price} id={product.id}/>))}
        </div>
      </div>
    </main>
  )
}

export default CategoryComponent
