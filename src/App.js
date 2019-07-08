import React, {Component} from "react";
import "./index.css";
import Menu from './menu/menu.js';
import Background from './img/home/homebanner.jpg';
import TextBanner from './img/home/digitalskill.svg';
import ButtonTranspa from './home/buttonTranspa/index';
import CenterText from './home/center/centerText.js';
import IconText from './home/icontext/icontext.js';
import Themes from './home/theme/theme.js';
import Section from './home/cursos/section';
import Noticias from './home/noticias/noticias';
import Footer from './footer';
export default class Home extends Component {
  state={
    color: 'font-sans w-full m-0 fixed bg-transparent',
    textColor: 'text-sm font-semibold hover:text-bluebit border-b-4 border-transparent p-4 hover:border-grayhov mr-20 text-white',
    logo: true,
  }

  listenScrollEvent = e => {
    if (window.scrollY > 333) {
      this.setState({color: 'font-sans w-full m-0 fixed bg-white',
      textColor: 'text-sm font-semibold hover:text-bluebit border-b-4 border-transparent p-4 hover:border-grayhov mr-20 text-black',

    logo: false
  })
    }

    else if(window.scrollY < 333 ) {
      this.setState({color: 'font-sans w-full m-0 fixed bg-transparent',
      textColor:'text-sm font-semibold hover:text-bluebit border-b-4 border-transparent p-4 hover:border-grayhov mr-20 text-white',
      logo: true
    })
    }
    
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
 
  render(){
  return (
  <div className='h-screen'>
     <div className='flex flex-col h-screen' style={
      {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    }
      >
      <Menu color={this.state.color} 
      textColor={this.state.textColor}
      logo={this.state.logo}
      />
      <div className='flex  justify-start items-center sm:mt-10 sm:ml-10 md:mt-56 md:ml-56 '>
        <img className='flex sm:max-w-sm md:max-w-md lg:max-w-xl' alt='digitalskill' src={TextBanner}/>
      </div>
      <div className='flex sm:ml-10 md:ml-56'>
        <ButtonTranspa/>
      </div>
      
  </div>
  <CenterText />
  <IconText/>
  <Themes />
  <Section/>
  <Noticias/>
  <Footer/>
  </div>
  )}
  };

