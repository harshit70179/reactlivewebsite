import React, {useState} from 'react'
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// import { increament } from '../stores/cartSlice';
// import { remove } from '../store/cartSlice';
import { remove, increament, decrement, grandtotals, finddiscount } from '../stores/cartSlice';
export default function Shoppingcart() {
  const dispatch = useDispatch();
    const {item: products, totalamount, grandtotal, discountcoupon, totaldiscount}= useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
    const handleincrement = (id) => {
        dispatch(increament(id));
        console.log("click11");
        if(totaldiscount===0){}
        else{
        dispatch(grandtotals())
        dispatch(finddiscount())
        }

    };
    const handledecreament = (id) => {
      dispatch(decrement(id));
      console.log("click11");
      if(totaldiscount===0){}
        else{
        dispatch(grandtotals())
        dispatch(finddiscount())
        }
  };
 const [coupondiscount, setcoupondiscount] = useState("");

 function discount(e){
  e.preventDefault();
  if(coupondiscount===discountcoupon){
    dispatch(grandtotals())
    dispatch(finddiscount())
 
 
  }
  else{
    alert("invalid coupon code")
  }
    
 
 }
//  if(totaldiscount!==0){
//   setdisplay(false)
//   }
    // var sum =0;
    // products.map((item)=>{
                   
    //   sum= sum+item.price*item.quantity;
    //    return sum

    //  })
    //  dispatch(total(sum))
  return (
    <>
    <div className="bread-crumb">
    <div className="container">
        <ul>
            <li>
                <a href="index.php">Home</a>
            </li>
            <li>
                Your Shopping Cart
            </li>
        </ul>
    </div>
    </div>
    
    
    <section>
        <div className="container">
        <div className="row">
                <div className="col-12">
                    <div className="product-heading">
                        
                        <h2 className="py-3">Shopping Cart</h2>
                    </div>
                </div>
             </div>
             <div className="shoppingcart">
            <div className="tt-shopcart-table-02">
            {products.map((item, index)=>{
              console.log(item)
                // settotal(item.quantity*item.price)
                 return(
                 
                <table key={item.id}>
                  <tbody><tr>
                      <td>
                        <div className="tt-product-img">
                          <img src={item.image} alt=""/>
                        </div>
                      </td>
                      <td>
                        <h2 className="tt-title">
                          <a href="/">A Line Mustard Chanderi Checks Kurta With Gota Lace</a></h2>
                          <p className="tt-price">Size: S</p>
                        <ul className="tt-list-parameters">
                          <li>
                            <div className="tt-price"><span className="money">₹ 1,170</span></div>
                          </li>
                          <li>
                            <div className="btn-group quantity-btn" role="group" aria-label="Basic example">
                                <button type="button" className="btn ">-</button>
                                <button type="button" className="btn ">{item.quantity}</button>
                                <button type="button" className="btn" >+</button>
                              </div>
                          </li>
                          <li>
                            <div className="tt-price subtotal"><span className="money">₹ 1,170</span></div>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <div className="tt-price"><span className="money">₹ {item.save<1 ? <span>{item.price}</span>:<span><del><i className="fa fa-rupee"></i>{item.price}</del><i className="fa fa-rupee"></i>{(item.price)-((item.price*item.save)/100)}</span>}</span></div>
                      </td>
                      <td>
                        <div className="btn-group quantity-btn" role="group" aria-label="Basic example">
                            <button type="button" className="btn " onClick={()=>{handledecreament(item.id)}}>-</button>
                            <button type="button" className="btn ">{item.quantity}</button>
                            <button type="button" className="btn" onClick={()=>{handleincrement(item.id)}}>+</button>
                          </div>
                      </td>
                      <td>
                        <div className="tt-price subtotal"><span className="money">₹ {item.state<1?item.quantity*item.price:item.quantity*((item.price)-((item.price*item.save)/100))}</span></div>
                      </td>
                      <td>
                        <button   title="Delete" className="tt-trash" onClick={()=>handleRemove(item.id)}>
                            {/* <i className="fa fa-trash"></i> */}
                            delete
                        </button>
                      </td>
                    </tr></tbody>
                </table>
        
               
             
                 )
            })}
           
         <div className="tt-shopcart-btn">
                  <div className="col-left">
                    <Link className="btn-link" to="/"><i className="fa fa-reply"></i>CONTINUE SHOPPING</Link>
                  </div>
                  <div className="col-right">
                    <button className="btn-link svg-icon-delete-inline"  >
                        <i className="fa fa-trash"></i> CLEAR SHOPPING CART
                    </button>
                    
                  </div>
                </div>
        </div>
        </div>
        
    
        <div className="row">
            <div className="col-md-6">
                  <div className="note">
                    <h3>
                        Note
                    </h3>
                    <p>Add special instructions for your order...</p>
                    <form action="">
                        <textarea rows="10" cols=""></textarea>
                    </form>
                  </div>
            </div>
            <div className="col-md-6">
                <div className="grand-total">
                 
                     <table className="tt-shopcart-table01">
                      <tbody>
                        
                        <tr id="subtotal">
                          <th>{totalamount===0?"":"SUBTOTAL"}</th>
                          <td><span className="money"> {totalamount===0?"":"₹"}{totalamount===0?"":totalamount}</span></td>
                        </tr>
                        <tr id="subtotal">
                          <th>{totaldiscount===0?"":"Discount"}</th>
                          <td><span className="money"> {totaldiscount===0?"":<> <span>-</span>  <span>₹</span></>}{totaldiscount===0?"":totaldiscount}</span></td>
                        </tr>
                      </tbody>
                    
                      <tfoot>
                        <tr id="grandtotal">
                          <th>{totaldiscount===0?"":"GRAND TOTAL"}</th>
                          <td>{totalamount===0?"":<span className="money">₹ {grandtotal}</span>}</td>
                        </tr>
                      </tfoot>
                    </table>
    
                      <div style={{"width":"100% !important", "display":totaldiscount===0?"block": "none"}} className="discountify_manual">
                        <form onSubmit={discount}>
                        <div style={{"width":"182px"}} className="dscnt_manual_fldwrap">
                        <input type="text" name="coupon_discount"  className="dscnt_manual_field  " placeholder="Discount Code" autoComplete="off" value={coupondiscount} onChange={(e)=>setcoupondiscount(e.target.value)}/>
                    </div>
                    <div  className="dscnt_manual_btnwrap">
                        <button type="submit" className=" btn dscnt_manual_applybtn discountify_aply_voucher  " style={{"paddingTop":"2.9px !important"}}>APPLY </button>
                    </div>
                    </form>
                   
                </div>
                <button type="submit" className="btn btn-lg" name="checkout"><span className="icon icon-check_circle"></span>PROCEED TO CHECKOUT</button>
    
                </div>
            </div>
        </div> 
    
        </div>
    </section>
    </>
  )
}
