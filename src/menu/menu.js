import React, { Component } from 'react'
import Logo from '../img/home/logo.svg';
import LogoB from '../img/home/logoB.png';
import Courses from '../courses/courses.js';
import ReactDOM from 'react-dom';
import { Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom';
export default class Menu extends React.Component{
    state ={
        redirect: false,
        actualSite: ''
    }
    setRedirect =(key) =>{
        this.setState({
            redirect: true,
            actualSite: key
        })
    }
    renderRedirect =()=>{
        if(this.state.redirect){
            return <Redirect push to={this.state.actualSite} />
        }
    }
    render(){
        return (
            <Router>
                {this.renderRedirect()}
                    <div className={this.props.color}>
                <div className="flex bg-transparent w-full ">
                <div className="container mx-auto ">
                <div className="flex items-center justify-between w-full h-24">
                    <div>
                        {this.props.logo ? <img src={Logo}/>: <img src={LogoB}/>}
                    </div>

                    <div className="hidden sm:flex sm:items-center">
                    <a href="../index" 
                    onClick={()=>this.setRedirect('/')} 
                    className={this.props.textColor}>
                    Aliados
                    </a>
                    <a  href=""
                        onClick={()=>this.setRedirect('/courses')}    
                        className={this.props.textColor}>
                        Cursos
                    </a>
                    <a href="../index"
                    className={this.props.textColor}>
                        Talleres</a>
                    <a href="../index" 
                    className={this.props.textColor}>
                        Eventos
                        </a>
                    </div>
                    
                </div>
                
                </div>
            </div>
            </div>
            </Router>
        )
}
}


