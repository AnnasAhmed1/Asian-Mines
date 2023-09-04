"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "../styles/page.css";
import { H1, H2, H3, P1, P3 } from "@/components/helper";
import history from "../assets/history.webp";
import profile from "../assets/profile.jpeg";
import award from "../assets/award.jpeg";
import award_group from "../assets/award_main.jpg";
import shabbir from "../assets/shabbir.jpg";
import sami from "../assets/aziz_sami.jpg";
import china_group from "../assets/aziz_china.jpeg";
import china_shabbir from "../assets/aziz_shabbir_china.jpeg";

import ImageDescription from "@/components/image_description";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useEffect, useRef, useState } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { WhatsApp } from "@mui/icons-material";
import { WechatOutlined } from "@ant-design/icons";
import ContactDetail from "@/components/contactDetail";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const contactDetails = [
    {
      icon: <BusinessIcon />,
      detail:
        "Suite # 605, 6th Floor,  504, Opposite Jang Press, I.I Chundrigar Road, Karachi, Pakistan",
    },
    {
      icon: <WechatOutlined />,
      detail: "+92 321 3706287",
    },
    {
      icon: <WhatsApp />,
      detail: "+92 321 3706287",
    },
    {
      icon: <EmailIcon />,
      detail: "amm@asianmines.com",
    },
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  const [activeSection, setActiveSection] = useState("home");
  function scrollToSection(e: any, id: string) {
    console.log(id);
    setActiveSection(id);
    e.preventDefault();
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
    console.log(activeSection);
    if (element && id !== "home") {
      const offset = -1;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }
  const navs = [
    { title: "Home", id: "home", active: false },
    // { title: "Services", id: "services", active: false },
    { title: "About Us", id: "about", active: false },
    { title: "Awards", id: "awards", active: false },
    { title: "Gallery", id: "gallery", active: false },
    { title: "Contact", id: "contact", active: false },
  ];
  const updateCurrentSection = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    for (const section of navs) {
      const element = document.getElementById(section.id);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();

        if (
          top <= 500 &&
          (bottom >= 0 || (top <= windowHeight && bottom >= windowHeight))
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", updateCurrentSection);
    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
    };
  }, []);
  return (
    <main>
      <Navbar
        navs={navs}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      <section id="home" className="welcome-section main-section">
        <div className="container">
          <h1>
            Pakistan Leading
            <br />
            <span>
              Exporter Of <span>Chrome Ore</span>
            </span>
          </h1>
        </div>
      </section>
      <section
        id="about"
        className="about-section container main-section flex-responsive"
      >
        <div className="about-container">
          <H3
            text="
          ALL ABOUT"
          />
          <H1 text="ASIAN MINES" />
          <P1
            text="ASIAN MINES AND MINERALS, a leading exporter of Pakistani Best
            Quality Chrome ore Lumpy, Concentrate Fines, Natural, Refractory and
            Semi Refractory Grades (mined from Muslim Bagh) to China, Europe and
            different Markets, Trusted Since many years."
          />
          <br />
          <P1 text="All materials belong to Muslim Bagh, the most precious area for the mining of Chrome. We have the capacity to ship approx. 10,000 to 12,000 MT per month." />
        </div>
        <ImageDescription
          image={history}
          heading="ASIAN MINES HISTORY"
          description="ASIAN MINES AND MINERALS, is located in Pakistan and has quickly
          become one of the leading exporter of Chrome Ore in the country since
          its establishment in 2018. By the Grace of ALLAH, our export volumes
          increased significantly and given us the lions share in the market. We are
          now committed to maintaining and furthering our success."
        />
      </section>
      <div id="network" className="  main-section bgColor">
        <section className="about-section container flex-responsive">
          <div className="about-container">
            <H3 text="INTRODUCING OUR" />
            <H1 text="NETWORK" />
            <P1 text="Embracing a customer-centric approach, we have meticulously designed our warehouse spaces to accommodate various storage needs, ensuring the integrity of our chrome ore products throughout their journey." />
            <br />
            <P1 text="Our presence in both Muslim Bagh and Karachi underscores our commitment to seamlessly bridging the gap between extraction and distribution. As a beacon of excellence in the mining sector, our head office in Karachi not only serves as a hub for strategic decision-making but also fosters a collaborative environment to nurture fresh ideas and advancements. At Asian Mines, our spatial advantage echoes our broader vision: to continually raise the bar for quality, innovation, and responsible resource management." />
          </div>
          <ImageDescription
            image={profile}
            imageHeight="400px"
            heading="ASIAN MINES LEADERSHIP"
            description="Asian Mines and Minerals working under the leadership of Mr. AZIAULLAH KAKAR.
          He is an experienced Chrome and Mining specialist from Mulsim Bagh. 15+ years dedicated to understanding the depths of Chrome and its applications."
          />
        </section>
      </div>
      <section className="container main-section video-player">
        <div className="container/">
          <H1 text="Refing Chrome Ore" color="primary" center />
          <H2 text="at Warehouse Karachi" center color="primary" />

          <button className="" onClick={togglePlay}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </button>
          {/* <button onClick={restartVideo}>Restart</button> */}
        </div>
        <video
          ref={videoRef}
          style={{}}
          // controls
          // autoPlay={true}
          muted={true}
          onEnded={() => {
            setIsPlaying(false);
          }}
          onClick={togglePlay}
        >
          <source src="./videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <div id="awards" className=" main-section bgColor">
        <section className="about-section award container flex-responsive">
          <div className="about-container">
            <H3 text="RECOGNITION AND" />
            <H1 text="AWARDS" />
            <P1 text="Asian Mines has been honored with the prestigious award from the Federation of Pakistan Chambers of Commerce and Industry (FPCCI). This esteemed recognition celebrates our exceptional contribution to the mining industry as the leading exporter of Pakistan's chrome ore." />
            <br />
            <P1 text=" Our commitment to excellence, unwavering dedication, and relentless pursuit of quality have propelled us to the forefront of the sector. This award not only reflects our commitment to delivering the finest products but also highlights our dedication to sustainable practices and innovation. We extend our heartfelt gratitude to our passionate team, valued partners, and esteemed customers for their continuous support, which has been integral to this remarkable accomplishment. As we continue to push boundaries and set new industry standards, we are excited to share this milestone with you and look forward to an even brighter future." />
          </div>
          <ImageDescription
            image={award}
            imageHeight="340px"
            heading="BEST EXPORT PERFORMANCE AWARD"
            description=""
          />
        </section>
      </div>
      <section id="gallery" className="gallery-section container main-section">
        <H3 text="OUR AMAZING" />
        <H1 text="GALLERY" />
        <div className="flex-responsive">
          <Image src={sami} alt="profile" />
          <Image src={shabbir} alt="profile" />
        </div>
        <Image src={award_group} alt="profile" />
        <div className="flex-responsive">
          <Image src={china_group} alt="profile" />
          <Image src={china_shabbir} alt="profile" />
        </div>
      </section>
      <div id="contact" className=" main-section bgColor">
        <section className="contact-section container flex-responsive">
          <div>
            <H3 text="ASIAN MINES" />
            <H1 text="CONTACT" />
            <ContactDetail
              icon={contactDetails[0].icon}
              detail={contactDetails[0].detail}
              flexCol={false}
            />
            <div className="contact_icons">
              {contactDetails.splice(1)?.map((contact, index) => {
                return (
                  <ContactDetail
                    key={index}
                    icon={contact.icon}
                    detail={contact.detail}
                  />
                );
              })}
            </div>
          </div>
          <div className="form-container">
            <H3 text="GET IN" />
            <H1 text="TOUCH" />
            <form>
              <input placeholder="Name" type="text" required />
              <input placeholder="Email" type="email" required />
              <textarea
                placeholder="Leave your comment"
                name=""
                id=""
                // cols={30}
                rows={6.5}
                required
              />
              <button>Send Message</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
