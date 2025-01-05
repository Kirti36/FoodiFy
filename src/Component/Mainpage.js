import React, { useState } from 'react'
import MealCards from './MealCards';

const Mainpage = () => {
    const [data,setData] = useState()
    const [search,setSearch] = useState()
    const [msg,setMsg] = useState("")

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const myFun = async () => {
        if(search==""){
            setMsg("Please Enter something..!")

        }else{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsonData = await get.json()
        // console.log(jsonData.meals);
        setData(jsonData.meals)
    }
}
    // console.log(data);
  return (
    <>
     <div className="food-background">
        <div className="food-item"></div>
        <div className="food-item"></div>
        <div className="food-item"></div>
        <div className="food-item"></div>
        <div className="food-item"></div>
        <div className="food-item"></div>
        <div className="food-item"></div>
        <div className="food-item"></div>
        <div className="food-item"></div>
        <div className="food-item"></div>
      </div>
      <h1 className="food">Foodify</h1>
    <div className="container">
    <div className="searchBar">
    <input type="text" placeholder="Enter your dish..." onChange={handleInput}/>
            <button onClick={myFun}>Search</button>

        </div>

        <h4 className="error">{msg}</h4>

        <div>
            <MealCards details = {data}/>

        </div>
      
        </div>

    </>
    
  )
}

export default Mainpage
