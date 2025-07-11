const base = [
  { id: 1, name: 'Steven Spielberg', city: 'Cincinnati' },
  { id: 2, name: 'Ridley Scott', city: 'South Shields' },
  { id: 3, name: 'Christopher Nolan', city: 'London' },
  { id: 4, name: 'Denis Villeneuve', city: 'Bécancour' },
];

const mockData = Array.from({ length: 1000 }, (unused, index) => ({
  id: index + 1,
  name: base[index % base.length].name + ' '.repeat(100),
}));

export default mockData;
