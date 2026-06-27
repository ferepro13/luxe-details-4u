import React from 'react'
import ProductCard from './ProductCard'

const ProductsGallery = () => {
  return (
    <section className='products' id='catalog'>
        <div className="container">
            <h2 data-aos="fade-up" data-aos-duration="700">Nuestros Productos Destacados</h2>
            <h3>Ramos de Rosas Eternas</h3>
            <div className="products-grid">
              <ProductCard category="Ramos de Rosas Eternas" name="Mini 3 Rosas" price="3500 cup / 8 usd" path="src\\assets\\image35.1.webp"/>
              <ProductCard name="Regular 7 Rosas" price="6000 cup / 14 usd" path="src\\assets\\image31.1.webp"/>
              <ProductCard name="Estandar 10 Rosas" price="8000 cup / 18 usd" path="src\\assets\\image6.1.webp"/>
              <ProductCard name="Grande 15 Rosas" price="10500 cup / 25 usd" path="src\\assets\\image7.1.webp"/>
              <ProductCard name="Luxe 20-25 Rosas" price="15000 cup / 35 usd" path="src\\assets\\image33.2.webp"/>                
            </div>
            <h3>Cajas Corazón</h3>
            <div className="products-grid">
              <ProductCard category="Caja Corazón" name="Mini 3 Rosas y 3 Bombones" price="3500 cup / 8 usd" path="src\\assets\\image18.1.webp"/>
              <ProductCard category="Caja Corazón" name="Estandar 5 Rosas y 5 Bombones" price="6000 cup / 14 usd" path="src\\assets\\image21.1.webp"/>
              <ProductCard category="Caja Corazón" name="Grande 10 Rosas y 10 Bombones" price="15000 cup / 34 usd" path="src\\assets\\image21.2.webp"/>         
            </div>
            <h3>Cajas Sorpresa</h3>
            <p>El interior de las cajas está decorado con fotos y dedicatorias personales</p>
            <div className="products-grid">
              <ProductCard category="Caja Sorpresa" name="Estandar Color Blanco" price="2000 cup / 5 usd" path="src\\assets\\image8.2.webp"/>
              <ProductCard category="Caja Sorpresa" name="Estandar Forrada a Color" price="3000 cup / 7 usd" path="src\\assets\\image29.2.webp"/>
              <ProductCard category="Caja Sorpresa" name="Grande Color Blanco" price="2500 cup / 6 usd" path="src\\assets\\image29.1.webp"/>         
            </div>
            <p>Puede sumar cajas internas por 500 cup c/u. Puede agregar confituras por paquetes de 1000, rosas y bombones por 450 c/u.</p>

            <h3>Box Stitch y Angela</h3>
            <div className="products-grid">
              <ProductCard category="Box Stitch y Angela" name="Box Mini" description='Incluye peluche, globos pequeños y confituras' price="8000 cup / 18 usd" path="src\\assets\\image50.webp"/>
              <ProductCard category="Box Stitch y Angela" name="Box Medio" description='Incluye peluche, globos variados, 3 bombones y confituras' price="10000 cup / 23 usd" path="src\\assets\\image50.webp"/>
              <ProductCard category="Box Stitch y Angela" name="Box Grande" description='Incluye peluche grande, globos grandes y pequeños, 5 bombones y confituras' price="15000 cup / 34 usd" path="src\\assets\\image50.webp"/>         
            </div>
        </div>
    </section>
  )
}

export default ProductsGallery