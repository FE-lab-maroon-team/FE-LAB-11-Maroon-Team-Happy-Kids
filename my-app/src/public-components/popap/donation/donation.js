import React,{ Component } from 'react';
import { Button } from '../../button/index';
import './donation.scss'
import { connect } from 'react-redux';
import { createDonate } from '../../../actions/donateAction'



 class Donate extends Component {
 state = {
        donationName:'',
       donationDate:'',
       currentAmount:0,
 }


 handleUserNameChange = evt =>{this.setState({
     ...this.state,
     donationName: evt.target.value
 })}
 handleUserSumChange = evt =>{
         this.setState({
             ...this.state,
             currentAmount: evt.target.value
     })
}
 handleUserDate = evt => {this.setState({
    ...this.state,
    donationDate: evt.target.value
})}
 
  checkForValidInput = () =>{
      let summ = +this.state.currentAmount + +this.props.currentAmount;
      if(summ > +this.props.totalAmount){
          alert(`Йоу відвідувач успокойся! Сума не повинна перевищувати ${+this.props.totalAmount - +this.props.currentAmount} грн`);
      }else if(summ < +this.props.totalAmount){
          alert('Молодець!');
          this.props.createDonate({ ...this.state, 
             id:this.props.selectedEventId,
             currentAmount: summ
        });
       
      }
    }

 handleSubmitValue = () =>{
    this.checkForValidInput();
    this.props.onClose();
 } 


 
    render(){
        return (
            <div className='container'>
                <h1 className="title">Оплата</h1>
                <form>
                 <label id="name_label">Введіть їм'я</label>
                 <input type="text" placeholder="Введіть їм'я" name="user_name" value={this.state.donationName} onChange={evt => this.handleUserNameChange(evt)} required></input>
                 <label id="date_label">Введіть дату</label>
                 <input type="date"  name="user_date" value={this.state.donationDate} onChange={evt => this.handleUserDate(evt)} required></input>
                 <label  id="sum_label">Введіть cуму внеску</label>
                 <input type="text"  name="user_sum"  placeholder="Введіть cумму в гривнях" value={this.state.currentAmount} onChange={evt => this.handleUserSumChange(evt)} required></input>
                 <Button onClick={this.handleSubmitValue} text="Пожертвувати"></Button>
                 </form>
            </div>
        )
    }
    
}
const mapDispatchToProps = (dispatch) =>{
    return {
        createDonate: (payment) => dispatch(createDonate(payment))
    }
}


export const Donation = connect(null,mapDispatchToProps)(Donate)