const filteredStreamers = streamers.filter(s => s.gameMorePlayed.includes('Legends')).map(s => {
	if (s.age > 35) {
		return { ...s, gameMorePlayed: s.gameMorePlayed.toUpperCase() };
	}
	return s;
});

console.log(filteredStreamers);