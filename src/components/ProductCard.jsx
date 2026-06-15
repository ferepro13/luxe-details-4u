import React from 'react'

const ProductCard = ({name, price, path, description="", buttonAction}) => {
  return (
    <div className="product-card" itemScope itemType="https://schema.org/Product" data-aos="zoom-in" data-aos-delay="100">
        <div className="product-image">
            <img src={path} alt="imagen de producto no encontrada" itemProp="image" loading="lazy"/>
        </div>
        <div className="product-info">
            <h3 itemProp="name">{name}</h3>
            {description!="" && <span>{description}</span>}
            <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <span itemProp="price" content="valor del precio">{price}</span>
                <meta itemProp="priceCurrency" content="CUP"/>
            </p>
            <button className="product-btn" aria-label="Pedir nombre de producto"
            onClick={() => buttonAction(name)}>Encargar</button>
        </div>
    </div>
  )
}

export default ProductCard