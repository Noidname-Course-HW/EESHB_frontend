import React,{Component} from 'react';
import './Manage.css';
import {Route} from 'react-router-dom';
import NavBar_manage from '../component/NavBar_manage'
import SellerCheck from './SellerCheck'

 class Manage extends Component {
     constructor(props){
         super(props)
         this.state={

         }
     }

     render(){
         return(<div>
                <NavBar_manage/>
                <div style={{marginLeft:"100px"}}>
                <Route path="/manage/SellerCheck" component={SellerCheck}></Route>
                </div>
                
                </div>)
     }
}

export default Manage;