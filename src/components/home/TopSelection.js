import React from 'react';

const TopSelection = () => {
 
      const Siderbar = [
        {
            title: "Fresh Honor 9 ",
            title2: "32GB Unlocked quadcore",
            link : "#",
            RAM : "4GB",
            ROM : "64GB",
            Camera : "20MP + 12MP",
            price : "279"
        },
        {
            title: "Fresh Honor 99",
            title2: "32GB Unlocked quadcore",
            link : "#",
            RAM : "4GB",
            ROM : "64GB",
            Camera : "20MP + 12MP",
            price : "279"
        },
        {
            title: "Fresh Honor 999",
            title2: "32GB Unlocked quadcore",
            link : "#",
            RAM : "4GB",
            ROM : "64GB",
            Camera : "20MP + 12MP",
            price : "279"
        }
    ]
    return (
        <div className='topSelection'>
            {Siderbar.map ((links, index) => 
               <div className='myselection fade' key={index}>
                    <div className='title'>
                        <h1>{links.title}</h1>
                        <h2>{links.title2}</h2>
                    </div>
                    <div className='caracterstique'>
                    <span className='ram'>{links.RAM} RAM</span>
                    <span className='rom'>{links.ROM} ROM</span>
                    <span className='camera'>{links.Camera} Camera</span>
                    </div>
                    <div className='price'>
                        <span className='label'>now at</span>
                        <span className='value'>{links.price}</span>                            
                    </div>
                </div>   
            )} 
                <div>
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                </div>
        </div>
    );
}
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("myselection");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log("test", slides[slideIndex-1])
    if (slides.length > 1) {
        console.log("ok");
        console.log("test2", slides[slideIndex-1])
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
        }
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  };
export default TopSelection;
