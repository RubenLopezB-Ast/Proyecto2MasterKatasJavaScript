const input = document.querySelector('[data-function="toFilterStreamers"]');

const streamers = [
	{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
	{ name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
	{ name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
	{ name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

input.addEventListener('input', () => {
	const value = input.value.toLowerCase();
	const result = streamers.filter(s => s.name.toLowerCase().includes(value));
	console.log(result);
});
