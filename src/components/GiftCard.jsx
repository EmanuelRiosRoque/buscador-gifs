import { useEffect, useState } from "react"

import GiftItem from "./GiftItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";
// import { getGifs } from "../helpers/getGifs.js"

export default function GiftCard({ category }) {
  
    const {images, isLoading} = useFetchGifs(category);
    

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map(( image ) => (
                       <GiftItem
                            key={image.id}
                            {...image} // Espacir los elementos de la imagen 
                       />
                    ))
                }
            </div>
        </>
    )
}
