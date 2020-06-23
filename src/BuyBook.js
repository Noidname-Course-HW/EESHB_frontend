import React, { useState } from 'react';
import './BuyBook.css'
const BuyBook = () =>{
    let subjects = {
        'subject1':true,
        'subject2':true,
        'subject3':true,
    }
    const {currentOption, setCurrentOption} = useState("選擇一個科目");
    const {options,setOptions} = useState(subjects);
    const handleSelectChange = (e) => {
        let value = e.target.innerHTML;
        setOptions({...options,value:false,currentOption:true})
        setCurrentOption(value)
    }
    return(
        <div id="BuyBook_container">
            <h1 id="h1">選擇科目</h1>
                <div id="BuyBook_box">
                
                <form id="form1">
                    {/* <select name="YourLocation">
                    　<option value="1">電路學</option>
                    　<option value="2">微積分</option>
                    　<option value="3">普通物理學</option>
                    </select> */}
                    <li id="BuyBook_select">
                        {currentOption}
                        <ul id="BuyBook_options">
                        </ul>
                    </li>
                </form>
                {/* <p>     200元  x本</p>
                <p>     300元  x本</p>
                <p>     400元  x本</p>
                <p>     400元  x本</p>
                <h2>賣書時間</h2> */}
            </div>
        </div>
    )
}
export default BuyBook;