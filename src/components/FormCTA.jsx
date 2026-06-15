import React from 'react'
import { useState, useEffect} from 'react'
import ErrorToast from './ErrorToast';
import { useRef } from 'react';


const FormCTA = ({form, setForm}) => {

    const phoneNumber = "5356661510";
    const [error, setError] = useState("");
    const nameRef = useRef();
    const phoneRef = useRef();
    const orderRef = useRef();
    const dateRef = useRef();


    useEffect(() => {
        setTimeout(() => {
            if (error.length>0) setError("")
        }, 2500);
    }, [error])
    
    const validateFields = (form) => {
        
        const focusRef = (ref) => {
            ref.current.focus();
        }

        if (!form.name) {
            setError("Por favor completa todos los campos");
            focusRef(nameRef);
            return false
        }
        if (!form.phone ) {
            setError("Por favor completa todos los campos");
            focusRef(phoneRef);
            return false
        }
        if ( !form.order ) {
            setError("Por favor completa todos los campos");
            focusRef(orderRef);
            return false
        }
        if ( !form.date) {
            setError("Por favor completa todos los campos");
            focusRef(dateRef);
            return false
        }

        if (!/^\+?\d{6,15}$/.test(form.phone)) {
            setError("Debe introducir un teléfono válido");
            focusRef(phoneRef);
            return false
        }
        if (form.order.length < 10) {
            setError("Debe agregar un pedido válido");
            focusRef(orderRef);
            return false
        }
        return true
    }
    
    const sendWhatsapp = (clientName, order, date, phone) => {

        const formattedDate = new Date(date).toLocaleDateString('es-ES', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
        const message = `Hola, mi nombre es ${clientName}. Quisiera hacer un pedido de:\n*${order}*\nPara la fecha: ${formattedDate}\nMi teléfono es: ${phone}`;

        const encodedMessage = encodeURIComponent(message);
        const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
        try {
            window.open(`https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`, '_blank');
            return true;
        } catch (error) {
            console.log('Error con window.open:', error);
        }
    }

    const handleSubmit = (e, form) => {
        e.preventDefault();
        if (!validateFields(form)) return;
        
        sendWhatsapp(form.name, form.order, form.date, form.phone)
    }


  return (
    <section className="cta-section" id="contact">
        <div className="container">
            <p data-aos="fade-up" data-aos-duration="700">Completa el formulario y nos pondremos en contacto contigo para crear el regalo perfecto.</p>
            
            <div className="cta-form" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
                <form id="pedido-form" method='POST'>

                    <div className="form-group">
                        <input type="text" id="nombre" name="nombre" required aria-required="true" placeholder='Nombre'
                        onChange={(e) => setForm({...form, name: e.target.value})} value={form.name} ref={nameRef}/>
                    </div>

                    <div className="form-group">
                        <input type="tel" id="telefono" name="telefono" required aria-required="true" placeholder='Tu teléfono'
                        onChange={(e) => setForm({...form, phone:e.target.value})} value={form.phone} ref={phoneRef}/>
                    </div>

                    <div className="form-group">
                        <textarea id="pedido" name="pedido" rows="3" placeholder="Queremos escuchar tus ideas para tu regalo" required aria-required="true"
                        onChange={(e) => setForm({...form, order:e.target.value})} value={form.order} ref={orderRef}></textarea>
                    </div>

                    <div className="form-group">
                        <label for="fecha">Fecha deseada para el pedido</label>
                        <input type="date" id="fecha" name="fecha" required aria-required="true" value={form.date}
                        onChange={(e) => setForm({...form, date:e.target.value})} ref={dateRef}/>
                    </div>

                    <div className="cta-buttons">
                        <button type="submit" className="btn whatsapp-btn" id="whatsapp-primary" aria-label="Enviar pedido por WhatsApp"
                        onClick={e => handleSubmit(e, form)}>
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>Enviar por WhatsApp</button>
                    </div>
                </form>
            </div>
        </div>
        <ErrorToast errorMessage={error}/>
    </section>
  )
}

export default FormCTA