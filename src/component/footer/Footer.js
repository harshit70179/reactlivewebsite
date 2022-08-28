import React from 'react'

export default function Footer() {
  return (
    <>
    {/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <div className="row">
        <div className="col-md-6">
           <div className="quick-img">
            <img src="img/product/product-11.jpg" alt=""/>
           </div>
        </div>
        <div className="col-md-6">
            <div className="quick-description">
                <p>SKU: JKPLZ4735-S</p>
                <h3>Self Weave Rayon Grey Co-Ords Set</h3>
                <p className="price"><i className="fa fa-rupee"></i>2500 <del>5000</del></p>
                <p>Women Self Weave Rayon Grey Co-Ords Set Has Pleasted Top With Round Neck, Box Pleats In Front, Flared Hem, Thread Embroidery On The Pleats, Three Fourth Puffed Sleeves Has Cuff...</p>
                <p className="single-size">Size : S</p>
               
                <ul className="multi-size pb-3">
                    <li className="active">
                        <a href="/">S</a>
                    </li>
                    <li>
                        <a href="/">M</a>
                    </li>
                    <li>
                        <a href="/">L</a>
                    </li>
                    <li>
                        <a href="/">XL</a>
                    </li>
                    <li>
                        <a href="/">XXL</a>
                    </li>
                </ul>
                <div className="modal-add-btn">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn ">-</button>
                        <button type="button" className="btn ">1</button>
                        <button type="button" className="btn">+</button>
                      </div>
                      <button type="button" className="modal-add"> <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="#fff"><g><rect fill="none" height="24" width="24"/><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"/></g></svg>Add To Cart</button>
                </div>
                <p className="modal-info"><a href="view-info.php">View Full Info</a></p>
            </div>
            
        </div>
       </div>
      </div>
     
    </div>
  </div>
</div>
      
{/* <!-- Modal --> */}
<div className="modal fade" id="enquiry" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="enquiryModalLabel">Have A Question?</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form action="">
            <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder="name"/>
              </div>
              <div className="mb-3">
              
                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
              </div>
              <div className="mb-3">
              
                <input type="tel" className="form-control" id="phoneno" placeholder="phone no"/>
              </div>
              <div className="mb-3">
               
                <textarea className="form-control" id="message" rows="3" placeholder="message"></textarea>
              </div>
              <div className="mb-3">
                <button type="submit" className="send-msg">Send</button>
              </div>
          </form>
        </div>
        
      </div>
    </div>
</div>
      

{/* <!-- shipping Modal --> */}
<div className="modal fade" id="shipping" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          {/* <!-- <h5 className="modal-title" id="enquiryModalLabel">Have A Question?</h5> --> */}
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
         <h4>
          Shipping
         </h4>
          <ul>
            <li>
               <p>Standard delivery time is 4 to 6 business working days</p>
            </li>
            <li>
                <p>Express delivery option available</p>
            </li>
            <li>
                  <p>To ensure the safe delivery of products, purchases are delivered in a waterproof & sealed poly bag.</p>
            </li>
            <li>
                <p>See the delivery FAQs for details on shipping methods.</p>
            </li>
          </ul>
          <h4>Return & Exchanges</h4>
          <ul>
            <li><p>Apply for the Return or Exchange, within 48 hours.</p></li>
            <li><p>Go to My Orders- Select your recent Order Id- Apply for Return/Exchange.</p></li>
            <li><p>See conditions and procedure in our return FAQs.</p></li>
          </ul>

        </div>
        
      </div>
    </div>
</div>
      
      
      {/* <!-- footer start --> */}
      <footer className="pt-50" style={{ "background":"url(img/footer-bg-img.jpg)"}}>
          <div className="subscribe">
            <div className="container">
               <div className="subscribe-body">
                  <h4 className="d-inline-block">Subscribe to our Newsletter:
                </h4>
                <form action="" className="d-inline-block">
                    <input type="email" placeholder="example@gmail.com"/>
                    <button type="submit" className="footer-submit">Submit</button>
                </form>
               </div>
            </div>
          </div>
           <div className="container">
            <div className="row pl-5 pb-40">
                <div className="col-md-3">
                    <div className="footer-col">
                        <div className="footer-logo">
                            <img src="img/shyamuk-logo2.png" alt=""/>
                        </div>
                        <p className="footer-company-name">Shyamuk cauture is your one stop shop for Indian ethnic clothing. We specialize in wedding sarees, bridal sarees, designer sarees, trendy Salwar Kameez and other Indian bridal wear like Lehenga Cholis.</p>
                        <ul className="social-link">
                          <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                          <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="/"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                        
                    </div>
               </div>
                <div className="col-md-2 ">
                     <div className="footer-col">
                         <h4>Quick Links</h4>
                         <ul>
                            <li><a href="index.php">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="gallery.php">Gallery</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="luxury.php">Shop</a></li>
                            <li><a href="contact.php">Contact Us</a></li>
                       
                         </ul>
                     </div>
                </div>
                <div className="col-md-3 ">
                    <div className="footer-col">
                        <h4>Support</h4>
                        <p className="support">
                            <span>For Help, send email to</span>
                            <br/>
                            <span><a href="mailto:shyamukcauture@gmail.com"><i className="fa fa-envelope"></i>shyamukcauture@gmail.com</a></span>
                        </p>
                        <p></p>
                        <p className="or">OR</p>
                        <p className="support">
                            <span>Call us at</span>
                            <br/>
                            <span><a href="tel:07791024944"><i className="fa fa-envelope"></i>+91-7791024944</a></span>
                        </p>
                    </div>
               </div>
                <div className="col-md-4 ">
                    
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <form action="">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="name" name="name" id="name"/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="example@gmail.com" name="email" id="email"/>
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" placeholder="phone no." name="phone" id="phone"/>
                            </div>
                            <div className="mb-3">
                                <textarea name="message" id=""  rows="3" className="form-control" placeholder="message"></textarea>
                            </div>
                            <div>
                                <button className="footer-submit">Submit</button>

                            </div>

                        </form>
                      
                    </div>
               </div>
        
           
            </div>
           </div>
        
           <div className="row" style={{"margin": "0"}}>
            <div className="col-md-6">
                <div className="copy-right"> <p>Design & Developed By <a href="/"><img src="img/gdigital.png" alt=".."/></a></p></div>
            </div>
            <div className="col-md-6 pay-card">
                 <div className="pay-card-img">
                    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-maestro"><title id="pi-maestro">Maestro</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#00A2E5" cx="23" cy="12" r="7"></circle><path fill="#7375CF" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
                    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
                 </div>
            </div>
           </div>
          
         
      </footer>

      {/* <!-- footer end --> */}
       {/* <!-- whatsapp start --> */}
       <div className="quickcontact">
            <a href="https://api.whatsapp.com/send?phone=917791024944"  rel="noopener">
            <img alt="whatsapp" src="img/whatsapp.gif" style={{"marginTop": "8px"
            }}/></a>
            {/* <!-- <a href="tel:09928483292" target="_blank"><img src="assets/img/call.gif"></a> --> */}
          </div>
          {/* <!-- whatsapp end --> */}
    </>
  )
}
