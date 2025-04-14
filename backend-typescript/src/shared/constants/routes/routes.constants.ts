export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface RouteDefinition {
  path: string
  methods: HttpMethod[]
}

export const ROUTES: Record<string, RouteDefinition> = {
  continents: {
    path: '/continents',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
  countries: {
    path: '/countries',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
  cities: {
    path: '/cities',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
  professions: {
    path: '/professions',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
  persons: {
    path: '/persons',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
  'person-professions': {
    path: '/person-professions',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
  medias: {
    path: '/medias',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
  'media-types': {
    path: '/media-types',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
  'media-persons': {
    path: '/media-persons',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
  playlists: {
    path: '/playlists',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
  'playlist-elements': {
    path: '/playlist-elements',
    methods: [HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE],
  },
};

