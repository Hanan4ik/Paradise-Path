ServerEvents.recipes(event => {
  event.recipes.create.deploying('minecraft:diamond', ['minecraft:coal_block', 'minecraft:sand']);
  event.recipes.create.deploying(['minecraft:diamond', 'minecraft:emerald'], ['minecraft:coal_block', 'minecraft:sand']).keepHeldItem();
  event.recipes.create.deploying(['minecraft:diamond', CreateItem.of('minecraft:diamond', 0.5)], ['minecraft:coal_block', 'minecraft:sand']);
});