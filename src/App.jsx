import { } from 'react'


// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import Routers from './Routers/Routers'
import Navbar from './navbar/navbar'
import Part1 from './part1/part1'
import Part2 from './part2/part2'
import Part3 from './part3/part3'
import Part4 from './part4/part4'
import Part5 from './part5/part5'
import Part6 from './part6/part6'
import Part7 from './part7/part7'
import Part8 from './part8/part8'
import Footer from './footer/footer'
import Layout from './Routers/Layout'

import { useState, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
import { Router } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 1000)
  }, [])


  const [json, setJson] = useState([]);
  const [link, setLink] = useState("http://localhost:3000/texts");

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const req = await fetch(Link);
        const data = await req.json();
        setJson(data);
      } catch (error) {
        console.error(`Siz Olmoqchi bo'lgan ma'lumotda Xatolik bor`, error);
      }
    };
    dataFetch();
  }, [link]);



  return (
    <div className='App'>
      {
        loading ?
          <ClipLoader className='sss' color={'#D0021B'} loading={loading} size={100}/>
          :
          <div className='Pinch'>
            <Layout/>
            <Navbar/>
            <Part1 />
            <Part2 />
            <Part3 />
            <Part4 />
            <Part5 />
            <Part6 />
            <Part7 />
            <Part8 />
            <Footer />
          </div>
      }
      {json.map((texts) => (
    <Fragment key={texts}>
      <h3 className="text_11">{texts.map_txt}</h3>
      <h1></h1>
    </Fragment>
  ))}
    </div>

  )
}

export default App


