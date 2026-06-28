import React from 'react';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import FormScrollContext from '../contexts/FormScrollContext';

const FormCTA = () => {
  const formSectionRef =
    useContext(FormScrollContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useFormContext();

  const phoneNumber = '5352029814';

  const sendWhatsapp = ({
    name,
    order,
    date,
    phone
  }) => {
    const formattedDate =
      new Date(date).toLocaleDateString(
        'es-ES',
        {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      );

    const message =
      `Hola, mi nombre es ${name}.` +
      `\nQuisiera hacer un pedido de:` +
      `\n*${order}*` +
      `\nPara la fecha: ${formattedDate}` +
      `\nMi teléfono es: ${phone}`;

    const encoded =
      encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encoded}`,
      '_blank'
    );
  };

  const onSubmit = (data) => {
    sendWhatsapp(data);
  };

  return (
    <section
      className="cta-section"
      id="contact"
      ref={formSectionRef}
    >
      <div className="container">
        <p>
          Completa el formulario y nos
          pondremos en contacto contigo.
        </p>

        <div className="cta-form">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Nombre"
                {...register('name', {
                  required:
                    'Debe ingresar su nombre.'
                })}
              />

              {errors.name && (
                <span className="field-error">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <input
                type="tel"
                placeholder="Tu teléfono"
                {...register('phone', {
                  required:
                    'Debe ingresar un teléfono.',

                  pattern: {
                    value:
                      /^\+?\d{6,15}$/,

                    message:
                      'Debe introducir un teléfono válido.'
                  }
                })}
              />

              {errors.phone && (
                <span className="field-error">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <textarea
                rows="3"
                placeholder="Queremos escuchar tus ideas para tu regalo"
                {...register('order', {
                  required:
                    'Debe escribir un pedido.',

                  minLength: {
                    value: 10,
                    message:
                      'El pedido es demasiado corto.'
                  }
                })}
              />

              {errors.order && (
                <span className="field-error">
                  {errors.order.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="fecha">
                Fecha deseada para el pedido
              </label>

              <input
                id="fecha"
                type="date"
                {...register('date', {
                  required:
                    'Seleccione una fecha.'
                })}
              />

              {errors.date && (
                <span className="field-error">
                  {errors.date.message}
                </span>
              )}
            </div>

            <div className="cta-buttons">
              <button
                type="submit"
                className="btn whatsapp-btn"
              >
                <i className="fab fa-whatsapp" />
                Enviar por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormCTA;