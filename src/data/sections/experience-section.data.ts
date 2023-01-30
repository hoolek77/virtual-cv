import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, linkedin, website } from '../helpers/links';
import {
  i18next,
  javascript,
  jest,
  nextJs,
  prisma,
  react,
  redux,
  socketio,
  storybook,
  styledComponents,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'React developer',
      company: 'DreamStorm Studios',
      dates: [new Date('2021-10'), null],
      description: `
        - Developing and sustaining the front-end of an all-in-one platform for creating virtual events.
        - Being a member of a team that was planning and executing a major platform refactor.
        - Writing unit and integration tests. Taking part in creating a test strategy for the product.
        - Introducing and implementing a storybook UI components library in the app.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
          typescript(),
          storybook(),
          jest(),
          styledComponents(),
          prisma(),
          tailwindCss(),
          socketio(),
        ],
      },
      links: [
        website({ url: 'https://dreamstormstudios.com/' }),
        facebook({ url: 'https://www.facebook.com/DreamStormStudios' }),
        linkedin({ url: 'https://www.linkedin.com/company/dreamstormstudios/mycompany/' }),
      ],
    },
    {
      role: 'Freelance React Developer',
      company: 'Netzwind',
      dates: [new Date('2021-08'), new Date('2021-09')],
      description: `
        - Working on an information system for students and a mobile app with more than 50k downloads.
        - Planning the application architecture and implementing the first version.
        - Connecting with an existing backend.
        - Working closely with the product owner to deliver new features.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          typescript(),
          i18next(),
          {
            icon: 'simple-icons:axios',
            iconColor: '#5a29e4',
            name: 'Axios',
            url: 'https://axios-http.com/',
          },
          redux(),
        ],
      },
      links: [website({ url: 'https://netzwind.eu/' })],
    },
    {
      role: 'React Native Developer Intern',
      company: 'Expansio Software House',
      dates: [new Date('2021-07'), new Date('2021-08')],
      description: `
        - Developing a mobile e-learning platform with React Native and Redux.
        - Improving internationalization in the app and revamping all application screens.
        - Taking part in dev meetings regarding code base and product.
      `,
      tagsList: { title: 'Technologies', tags: [react({ name: 'React Native' }), typescript(), javascript(), redux()] },
      links: [
        website({ url: 'https://expans.io/' }),
        linkedin({ url: 'https://www.linkedin.com/company/expansio-software-house/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
