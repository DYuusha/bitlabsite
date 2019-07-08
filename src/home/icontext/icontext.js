import React, { Component } from 'react'
import Aprende from '../../img/home/icn-aprende.svg'; 
import Idea from '../../img/home/icon-idea.svg'
import Interaccion from '../../img/home/icn-interaccion.svg';
import Networking from '../../img/home/icn-networking.svg';
import Oportunidad from '../../img/home/icn-oportunidad.svg';
import Eventos from '../../img/home/icn-eventos.svg'
export class icontext extends Component {
    render() {
        return (
            <div className='flex flex-col' style={{height: '25rem'}}>
                <div className='flex items-center justify-center h-64'>
                    <div className='w-1/5 items-center justify-center' style={{borderRight: '1px solid rgba(151, 151, 151, 0.2)'}}>
                        <div className='px-8 py-4 h-40 rounded border-2 border-transparent hover:border-solid hover:border-bluebit hover:text-bluebit'>
                            <img alt="icon of learning" src={Aprende}/>
                            <p className='mt-4'  style={{fontFamily:'Lato, sans-serif',  lineHeight:'26px'}}>
                                Aprende de forma práctica para generar portafolio 
                            </p>
                        </div>  
                    </div>
                    <div className='w-1/5 items-center justify-center' style={{borderRight: '1px solid rgba(151, 151, 151, 0.2)'}}>
                        <div className='px-8 py-4 h-40 rounded border-2 border-transparent hover:border-solid hover:border-bluebit hover:text-bluebit'>
                            <img alt="icon of idea" src={Idea}/>
                            <p className='mt-4'>
                                Aprende contenido de vanguardia del mundo digital 
                            </p>
                        </div>
                    </div>
                    <div className='w-1/5 items-center justify-center'>
                     <div className='px-8 py-4 h-40 rounded border-2 border-transparent hover:border-solid hover:border-bluebit hover:text-bluebit'>
                            <img alt="icon of interaction" src={Interaccion}/>
                            <p className='mt-4'>
                                Interacción con expertos de la industria
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center h-64'>
                    <div className='w-1/5 items-center justify-center ' style={{borderRight: '1px solid rgba(151, 151, 151, 0.2)'}}>
                        <div className='px-8 py-4 h-40 rounded border-2 border-transparent hover:border-solid hover:border-bluebit hover:text-bluebit'>
                            <img alt="icon of Events" src={Eventos}/>
                            <p className='mt-4 '>
                                Acceso a eventos exclusivos con entrenadores internacionales 
                            </p>
                        </div>  
                    </div>
                    <div className='w-1/5 items-center justify-center'>
                        <div className='px-8 py-4 h-40 rounded border-2 border-transparent hover:border-solid hover:border-bluebit hover:text-bluebit'>
                            <img alt="icon of networking" src={Networking}/>
                            <p className='mt-4'>
                                Networking con profesionales
                            </p>
                        </div>
                    </div>
                    <div style={{borderLeft: '1px solid rgba(151, 151, 151, 0.2)'}} className='w-1/5 items-center justify-center'>
                        <div className='px-8 py-4 h-40 rounded border-2 border-transparent hover:border-solid hover:border-bluebit hover:text-bluebit'>
                            <img  alt="icon of oportunity" src={Oportunidad}/>
                            <p className='mt-4'>
                                Oportunidad de pasantía en compañías de tecnología más importantes del país 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default icontext
