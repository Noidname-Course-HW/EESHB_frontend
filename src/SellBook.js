import React, { useState } from 'react';
import Axios from 'axios';
import './SellBook.css';
const SellBook = () =>{
    const [data,setData] = useState({
        firstname:'',
        lastname:'',
        subject:'',
        amount:'',
        others:''
    })
    const handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let newdata = data;
        // console.log(newdata);
        newdata[name]= value;
        setData(newdata);
        console.log(data);
        
    }
    const insertUser = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-react/add-user.php', 
            data
        )
            .then(function ({ data }) {
                if (data.success === 1) {
                    //this.context.addNewUser(data.id, this.username.value, this.useremail.value);
                    //event.target.reset();
                    alert(data.msg);
                }
                else {
                    alert(data.msg);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div id="SellBook_container">
            <div id="SellBook_box">
            <form onSubmit={insertUser}>
            <ul>
                <li className="SellBook_li">
                    <div>
                    <label for="fname">First name:</label>
                    <span className="separator"></span>
                    </div>
                {/* 還沒限制字數 */}
                    <div>
                    <input className="SellBook_box_input" type="text" id="fname" name="firstname"  maxlength="9" required="required" onChange={handleInputChange}/>
                    <span className="separator"></span>
                    </div>
                </li>
                <li className="SellBook_li">
                    <div>
                    <label for="lname">Last name:</label>
                    <span className="separator"></span>
                    </div>
                    <div>
                    <input className="SellBook_box_input" type="text" id="lname" name="lastname"  maxlength="9" required="required" onChange={handleInputChange}/>
                    <span className="separator"></span>
                    </div>
                </li>
                <li>
                <label for="category">類別:</label>
                <select id="category" require="required" className="SellBook_box_select" onChange={handleInputChange} name="category">
                    <option value="grade1">大一必修</option>
                    <option value="grade2">大二必修</option>
                    <option value="grade3">大三必修</option>
                    <option value="seleccompul">複選必修</option>
                    <option value="selective">選修</option>
                    <option value="otherselective">其他選修</option>
                    </select>
                </li>
                <li>
                <label for="category">科目:</label>
                <select id="category" require="required" className="SellBook_box_select" onChange={handleInputChange} name="subject">
                    <option value="LDSC">交換電路與邏輯設計</option>
                    {/* 還不會按照上方選擇改變此處(onchan?ge) */}
                    {/* ["交換電路與邏輯設計", "計算機程式設計", "生物科學通論", "普通化學丙", "普通物理學甲", "微積分甲上"];
                    ["電子學(一)", "電磁學(一)", "工程數學-線性代數", "工程數學-微分方程"];
                    ["資料結構", "演算法"];
                    ["工程數學-離散數學", "工程數學-複變"]; */}
                    </select>
                </li>
                <li className="SellBook_li">
                    <div>
                        <label>數量</label>
                        <span className="separator"></span>
                    </div>
                    <div>
                    <input className="SellBook_box_input" type="number" name="amount" min="1" require="required" onChange={handleInputChange}/>
                    <span className="separator"></span>
                    </div>
                </li>
                <li>書價：
                    {/* <ul>
                    <li>200元<input type="radio" name="price" value="200"/></li>
                    <li>300元<input type="radio" name="price" value="300"/></li>
                    <li>500元<input type="radio" name="price" value="500"/></li>
                    <li>700元<input type="radio" name="price" value="700"/></li>
                    </ul> */}
                    <table>
                        <tbody>
                            <tr>
                                <td>200元</td>
                                <td><input type="radio" name="price" value="200"/></td>
                                <td>300元</td>
                                <td><input type="radio" name="price" value="300"/></td>
                            </tr>
                            <tr>
                                <td>500元</td>
                                <td><input type="radio" name="price" value="500"/></td>
                                <td>700元</td>
                                <td><input type="radio" name="price" value="700"/></td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li style={{height:"5vh"}} className="SellBook_li">
                    <div>
                    <label>其他事項：</label>
                    <span class="separator"></span>
                    </div>
                    <div>
                    <input className="SellBook_box_input" type="text" name="comment" size="70" maxlength="70" onChange={handleInputChange}/>
                    <span class="separator"></span>
                    </div>
                {/* 不知圖片怎麼找*/}
                </li>
                <li>
                    驗證碼：<div><img src="" id="captcha"/></div> 
                </li>
                <li>
                <input type="checkbox" name="condition" require="required"/>我已同意二手書網站條款<br/><br/><br/>
                </li>
                <input type="submit" value="送出表單" onSubmit={insertUser}/>
                </ul>
            </form>
            
            </div>
        </div>
    )
}
export default SellBook;