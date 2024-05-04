import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    firstLove,
    qodesh,
    markdonwEditor,
    taskify,
    gameHub,
    threejs,
    java,
    python,
    cplus,
  } from "../assets";
  import person1 from "../assets/person1.jpg"
  import person2 from "../assets/person2.jpg"
  import person3 from "../assets/person3.jpg"
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer, Intern",
      company_name: "First Love Center",
      icon: firstLove,
      iconBg: "#383E56",
      date: "September 2023 - December 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Developed and maintained the website of the church using React and JavaScript and Typescript",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer and Graphic Designer",
      company_name: "Qodesh Family Church",
      icon: qodesh,
      iconBg: "#E6DEDD",
      date: "March 2021 - Feb 2023",
      points: [
        "Created and updated the website of the church using React and JavaScript",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Designed and produced flyers for the campus church using Adobe Photoshop.",
      ],
    },
    {
      title: "Full Stack Web Developer(Next.js)",
      company_name: "Poulour",
      icon: meta,
      iconBg: "#383E56",
      date: "November 2023 - Present",
      points: [
        "Built and tested the frontend of a web application for the administration database system using React and JavaScript and Typescript and Next.js.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Integrated APIs and third-party services using Axios and Firebase and mongodb.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: person1,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: person2,
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: person3,
    },
  ];
  
  const projects = [
    {
      name: "Markdown Editor",
      description:
        "A browser-based Markdown editor, simplifying your writing experience. With intuitive features and real-time previews, crafting Markdown documents has never been easier. Say hello to effortless editing with us!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: markdonwEditor,
      source_code_link: "https://github.com/murvyn/markdown-editor",
    },
    {
      name: "Taskify",
      description:
      "Introducing our task management web app! Simplify your productivity with easy task creation, intuitive categorization, and seamless collaboration. Take control of your to-dos effortlessly. Start organizing your tasks now!",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "daisyui",
          color: "pink-text-gradient",
        },
      ],
      image: taskify,
      source_code_link: "https://github.com/murvyn/taskify",
    },
    {
      name: "Game Hub",
      description:
        "Step into our game hub and unlock a world of fun! Discover a variety of games for every player, from classics to new releases. Join the gaming community and start playing today!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gameHub,
      source_code_link: "https://github.com/murvyn/game-hub",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };