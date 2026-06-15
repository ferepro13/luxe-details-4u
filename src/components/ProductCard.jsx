import React from 'react';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import FormScrollContext from '../contexts/FormScrollContext';

const ProductCard = ({
  name,
  price,
  path,
  description = ''
}) => {
  const formSectionRef =
    useContext(FormScrollContext);

  const {
    getValues,
    setValue,
    setFocus
  } = useFormContext();

  const handleOrder = () => {
    const currentOrder =
      getValues('order');

    const newOrder =
      currentOrder
        ? `${currentOrder}\n${name}`
        : name;

    setValue(
      'order',
      newOrder,
      {
        shouldDirty: true,
        shouldValidate: true
      }
    );

    formSectionRef.current
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

    requestAnimationFrame(() => {
      setFocus('order');
    });
  };

  return (
    <div className="product-card" itemScope itemType="https://schema.org/Product" data-aos="zoom-in" data-aos-delay="100">
      <div className="product-image">
        <img
          src={path}
          alt={name}
          loading="lazy"
          itemProp="image"
        />
      </div>

      <div className="product-info">
        <h3>{name}</h3>

        {description && (
          <span>{description}</span>
        )}

        <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="price" content="valor del precio">{price}</span>
            <meta itemProp="priceCurrency" content="CUP/USD"/>
        </p>

        <button
          className="product-btn" aria-label="Pedir este producto"
          onClick={handleOrder}
        >
          Encargar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;