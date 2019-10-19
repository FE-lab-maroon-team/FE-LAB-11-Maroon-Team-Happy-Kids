import React,{ Component } from 'react';
import { Button } from '../../button/index';
import './donation.scss'
import { connect } from 'react-redux';
import { createDonate } from '../../../actions/donateAction'



 class Donate extends Component {
 state = {
    payment:{
        name:'',
        date:null,
        sum:0,
    }
 }

 handleUserNameChange = evt =>{this.setState({payment:{
     ...this.state.payment,
     name: evt.target.value
 }})}
 handleUserSumChange = evt =>{this.setState({payment:{
    ...this.state.payment,
    sum: evt.target.value
}})}
 handleUserDate = evt => {this.setState({payment:{
    ...this.state.payment,
    date: evt.target.value
}})}

 handleSubmitValue = event =>{
     console.log(this.state.payment)
     console.log(this.state)
     event.preventDefault();
 } 
 handleSubmit = e =>{
     e.preventDefault();
     this.props.createDonate(this.state.payment);
 }

 
    render(){

        return (
            <div className='container'>
                <h1 className="title">Оплата</h1>
                <form onSubmit={this.handleSubmit}>
                 <label id="name_label">Введіть їм'я</label>
                 <input type="text" placeholder="Введіть їм'я" name="user_name" value={this.state.name} onChange={evt => this.handleUserNameChange(evt)} required></input>
                 <label id="date_label">Введіть дату</label>
                 <input type="date"  name="user_date" value={this.state.date} onChange={evt => this.handleUserDate(evt)} required></input>
                 <label  id="sum_label">Введіть cуму внеску</label>
                 <input type="number" min={20} name="user_sum"  placeholder="Введіть cумму в гривнях" value={this.state.sum} onChange={evt => this.handleUserSumChange(evt)} required></input>
                 <Button onClick={this.handleSubmitValue} text="Пожертвувати"></Button>
                 </form>
            </div>
        )
    }
    
}
const mapDispatchToProps = (dispatch) =>{
    return {
        createDonate: (project) => dispatch(createDonate(project))
    }
}


export const Donation = connect(null,mapDispatchToProps)(Donate)