import React from 'react'
import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import ProductsGallery from './components/ProductsGallery'
import FormCTA from './components/FormCTA'
import History from "./components/History"

const App = () => {

  const [form, setForm] = useState({name:"", phone:"", order:"", date: ``})
  const addProductToOrder = (productName) => setForm({...form, order: form.order.length>0 ? `${form.order} \n${productName}` : productName});

  return (
    <>
        <Header/>
        <Hero/>

        <History/>
        <ProductsGallery productAction={addProductToOrder}/>
        <FormCTA form={form} setForm={setForm}/>
    </>
  )
}

export default App