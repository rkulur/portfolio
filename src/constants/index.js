import analogClock from "../assets/asset/analog-clock-project.png";
import ems from "../assets/asset/ems-project.png";
import mdToHTML from "../assets/asset/mdToHTML.png";

export const PROJECTS = [
  {
    title: "Analog Clock",
    image: analogClock,
    description: "An analog clock created using HTML, CSS and JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://rkulur-analog-clock.vercel.app/",
  },
  {
    title: "Employee Management System",
    image: ems,
    description:
      "A web application for managing employee and department data, supporting CRUD operations with a Node.js backend and Supabase as the database",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind",
      "TS",
      "Node.js",
      "Express",
      "Supabase",
    ],
    link: "https://rkulur-ems.vercel.app/",
  },
  {
    title: "Markdown to HTML converter",
    image: mdToHTML,
    description:
      "An application that converts Markdown input into its corresponding HTML output.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "TailwindCSS",
      "TypeScript",
      "Node.js",
      "Express",
    ],
    link: "https://rrtools.vercel.app/tools/markdowntohtmlconverter",
  },
];

