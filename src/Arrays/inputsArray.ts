{/* <input type="text" placeholder='Название'/>
            <input type="text" placeholder='Цена'/>
            <input type="text" placeholder='Описание'/>
            <input type="text" placeholder='Категория'/>
            <input type="text" placeholder='image'/> */}


export const inputArray = [
  { 
    id: 'title' as const, 
    placeholder: 'Название', 
    type: 'text' as const 
  },
  { 
    id: 'price' as const, 
    placeholder: 'Цена', 
    type: 'number' as const 
  },
  { 
    id: 'description' as const, 
    placeholder: 'Описание', 
    type: 'text' as const 
  },
  { 
    id: 'category' as const, 
    placeholder: 'Категория', 
    type: 'text' as const 
  },
  { 
    id: 'image' as const, 
    placeholder: 'Ссылка на изображение',
    type: 'text' as const 
  },
] as const