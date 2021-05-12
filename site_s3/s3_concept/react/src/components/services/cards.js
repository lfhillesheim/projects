import React from 'react'
import CardSevices from './CardItem'
import './style.css'
import img1 from '../../assets/images/movel1.jpg'
import img2 from '../../assets/images/movel2.jpg'

function ServiceContainer() {
  return (
    <div className='cards' id="services">
      <h1>Serviços</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardSevices
              src={img1}
              text='Cozinha feita com alguma madeira que nao sei o nome'
              label='Madeira'
              path='/'
            />
            <CardSevices
              src={img2}
              text='A mesma cozinha só que eu angulo diferente'
              label='massa'
              path='/'
            />
                      
            
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceContainer;
