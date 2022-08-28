
import React, {useEffect, useState } from 'react'
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { add, finddiscount, grandtotals, total } from '../stores/cartSlice';
import { fetchProducts, increament, decreament } from '../stores/productslice';

export default function Viewinfo() {
    const {id}=useParams();
    // console.log(id);
    const dispatch = useDispatch();
    const {data: products} = useSelector((state) => state.product);
    const {totaldiscount}= useSelector((state) => state.cart);
    

    useEffect(() => {
        // fetchProducts()
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);
   const [size, setsize] = useState("S");
   const Size=(value)=>{
            setsize(value)
   }

  
//   console.log(typeof productdetails)
//   console.log(products)
      
//   setproductList(...productList,productdetails)
//   console.log(productList);

const handleincrement = (id) => {
    dispatch(increament(id));
};
 const handledecreament=(id)=>{
        dispatch(decreament(id))
 }
const handleAdd = (product) => {
    dispatch(add(product));
    dispatch(total());
    if(totaldiscount===0){

    }
    else{
        dispatch(finddiscount());
        dispatch(grandtotals())
    }
   
};
  
  return (
    <>
    <div className="bread-crumb">
<div className="container">
    <ul>
        <li>
            <a href="index.php">Home</a>
        </li>
        <li>
          Product Name
        </li>
    </ul>
</div>
</div>
<section className="py-5">

    <div className="container">
        {/* {console.log(id)} */}
        {products.filter((item)=>{return item.id===Number(id)}).map((product)=>{
                // setproductList([product])
               return(
                <div className="row" key={product.id}>
                <div className="col-md-6">
                    <div className="row row1">
                        <div className="col-md-4">
                        <div className="releated-img" >
                                        <a data-zoom-id="p-img" href="img/product/product-12.jpg"
                                            data-image="img/product/product-12.jpg"><img
                                                src="img/product/product-12.jpg" alt=""/></a>
                                        <a data-zoom-id="p-img" href="img/product/product-13.jpg"
                                            data-image="img/product/product-13.jpg"><img
                                                src="img/product/product-13.jpg" alt=""/></a>
                                                <a data-zoom-id="p-img" href="img/product/product-14.jpg"
                                            data-image="img/product/product-14.jpg"><img
                                                src="img/product/product-14.jpg" alt=""/></a>
                                        
                                    </div>
                        </div>
                        <div className="col-md-8">
                        
                            <a href="img/product/product-11.jpg" className="MagicZoom"
                                                    id="p-img" data-options="cssClass:mz-show-arrows;"> <img src={product.image} alt=""/></a>
                        </div>
                    </div>
                    {/* <!-- <div className="MagicSlideshow" data-options="selectors: right; selectors-style: thumbnails; selectors-size: 50px;">
                        <img src="./assets/img/product/product-12.jpg"/>
                        <img src="./assets/img/product/product-11.jpg"/>
                        <img src="./assets/img/product/product-13.jpg"/>
                     
                    </div> --> */}
                   
                </div>
                <div className="col-md-6">
                    <div className="product-description">
                        <p>SKU: JKPLZ4735-S</p>
                    <h3>Self Weave Rayon Grey Co-Ords Set</h3>
                    <p className="price"><i className="fa fa-rupee"></i>2500 <del>5000</del></p>
                    <p className="category">Category: <strong>Western Wear</strong></p>
                    <p className="size">Size: {size}</p>
                    <ul className="multi-size pb-3">
                        <li className={size==="S"?"active": ""}>
                            <button onClick={()=>Size("S")}>S</button>
                        </li>
                        <li className={size==="M"?"active": ""}>
                            <button onClick={()=>Size("M")}>M</button>
                        </li>
                        <li className={size==="L"?"active": ""}>
                            <button onClick={()=>Size("L")}>L</button>
                        </li>
                        <li className={size==="XL"?"active": ""}>
                            <button onClick={()=>Size("XL")}>XL</button>
                        </li>
                        <li className={size==="XXL"?"active": ""}>
                            <button onClick={()=>Size("XXL")}>XXL</button>
                        </li>
                    </ul>
                    {/* <!-- <p className="color">color: <img src="./assets/img/red-img.png" alt=""></p>
                    <ul className="multi-color pb-3">
                        <li className="">
                            <button><img src="./assets/img/red-img.png" alt=""></button>
                        </li>
                        <li>
                            <button><img src="./assets/img/green-img.png" alt=""></button>
                        </li>
                        <li>
                            <button><img src="./assets/img/red-img.png" alt=""></button>
                        </li>
                        <li>
                            <button ><img src="./assets/img/red-img.png" alt=""></button>
                        </li>
                        <li>
                            <button><img src="./assets/img/green-img.png" alt=""></button>
                        </li>
                    </ul> --> */}
                     <div className="shipping">
                        <button data-toggle="modal" data-target="#shipping">Shipping</button>
                        <button data-bs-toggle="modal" data-bs-target="#enquiry"><i className="fa fa-envelope"></i> About This product</button>
    
                     </div>
                     {/* onClick={()=>increment(product.id)} */}
                    <div className="add-btn">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn " onClick={()=>handledecreament(product.id)}>-</button>
                            <button type="button" className="btn ">{product.quantity}</button>
                            <button type="button" className="btn" onClick={()=>handleincrement(product.id)}>+</button>
                          </div>
                          <button className="add" onClick={() => handleAdd(product)}> Add To Cart</button>
                    </div>
                    <p className="add-wishlist">
                        <a href="/">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        </span>
                        Add To Wishlist
                    </a>
                    </p>
                    <p className="description">Description</p>
                    <p className="description-body">Beige Yarn Dyed Stripes Sleeve Less Top Has Mandrain Collar And Placket With Buttons Ans Tassels, Gathers In Front Shoulder, Sleeves Less, Curverd Hemline</p>
                    <hr/>
                    <p className="description">Additional Information</p>
                    <table>
                       
                            <tbody>
                                <tr>
                                    <td>
                                        Top Fabric:</td>
                                    <td>	Cotton Blend</td>
                                </tr>
                                <tr>
                                    <td>Sleeve Length:</td>
                                    <td>Sleeveless</td>
                                </tr>
                                <tr>
                                    <td>Sleeve Styling:</td>
                                    <td>Sleeveless</td>
                                </tr>
                                <tr>
                                    <td>Neck:</td>
                                    <td>Mandarin Collar</td>
                                </tr>
                                <tr>
                                    <td>Color:</td>
                                    <td>Beige</td>
                                </tr>
                                <tr>
                                    <td>Length:</td>
                                    <td>Hip</td>
                                </tr>
                            </tbody>
                        
                    </table>
                    </div>
                </div>
    
            </div>
               )
        })}


       
    </div>
</section>
    </>
  )
}
