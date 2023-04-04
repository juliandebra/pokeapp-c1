import React from 'react'
import { usePokeStates } from '../Context/Context'

const Favs = () => {
    const {favState} = usePokeStates()
  return (
    <div>
        {favState.map(pokeFav => (
            <div>
            <h3>{pokeFav.name}</h3>
            <img src={pokeFav.sprites?.front_default} alt=""/>
            </div>
        ))}
    </div>
  )
}

export default Favs