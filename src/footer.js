import React from 'react'
import Logo from './img/home/logo.svg'
import Face from './img/home/facebook.svg'
import Insta from './img/home/instagram.svg'
import Call from './img/home/call.svg'
export default function footer() {
    return (
        <div className="flex w-full" style={{height:'63px', backgroundColor:'#070512'}}>
                <div className="flex w-full lg:w-1/3 justify-center items-center" style={{height:'63px'}}>
                        <img src={Logo} />
                </div>
                <div className="flex w-full lg:w-1/3 justify-center items-center" style={{height:'63px'}}>
                        <p className="text-white">Todos los derechos reservados, 2019 © BITLAB</p>
                </div>
                <div className="flex w-full lg:w-1/3 justify-center items-center" style={{height:'63px'}}>
                        <img src={Call}  style={{width:'28px',height:'28px'}}/>
                        <p className="text-white ml-1">2512-2274 / 22004519 </p>
                        <img className="ml-2 cursor-pointer" src={Face}  style={{width:'28px',height:'28px'}}/>
                        <img className="ml-2 cursor-pointer" src={Insta}  style={{width:'30px',height:'30px'}}/>
                </div>
        </div>
    )
}
