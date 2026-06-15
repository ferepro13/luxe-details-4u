import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRef } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import History from "./components/History"
import ProductsGallery from './components/ProductsGallery';
import FormCTA from './components/FormCTA';

import FormScrollContext from './contexts/FormScrollContext';

const App = () => {
  const methods = useForm({ //contiene todos los metodos q se pueden extraer de useForm 
    mode: 'onBlur',
    /*defaultValues: {
      name: '',
      phone: '',
      order: '',
      date: ''
    }*/
  });

  const formSectionRef = useRef(null);

  return (
    <FormProvider {...methods}>
      <FormScrollContext.Provider
        value={formSectionRef}
      >
        <Header />
        <Hero />
        <History/>
        <ProductsGallery />
        <FormCTA />
      </FormScrollContext.Provider>
    </FormProvider>
  );
};

export default App;