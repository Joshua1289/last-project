import React from 'react';

import Header from "../../share-components/header";
import Orderpages from "../../share-components/orderpages";


const Order = ()=>{
    return(
  <div>
    <Header/> 
    { <Orderpages/> }
  </div>
    )
}

export default Order;