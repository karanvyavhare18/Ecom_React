import React from 'react'
import logo from '../Images/ecomlogo.jpg';
import { Link } from 'react-router-dom';
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Enables smooth scrolling
        });
    };
  return (
    <div>
      <footer>
        <div class="footer-board">
            <Link to="/top" onClick={scrollToTop}> Back to top </Link>

        </div>

        <div class="footer-board2">
            <ul>
           <p>Get to Know us</p>
           <a> About Us</a>
           <a>Careers</a>     
           <a>Press Releases</a>  
           <a>Amazon Science</a>

            </ul>

            <ul>
                <p>Get to Know us</p>
                <a> About Us</a>
                <a>Careers</a>     
                <a>Press Releases</a>  
                <a>Amazon Science</a>
     
                 </ul>

                 <ul>
                    <p>Get to Know us</p>
                    <a> About Us</a>
                    <a>Careers</a>     
                    <a>Press Releases</a>  
                    <a>Amazon Science</a>
         
                     </ul>

                     <ul>
                        <p>Get to Know us</p>
                        <a> About Us</a>
                        <a>Careers</a>     
                        <a>Press Releases</a>  
                        <a>Amazon Science</a>
             
                         </ul>
          

        </div>


        {/* <div class="footer-board3 ">
            <div class="logo"></div>

        </div> */}
        <div class="footer-board4">
            <div class="pages">
                <a>Conditons of use</a>
                <a>Privacy Notice</a>
                <a>Your Ads Privacy Choices</a>
            </div>




            <div class="copyright">
                © 1996-2024, Amazon.com, Inc. or its affiliates

            </div>
        </div>





    </footer>

    </div>
  )
}

export default Footer
