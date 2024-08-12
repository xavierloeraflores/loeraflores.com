import { type Education } from '../types';

const WGU2: Education = {
	school: 'Western Governors University',
	degree: 'M.S. Data Analytics - Data Science',
	dates: '2024 - 2025',
	location: 'Millcreek UT',
	link: 'https://www.wgu.edu/',
	tab: 'MS DS'
};
const WGU: Education = {
	school: 'Western Governors University',
	degree: 'B.S. Computer Science',
	dates: '2022 - 2024',
	location: 'Millcreek UT',
	link: 'https://www.wgu.edu/',
	tab: 'BS CS'
};
const SJSU: Education = {
	school: 'San Jose State University',
	degree: 'Fullstack Bootcamp',
	dates: '2021',
	location: 'San Jose CA',
	link: 'https://www.sjsu.edu/',
	tab: 'Web Dev'
};
const CIS: Education = {
	school: 'Mission College',
	degree: 'A.S. Computer Information Systems',
	dates: '2017 - 2022',
	location: 'Santa Clara CA',
	link: 'https://www.missioncollege.edu/',
	tab: 'AS CIS'
};
const CodePath: Education = {
	school: 'CodePath.org',
	degree: 'IOS Development Program',
	dates: '2020',
	location: 'San Francisco CA',
	link: 'https://codepath.org/',
	tab: 'IOS'
};

const MS: Education = {
	school: 'Mission College',
	degree: 'A.A. Liberal Arts: Math & Science',
	dates: '2017 - 2020',
	location: 'Santa Clara CA',
	link: 'https://www.missioncollege.edu/',
	tab: 'AA'
};

export const educationData: Education[] = [WGU2, WGU, SJSU, CIS, CodePath, MS];
