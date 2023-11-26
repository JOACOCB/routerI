import React from 'react'

const Contacto = () => {
  return (
    <div className='contacto'>
      <div className='contacto1'>
        <h2>Cuentanos, <strong>¿En que te podemos ayudar?</strong></h2>
      </div>

      <div className='contacto1'>
      <label>Correo</label>
      </div>
      <div className='contacto1'>
      <input type="text" />
      </div>
      

      <div className='contacto1'>
      <label>Descripcion</label>
      </div>
      <div className='contacto1'>
      <input type="text" />
      </div>
      
      <div className='contacto'>
      <button className='boton' >Enviar</button>
      </div>


    </div>
    
  )
}

export default Contacto