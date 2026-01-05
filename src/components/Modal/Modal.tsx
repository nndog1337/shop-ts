
import styles from './style.module.css'
import Button from '../../ui/Button/Button'
import { inputArray } from '../../Arrays/inputsArray'
import Input from '../../ui/Input/Input'
import type { IProduct } from '../../interfaces/interfaces'
import { useState } from 'react'

interface ModalProps{
  onSubmit: (product: IProduct) => void
}

const Modal = (Props: ModalProps) => {
  const{
    onSubmit
  } = Props

  const [addProduct, setAddProduct] = useState<IProduct>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  })

  const fieldKeys: (keyof IProduct)[] = [
    'title', 'price', 'description', 'category', 'image'
  ]

  const handleInputChange = (field: keyof IProduct, value: string | number) => {
    setAddProduct(prev => ({
      ...prev,
      [field]: field === 'price' ? Number(value) : value
    }))
  }

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    const productWithId = {
      ...addProduct
    }
    onSubmit(productWithId)
  }
  return (
    <div>
      <div className={styles.backDrop}>
        <div className={styles.modal}>
          <h2>Создать товар</h2>
          <form className={styles.form} onSubmit={submitForm}>
            <div className={styles.inputWrapper}>
              {inputArray.map((el, index) => {
              const field = fieldKeys[index]
              return (
                <Input 
                  key={index}
                  className={styles.input}
                  type={el.type}
                  placeholder={el.placeholder}
                  value={String(addProduct[field] || '')}
                  onChange={(e) => 
                    handleInputChange(
                      field,
                      el.type === 'number' 
                        ? Number(e.target.value) 
                        : e.target.value
                    )
                  }
                />
              )
            })}
            </div>
            <Button type='submit' children={'Создать товар'} className={styles.button}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
