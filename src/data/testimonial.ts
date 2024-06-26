import { type Testimonial } from '../types';

// I worked with Xavier in his Mentor II role at Fullstack Academy as his direct manager. Xavier was a fantastic mentor who I could depend on in almost any situation. If there was an issue where an instructor was running late - no problem, Xavier could handle the lecture or lead students in the meantime.
// Xavier was one of our go-to substitutes, and was highly requested by students to continue learning from him. His kind and gentle nature make him easy to listen to and converse with, while his ability to challenge students helps them to find success in their own power and abilities. He's an excellent educator AND student.
// There were many times Xavier and I would have a conversation about different technologies, and perhaps how we could integrate that into existing lectures for additional student resources. He's ever on the forefront of emerging tech, but has a grasp on current usage. He's also an excellent communicator and problem solver.
// If you want someone dependable, skilled, thorough, and with an inner drive for a job well-done, look no further than Xavier. He's an excellent team player, but can also work effectively on his own.

export const JeremyTestimonial: Testimonial = {
	name: 'Jeremy Rogers',
	title: 'Engineering Manager',
	company: 'Fullstack Academy',
	quote:
		'If you want someone dependable, skilled, thorough, and with an inner drive for a job well-done, look no further than Xavier.'
};

const MattTestimonial: Testimonial = {
	name: 'Matt Lane',
	title: 'Engineering Supervisor',
	company: 'CodePath',
	quote:
		'Incredibly smart, self-directed, and a great communicator. Would be a huge asset to any team.'
};
const NathanTestimonial: Testimonial = {
	name: 'Nathan Peters',
	title: 'Marketing Director',
	company: 'MappyCoin',
	quote:
		'He is friendly, hard working and a wonderful asset to the team. Would strongly recommend him as an A Player.'
};
const MiguelTestimonial: Testimonial = {
	name: 'Miguel Gutierrez',
	title: 'Operations Officer',
	company: 'inkfluencer.io',
	quote:
		'Xavier is a great teammate and a great person with a great personality. He works hard and has great communication skills.'
};

export const testimonialData: Testimonial[] = [
	JeremyTestimonial,
	MattTestimonial,
	NathanTestimonial,
	MiguelTestimonial
];
