import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiBootstrap,
  DiNodejs,
} from "react-icons/di";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandFigma,
  TbFileDescription,
  TbSettingsCheck,
  TbDeviceDesktopAnalytics,
} from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiMiro,
  SiNotion,
  SiMongodb,
  SiGraphql,
  SiMysql,
  SiSpringboot,
  SiGithub,
  SiRobotframework,
  SiMinds,
  SiLinkedin,
} from "react-icons/si";
import {
  FaCreativeCommonsSamplingPlus,
  // FaSquareXTwitter,

  // FaSquareInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLanguage, MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineDevicesOther, MdOutlineDesignServices } from "react-icons/md";
import { BiServer } from "react-icons/bi";
import { LuBrainCircuit } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { RiTwitterXFill, RiInstagramLine } from "react-icons/ri";
import { nanoid } from "nanoid";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
];

export const info = {
  name: "Asad Ali",
  skill: "Full-Stack Developer",
  desc: "With 3 years of Full-Stack Developer experience, I excel in React, Next.js, and Node.js. My portfolio showcases versatile web projects. Let's collaborate to bring your digital ideas to life and create impactful online experiences.",
};

export const aboutInfo = {
  heading: "my advantage",
  desc: "Certainly, here's a general and concise Welcome to my web development world. I'm Asad Ali, a dedicated web developer with expertise in a range of essential technologies. I specialize in crafting modern and dynamic web solutions that elevate online experiences. With a creative eye and a passion for problem-solving, I create visually appealing and interactive websites. My goal is to make your digital vision come to life. Whether it's front-end development with React, back-end wizardry with Node.js, or database management with MongoDB, I have the skills to bring it all together seamlessly. I pride myself on clean, efficient code and a commitment to delivering projects on time. Let's work together to make your online presence shine.",
};

export const skills = [
  {
    id: nanoid(),
    name: "HTML5",
    icon: <DiHtml5 className="w-24 h-24 text-[#E34F26]" />,
  },
  {
    id: nanoid(),
    name: "CSS3",
    icon: <DiCss3 className="w-24 h-24 text-[#264de4]" />,
  },
  {
    id: nanoid(),
    name: "JavaScript",
    icon: <RiJavascriptFill className="w-24 h-24 text-[#F0DB4F]" />,
  },
  {
    id: nanoid(),
    name: "React",
    icon: <DiReact className="w-24 h-24 text-[#61DAFB]" />,
  },
  {
    id: nanoid(),
    name: "Next.js",
    icon: <TbBrandNextjs className="w-24 h-24 text-black" />,
  },
  {
    id: nanoid(),
    name: "Tailwind CSS",
    icon: <TbBrandTailwind className="w-24 h-24 text-[#38B2AC]" />,
  },
  {
    id: nanoid(),
    name: "Bootstrap",
    icon: <DiBootstrap className="w-24 h-24 text-[#563D7C]" />,
  },
  {
    id: nanoid(),
    name: "Node.js",
    icon: <DiNodejs className="w-24 h-24 text-[#339933]" />,
  },
  {
    id: nanoid(),
    name: "MongoDB",
    icon: <SiMongodb className="w-24 h-24 text-[#47A248]" />,
  },
  {
    id: nanoid(),
    name: "GraphQL",
    icon: <SiGraphql className="w-24 h-24 text-[#E10098]" />,
  },
  {
    id: nanoid(),
    name: "MySQL",
    icon: <SiMysql className="w-24 h-24 text-[#4479A1]" />,
  },
  {
    id: nanoid(),
    name: "Spring Boot",
    icon: <SiSpringboot className="w-24 h-24 text-[#6DB33F]" />,
  },
  {
    id: nanoid(),
    name: "Git",
    icon: <SiGithub className="w-24 h-24 text-[#181717]" />,
  },
  {
    id: nanoid(),
    name: "Figma",
    icon: <TbBrandFigma className="w-24 h-24 text-[#0ACF83]" />,
  },
  {
    id: nanoid(),
    name: "Miro",
    icon: <SiMiro className="w-24 h-24 text-[#3333CC]" />,
  },
  {
    id: nanoid(),
    name: "Notion",
    icon: <SiNotion className="w-24 h-24 text-black" />,
  },
];

export const allSkills = {
  technical: [
    {
      id: nanoid(),
      name: "languages",
      icon: (
        <TbFileDescription className="w-16 h-16  group-hover:text-mn-secondary duration-300" />
      ),
      desc: "Work with programming languages like JavaScript, Java, Python, and SQL.",
    },
    {
      id: nanoid(),
      name: "frameworks",
      icon: (
        <SiRobotframework className="w-16 h-16  group-hover:text-mn-secondary duration-300" />
      ),
      desc: "Work with frameworks like React, Next.js, Node.js, Express.js, Spring Boot, and Bootstrap, tailwind",
    },
    {
      id: nanoid(),
      name: "web performance",
      icon: (
        <TbSettingsCheck className="w-16 h-16   group-hover:text-mn-secondary duration-300" />
      ),
      desc: "I'm dedicated to creating lightning-fast, responsive websites and applications. By employing techniques like image optimization, efficient code, and content caching, I ensure an exceptional user experience. My commitment to web performance enhancement is reflected in every project I undertake, delivering speed, efficiency, and user satisfaction.",
    },
  ],
  soft: [
    {
      id: nanoid(),
      name: "Problem Solving",
      icon: (
        <SiMinds className="w-16 h-16   group-hover:text-mn-secondary duration-300" />
      ),
      desc: "Thrived in challenging situations by analyzing issues, identifying root causes, and implementing effective solutions. Used debugging skills to resolve complex coding problems.",
    },
    {
      id: nanoid(),
      name: "Creativity",
      icon: (
        <FaCreativeCommonsSamplingPlus className="w-16 h-16   group-hover:text-mn-secondary duration-300" />
      ),
      desc: "Created visually appealing and interactive websites that enhance the user experience. Developed innovative solutions to complex coding issues.",
    },
    {
      id: nanoid(),
      name: "Communication",
      icon: (
        <MdLanguage className="w-16 h-16 group-hover:text-mn-secondary duration-300" />
      ),
      desc: "Collaborated with clients to understand their needs and deliver the desired results. Communicated effectively with team members to ensure seamless project execution.",
    },
  ],
  domain: [
    {
      id: nanoid(),
      name: "responsive design",
      icon: (
        <MdOutlineDevicesOther className="w-16 h-16   group-hover:text-mn-secondary duration-300" />
      ),
      desc: "Created responsive websites that function seamlessly across all devices. Ensured that websites are optimized for mobile, tablet, and desktop use.",
    },
    {
      id: nanoid(),
      name: "UI/UX principles",
      icon: (
        <MdOutlineDesignServices className="w-16 h-16   group-hover:text-mn-secondary duration-300" />
      ),
      desc: "Applied UI/UX principles to create visually appealing and user-friendly websites. Used wireframes and prototypes to design websites that meet client requirements.",
    },
  ],
  additional: [
    {
      id: nanoid(),
      name: "backend",
      icon: (
        <BiServer className="w-16 h-16   group-hover:text-mn-secondary duration-300" />
      ),
      desc: "Work with backend technologies like Node.js, Express.js, Spring Boot, and MongoDB to create dynamic websites and applications.",
    },
    {
      id: nanoid(),
      name: "data science",
      icon: (
        <TbDeviceDesktopAnalytics className="w-16 h-16  group-hover:text-mn-secondary duration-300" />
      ),
      desc: "Work with data science tools like Python, R, and SQL to analyze data and generate insights that drive business growth.",
    },
    {
      id: nanoid(),
      name: "deep learning",
      icon: (
        <LuBrainCircuit className="w-16 h-16  group-hover:text-mn-secondary duration-300" />
      ),
      desc: "Work with deep learning frameworks like TensorFlow and Keras to build and train neural networks that can recognize patterns in data.",
    },
  ],
};

export const skills4 = [
  {
    id: nanoid(),
    name: "Technical",
  },
  {
    id: nanoid(),
    name: "soft",
  },
  {
    id: nanoid(),
    name: "domain",
  },
  {
    id: nanoid(),
    name: "additional",
  },
];

export const contactDetails = [
  {
    id: nanoid(),
    name: "whatsapp",
    detail: "+92 3169812675",
    icon: (
      <FaWhatsapp className="h-4/6 w-4/6 inline-block  text-white text-3xl m-auto " />
    ),
  },
  {
    id: nanoid(),
    name: "email",
    detail: "asadali.cs63@gmail.com",
    icon: (
      <FiMail className="h-4/6 w-4/6 inline-block text-white text-3xl m-auto " />
    ),
  },
  {
    id: nanoid(),
    name: "location",
    detail: "Sukkur, Pakistan",
    icon: (
      <MdOutlineLocationOn className="h-4/6 w-4/6 inline-block text-white text-3xl m-auto" />
    ),
  },
];

export const socialContacts = [
  {
    id: nanoid(),
    name: "github",
    url: "https://github.com/asadali163",
    icon: <SiGithub className="text-mn-secondary" />,
  },
  {
    id: nanoid(),
    name: "linkedin",
    url: "https://www.linkedin.com/in/asad-ali12/",
    icon: <SiLinkedin className="text-mn-secondary" />,
  },
  {
    id: nanoid(),
    name: "X",
    url: "https://www.linkedin.com/in/asad-ali12/",
    icon: <RiTwitterXFill className="text-mn-secondary" />,
  },
  {
    id: nanoid(),
    name: "instagram",
    url: "https://www.instagram.com/asadali3.0/",
    icon: <RiInstagramLine className="text-mn-secondary" />,
  },
];

export const year = new Date().getFullYear();
