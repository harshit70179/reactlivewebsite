import React, {useEffect } from 'react'
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
// import { add } from '../store/cartSlice';
import { fetchProducts } from '../stores/productslice';
import { STATUSES } from '../stores/productslice';
import { Link } from 'react-router-dom';
export default function Home() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

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

    // const handleAdd = (product) => {
    //     dispatch(add(product));
    // };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
  return (
    <>
    {/* <!-- slider start --> */}
<div id="carouselExampleIndicators" className="carousel slide home-slider" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      {/* <!-- <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> --> */}
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="img/home-banner-1.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="img/home-banner-2.jpg" className="d-block w-100" alt="..."/>
      </div>
      {/* <!-- <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="...">
      </div> --> */}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <section className="pb-40 pt-40">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="product-heading">
                    <span>
                        New Style
                    </span>
                    <h2>Our Feature
                    
                        Products</h2>
                </div>
            </div>
        </div>
        <div className="product">
           
            
    
            
                {products.map((product)=>{
                    return(
                        <div className="product-list" key={product.id}>
                        <Link to={`abc/${product.id}`}>
                        <div className="product-img">
                            <img src={product.image} alt='...'/>
                            {product.save<1 ? "":<div className="save">
                            <p>Save <span>{product.save}%</span></p>
                        </div>}
                        
                        <div className="quick-view">
                            <div className="quick-view-btn">
                                <button button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                            </div>
                            <div className="favourite-btn">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                                </span>
                            </div>
                         </div>
                        </div>
                        <div className="product-title">
                            <h4><a href="view-info.php"> Lavender Embroidered Organza Dress Material</a>
                            </h4>
                            {/* <!-- <h3>Specs</h3> --> */}
                            {product.save<1 ? <p>{product.price}</p>:<p><del><i className="fa fa-rupee"></i>{product.price}</del><i className="fa fa-rupee"></i>{(product.price)-((product.price*product.save)/100)}</p>}
                           
                            {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
            
                     </div>
                        </Link>
                        </div>
                    );
                })}
               
                
         
               
              

            

        </div>
    </div>
</section>
{/* <!-- center banner start --> */}
<section>
    <div className="center-banner">
        <img src="img/home-banner-1.jpg" alt="..."/>
       </div>
</section>
{/* <!-- center banner end --> */}
{/* <!-- new collection start --> */}
 
<section className="pb-40 pt-40">
    <div className="container-fluid">
        
        <div className="product">
           
            <div className="product-list">
                <a href="view-info.php">
                <div className="product-img">
                     <img src="img/product/product-11.jpg" alt='..'/>
                     <div className="quick-view">
                        <div className="quick-view-btn">
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                        </div>
                        <div className="favourite-btn">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                            </span>
                        </div>
                     </div>
                </div>
                <div className="product-title">
                       <h4><a href="view-info.php">Grey Printed Cotton Dress Material</a></h4>
                       {/* <!-- <h3></h3> --> */}
                       <p><del><i className="fa fa-rupee"></i>5000</del><i className="fa fa-rupee"></i>2500</p>
                       {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
                </div>
            </a>
            </div>
    
            <div className="product-list">
                <a href="view-info.php">
                <div className="product-img">
                    <img src="img/product/product-12.jpg" alt=".."/>
                    
                <div className="save">
                    <p>Save <span>20%</span></p>
                </div>
                <div className="quick-view">
                    <div className="quick-view-btn">
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                    </div>
                    <div className="favourite-btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        </span>
                    </div>
                 </div>
                </div>
                <div className="product-title">
                    <h4><a href="view-info.php">Lavender Embroidered Organza Dress Material</a>
                    </h4>
                    {/* <!-- <h3>Specs</h3> --> */}
                    <p><del><i className="fa fa-rupee"></i>5000</del><i className="fa fa-rupee"></i>2500</p>
                    {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
    
             </div>
                </a>
                
            </div>
            <div className="product-list">
             <a href="view-info.php">
                <div className="product-img">
                    <img src="img/product/product-13.jpg" alt='...'/>
                    
                <div className="save">
                    <p>Save <span>20%</span></p>
                </div>
                <div className="quick-view">
                    <div className="quick-view-btn">
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                    </div>
                    <div className="favourite-btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        </span>
                    </div>
                 </div>
                </div>
                <div className="product-title">
                    <h4><a href="view-info.php">Maroon Printed Cotton Dress Material</a></h4>
                    {/* <!-- <h3>Specs</h3> --> */}
                    <p><del><i className="fa fa-rupee"></i>5000</del><i className="fa fa-rupee"></i>2500</p>
                    {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
    
             </div>
            </a>
                
            </div>
            <div className="product-list">
                <a href="view-info.php">
                   <div className="product-img">
                    <img src="img/product/product-14.jpg" alt='...' /> 
                       
                   <div className="save">
                       <p>Save <span>20%</span></p>
                   </div>
                   <div className="quick-view">
                    <div className="quick-view-btn">
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                    </div>
                    <div className="favourite-btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        </span>
                    </div>
                 </div>
                   </div>
                   <div className="product-title">
                       <h4><a href="view-info.php">Red Casual Wear Stripes Cotton Dress Material</a></h4>
                       {/* <!-- <h3>Specs</h3> --> */}
                       <p><del><i className="fa fa-rupee"></i>5000</del><i className="fa fa-rupee"></i>2500</p>
                       {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
       
                </div>
               </a>
                   
               </div>
               <div className="product-list">
                <a href="view-info.php">
                   <div className="product-img">
                    <img src="img/product/product-15.jpg" alt='..'/>
                       
                   <div className="save">
                       <p>Save <span>20%</span></p>
                   </div>
                   <div className="quick-view">
                    <div className="quick-view-btn">
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                    </div>
                    <div className="favourite-btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        </span>
                    </div>
                 </div>
                   </div>
                   <div className="product-title">
                       <h4><a href="view-info.php">Embroidered Modal Chanderi Dress Material</a></h4>
                       {/* <!-- <h3>Specs</h3> --> */}
                       <p><del><i className="fa fa-rupee"></i>5000</del><i className="fa fa-rupee"></i>2500</p>
                       {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
       
                </div>
               </a>
                   
               </div>
               <div className="product-list">
                <a href="view-info.php">
                   <div className="product-img">
                    <img src="img/product/product-15.jpg" alt='...'/>
                       
                   <div className="save">
                       <p>Save <span>20%</span></p>
                   </div>
                   <div className="quick-view">
                    <div className="quick-view-btn">
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                    </div>
                    <div className="favourite-btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        </span>
                    </div>
                 </div>
                   </div>
                   <div className="product-title">
                       <h4><a href="view-info.php">Embroidered Modal Chanderi Dress Material</a></h4>
                       {/* <!-- <h3>Specs</h3> --> */}
                       <p><del><i className="fa fa-rupee"></i>5000</del><i className="fa fa-rupee"></i>2500</p>
                       {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
       
                </div>
               </a>
                   
               </div>
               <div className="product-list">
                <a href="view-info.php">
                   <div className="product-img">
                    <img src="img/product/product-15.jpg" alt='...'/>
                       
                   <div className="save">
                       <p>Save <span>20%</span></p>
                   </div>
                   <div className="quick-view">
                    <div className="quick-view-btn">
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                    </div>
                    <div className="favourite-btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        </span>
                    </div>
                 </div>
                   </div>
                   <div className="product-title">
                       <h4><a href="view-info.php">Embroidered Modal Chanderi Dress Material</a></h4>
                       {/* <!-- <h3>Specs</h3> --> */}
                       <p><del><i className="fa fa-rupee"></i>5000</del><i className="fa fa-rupee"></i>2500</p>
                       {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
       
                </div>
               </a>
                   
               </div>
               <div className="product-list">
                <a href="view-info.php">
                   <div className="product-img">
                    <img src="img/product/product-15.jpg" alt='..'/>
                       
                   <div className="save">
                       <p>Save <span>20%</span></p>
                   </div>
                   <div className="quick-view">
                    <div className="quick-view-btn">
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                    </div>
                    <div className="favourite-btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        </span>
                    </div>
                 </div>
                   </div>
                   <div className="product-title">
                       <h4><a href="view-info.php">Embroidered Modal Chanderi Dress Material</a></h4>
                       {/* <!-- <h3>Specs</h3> --> */}
                       <p><del><i className="fa fa-rupee"></i>5000</del><i className="fa fa-rupee"></i>2500</p>
                       {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
       
                </div>
               </a>
                   
               </div>
               <div className="product-list">
                <a href="view-info.php">
                   <div className="product-img">
                    <img src="img/product/product-15.jpg" alt='..'/>
                       
                   <div className="save">
                       <p>Save <span>20%</span></p>
                   </div>
                   <div className="quick-view">
                    <div className="quick-view-btn">
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                    </div>
                    <div className="favourite-btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        </span>
                    </div>
                 </div>
                   </div>
                   <div className="product-title">
                       <h4><a href="view-info.php">Embroidered Modal Chanderi Dress Material</a></h4>
                       {/* <!-- <h3>Specs</h3> --> */}
                       <p><del><i className="fa fa-rupee"></i>5000</del><i className="fa fa-rupee"></i>2500</p>
                       {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
       
                </div>
               </a>
                   
               </div>
               <div className="product-list">
                <a href="view-info.php">
                   <div className="product-img">
                    <img src="img/product/product-15.jpg" alt='..'/>
                       
                   <div className="save">
                       <p>Save <span>20%</span></p>
                   </div>
                   <div className="quick-view">
                    <div className="quick-view-btn">
                        <button  data-bs-toggle="modal" data-bs-target="#exampleModal">+ Quick View</button>
                    </div>
                    <div className="favourite-btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                        </span>
                    </div>
                 </div>
                   </div>
                   <div className="product-title">
                       <h4><a href="view-info.php">Embroidered Modal Chanderi Dress Material</a></h4>
                       {/* <!-- <h3>Specs</h3> --> */}
                       <p><del><i className="fa fa-rupee"></i>5000</del><i className="fa fa-rupee"></i>2500</p>
                       {/* <!-- <button className="add-to-cart">Add To Cart</button> --> */}
       
                </div>
               </a>
                   
               </div>

            

        </div>
    </div>
    </section>
{/* <!-- new collection  end --> */}
    </>
  )
}
