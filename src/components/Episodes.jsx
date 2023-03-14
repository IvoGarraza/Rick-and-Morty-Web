import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Episodes/Cards'

const Episodes = () => {
  const [eps, setEps] = useState()
  const data = []
  const infoApi = async () => {
    try {
      const info = await axios.get('https://rickandmortyapi.com/api/episode')
      data.push(...info.data.results)
      const pages = info.data.info.pages
      console.log(pages)

      for (var i = 1; pages > i; i++) {
        var info2 = await axios.get(`https://rickandmortyapi.com/api/episode?page=${i+1}`)
        data.push(...info2.data.results)
        /* console.log('pasada', info2.data.results) */
      }
      /* console.log('data:', data) */
      setEps(data)
    } catch (error) {
      console.log(error)
      return (error)
    }
  }

  useEffect(() => {
    infoApi()
  }, [])

  return (
    <div>
      {!eps ? 'cargando' : eps.map((ep) => {
        return (
          <Cards episodes={ep}></Cards>
        )
      })}
    </div>
  )
}

export default Episodes