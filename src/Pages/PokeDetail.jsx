import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeDetail = () => {
    const [poke, setPoke] = useState({})
    const {name} = useParams()
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name
    let favs = localStorage.getItem('favs') || []
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPoke(data))
    }, [])

    const addFav = () => {
        if(favs === []){
            favs = [poke]
        } else {
            let parsedFavs = JSON.parse(favs)
            favs = [...parsedFavs, poke]
        }
        localStorage.setItem('favs', JSON.stringify(favs))
    }

  return (
    <div>
        <h1>{poke.name}</h1>
        <img src={poke.sprites?.front_default} alt=""/>
        <br />
        <button onClick={addFav}>⭐</button>
    </div>
  )
}

export default PokeDetail