import "./Features.css";
import React, { useEffect } from "react";
import { PiScreencastBold } from "react-icons/pi";
import { MdTouchApp } from "react-icons/md";
import { HiVolumeUp } from "react-icons/hi";
import { BiArrowToRight } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import panel4 from "../Assets/panel4.png";
import panel5 from "../Assets/panel5.png";
import panel6 from "../Assets/panel size.png";
import panel7 from "../Assets/panel5.png";

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="front-div">
        <div className="front-div-1">
          <div className="icons-div">
            <div>
              <div>
                <PiScreencastBold size={70} color=" #0F2647" />
              </div>
              <div>
                <h1 className="bold-icons">Easy screen casting</h1>
              </div>
            </div>
            <div>
              <div>
                <MdTouchApp size={70} color=" #0F2647" />
              </div>
              <div>
                <h1>40 TouchPoints</h1>
              </div>
            </div>
            <div>
              <HiVolumeUp size={70} color=" #0F2647" />
              <div>
                <h1>20W Inbuilt speakers</h1>
              </div>
            </div>
          </div>
          <div className="Icon-image">
            <div className="Icon-image1">
              <div>
                <img src={panel6}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Panel-images">
        <div className="Panel-images-left">
          <img src={panel7}></img>
        </div>
        <div className="Panel-images-right">
          <img src={panel7}></img>
        </div>
      </div>
      <div className="benifits-div">
        <div>
          <div data-aos="fade-right">
            <h2> Interactive Touch Screen :</h2>
            <h3>
              <li>
                IR touch-enabled 4 mm thick anti-glare glass screen and a 2 mm
                accurately oriented flat panel
              </li>
            </h3>

            <h3>
              <li>
                Touch interaction recognition using the Fingers or Stylus option
                makes it easy to write, draw, highlight, and do other creative
                tasks.
              </li>
            </h3>
            <h3>
              <li>
                Multiple touch points, such as 40 for Windows and 20 for Android
                devices separately, with a maximum input rate of 10 ms and a
                reaction time of 5 ms
              </li>
            </h3>
          </div>
          <div data-aos="fade-left">
            <h2>High-Resolution Display:</h2>
            <h3>
              <li>
                Featuring a UHD screen resolution of 3840*2160 and numerous
                display possibilities such as text, images, videos, and other
                multimedia material, Sizes range from 65&#39; to 86&#39;
              </li>
            </h3>
            <h3>
              <li>
                400 cd/m2 brightness combined with a range of viewing angles,
                colors, contrast, and aspect ratios for crisp, clear images
              </li>
            </h3>
          </div>
          <div data-aos="fade-right">
            <h2>Connectivity and Integration:</h2>
            <h3>
              <li>
                USB 3.0*3, HDMI, VGA and built-in audio devices include 2
                speakers with 10W, 15W, and 20W according to panel size
                increment and screen record option
              </li>
            </h3>
            <h3>
              <li>
                Effortless integration with PCs, laptops, tablets, and other
                devices is made possible by frequent connectivity. Networking
                setup for technology using Bluetooth, Wi- Fi, and hot spots
              </li>
            </h3>
          </div>
          <div data-aos="fade-left">
            <h2>Collaboration and Sharing:</h2>
            <h3>
              <li>
                Allowing simultaneous interaction of users with the screen.
                Encouraging students to participate in group projects,
                conversations, and cooperative learning by asking them to share
                their opinion
              </li>
            </h3>
            <h3>
              <li>
                In addition to having flawless whiteboard writing experience,
                students can access 2 million learning resources, 50 thousand
                animated videos, and one million questions and quizzes in a
                gamification module
              </li>
            </h3>
          </div>
          <div data-aos="fade-right">
            <h2>Easy maintenance and durability::</h2>
            <h3>
              <li>
                IDUR Interactive Flat Panel come with a 3-year guarantee, a
                50k-hour display life, and a long lifespan of more than 10 years
                without the need for regular servicing after installation.
              </li>
            </h3>

            <h3>
              <li>
                {" "}
                Dual OS (Windows 11 and Android) switch with 4GB RAM that can be
                expanded upto 1TB with dependable power usage that is reasonably
                priced
              </li>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
