import React from 'react'
import '../css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Header() {
  const {item: items} = useSelector((state) => state.cart);
    // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the navbar
// var navbar1 = document.getElementById("navbar1");

// Get the offset position of the navbar
// var sticky = navbar1.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= 5) {
//     navbar1.classList.add("sticky")
//     document.getElementById("navbar1").style.display="block";
//     document.getElementById("navbar1").style.boxShadow="rgb(171 171 171) 1px 1px 7px 1px";
//     document.getElementById("navbar2").style.display="none";
//   } else {
//     navbar1.classList.remove("sticky");
//     document.getElementById("navbar1").style.display="none";
//     document.getElementById("navbar1").style.boxShadow="none";
//     document.getElementById("navbar2").style.display="block";
//   }
// }
var quantity=0;
items.map((item)=>{
  quantity=item.quantity+quantity
  return quantity
})
  return (
    <>
    {/* <!--mobile  header section starts  --> */}
<header className="header mobile-header" id="navbar1">
    {/* <div className="header-offer">
        <div className="container">
            <marquee behavior="smooth" direction="left">Upto 60% Off |  Addl. 10% Off on your first purchase, min order ₹999; Use Code: JKNEW10 | Add. 10% Off on prepaid orders</marquee>
        </div>
    </div> */}
    <div className="container-fluid">
        <div className="menu-bar">
            <div className="row">
              <div className="logo logo-1">
                <img src="./assets/img/shyamuk-logo2.png" alt='logo'/>
            </div>
                    <nav className="navbar">
                        <div className="cross-btn">
                            <button id="cross-btn"><i className="fa fa-times"></i></button>
                        </div>
                        <ul className="head-nav">
                            <li><a href="index.php">home</a></li>
                            <li><a href="luxury.php">Shyamuk Luxury </a></li>
                            <li><a href="exclusive.php">Exclusive</a></li>
                            <li><a href="new-arrival.php">New arrivals </a></li>
                            <li className="dropdown nav-item"><a className=" dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Indian wear
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="suit-set.php">Suit sets</a></li>
                                <li><a className="dropdown-item" href="kurta-set.php">Kurta sets</a></li>
                            
                              </ul>
                        </li>
                        <li className="dropdown nav-item"><a className=" dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Westernwear
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="dresses.php">Dresses</a></li>
                            <li><a className="dropdown-item" href="jumpsuit.php">Jumpsuits</a></li>
                            <li><a className="dropdown-item" href="co-ords.php">Co ords</a></li>
                        
                          </ul>
                    </li>
                            <li className="nav-item"><a href="fusionwear.php">Fusion wear</a></li>
                            <li className="nav-item"> <a href="sale.php">Sale</a></li>
                            <li className="nav-item"> <a href="contact.php">Contact us</a></li>
                            <hr/>
                            <li className="register"><a href="signin.php"><img src="./assets/img/local_mall_FILL0_wght400_GRAD0_opsz48.svg" alt="logo" style={{"width": "18%"}}/> Sign in</a></li>
                            <li className="register"><a href="register.php"> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 20 20" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> Register</a></li>
                        </ul>
                    </nav>
                    <div className="logo logo-2">
                        <div className="fa fa-bars icon-btn" id="menu-btn"></div>
                        <img src="./assets/img/shyamuk-logo2.png" alt='logo'/>
                    </div>
                    <div className="icons">
                        
                        <div className="fa fa-search icon-btn" id="search-btn" ></div>
                       
                        <div  className="top-head-account">
                          
                        
                          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 20 20" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                          <div className="desk-sigin">
                              <ul>
                                  <li><a href="signin.php"><img src="./assets/img/local_mall_FILL0_wght400_GRAD0_opsz48.svg" alt="logo" style={{"width": "18%"}}/> Sign in</a></li>
                                  <li><a href="register.php"> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 20 20" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> Register</a></li>
                              </ul>

                          </div>
                      </div>

                        <a href="/shoppingcart"><div className="icon-btn" id="cart-btn"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#343434"><g><rect fill="none" height="24" width="24"/><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"/></g></svg>
                            <p className="count-number">1</p>
                        </div></a>
                   
                       
                    </div>

                    <form action="" className="search-form">
                        <input type="search" id="search-box" placeholder="search here..."/>
                        <label htmlFor="search-box" className="fa fa-search"></label>
                        <i className="fa fa-times" id="search-remove"></i>
                    </form>
                 
                      
                
            </div>
        </div>
    </div>
</header> 
 

{/* <!--mobile  header section ends --> */}

{/* <!-- desktop view start --> */}
<header className="desk-header" id="navbar2">
    {/* <div className="header-offer">
        <div className="container">
            <marquee behavior="smooth" direction="left">Upto 60% Off |  Addl. 10% Off on your first purchase, min order ₹999; Use Code: JKNEW10 | Add. 10% Off on prepaid orders</marquee>
        </div>
    </div> */}
    <div className="header-top" id="navbar11">
        <div className="container-fluid">
              <div className="row">
               
                <div className="col-md-4 head-top-search">
                    <div className="top-search">
                    <form action="" className="search-form1" id="search-form1">
                        <input type="search" id="search-box" placeholder="search here..."/>
                        <button htmlFor="search-box" className="fa fa-search"></button>
                    </form>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="top-logo">
                      <a href="index.php" className="logo-img"><img src="img/shyamuk-logo2.png" alt="logo"/></a>
                     
                    </div>
              </div>
                <div className="col-md-4 header-account1">
                     <div className="header-account">
                      
                        <div  className="top-head-account">
                          
                        
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 20 20" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            <div className="desk-sigin">
                                <ul>
                                    <li><a href="signin.php"><img src="./assets/img/local_mall_FILL0_wght400_GRAD0_opsz48.svg" alt="logo" style={{"width": "18%"}}/> Sign in</a></li>
                                    <li><a href="register.php"> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 20 20" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> Register</a></li>
                                </ul>

                            </div>
                        </div>
                        
    
        <a href="/" title='' className="desk-header-wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
        </a>
      
                        <Link to="/shoppingcart" className="head-top-cart">
                     
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="#000"><g><rect fill="none" height="24" width="24"/><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"/></g></svg>
                 
                            {/* <p>{items.length}</p> */}
                            <p>{quantity}</p>
                        </Link>
                     </div>
                </div>
              </div>
        </div>   
    </div>
    <div className="header-bottom">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
            
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="luxury.php">Shyamuk Luxury </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="exclusive.php">Exclusive</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="new-arrival.php">New arrivals </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Indian wear
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="suit-set.php">Suit sets</a></li>
                      <li><a className="dropdown-item" href="kurta-set.php">Kurta sets</a></li>
                     
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Westernwear
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="dresses.php">Dresses</a></li>
                      <li><a className="dropdown-item" href="jumpsuit.php">Jumpsuits</a></li>
                      <li><a className="dropdown-item" href="co-ords.php">Co ords</a></li>
                     
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="fusionwear.php">Fusion wear </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="sale.php">Sale</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.php">Contact Us</a>
                  </li>
                </ul>
               
              </div>
            </div>
          </nav>
    </div>
</header>

{/* <!-- desktop view end --> */}
    </>
  )
}
