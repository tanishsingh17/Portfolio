import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Software Developer</p>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label={socialImg.name}
            >
              <img
                src={socialImg.imgPath}
                alt={socialImg.name}
                style={{ height: socialImg.size }}
                className="w-auto opacity-90"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            Built & Designed by Tanish Singh Thakur.

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
