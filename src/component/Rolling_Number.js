import React,{useEffect,useState}from 'react';
import "./Rolling_Number.css"

const Rolling_Number = (props) =>{
    // const [num, setNum] = useState(props.num)
    const readNum = () =>{
        let rolling_num = document.getElementById("Rolling_Number_num"+props.price)
        if(rolling_num){
        rolling_num.style.top = "-"+(8+89*(props.num))+"px";
        }
    }
    // useEffect(() => {
    //     readNum(num)
    // },[num])
    readNum()
    return(
        <div id="Rolling_Number_container">
           <span id={"Rolling_Number_num"+props.price} className="Rolling_Number_num">
           0
           1
           2
           3
           4
           5
           6
           7
           8
           9
           </span>
        </div>
    )
}
export default Rolling_Number;