const cities = [
	{ isVisited: true, name: 'Tokyo' },
	{ isVisited: false, name: 'Madagascar' },
	{ isVisited: true, name: 'Amsterdam' },
	{ isVisited: false, name: 'Seul' }
];

const visitedCities = cities.map(city => {
	return city.isVisited ? { ...city, name: city.name + ' (Visitado)' } : city;
});

console.log(visitedCities);