import React from 'react'
import { Link } from 'react-router-dom'
import { usePokeStates } from '../Context/Context'

const Home = () => {

    const {pokeList} = usePokeStates()
    console.log(pokeList)
  return (
    <div>
        {pokeList.map(poke => <Link to={'/poke/' + poke.name} key={poke.url}><h4>{poke.name}</h4></Link>)}
    </div>
  )
}

export default Home