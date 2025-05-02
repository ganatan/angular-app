export interface Director {
  id: number;
  name: string;
  city: string;
}

const directors: Director[] = [
  { id: 1, name: 'Steven Spielberg', city: 'Cincinnati' },
  { id: 2, name: 'Ridley Scott', city: 'South Shields' },
  { id: 3, name: 'Christopher Nolan', city: 'London' },
  { id: 4, name: 'Denis Villeneuve', city: 'Bécancour' },
];

export default directors;
