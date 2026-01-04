import React from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
  return (
    <main className='container'>
         <Header></Header>
         <ExploreMenu></ExploreMenu>
        <FoodDisplay></FoodDisplay>
    </main>
  )
}

export default Home