import React, {useEffect, useState} from 'react'
import Card from './Cards/Card'
import Navbar from './Navbar/Navbar'
import axios from 'axios'

const Characters = () => {
    const [todos, setTodos] = useState()
    const data = []
    const infoApi = async () =>{
        

        try {
            const info = await axios.get('https://rickandmortyapi.com/api/character')
            data.push(...info.data.results)
            const pages = await info.data.info.pages
            for(var i = 1; pages > i; i++){
                var info2= await axios.get(`https://rickandmortyapi.com/api/character?page=${i+1}`)
                data.push(...info2.data.results)
                console.log(info2.data.results)
            }
            console.log(data)
            setTodos(data)
            
        } catch (error) {
            console.log(error)
            return error
        }
        /* setTodos(info.data.results) */
    }
   
   useEffect(()=>{
     infoApi()
   },[])
  console.log(todos)
  return (
    <div>
        <Navbar></Navbar>
        <div className='grid grid-cols-2 sm:grid-cols-6 grid-flow-row gap-4 gap-x-4 mx-5 my-8'>
            {!todos ? 'cargando' : todos.map((character) =>{
                return(
                    <Card character={character}>
                
                    </Card>
                )
            })}
        </div>
    </div>
  )
}

export default Characters