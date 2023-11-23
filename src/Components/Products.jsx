import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Aos from "aos";
import "aos/dist/aos.css";
import teaching1 from "../Assets/App-image-1.jpg";
import Features from "./Features";
import panel1 from "../Assets/panel-1.jpg";
import panel3 from "../Assets/panel-3.jpg";
import {
  AiFillPlayCircle,
  AiFillQuestionCircle,
  AiTwotoneMessage,
} from "react-icons/ai";
import { BsFillChatTextFill, BsFillBookmarksFill } from "react-icons/bs";
import { PiSpeakerHighBold, PiNotebookDuotone } from "react-icons/pi";
import { LuAirplay } from "react-icons/lu";
import { GrResources } from "react-icons/gr";
import { GiOpenBook } from "react-icons/gi";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaMobileScreenButton } from "react-icons/fa6";
import AudioImage from "../Assets/Learning_audio.png";
import AudioImage2 from "../Assets/Audio-image2.jpg";
import asianboy from "../Assets/asian-boy-typing-laptop-keyboard-classmates-sitting-table-watching-him-doing-task-together.jpg";
import momAndgirl from "../Assets/mother-helping-her-son-online-class (1).jpg"
import dadAndboy from "../Assets/happy-father-son-looking-laptop.jpg"
import familyPic from "../Assets/parents-daughter-using-laptop.jpg"

const Products = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  const [teaching, setTeaching] = useState("teaching");
  const [learning, setLearning] = useState("nolearning");
  const [title, setTitle] = useState("title-1");
  const [title1, setTitle2] = useState("non-title");
  const appear = () => {
    setTeaching("teaching");
    setLearning("nolearning");
    setTitle("title-1");
    setTitle2("non-title");
  };
  const change = () => {
    setTeaching("noTeaching");
    setLearning("learning");
    setTitle2("title-2");
    setTitle("non-title");
  };

  return (
    <div>
      <div className="Product-main-div">
        <div className="Product-main-left">
          
        </div>
        <div className="Product-main-right">
          <div className={title}>
            <h2 onClick={appear}>Learning</h2>
          </div>
          <div className={title1}>
            <h2 onClick={change}>Teaching</h2>
          </div>
        </div>
      </div>
      <div className={teaching}>
        <div className="product-mid-div">
          <div className="product-mid-left-div">
            <div data-aos="fade-right">
              <h1>The Right Tool For Your Child's Studies</h1>
            </div>
            <div>
              <h3>
                Get an education app integrated with high-quality animation rich
                e- Learning content, containing more than 50,000+ animated
                modules,10,000+ interactive games, and 2 million+ learning
                resources
              </h3>
            </div>
          </div>
          <div className="product-mid-right-div">
            <img className="teaching1" src={teaching1} />
          </div>
        </div>
        <div className="Lower-middle" data-aos="fade-right">
          <div>
            <h2>Equip your child with the best tools for academic success</h2>
          </div>
        </div>
        <div className="Lower-middle-1">
          <div className="Lower-middle-left" data-aos="fade-right">
            <div>
              <h3>
                <AiFillPlayCircle size={25} /> 50k+HD Videos - Animated and
                Anchor Based Videos
              </h3>
            </div>
            <div>
              <h3>
                <LuAirplay size={25} color="black" /> Huge Question Bank Of
                1,00,000+ Questions
              </h3>
            </div>
            <div>
              <h3>
                <AiTwotoneMessage size={25} color="black" /> 10000+ Interactive
                Tools For Revision
              </h3>
            </div>
            <div>
              <h3>
                <PiSpeakerHighBold size={25} color="black" /> Bilingual Content-
                Both Hindi and Regional Language
              </h3>
            </div>
            <div>
              <h3>
                <GiOpenBook size={25} color="black" /> Monitor Progress and
                Content Usage Report
              </h3>
            </div>
            <div>
              <h3>
                <BsFillChatTextFill size={25} color="black" /> Real Life Videos
                and Science Experiments
              </h3>
            </div>
          </div>
          <div className="Lower-middle-right" data-aos="fade-left">
            <div>
              <h3>
                <GrResources size={25} color="Black" /> 2 Millions+ Learning
                Resources
              </h3>
            </div>
            <div>
              <h3>
                <PiNotebookDuotone size={25} color="Black" /> 3000+ Publishers
                Mapped For Personlized Learning
              </h3>
            </div>
            <div>
              <h3>
                <RiGraduationCapFill size={25} color="black" /> CBSE.ICSE and
                All Major Indian State Board
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <FaMobileScreenButton size={25} color="black" /> Real Time
                Tracking Of Student Performance
              </h3>
            </div>
            <div>
              <h3>
                <FaMobileScreenButton size={25} color="black" /> HOTs,Previous
                Year Question Papers and Formulae Master
              </h3>
            </div>
            <div>
              <h3>
                <BsFillBookmarksFill size={25} color="black" />
                Change Video Speed,Search,Content and Bookmark Favorite Videos
              </h3>
            </div>
          </div>
        </div>
        <div className=" Benefits-div-up">
          <div className=" Benefits-div-up-right">
            <img src={AudioImage}></img>
          </div>
          <div className=" Benefits-div-up-left">
            <div>
              <h1>Audio Visuals Modules</h1>
            </div>
            <div>
              <h4>
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
               
              </h4>
            </div>
          </div>
        </div>
        <div className=" Benefits-div-middle">
          <div className=" Benefits-div-up-left">
            <div>
              <h1>Audio Visuals Modules</h1>
            </div>
            <div>
              <h4>
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
                
              </h4>
            </div>
          </div>
          <div className=" Benefits-div-up-right">
            <img src={AudioImage2}></img>
          </div>
        </div>
        <div className=" Benefits-div-down">
          <div className=" Benefits-div-up-right"><img src={ asianboy }></img></div>
          <div className=" Benefits-div-up-left">
            <div>
              <h1>Audio Visuals Modules</h1>
            </div>
            <div>
              <h4>
               
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
              </h4>
            </div>
          </div>
        </div>
         <div className=" Benefits-div-middle">
          <div className=" Benefits-div-up-left">
            <div>
              <h1>Audio Visuals Modules</h1>
            </div>
            <div>
              <h4>
                
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
              </h4>
            </div>
          </div>
          <div className=" Benefits-div-up-right">
            <img src={ momAndgirl}></img>
          </div>
        </div>
        <div className=" Benefits-div-down">
          <div className=" Benefits-div-up-right"> <img src={ dadAndboy}></img></div>
          <div className=" Benefits-div-up-left">
            <div>
              <h1>Audio Visuals Modules</h1>
            </div>
            <div>
              <h4>
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
                Childrens are more intrested in cartoons, TV and Video games
                which is why we have incorporated 2D-3D animated videos in your
                education app to help your child learn and retain better
              </h4>
            </div>
          </div>
        </div>
        
        <div className=" second-last">
          <div>
            <div>
              <h1>Why Idur Acadmey?</h1>
            </div>
            <div>
              <h3>
                Idur acadmey is into the creation of "digital content deliver
                and technology" which can increse interst and improve the
                learning outcomes of students. we provide all this content and
                softwares white-labeled for educational institution with
                capitive audience
              </h3>
            </div>
          </div>
        </div>

        <div className="numbers-div">
          <div>
            <h1>our Numbers speak</h1>
          </div>
        </div>
        <div className="last">
          <div className="last-in">
            <div className="last-in-image-icons">
              <div>
                <h2>
                  <i class="fa-solid fa-circle-play"></i>  60+ happy hours
                </h2>
              </div>
              <div>
                <h2>
                  <i class="fa-solid fa-user-graduate"></i>   10000+ delighted
                  students
                </h2>
              </div>
              <div>
                <h2>
                  <i class="fa-solid fa-person-chalkboard"></i>   2,60,000+ man
                  hours of development
                </h2>
              </div>
            </div>
            <div className="last-image-div"><img src={familyPic}></img></div>
          </div>
        </div>
      </div>

      <div className={learning}>
        <div className="learning-image-div">
          <div>
            <img src={panel1} />
          </div>
        </div>
        <div className="Learning-title">
          <div>
            <div>
              <h2>
                <h1>Elevate Education with IDUR Interactive Flat Panels:</h1>
              </h2>
            </div>
            <div>
              <h1> A Comprehensive Guide </h1>
            </div>
          </div>
        </div>
        <div className="learning-lower-image-div">
          <div className="learning-image-div1">
            <div>
              <img src={panel3}></img>
            </div>
            <div className="learning-image-div-right">
              <h1>Why IDUR flat panel?</h1>
              <h3>
                The Integrated Flat Panel at the IDUR Academy is a
                multifunctional device that integrates a 4K resolution flat
                screen display with various kinds of functions and capabilities.
                It is frequently utilized in educational environments like
                conference rooms, training centers, and classrooms.Designed for
                children's visual comprehension in mind, it is
                integrated with the Android-based learning app IDUR Academy.
              </h3>
            </div>
          </div>
        </div>
        <div className="Learning-title">
          <div>
            <div>
              <h1>
                <h1>BENEFITS OF IDUR FLAT PANEL</h1>
              </h1>
            </div>
            <div></div>
          </div>
        </div>

        <div>
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Products;
