const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const METHODS_ALL = [
  HTTP_METHODS.GET,
  HTTP_METHODS.POST,
  HTTP_METHODS.PUT,
  HTTP_METHODS.DELETE,
];

export const ROUTES = {
  continents: {
    path: '/continents',
    methods: [HTTP_METHODS.GET, HTTP_METHODS.POST, HTTP_METHODS.PUT, HTTP_METHODS.DELETE],
  },
  countries: {
    path: '/countries',
    methods: METHODS_ALL,
  },
  cities: {
    path: '/cities',
    methods: METHODS_ALL,
  },
  professions: {
    path: '/professions',
    methods: METHODS_ALL,
  },
  persons: {
    path: '/persons',
    methods: METHODS_ALL,
  },
  'person-professions': {
    path: '/person-professions',
    methods: METHODS_ALL,
  },
  medias: {
    path: '/medias',
    methods: METHODS_ALL,
  },
  'media-types': {
    path: '/media-types',
    methods: METHODS_ALL,
  },
  'media-persons': {
    path: '/media-persons',
    methods: METHODS_ALL,
  },
  playlists: {
    path: '/playlists',
    methods: METHODS_ALL,
  },
  'playlist-elements': {
    path: '/playlist-elements',
    methods: METHODS_ALL,
  },
};

export { HTTP_METHODS };

// export const ROUTES = {
//   continents: {
//     path: '/continents',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
//   countries: {
//     path: '/countries',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
//   cities: {
//     path: '/cities',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
//   professions: {
//     path: '/professions',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
//   persons: {
//     path: '/persons',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
//   'person-professions': {
//     path: '/person-professions',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
//   medias: {
//     path: '/medias',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
//   'media-types': {
//     path: '/media-types',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
//   'media-persons': {
//     path: '/media-persons',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
//   playlists: {
//     path: '/playlists',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
//   'playlist-elements': {
//     path: '/playlist-elements',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
// };
