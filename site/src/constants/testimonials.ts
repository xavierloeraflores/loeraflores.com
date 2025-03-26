export type Testimonial = {
  name: string;
  title: string;
  company: string;
  text: string;
  image: string;
  linkedin: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jeremy Rogers",
    title: "Engineering Manager",
    company: "Fullstack Academy",
    text: "If you want someone dependable, skilled, thorough, and with an inner drive for a job well-done, look no further than Xavier.",
    image: "/images/testimonials/jeremy.jpeg",
    linkedin: "https://www.linkedin.com/in/jeremy-daniel-rogers/",
  },
  {
    name: "Matt Lane",
    title: "Engineering Supervisor",
    company: "CodePath",
    text: "Incredibly smart, self-directed, and a great communicator. Would be a huge asset to any team.",
    image: "/images/testimonials/matt.jpeg",
    linkedin: "https://www.linkedin.com/in/mmmaaatttttt/",
  },
  {
    name: "Nathan Peters",
    title: "Marketing Director",
    company: "MappyCoin",
    text: "He is friendly, hard working and a wonderful asset to the team. Would strongly recommend him as an A Player.",
    image: "/images/testimonials/nathan.jpeg",
    linkedin: "https://www.linkedin.com/in/realnathanpeters/",
  },
  {
    name: "Miguel Gutierrez",
    title: "Operations Manager",
    company: "inkfluencer.io",
    text: "Xavier is a great teammate and a great person with a great personality. He works hard and has great communication skills.",
    image: "/images/testimonials/miguel.jpeg",
    linkedin: "https://www.linkedin.com/in/miguelg2023/",
  },
  {
    name: "Carlos Chavez",
    title: "Software Engineer",
    company: "Workday",
    text: "It's something I was nervous about at first, because we were the only group with two people, everyone else had groups of three. Working with my teammate Xavier was amazing. ",
    image: "/images/testimonials/carlos.jpeg",
    linkedin: "https://www.linkedin.com/in/carlosenrique7/",
  },
];
