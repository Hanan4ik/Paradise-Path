// MINECRAFT FORMATTING CODES - https://minecraft.fandom.com/wiki/Formatting_codes
// Use § followed by a character code for formatting
//
// COLORS: §0=Black, §1=DarkBlue, §2=DarkGreen, §3=DarkCyan, §4=DarkRed, §5=DarkMagenta
//         §6=Gold, §7=LightGray, §8=DarkGray, §9=Blue, §a=Green, §b=Cyan, §c=Red, §d=Magenta, §e=Yellow, §f=White
// STYLES: §l=Bold, §m=Strikethrough, §n=Underline, §o=Italic, §k=Obfuscated
// RESET:  §r=Reset all formatting
//
// EXAMPLES:
// '§1one§r' -> "one" in dark blue, then reset to normal
// '§6right click§r' -> "right click" in gold, then reset
// '§l§6Bold Gold§r' -> Bold gold text, then reset

RecipeViewerEvents.addInformation('item', event => {
	event.add('kubejs:fire_making_equipment', [
		'Has only §cONE§r usage.',
        'Place any planks block and §2right click§r on it',
        'With §230% chance§r it will become fire',
		'Throw §dDemon\'s Dream Fruit§r to get §2Spirit Fire§r'
	]);

	event.add('kubejs:sharped_stick', [
		'Simply right click stick on compressed cobblestone',
	]);
})
