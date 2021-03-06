import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'antd'
import  './portal.scss';


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
