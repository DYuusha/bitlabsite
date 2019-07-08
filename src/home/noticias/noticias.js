import React from 'react';
import Open from '../../img/home/open-house.jpg';
import Shape from '../../img/home/shape-events.png';
import './styles.css';
export default function noticias() {
    return (
        <div className="w-full h-screen" >
            <div className="flex-1 mx-auto h-screen items-center justify-center lg:px-12 mt-8" 
            style={{backgroundImage: `url(${Shape})`,backgroundRepeat: 'no-repeat', 
                backgroundPosition:'center',  backgroundPositionX: '-1px'
                }}>

            <div className="flex justify-center  items-center h-screen">
                <div className="flex maxImage lg:w-1/2 bg-transparent h-64" 
                style={{backgroundImage: `url(${Open})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition:'center'
                }}>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 p-12 pt-4 bg-transparent h-64">
                    <div className="max">
                        <h2 className="text-4xl font-bold mb-4 monserrat">Noticias</h2>
                        <h3 className="text-3xl font-bold mb-2 monserrat">OPEN HOUSE - BOOTCAMP</h3>
                        <p className="mb-4 text-sm">5:00 p.m.  |  8 de febrero de 2019</p>
                        <p className="text-sm">Conoce nuestros entrenadores, recibe información de nuestros próximos
                        cursos, descuentos especiales de bienvenida y comparte con nuestro 
                        invitado internacional 
                        <strong className='text-bluebit'> Google Expert</strong>
                        </p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
