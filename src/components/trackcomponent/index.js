import React from "react";
import dataPlay from ".data/trackdata";

/*function NumberList(props) {
    const datas = props.datas;
    const listItems = datas.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  //const numbers = [1, 2, 3, 4, 5];
  const dataPlay
export default NumberList*/

const Trackdata = ()=> {
   return (
        <div>
            <h2>Pilihan</h2>
            <ul>
                {dataPlay.map((dataMusic, index)=>(
                    <li>
                        {index}.{dataPlay.album}
                    </li>
                ))}
                
            </ul>
        </div>
   )
}

export default Trackdata;
