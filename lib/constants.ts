export interface EventItem {
  title: string;
  image: string; // path relative to public/, e.g. '/images/event1.png'
  location: string;
  slug: string; // e.g. 'react-summit-netherlands-2025'
  date: string; // formatted as DD-MM-YYYY (e.g. '07-11-2025')
  time: string; // formatted as '09:00 AM'
}

export const events: EventItem[] = [
  {
    title: 'React Summit',
    image: '/images/event1.png',
    location: 'Amsterdam, Netherlands',
    slug: 'react-summit-netherlands-2025',
    date: '07-11-2025',
    time: '09:00 AM'
  },
  {
    title: 'Next.js Conf',
    image: '/images/event2.png',
    location: 'Online / Global',
    slug: 'nextjs-conf-global-2025',
    date: '12-11-2025',
    time: '10:00 AM'
  },
  {
    title: 'JSConf EU',
    image: '/images/event3.png',
    location: 'Berlin, Germany',
    slug: 'jsconf-eu-berlin-2025',
    date: '20-11-2025',
    time: '09:30 AM'
  },
  {
    title: 'NodeConf (Node+JS)',
    image: '/images/event4.png',
    location: 'Various locations',
    slug: 'nodeconf-nodejs-2025',
    date: '05-12-2025',
    time: '09:00 AM'
  },
  {
    title: 'Google I/O',
    image: '/images/event5.png',
    location: 'Mountain View, CA / Online',
    slug: 'google-io-2026',
    date: '15-03-2026',
    time: '10:00 AM'
  },
  {
    title: 'Microsoft Build',
    image: '/images/event6.png',
    location: 'Seattle / Online',
    slug: 'microsoft-build-2026',
    date: '21-05-2026',
    time: '09:00 AM'
  },
  {
    title: 'ETHGlobal Hackathon',
    image: '/images/event-full.png',
    location: 'Global / Hybrid',
    slug: 'ethglobal-hackathon-2025',
    date: '30-11-2025',
    time: '06:00 PM'
  }
];

export default events;
