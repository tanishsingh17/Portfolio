import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="Projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {/* Projects heading */}
        <div className="flex justify-center mb-16">
          <img
            src="/images/logos/mind.svg"   // 👈 change to your logo path
            alt="Projects"
            className="h-8 md:h-12 gap-5 w-auto opacity-90 mr-3"
          />
          <h2 className="relative text-3xl md:text-5xl font-bold">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-00/30 blur-3xl rounded-full"></div>
            Projects
          </h2>
        </div>

    {/* Projects content */}

        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/genrator.png" alt="NFTs Genrator" />
            </div>
            <div className="text-content">
              <h2>
                A tool to create and manage unique NFT collections with configurable traits and rarity.
              </h2>
              <p className="text-white-50 md:text-xl">
                Built using Node.js and JavaScript, with automated image composition, ERC-721 compatible metadata generation, and IPFS integration for decentralized asset storage.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/wallet checker.png"
                  alt="The Wallet Verification Platform"
                />
              </div>
              <h2>The Wallet Verification Platform</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/Mioo.png" alt="Mioo Website" />
              </div>
              <h2>MIOO – A Fully Responsive Animated Website</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
