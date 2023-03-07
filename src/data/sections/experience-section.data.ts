import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, linkedin, website } from '../helpers/links';
import {
  axios,
  eslint,
  i18next,
  javascript,
  jest,
  nextJs,
  prettier,
  prisma,
  react,
  redux,
  rtkQuery,
  sentry,
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
      role: 'Frontend developer',
      company: 'JJM Development',
      image: import('@/assets/logos/jjm-development-logo.jpeg'),
      dates: [new Date('2023-02'), null],
      description: `
        - Developing and sustaining the front-end of a virtual marketplace.
        - Collaborating with a scrum team to ensure delivery of high-quality product.
        - Introducing and implementing polymorphic approach for building strongly typed components.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          nextJs(),
          typescript(),
          jest(),
          styledComponents(),
          redux(),
          rtkQuery(),
          axios(),
          sentry(),
          eslint(),
          prettier(),
        ],
      },
      links: [
        website({ url: 'https://jjmdevelopment.pl/' }),
        linkedin({ url: 'https://www.linkedin.com/company/jjm-development/mycompany/' }),
      ],
    },
    {
      role: 'React developer',
      company: 'DreamStorm Studios',
      image: import('@/assets/logos/dreamstorm-studios-logo.png'),
      dates: [new Date('2021-10'), new Date('2021-12')],
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
          eslint(),
          prettier(),
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
      image: import('@/assets/logos/netzwind-logo.jpeg'),
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
          eslint(),
          prettier(),
        ],
      },
      links: [website({ url: 'https://netzwind.eu/' })],
    },
    {
      role: 'React Native Developer Intern',
      company: 'Expansio Software House',
      image: import('@/assets/logos/expansio-logo.jpeg'),
      dates: [new Date('2021-07'), new Date('2021-08')],
      description: `
        - Developing a mobile e-learning platform with React Native and Redux.
        - Improving internationalization in the app and revamping all application screens.
        - Taking part in dev meetings regarding code base and product.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react({ name: 'React Native' }), typescript(), javascript(), redux(), eslint(), prettier()],
      },
      links: [
        website({ url: 'https://expans.io/' }),
        linkedin({ url: 'https://www.linkedin.com/company/expansio-software-house/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
