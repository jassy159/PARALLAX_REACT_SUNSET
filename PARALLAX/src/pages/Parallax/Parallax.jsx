import React, { useEffect, useRef, useState } from "react";
import "./Parallax.css";
const Parallax = () => {
  const [scrollPosition, setscrollPosition] = useState(0);
  const [background_grad, setbackground_grad] = useState(0);
  const [top_value, settop_value] = useState(410);

  const mainref = useRef();
  const maintext = useRef();
  const handleScrollPostion = () => {
    setscrollPosition(window.scrollY);
    // console.log(window.scrollY);
  };
   useEffect(() => {
    const mountain_3 = document.querySelector('.parallax_mountain_3')

    if(window.innerWidth/window.innerHeight < 1){
      mountain_3.style.height = `${window.innerHeight}px`
     const parallax = document.querySelector(".parallax");

  parallax.style.height = `${+(window.innerHeight-mountain_3.innerHeight)}px`
  console.log(212,mountain_3.innerHeight);}
 
  },[])
  useEffect(() => {
    console.log(window.innerHeight);
    //intializing variables
    const parallax = document.querySelector(".parallax");
    const mount = document.querySelectorAll(".mount");
    const text = document.querySelector(".main_text");
    const sun = document.querySelector(".parallax_sun");
    const About = document.querySelector(".About");
    const skill = document.querySelector(".skills");
   
    if (scrollPosition < ((document.documentElement.scrollHeight)/10)) {
      document.querySelector(".parallax_cloud_left").style.left = `${
        0 - scrollPosition
      }px`;
      document.querySelector(
        ".parallax_cloud_left"
      ).style.transform = `translateY(${scrollPosition * 0.1}px)`;
      const cloud_right = document.querySelector(".parallax_cloud_right");
      const cloud_bottom = document.querySelector(".parallax_cloud_bottomleft");
      cloud_bottom.style.top = `${scrollPosition + 234}px`;
      cloud_bottom.style.opacity = `${(300 - scrollPosition) / 300}`;
      cloud_right.style.right = `${0 - scrollPosition}px`;
    }
    if (scrollPosition < ((document.documentElement.scrollHeight)/4.2857142857142857142857142857143)) {
      About.classList.add("hide");
      setbackground_grad(scrollPosition * 0.2 + 30);

      //condition for sun
      parallax.style.background = `linear-gradient(180deg, #0025a0, #c96c4b ${background_grad}%, #ebe300)`;

      //speed of sun
      const sun_speed = sun.dataset.speed;
      sun.style.transform = `translateY(${scrollPosition * sun_speed}px)`;

      text.classList.add("hide");
      text.style.transform = `translateY(${scrollPosition}px)`;

      //condition for mount
      mount.forEach((element) => {
        //mount speed
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
      text.style.top = `${top_value}px`;
      mainref.current.style.fontSize = `${scrollPosition / 10}px`;

      if (Number(text.style.top.split("px")[0]) >= 110) {
        settop_value(410 - (scrollPosition - 400));
      } else {
        settop_value(410);
      }
      if (scrollPosition > 300) {
        text.classList.remove("hide");
      }
    } else {
      if (scrollPosition > 800 && scrollPosition < 1300)
        About.style.transform = `translateY(${-(scrollPosition - 800)}px)`;
      About.classList.remove("hide");
      About.style.opacity = `${ (scrollPosition-1000)/600}`;
    }
    if(scrollPosition > 1440 && scrollPosition <2050){
      if(window.innerHeight/window.innerWidth > 1 ){
        skill.style.transform = `translateY(${-((scrollPosition - 1440 + window.innerHeight)*0.5)}px)`;
      
      skill.style.opacity = `${ (scrollPosition-1600 + (window.innerHeight/4))/600}`;
}
else{
  skill.style.transform = `translateY(${-((scrollPosition - 1440 )*0.5)}px)`;
      
  skill.style.opacity = `${ (scrollPosition-1600) /600}`;
}
    }
  }, [scrollPosition]);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPostion);
    return () => {
      window.removeEventListener("scroll", handleScrollPostion);
    };
  }, []);

  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Jan</h1>
        </div>
        <div className="navigations">
          <div className="navigation_items">
            <h1>Home</h1>
          </div>
          <div className="navigation_items">
            <h1>About </h1>
          </div>
          <div className="navigation_items">
            <h1>Contact </h1>
          </div>
        </div>
      </nav>
      <main ref={mainref}>
        <div className="parallax">
          <img
            src="../../../src/assets/IMAGES/stars.svg"
            className="stars"
            alt=""
          />
          <div className="parallax_sun" data-speed="1.4   "></div>
          <div className="parallax_mountain_1 mount" data-speed="1.2"></div>
          <div className="parallax_mountain_2 mount" data-speed="1.1"></div>
          <div className="parallax_mountain_3 mount" data-speed="1.">
            <div className="coverer">
              
            </div>
          </div>
          <div className="parallax_cloud_left"></div>
          <div className="parallax_cloud_right"></div>

          <img
            src="../../../src/assets/IMAGES/cloud-bottom.svg"
            className="parallax_cloud_bottomleft"
            alt=""
          />

          <div ref={maintext} id="text" className="main_text hide">
            <p>JOURNEY</p>
          </div>
        </div>
        <div className="About">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            vel recusandae quisquam? Blanditiis nesciunt impedit laboriosam
            natus saepe? Beatae possimus aliquam cupiditate modi libero ad iusto
            deserunt suscipit quidem magnam.
          </p>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <div className="back">
          <img src="../../../src/assets/IMAGES/back!.svg" alt="" className="backimg" />
          <img src="../../../src/assets/IMAGES/back2.svg" alt="" className="backimg" />
          <img src="../../../src/assets/IMAGES/back3.svg" alt="" className="backimg" />
          
          <img src="../../../src/assets/IMAGES/back!.svg" alt="" className="backimg" />
          <img src="../../../src/assets/IMAGES/back2.svg" alt="" className="backimg" />
          <img src="../../../src/assets/IMAGES/back3.svg" alt="" className="backimg" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Parallax;
