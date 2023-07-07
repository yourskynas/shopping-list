import './App.css';
import Item from 'components/Item';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    {
      id: 1,
      title:'Шоколад',
      isAdded: false
    },
    {
      id: 2,
      title:'Яйца',
      isAdded: false
    },
    {
      id: 3,
      title:'Молоко',
      isAdded: false
    },
    {
      id: 4,
      title:'Зефир',
      isAdded: false
    }
  ])

  const deleteItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id)
    setItems(filteredItems)
  }

  const updateItem = (id) => {
    const elements = items.map((item) => {
      if(item.id === id) {
        return { ...item, isAdded: !item.isAdded }
      } else {
        return item
      }
    })

    setItems(elements)
  }

  return (
    <div className='textFontFamily'>
      <div>
        {items.length ===0 && (
            <div>Ваш список покупок пуст</div>
        )}
        {items.length > 0 && items.map((i, index) => {
            return (
              <Item key={i.id} item={i} index={index} updateItem={updateItem} deleteItem={deleteItem} />
            )
        })}
      </div>
    </div>
  );
}

export default App;
