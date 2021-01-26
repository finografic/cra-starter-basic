// BREAKPOINTS (px)
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  // xxl: 1600,
};

// MEDIAQUERIES
const mq = {};

for (const [ key, value ] of Object.entries(breakpoints)) {
  mq[key] = `@media (min-width: ${value}px)`;
}

export default mq;
