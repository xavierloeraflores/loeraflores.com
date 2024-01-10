import { type Education } from '../types';
const WGU: Education = {
	school: 'Western Governors University',
	degree: 'B.S. Computer Science',
	dates: '2019 - 2021',
	location: 'Millcreek UT',
	link: 'https://www.wgu.edu/'
};
const SJSU: Education = {
	school: 'San Jose State University',
	degree: 'Fullstack Bootcamp',
	dates: '2021',
	location: 'San Jose CA',
	link: 'https://www.sjsu.edu/'
};
const CIS: Education = {
	school: 'Mission College',
	degree: 'A.S. Computer Information Systems',
	dates: '2017-2022',
	location: 'Santa Clara CA',
	link: 'https://www.missioncollege.edu/'
};
const CodePath: Education = {
	school: 'CodePath.org',
	degree: 'IOS Development Program',
	dates: '2020',
	location: 'San Francisco CA',
	link: 'https://codepath.org/'
};

const MS: Education = {
	school: 'Mission College',
	degree: 'A.A. Liberal Arts: Math & Science',
	dates: '2017-2020',
	location: 'Santa Clara CA',
	link: 'https://www.missioncollege.edu/'
};

export const educationData: Education[] = [WGU, SJSU, CIS, CodePath, MS];
