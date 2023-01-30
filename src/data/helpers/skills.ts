import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

export const apolloGraphql = createSkill({
Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  icon: 'logos:astro',
  name: 'Astro',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  name: 'Chakra UI',
  url: 'https://chakra-ui.com/',
});

export const eslint = createSkillFactory({
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  name: 'ESLint',
  url: 'https://eslint.org/',
});

export const jest = createSkillFactory({
  icon: 'logos:jest',
  name: 'Jest',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  name: 'MongoDB',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  name: 'NestJS',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  icon: 'logos:nextjs-icon',
  name: 'Next.js',
  url: 'https://nextjs.org/',
});

export const postgreSql = createSkillFactory({
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  name: 'PostgreSQL',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  name: 'Prettier',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  icon: 'logos:react',
  iconColor: '#61DAFB',
  name: 'React.js',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'logos:react-query-icon',
  url: 'https://tanstack.com/query',
});

export const tailwindCss = createSkillFactory({
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  name: 'Tailwind CSS',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  name: 'TypeScript',
  url: 'https://www.typescriptlang.org/',
});

export const javascript = createSkillFactory({
  icon: 'logos:javascript',
  name: 'JavaScript ES6',
  url: 'https://www.javascript.com/',
});

export const storybook = createSkillFactory({
  icon: 'logos:storybook-icon',
  iconColor: '#FF4785',
  name: 'Storybook',
  url: 'https://storybook.js.org/',
});

export const redux = createSkillFactory({
  icon: 'logos:redux',
  name: 'Redux',
  url: 'https://redux.js.org/',
});

export const styledComponents = createSkillFactory({
  icon: 'simple-icons:styledcomponents',
  iconColor: '#DB7093',
  name: 'Styled Components',
  url: 'https://styled-components.com/',
});

export const prisma = createSkillFactory({
  icon: 'logos:prisma',
  name: 'Prisma',
  url: 'https://www.prisma.io/',
});

export const socketio = createSkillFactory({
  icon: 'logos:socket-io',
  name: 'Socket.io',
  url: 'https://socket.io/',
});

export const materialUi = createSkillFactory({
  icon: 'logos:material-ui',
  name: 'Material UI',
  url: 'https://material-ui.com/',
});

export const i18next = createSkillFactory({
  icon: 'simple-icons:i18next',
  iconColor: '#26A69A',
  name: 'i18next',
  url: 'https://www.i18next.com/',
});
