import React from 'react'
import CardStep from './CardItem'
import './style.css'
import img1 from '../../assets/images/movel1.jpg'
import img2 from '../../assets/images/movel2.jpg'

function StepContainer() {
  return (
    <div className='cards' id="etapas">
      <h1>Etapas</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardStep
              src={img1}
              text='Cozinha feita com alguma madeira que nao sei o nome'
              label='Madeira'
              path='/'
            />
            <CardStep
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

export default StepContainer;
