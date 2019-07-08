import React from 'react';
import './styles.css';
function Card(props) {
    return (
        <div className="lg:w-1/2 w-full flex mt-16 indCourses" >
            <div className="imageCourses md:w-1/3 h-48 h-auto w-48 flex-none bg-cover text-center overflow-hidden">
                <img className='imgCourses' src={props.image} />
            </div>
            <div className=" textCourses border-r border-t border-b 
            border-grey-light bg-white rounded-b rounded-b-none rounded-r flex flex-col justify-between leading-normal">
                <div className="p-5 bottomB flex-1">
                <div className="leading-normal font-medium text-xl mb-5 title montserrat text-xl ">{props.title}</div>
                <p className="text-black font-medium monserrat text-base mb-2">{props.instructor}</p>
                <p className="text-grey-darker monserrat text-sm">{props.description}</p>
                </div>
                <div className="flex justify-between items-center p-5 h-20 ">
                    <p className="text-black font-bold text-xl">{props.time}</p>
                <div className="text-sm">
                    <a className="border-2 cursor-pointer border-bluebit bg-transparent 
                    text-bluebit font-semibold py-2 
                    px-4 rounded hover:border-transparent hover:bg-purplebit hover:text-white">
                    Ver más</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card
