const navLinks = [
  {
    name: "Projects",
    link: "#Projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];



const logoIconsList = [
  {
    imgPath: "/images/logos/apple.png",
    height: 80,
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
    height: 40,
  },
  {
    imgPath: "/images/logos/sales.png",
    height: 100,
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
    height: 40,
  },
  {
    imgPath: "/images/logos/microsoft.png",
    height: 200,
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
    height: 40,
  },
  {
    imgPath: "/images/logos/cisco.png",
    height: 100,
  },
  {
    imgPath: "/images/logos/ibm.png",
    height: 100,
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
    height: 40,
  },
  {
    imgPath: "/images/logos/google.png",
    height: 80,
  },
  {
    imgPath: "/images/logos/oracle.png",
    height: 150,
  },
];

const abilities = [
  {
    imgPath: "/images/dev computer.png",
    title: "Frontend & Web Development",
    desc: "Building responsive and user-friendly websites using modern web technologies.",
  },
  {
    imgPath: "/images/blockchain.png",
    title: "Blockchain & Web3",
    desc: "Learning blockchain and Web3 fundamentals by building small decentralized applications and experimenting with blockchain-based features.",
  },
  {
    imgPath: "/images/idea.png",
    title: "Practical Problem Solving",
    desc: "Applying logical thinking and coding skills to solve real-world problems during projects and internships.",
  },
];

const techStackImgs = [
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Blockchain & Web3",
    imgPath: "/images/logos/mind.svg",
  },
  {
    name: "Frontend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Prompt Engineering, Gen AI",
    imgPath: "/images/logos/ai.svg",
  },
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  
];

const techStackIcons = [
  {
    id: "python",
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    id: "blockchain",
    name: "Blockchain & Web3",
    imgPath: "/images/logos/chain.svg", // ✅ SVG
    size: 150,
  },
  {
    id: "frontend",
    name: "Frontend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    id: "genai",
    name: "Prompt Engineering, Gen AI",
    imgPath: "/images/logos/ai.svg", // ✅ SVG
    size: 160,
  },
  {
    id: "react",
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Tanish brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/vivagifts.webp",
    logoPath: "/images/gift.png",
    title: "Frontend Developer Intership",
    date: "August 2024 - October 2024",
    responsibilities: [
      "Developed and maintained user-facing features for the VivaGifts website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "GitHub",
    imgPath: "/images/githubbb.svg",
    size : 27,
    link: "https://github.com/tanishsingh17",
  },
  {
    name: "Leetcode",
    imgPath: "/images/leetcode.svg",
    size : 27,
    link: "https://leetcode.com/u/tanish_singh_1706/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/tanish-singh-thakur-a62156254/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
