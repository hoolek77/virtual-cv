import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  chakraUi,
  eslint,
  javascript,
  jest,
  materialUi,
  mongoDb,
  nestJs,
  nextJs,
  postgreSql,
  prettier,
  prisma,
  react,
  reactQuery,
  redux,
  socketio,
  storybook,
  styledComponents,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        react({ level: 5 }),
        nextJs({ level: 5 }),
        typescript({ level: 4 }),
        javascript({ level: 4 }),
        reactQuery({ level: 4 }),
        jest({ level: 3 }),
        storybook({ level: 4 }),
        redux({ level: 3 }),
        styledComponents({ level: 4 }),
        prisma({ level: 3 }),
        astro({ level: 3 }),
        socketio({ level: 2 }),
        apolloGraphql({ level: 2 }),
        materialUi({ level: 4 }),
        chakraUi({ level: 4 }),
        tailwindCss({ level: 4 }),
        prettier({ level: 5 }),
        eslint({ level: 4 }),
        nestJs({ level: 2 }),
        postgreSql({ level: 2 }),
        mongoDb({ level: 2 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [
        {
          icon: 'simple-icons:cypress',
          iconColor: '#17202C',
          name: 'Cypress',
          url: 'https://www.cypress.io/',
        },
        {
          icon: 'logos:playwright',
          iconColor: '#EC5840',
          name: 'Playwright',
          url: 'https://playwright.dev/',
        },
        {
          icon: 'logos:turborepo-icon',
          name: 'Turbo',
          url: 'https://turbo.build/',
        },
        {
          icon: 'logos:trpc',
          name: 'trpc',
          url: 'https://trpc.io/',
        },
      ],
    },
    {
      title: 'I speak',
      skills: [
        {
          icon: 'circle-flags:pl',
          name: 'Polish - native',
        },
        {
          icon: 'circle-flags:us',
          name: 'English - professional proficiency',
        },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
