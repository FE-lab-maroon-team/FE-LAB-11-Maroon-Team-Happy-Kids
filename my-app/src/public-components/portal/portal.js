import React , { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Icon } from 'antd';
import { Button } from '../button/index' 
=======
>>>>>>> 5da614af6d9fe82295232c6e81fa764e96b953aa
import  './portal.scss';
import { from } from 'array-flatten';

const portalRoot = document.getElementById('portal');

 export class Portal extends Component {
   
    el = document.createElement('div');
    
    componentDidMount = () =>{
        
           portalRoot.appendChild(this.el);
    };

    componentWillUnmount = () =>{
        portalRoot.removeChild(this.el);
    };
      
    render(){
        
        const { children , onClose } = this.props;
         const content  = (
         <div  className='modal'>
             <button className="close-btn" onClick={onClose}><Icon type="close" /></button>
             {children}
         </div>
         )
        return ReactDOM.createPortal(content,this.el)
    }
}
