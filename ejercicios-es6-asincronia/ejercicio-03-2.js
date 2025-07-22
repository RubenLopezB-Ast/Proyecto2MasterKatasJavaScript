const usersUpdated = users.map(user => {
	return user.name.startsWith('A') ? { ...user, name: 'Anacleto' } : user;
});

console.log(usersUpdated);
