import React, { Component } from 'react'
import Wall from '../../img/home/lents.png';
import Software from '../../img/home/software.svg';
import Estrategia from '../../img/home/estrategia.svg';
import Diseño from '../../img/home/diseño.svg';
import Emprendimiento from '../../img/home/emprendimiento.svg';
import Softwareb from '../../img/home/softwareb.svg';
import Estrategiab from '../../img/home/estrategiab.svg';
import Diseñob from '../../img/home/diseñob.svg';
import Emprendimientob from '../../img/home/emprendimientob.svg';
import ThemeButton from './ThemeButton';
export class theme extends Component {
    state={
        imageEm: Emprendimiento,
        imageDig: Estrategia,
        imageDi: Diseño,
        imageDes: Software,
  
    }
    hoverOn=(key,name)=>{
        this.setState({ 
            [key]: name
         });
    }
    hoverOff=(key,name)=>{ 
        this.setState({
            [key]: name });    
    }
    render() {
        return (
            <div className='flex' style={{height: '40rem'}}>
                <div className=' flex w-1/5 bg-white items-center '>
                    <img className='absolute' style={{width:'100%',maxWidth:489, height:'auto'}} src={Wall} />
                </div>
                <div className='flex flex-col w-4/5 bg-gray-300 justify-center items-center'>
                    <div className='flex w-1/2 '>
                        <p className='text-2xl' style={{maxWidth: '15em', fontFamily:'Montserrat, sans-serif', fontStyle:'normal', fontWeight:'700', lineHeight:'36px'}}>
                            ¿Qué estas interesado en aprender?</p>
                    </div>
                    <div className='flex w-1/2 mt-8'>
                    <ThemeButton
                    text={'Desarrollo de Software'}
                    stateimage={'imageDes'}
                    imagea={Software}
                    imageb={Softwareb}
                    image={this.state.imageDes}
                    hoverOn={this.hoverOn}
                    hoverOff={this.hoverOff}
                    />
                    <ThemeButton
                    text={'Estrategia Digital'}
                    stateimage={'imageDig'}
                    imagea={Estrategia}
                    imageb={Estrategiab}
                    image={this.state.imageDig}
                    hoverOn={this.hoverOn}
                    hoverOff={this.hoverOff}
                    /> 
                    </div>
                    <div className='flex w-1/2 '>
                    <ThemeButton
                    text={'Diseño'}
                    stateimage={'imageDi'}
                    imagea={Diseño}
                    imageb={Diseñob}
                    image={this.state.imageDi}
                    hoverOn={this.hoverOn}
                    hoverOff={this.hoverOff}
                    />
                        <ThemeButton
                    text={'Emprendimiento'}
                    stateimage={'imageEm'}
                    imagea={Emprendimiento}
                    imageb={Emprendimientob}
                    image={this.state.imageEm}
                    hoverOn={this.hoverOn}
                    hoverOff={this.hoverOff}
                    />
                    </div>
                </div>
            </div>
        )
    }
}

export default theme
