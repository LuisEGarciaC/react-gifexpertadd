import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp(){
  
  const [categorias, setCategories] = useState(['Samurai x']);

  return (
    <>
    
      <h2>GifExpertApp</h2>
      <AddCategory  setCategories={setCategories} />
      <hr />
      <ol>
        {
          categorias.map( category => (
            <GifGrid 
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
}


