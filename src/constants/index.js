import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";


export const HERO_CONTENT = ` I am a Frontend software developer building solutions that meet market needs and drive business growth + user satisfaction.
Proficient in HTML, CSS & JavaScript. Experienced with React js. Well versed in agile methodologies and an excellent team player.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With a year and a half of hands-on experience, I have honed my skills in HTML, CSS, JavaScript, and React.js. My journey in web development started with a fascination for how websites are built, and this curiosity has driven me to continually learn and grow in this field.

During my career, I have successfully contributed to various projects, focusing on crafting responsive and intuitive user interfaces. I am adept at translating design concepts into functional code and ensuring cross-browser compatibility and performance optimization.

I thrive in collaborative environments where teamwork and communication are key to solving complex problems and delivering high-quality solutions. I am committed to staying updated with the latest industry trends and best practices, which allows me to adapt to new challenges effectively.`;

export const EXPERIENCES = [
  {
    year: "Oct. 2024 - present",
    role: "Frontend Developer",
    company: "Intern Pulse",
    description: `Developed and maintained responsive web pages using React.js, collaborating with designers and backend developers to implement engaging and user-friendly interfaces. Integrated backend services and APIs to facilitate real-time, dynamic data displays, enhancing user experience. Leveraged Git for version control, utilizing branching, merging, and pull requests to streamline team collaboration. Additionally, contributed to a reusable component library to ensure design consistency and development efficiency across projects.`,
    technologies: ["HTML", "CSS", "React Js", "JavaScript", "Typescript", "Tailwind"]
  },
  {
    year: "May 2024 - Oct. 2024",
    role: "Frontend Developer",
    company: "Afribreath ltd.",
    description: `Developed and maintained responsive web pages using React.js, collaborating with designers and back-end developers to implement user interfaces. Connected web pages to backend services and APIs to fetch and display dynamic data. Utilized Git for source code management, including branching, merging, and pull requests to facilitate team collaboration. Additionally, created and maintained a library of reusable components to ensure consistency and efficiency across the application.`,
    technologies: ["Javascript", "React.js", "Tailwind css", "HTML"],
  }
  
];

export const PROJECTS = [
  {
    title: "Lauris Sport Massage Therapy ",
    image: project4,
    description:
      "The project aimed to enhance the online presence of Lauris Sport Massage Therapy while offering clients a user-friendly platform to explore services, book appointments, and learn more about the clinic. The focus was on creating a visually appealing, highly functional, and responsive application that aligns with the clinic's branding and client needs",
    technologies: ["Tailwind", "React js"],
     link: "https://laurissportmassagetherapy.com/"
  },
  {
    title: "Alexa Physiotherapy and Rehabilitation Clinic",
    image: project3,
    description:
      "A modern and responsive website designed to showcase Alexa Physiotherapy and Rehabilitation Clinic's services. The project includes:A user-friendly interface for booking appointments and exploring clinic offerings, A dynamic blog/news section to share health tips and clinic updates, Integrated maps for easy location access in Akure and Lagos and Fully optimized for performance, accessibility, and seamless navigation across devices.",
    technologies: ["Tailwind", "React js"],
     link: "https://alexaphysiorehab.com/"
  },
  {
    title: "Cypto Currency Tracker Dashboard",
    image: project1,
    description:
      "A cryptocurrency dashboard application for tracking real-time crypto data, with features such as portfolio tracking, live price updates, and performance monitoring.",
    technologies: ["Tailwind", "React js"],
     link: "https://crypto-tracker-dashboard-esther-amoo.vercel.app/"
  },
  {
    title: "Health Tracker Dashboard",
  image: project2,
  description:
    "A responsive web application built with React and Chakra UI that visualizes health metrics like heart rate, steps, calories, and nutrition using interactive charts from Chart.js. Features include progress tracking, activity overviews, and personalized diet recommendations.",
  technologies: ["React js", "Chakra UI", "Chart.js"],
  link: "https://health-tracker-dashboard-esther-amoo.vercel.app/"
}

];

export const CONTACT = {
  address: "No 4 Ado street opposite Solton Hotel, Ijapo estate Akure Ondo State, Nigeria ",
  phoneNo: "+234 803 090 5783 ",
  email: "amooesther2503@gmail.com",
};
