import React from "react";
import "./index.css";
import { secondBlock } from "../../assets";

const AboutUspage = () => {


    return (

    <>
        <section id="aboutUs">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-xxl-6">
                           <div className="aboutUs__block">
                                <img src={secondBlock} alt="" title="" className="logoMain" />
                           </div>
                       </div>
                       <div className="col-xxl-6">
                           <div className="aboutUs__block">

                           </div>
                       </div>
                   </div>
               </div>
           </section>



    </>);
}

export default AboutUspage;