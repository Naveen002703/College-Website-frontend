
import React from 'react'
import HomePageImages from './HomePageImages'
import Departments from './Departments'

const Home = () => {
  return (
    <div>
        <h1 className='text-center bg-success-subtle p-3'>WELCOME CHAITANYA DEEMED TO BE UNIVERSITY</h1>
        <HomePageImages/>
        <h1>DEPARTMENTS :</h1>

        <Departments/>
    </div>
  )
}

export default Home
