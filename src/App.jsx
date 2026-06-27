import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRef, useState } from 'react';

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

    const [navBarVisibility, setNavBarVisibility] = useState(false);

  return (
    <FormProvider {...methods}>
      <FormScrollContext.Provider
        value={formSectionRef}
      >
        <div onClick={e => {
          if (e.target?.className === "fas fa-bars") {setNavBarVisibility(!navBarVisibility)}
          else if (e.target?.className !== "list") {setNavBarVisibility(false)}
        }}>
          <Header navVisible={navBarVisibility}/>
          <Hero />
          <History/>
          <ProductsGallery />
          <FormCTA />
        </div>

      </FormScrollContext.Provider>
    </FormProvider>
  );
};

export default App;