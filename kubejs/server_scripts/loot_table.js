LootJS.modifiers(event => {
    // Or we can also use a regex
    event.addEntityModifier('occultism:possessed_endermite').removeLoot('minecraft:ender_eye');
    event.addTableModifier(LootType.CHEST).removeLoot('minecraft:experience_bottle');
});