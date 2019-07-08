import React from 'react'
import Arrow from '../../img/home/arrow.png';
 const ThemeButton = (props) => {

        return (
            <div 
                onMouseEnter={()=>props.hoverOn(props.stateimage, props.imageb)} 
                onMouseLeave={()=>props.hoverOff(props.stateimage, props.imagea)} 
                className='flex w-1/2 theme-button group hover:bg-bluebit'
            >
                <div className='flex w-4/12 justify-center'>
                    <img src={props.image} style={{maxWidth:56, maxHeight:36}} />
                </div>
                <div className='flex w-7/12 justify-start'>
                    <p className='group-hover:text-white '>{props.text}</p>
                </div>
                <div className='flex justify-center items-center h-full w-1/12  group-hover:bg-cyan'>
                    <img src={Arrow} style={{maxWidth:17, maxHeight:17}} />       
                </div>        
            </div>
        )
}

export default ThemeButton
