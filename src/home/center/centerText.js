import React, { Component } from 'react'

export function centerText(props) {

        return (
            <div onScroll={props.onScroll} className='flex justify-center items-center' style={{height: '25rem'}}>
                <div className='flex flex-col text-center items-center sm:w-1/2'>
                    <h2 className='text-4xl font-bold leading-tight' style={{maxWidth: '25rem'}}>
                        Aprende de la mano de profesionales
                    </h2>
                    <p className='text-lg mt-8' style={{fontFamily:'Lato, sans-serif',  lineHeight:'26px'}}>
                    Academia de entrenamiento para trabajos en el mundo digital. 
                    En BitLab puedes acceder a cursos y talleres en las áreas de 
                    desarrollo de <strong className='text-bluebit'>software, estrategia digital, diseño y emprendimiento. </strong>
                    Nuestras clases son desarrolladas por profesionales y expertos del 
                    rubro brindando educación integral con un enfoque profesional y práctico.
                    </p>
                </div>
            </div>
        )
}

export default centerText
