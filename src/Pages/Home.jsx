import React from 'react'
import { Link } from 'react-router-dom'
import { usePokeStates } from '../Context/Context'

const Home = () => {

    const {apiState} = usePokeStates()

    // let favs = localStorage.getItem('favs') || []
  //   const addFav = (poke) => {
  //     favs.push(poke)
  //     localStorage.setItem('favs', JSON.stringify(favs))
  // }

  return (
    <div>
        {apiState.map(poke => 
          <React.Fragment key={poke.name}>
            <Link to={'/poke/' + poke.name} key={poke.url}>
              <h4>{poke.name}</h4>
            </Link>
            {/* <button onClick={() => addFav(poke)}>⭐</button> */}
          </React.Fragment>
        )}
    </div>
  )
}

export default Home