import React from 'react';
import { Button } from '../Button/index';
import './style.css';
import img from '../../assets/images/hero.svg'


function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={img} className="hero-img" alt="Imagem de apresentação" />
      


      <h1>Moveis Sob Medida</h1>
      <p>Vem fazer um orçamento</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
          Clique em mim
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          >
          Vem ser Feliz 
        </Button>
      </div>
          </div>
   
  );
}

export default HeroSection;