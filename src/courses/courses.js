import React, { Component } from 'react'
import Menu from '../menu/menu';
import Checkbox from './checkbox';
import PropTypes from 'prop-types';
import checkboxes from './checkboxes';
import CoursesJson from './coursesComplete.json';
import Card from '../home/cursos/card';
import Vacio from './vacio';
import Footer from '../footer';
export default class Courses extends Component {
    state={
        color: 'font-sans w-full m-0 fixed bg-white',
        textColor: 'text-sm font-semibold hover:text-bluebit border-b-4 border-transparent p-4  hover:border-grayhov mr-20 text-black',
        logo: false,
        checkedItems: new Map(),
        sectionActual: '0',
        desarrollo:false,
        estrategia: false,
        design: false,
        emprendimiento:false,
        empty: false,
        ActualCurses: CoursesJson
      }
    validateSection=  async (keyA, keyB, keyC, keyD, actual)=>{
       await this.setState({
            [keyA]:actual,
            [keyB]:false,
            [keyC]:false,
            [keyD]:false
        });
        if(this.state.desarrollo===true){
            this.setState({sectionActual:'1'});
            this.typeCourseFilter('1');
        }
        else if(this.state.estrategia===true){
            this.setState({sectionActual:'2'});
            this.typeCourseFilter('2');
         }
         else if(this.state.design===true){
            this.setState({sectionActual:'3'});
            this.typeCourseFilter('3');
         }
         else if(this.state.emprendimiento===true){
            this.setState({sectionActual:'4'});
            this.typeCourseFilter('4');
         }
         else{
            this.setState({ActualCurses: CoursesJson})
            this.setState({sectionActual:'0'});
         }
        
      }
      payMethodFilter =(priceState)=>{
        const CoursesJson = this.state.ActualCurses;
        let filteredList = Object.keys(CoursesJson)
        .filter(list => { return CoursesJson[list].tipo==priceState})
          const allowed = filteredList;
          const filtered = Object.keys(CoursesJson)
            .filter(key => allowed.includes(key))
            .reduce((obj, key) => {
              obj[key] = CoursesJson[key];
              return obj;
            }, {});
            this.setState({ActualCurses: filtered})
      }
      typeCourseFilter =async (typeState)=>{
            let filteredList = Object.keys(CoursesJson)
            .filter(list => { return CoursesJson[list].categoria===typeState})
           // console.log(filteredList);
              const allowed = filteredList;
              const filtered = Object.keys(CoursesJson)
                .filter(key => allowed.includes(key))
                .reduce((obj, key) => {
                  obj[key] = CoursesJson[key];
                  return obj;
                }, {});
                await this.setState({ActualCurses: filtered});
                if(this.isEmpty(this.state.ActualCurses)){
                    this.setState({
                        empty: true
                    })
                }
                else{
                    this.setState({
                        empty: false
                    })
                }
      }
      isEmpty=(obj)=> {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
      handleChange=e=> {
        let checkedItems = this.state.checkedItems;
        const item = e.target.name;
        const isChecked = e.target.checked;
        const checked= checkedItems.set(item, isChecked);
        this.setState({ checkedItems: checked });

        if(this.state.sectionActual==='0' && this.state.checkedItems.get('Gratis') && this.state.checkedItems.get('Pagado')){
            console.log("seccion 0 ambos chequeados");
            this.setState({ActualCurses: CoursesJson});
            if(this.isEmpty(this.state.ActualCurses)){
                this.setState({
                    empty: true
                })
            }
            else{
                this.setState({
                    empty: false
                })
            }
        }
        else if(this.state.sectionActual==='0'&&!this.state.checkedItems.get('Gratis') && !this.state.checkedItems.get('Pagado')){
            console.log("seccion 0 ninguno chequeado");
            this.setState({ActualCurses: CoursesJson});
            if(this.isEmpty(this.state.ActualCurses)){
                this.setState({
                    empty: true
                })
            }
            else{
                this.setState({
                    empty: false
                })
            }
        }
        else if( this.state.sectionActual!=='0'&&!this.state.checkedItems.get('Gratis') && this.state.checkedItems.get('Pagado')){ //no es seccion 0, chequeado 
           // console.log(this.state.sectionActual);
           console.log("seccion d pagado chequeado");
            
            this.typeCourseFilter(this.state.sectionActual);
            this.payMethodFilter(true);
        }
        else if(this.state.sectionActual!=='0' && this.state.checkedItems.get('Gratis') && !this.state.checkedItems.get('Pagado')){ //no es seccion 0, gratis chequeado
            
            console.log("seccion diferente gratis chequeado");
            this.typeCourseFilter(this.state.sectionActual);
            this.payMethodFilter(false);
        }
        else if(this.state.sectionActual!=='0' && !this.state.checkedItems.get('Gratis') && !this.state.checkedItems.get('Pagado')){ //no es seccion 0, ambos no chequeado
            console.log('ninguno chequeado en seccion diferente');
            this.typeCourseFilter(this.state.sectionActual);
        }
        else if( this.state.sectionActual==='0' && this.state.checkedItems.get('Gratis') && !this.state.checkedItems.get('Pagado')){
            console.log('seccion 0 pago no chequeado');
            this.payMethodFilter(true);
        }
        else if(this.state.sectionActual==='0' && !this.state.checkedItems.get('Gratis') && this.state.checkedItems.get('Pagado')){
            console.log('seccion 0 gratis no chequeado');
            this.payMethodFilter(false);
        }
        else{
            this.setState({ActualCurses: CoursesJson})
            this.typeCourseFilter(this.state.sectionActual);
        }
      }
      
        
      
    render() {
        return (
                <div className="h-screen flex flex-col " >
                    <Menu 
                    color={this.state.color} 
                    textColor={this.state.textColor}
                    logo={this.state.logo}
                    />
                    <div className="w-full mt-24 flex flex-col border-b border-t border border-grayborder justify-center items-center" style={{height:'68px'}}>
                        <div className="flex container justify-center items-center " style={{height:'68px'}}>
                            {this.state.desarrollo ?
                            <p 
                            className="text-sm px-12 font-semibold text-bluebit">
                                Desarrollo de software
                             </p>:
                             <p onClick={()=>this.validateSection('desarrollo','estrategia','design','emprendimiento',true)} 
                             className="text-sm px-12 font-semibold hover:text-bluebit text-black" >
                             Desarrollo de software
                             </p>
                            }
                            {this.state.estrategia ?
                            <p 
                            className="text-sm px-12 font-semibold text-bluebit">
                                Estrategia Digital
                             </p>:
                             <p onClick={()=>this.validateSection('estrategia','desarrollo','design','emprendimiento',true)} 
                             className="text-sm px-12 font-semibold hover:text-bluebit text-black" >
                             Estrategia Digital
                             </p>
                            }
                            {this.state.design ?
                            <p
                            className="text-sm px-12 font-semibold text-bluebit">
                                Diseño
                             </p>:
                             <p onClick={()=>this.validateSection('design','estrategia','desarrollo','emprendimiento',true)} 
                             className="text-sm px-12 font-semibold hover:text-bluebit text-black" >
                             Diseño
                             </p>
                            }
                            {this.state.emprendimiento ?
                            <p 
                            className="text-sm px-12 font-semibold text-bluebit">
                                Emprendimiento
                             </p>:
                             <p onClick={()=>this.validateSection('emprendimiento','design','estrategia','desarrollo',true)} 
                             className="text-sm px-12 font-semibold hover:text-bluebit text-black" >
                             Emprendimiento
                             </p>
                            }
                        </div>  
                    </div>
                    {
                        !this.state.empty ?
                    
                    <div className="w-full mb-32 flex justify-center">
                        <div className="flex container mt-20 flex-col">
                            <h2 className="text-3xl font-Monserrat font-bold">Cursos Disponibles</h2>
                            <p>Lorem ipsum Class quis, felis. Tempus egestas, massa ac, nunc a Aliquam at rutrum.</p>
                            <div className="absolute mt-10" style={{right:'20em'}}>
                                <React.Fragment>
                                {
                            Object.keys(checkboxes).map(item => (
                                <label className='px-2' key={checkboxes[item].key}>
                                
                                <Checkbox name={checkboxes[item].name} 
                                checked={this.state.checkedItems.get(checkboxes[item].name)} 
                                onChange={this.handleChange} 
                                />
                                {checkboxes[item].name}
                                </label>
                            ))
                            }
                                </React.Fragment>
                            
                        </div>
                        <div className='flex flex-wrap justify-between mt-8'>
                            {Object.keys(this.state.ActualCurses).map((course, index)=>{
                                return <Card
                                    key={index}
                                    title={this.state.ActualCurses[course].titulo}
                                    description={this.state.ActualCurses[course].descripcion}
                                    time={this.state.ActualCurses[course].tiempo}
                                    instructor={this.state.ActualCurses[course].instructor}
                                    image={this.state.ActualCurses[course].imagen}
                                />
                             })}
                        </div>

                        </div>
                    </div>: <Vacio/>
                       }
                       <Footer/>
                </div>        
        )
    }
}
