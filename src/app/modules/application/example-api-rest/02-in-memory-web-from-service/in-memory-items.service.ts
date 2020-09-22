import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemItemsService implements InMemoryDbService {
  createDb(): any {
    const movies = [
      { id: 1001, name: 'Alien', date: 1979, director: 'Ridley Scott' },
      { id: 1002, name: 'Blade Runner', date: 1982, director: 'Ridley Scott' },
      { id: 1003, name: 'Gladiator', date: 2000, director: 'Ridley Scott' },
      { id: 1003, name: 'Interstellar', date: 2014, director: 'Christopher Nolan' },
      { id: 1004, name: 'The Day After Tomorrow', date: 2004, director: 'Roland Emerich' },
      { id: 1005, name: 'Jaws', date: 1975, director: 'Steven Spielberg' },
      { id: 1006, name: 'Raiders of the Lost', date: 1981, director: 'Steven Spielberg' },
      { id: 1007, name: 'Saving Private Ryan', date: 1998, director: 'Steven Spielberg' },
      { id: 1008, name: 'Aliens', date: 1986, director: 'James Cameron' },
      { id: 1009, name: 'Avatar', date: 2009, director: 'James Cameron' }
    ];
    return { movies };
  }
}
