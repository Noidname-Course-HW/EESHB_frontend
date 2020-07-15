import React,{Component} from 'react';
import './Orders.css';
import OrderStatusBar from '../component/OrderStatusBar'

// const test_data ={
    
//         id:3,
//         name:'Tim',
//         stdId:'B08901072',
//         category:'大一必修',
//         subject:'微積分甲上下',
//         price:200,
//         status:1
    
// }

class Orders extends Component {
    constructor(props){
        super(props);
        this.state = {
            stdId:'',
            id:'',

        }
    }
    handleInputChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState(
            {
                [name]:value
            },
            console.log(
                this.state
            )
        )
    }

    handleSearchStdId = (e) => {
        e.preventDefault();
        //TODO
    }

    handleSearchid = (e) => {
        e.preventDefault();
        //TODO
    }

    renderStatusBar = (data) => {
        let order_list = []
        //TODO
        return order_list
    }

    render() {
        return(
            <div id="Orders_container">
                <p id="Orders_title">訂單查詢</p>
                <ul id="Orders_search_box">
                    <li>
                        <p>Student ID</p>
                        <button onClick={this.handleSearchStdId}>Search</button>
                        <input type="text" name="stdId"></input>
                    </li>
                    <li>
                        <p>Order's ID</p>
                        <button onClick={this.handleSearchid}>Search</button>
                        <input type="text" name="id"></input>
                    </li>
                </ul>
                <table id="Orders_table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>stdId</td>
                            <td>category</td>
                            <td>subject</td>
                            <td>price</td>
                            <td>status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <OrderStatusBar data={test_data} index="1"/> */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Orders;