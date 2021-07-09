export const NAME = 'CORE';
export const MOBILE_BREAKPOINT = 1024;

export const PATHS = {
  DEFAULT: '/',
  PROJECT: '/project',
  PROJECTS: '/projects',
  CALENDAR: '/planning',
};

export const ROUTING = {
  DEFAULT: {
    PATH: '/',
    PARAMS: '',
  },
  PROJECTS: {
    PATH: '/projects',
    PARAMS: '',
  },
  PROJECT: {
    PATH: '/project/:id',
    PARAMS: '',
  },
  CALENDAR: {
    PATH: '/planning',
    PARAMS: '',
  },
};
