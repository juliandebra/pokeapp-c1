import React from 'react'
import { Link } from 'react-router-dom'
import { usePokeStates } from '../Context/Context'

const Navbar = () => {

  const {themeState, themeDispatch} = usePokeStates()
  console.log(themeState)

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_LIGHT'})
    } else {
      themeDispatch({type: 'SWITCH_DARK'})
    }
   
  }

  return (
    <div>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/favs'><h3>Favs</h3></Link>

        <button onClick={switchTheme}>{themeState.theme ? '☀' : '🌘'}</button>
    </div>
  )
}

export default Navbar