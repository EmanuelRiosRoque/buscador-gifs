import React from 'react'

export default function GiftItem({title, url}) {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title == "" ? "Sin titulo" : title}</p>
    </div>
  )
}
