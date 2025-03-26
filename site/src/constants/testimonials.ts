export type Testimonial = {
  name: string;
  title: string;
  company: string;
  text: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jeremy Rogers",
    title: "Engineering Manager",
    company: "Fullstack Academy",
    text: "If you want someone dependable, skilled, thorough, and with an inner drive for a job well-done, look no further than Xavier.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Matt Lane",
    title: "Engineering Supervisor",
    company: "CodePath",
    text: "Incredibly smart, self-directed, and a great communicator. Would be a huge asset to any team.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Nathan Peters",
    title: "Marketing Director",
    company: "MappyCoin",
    text: "He is friendly, hard working and a wonderful asset to the team. Would strongly recommend him as an A Player.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Miguel Gutierrez",
    title: "Operations Manager",
    company: "inkfluencer.io",
    text: "Xavier is a great teammate and a great person with a great personality. He works hard and has great communication skills.",
    image: "https://github.com/shadcn.png",
  },
];
