import React, { useContext, useState } from 'react'
import "./ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../Components/item/item'
import all_products from '../assets/all_product'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="" height="20px"/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}

  
      </div>
     


      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory