import { useParams } from 'react-router'
import CardPage from '../CardPage/CardPage'

const Card = () => {
  const {id} = useParams<{id:string}>()
  const productId = id ? +id : undefined
  if(productId===undefined){
    return <p>ошибка запроса</p>
  }
  return (
    <CardPage id={productId}/>
  )
}

export default Card
