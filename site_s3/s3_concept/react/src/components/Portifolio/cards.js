import React from 'react'
import CardPortifolio from './CardItem'
import './style.css'
import img1 from '../../assets/images/movel1.jpg'
import img2 from '../../assets/images/movel2.jpg'

function Cards() {
  return (
    <div className='cards' id="portifolio">
      <h1>Olhe o Nosso Portifolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardPortifolio
              src={img1}
              text='Cozinha feita com alguma madeira que nao sei o nome'
              label='Madeira'
              path='/'
            />
            <CardPortifolio
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

export default Cards;
