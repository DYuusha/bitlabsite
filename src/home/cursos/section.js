import React, { Component } from 'react'
import Card from './card';
import Courses from '../../courses/courses.json';
export default class Section extends Component {
    
    render() {
        return (
            <div className='mx-auto container lg:px-12 mt-8'>
                <p className='text-2xl font-Monserrat font-bold'>Cursos Gratis</p>
                <div className=' flex flex-wrap justify-between mt-8'>
                    {Object.keys(Courses).map((course, index)=>{
                        return <Card
                            key={index}
                            title={Courses[course].titulo}
                            description={Courses[course].descripcion}
                            time={Courses[course].tiempo}
                            instructor={Courses[course].instructor}
                            image={Courses[course].imagen}
                        />
                    })}
                </div>
            </div>
        )
    }
}

