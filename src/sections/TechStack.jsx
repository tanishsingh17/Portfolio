import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    // Entrance animation for cards
    gsap.fromTo(
      ".tech-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );

    // 🌊 Smooth floating animation for SVG icons
    gsap.to(".svg-tech-icon", {
      y: -8,
      rotation: 2,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.id ?? techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />

              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  {techStackIcon.imgPath ? (
                    <img
                      src={techStackIcon.imgPath}
                      alt={techStackIcon.name}
                      style={{

                        height: techStackIcon.size
                        ? `${techStackIcon.size}px`
                        : "80px",
                      }}
                      className="svg-tech-icon h-16 md:h-20 w-auto object-contain
                                 transition-transform duration-700
                                 group-hover:scale-110
                                 group-hover:-rotate-3"
                    />
                  ) : (
                    <TechIconCardExperience model={techStackIcon} />
                  )}
                </div>

                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
