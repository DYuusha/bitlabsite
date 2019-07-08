import React from 'react'
import './style.css'
import Cara from '../img/home/face404.svg';
export default function Vacio() {
    return (
        <div className="flex h-screen  flex-col w-full justify-center text-center items-center">
            <img src={Cara}/>
            <h2 className="font-bold text-4xl text-gray404" style={{fontSize:'45px', lineHeight: '55px'}}>¡Lo sentimos!</h2>
            <p className="font-normal pt-4 text-sm text-gray404">Estamos trabajando en poder incluir más items que te ayuden a encontrar como formar tus habilidad tecnólogicas</p>
            <a href="/"className="bg-transparent 
               hover:bg-white text-graybutton 
               font-semibold 
               hover:text-bluebit 
               py-2 px-4 border 
               border-graybutton
               hover:border-bluebit
               cursor-pointer
               rounded mt-4 ">
                   Regresar a homepage</a>
        </div>
    )
}
