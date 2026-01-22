// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')

RecipeViewerEvents.addInformation('item', event => {
	event.add('kubejs:fire_making_equipment', [
		'Has only §1one§r usage.',
        'Place any planks block and §6right click§r on it',
        'With §630% chance§r it will become fire'
	]);
})
