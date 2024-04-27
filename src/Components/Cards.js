import React from 'react'
import Card from './Card'
function Cards({data,remove}) {
  return (
    <div className='cards'>
      {
        data.map((card=>{
            return <Card key={data.id} card={card} remove={remove}></Card>
        }))
      }
    </div>
  )
}

export default Cards

