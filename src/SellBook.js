import React from 'react';

const SellBook = () =>{
          
    
    return(
        <div>
            
            <form action="/action_page.php">
            <label for="fname">First name:</label>
            {/* 還沒限制字數 */}
            <input type="text" id="fname" name="fname"  maxlength="9" required="required"/><br/><br/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"  maxlength="9" required="required"/><br/><br/>

            <label for="category">類別:</label>
            <select id="category" require="required">
                <option value="grade1">大一必修</option>
                <option value="grade2">大二必修</option>
                <option value="grade3">大三必修</option>
                <option value="seleccompul">複選必修</option>
                <option value="selective">選修</option>
                <option value="otherselective">其他選修</option>
                </select>
                <br/>
                <br/>

            <label for="category">科目:</label>
            <select id="category" require="required">
                <option value="LDSC">交換電路與邏輯設計</option>
                {/* 還不會按照上方選擇改變此處(onchan?ge) */}
                {/* ["交換電路與邏輯設計", "計算機程式設計", "生物科學通論", "普通化學丙", "普通物理學甲", "微積分甲上"];
                ["電子學(一)", "電磁學(一)", "工程數學-線性代數", "工程數學-微分方程"];
                ["資料結構", "演算法"];
                ["工程數學-離散數學", "工程數學-複變"]; */}
                </select><br/><br/>
            
            數量：<input type="number" name="amount" value="1" min="1" require="required"/><br/><br/>
            書價：<blockquote>
                200元<input type="radio" name="price" value="200"/><br/>
                300元<input type="radio" name="price" value="300"/><br/>
                500元<input type="radio" name="price" value="500"/><br/>
                700元<input type="radio" name="price" value="700"/><br/>
                </blockquote>

            其他事項：<input type="text" name="comment" size="100" maxlength="100"/><br/><br/>
            {/* 不知圖片怎麼找*/}
            驗證碼：<div><img src="" id="captcha"/></div> 
            <input type="checkbox" name="condition" require="required"/>我已同意二手書網站條款<br/><br/><br/>

            <input type="submit" value="送出表單"/>
            </form>
        </div>
    )
}
export default SellBook;