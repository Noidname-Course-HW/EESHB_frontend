import React, { useState } from 'react';
import Select from "./component/Select";
import Rolling_Number from './component/Rolling_Number'
import './BuyBook.css'
const BuyBook = () =>{
    // let subjects = {
    //     'subject1':true,
    //     'subject2':true,
    //     'subject3':true,
    // }
    const [book_num, setBookNum] = useState({
        "200":0,
        "300":0,
        "500":0,
        "700":0
    })
    const subject=[
        "Calculus","Electric Circuits","Physics","Switching Circuits and Logic Design"
    ]
    return(
        <div id="BuyBook_container">
            <h1 id="h1">選擇科目</h1>
            <div id="BuyBook_search_bar">
                <form id="form1">
                    <Select id="BuyBook" defaultOption="Choose an Option" options={subject}/>
                    {/* <select name="YourLocation">
                    　<option value="1">電路學</option>
                    　<option value="2">微積分</option>
                    　<option value="3">普通物理學</option>
                    </select> */}
            
                </form>
            </div> 
                <div id="BuyBook_box">
                <div id="BuyBook_200" class="BuyBook_price">
                    $200
                    <Rolling_Number price="200" num={book_num['200']}/>
                    <span className="Rolling_Number_text">本</span>
                </div>
                <div id="BuyBook_300" class="BuyBook_price">
                    $300
                    <Rolling_Number price="300" num={book_num['300']}/>
                    <span className="Rolling_Number_text">本</span>
                </div>
                <div id="BuyBook_500" class="BuyBook_price">
                    $500
                    <Rolling_Number price="500" num={book_num['500']}/>
                    <span className="Rolling_Number_text">本</span>
                </div>
                <div id="BuyBook_700" class="BuyBook_price">
                    $700
                    <Rolling_Number price="700" num={book_num['700']}/>
                    <span className="Rolling_Number_text">本</span>
                </div>
                {/* <p>     200元  x本</p>
                <p>     300元  x本</p>
                <p>     400元  x本</p>
                <p>     400元  x本</p>
                <h2>賣書時間</h2> */}
            </div>
            {/* <button onClick={(e)=>{
                e.preventDefault()
                setBookNum({
                    "200":book_num["200"]+1,
                    "300":book_num["300"]+1,
                    "500":book_num["500"]+1,
                    "700":book_num["700"]+1
                })
            }}>111</button> */}
        </div>
    )
}
export default BuyBook;