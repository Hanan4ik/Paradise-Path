// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

// ITEM REGISTRATION DOCUMENTATION
// 
// event.create(item_id) creates a new item with the specified ID
// 
// DISPLAY & APPEARANCE:
//   .displayName(name) - sets the display name of the item (String)
//   .texture(texture_path) - sets the texture of the item. Path format: 'kubejs:item/item_name'
//                            File located in assets/kubejs/textures/item/item_name.png
//   .glow(boolean) - adds a glowing/enchanting effect to the item (like enchanted items)
//   .rarity(rarity) - sets the item rarity. Options: common, uncommon, rare, epic
//   .color(index, color) - sets custom color for the item (index for different parts)
// 
// STACKING & DURABILITY:
//   .maxStackSize(number) - sets the maximum stack size for the item (default: 64, max: 64)
//   .maxDamage(number) - adds durability/damage property to the item
//   .unstackable() - makes the item unstackable (equivalent to maxStackSize(1))
// 
// FUNCTIONALITY:
//   .food(food => { ... }) - makes the item edible and allows you to set various food properties
//                           Example: .food(food => { food.hunger(4).saturation(2.0) })
//   .craftingRemainingItem(item_id) - sets the item that remains after crafting
//                                     (e.g. bucket remains after crafting a cake)
//   .tooltip(text) - adds a tooltip when hovering over the item
//   .fireResistant(boolean) - makes the item immune to fire damage
//   .useAnimation(animation) - sets the use animation (eat, drink, bow, spyglass, etc.)
//   .useAction(action) - sets the use action (eat, drink, block, bow, spyglass, etc.)
// 
// BEHAVIOR:
//   .rarity(rarity) - sets the item rarity (common, uncommon, rare, epic)
//   .burnable(burn_time) - makes the item burnable in furnace (burn_time in ticks)
//   .containerItem(item_id) - sets a container item that remains after use


StartupEvents.registry('item', event => {
  
  // REGISTRIES FOR EARLY GAME

  event.create('wooden_grip')
  .displayName('Wooden Grip')
  

  event.create('wooden_pickaxe_head')
  .displayName('Wooden Pickaxe Head')
  .texture('kubejs:item/wooden_pickaxe_head')

  event.create('stone_pickaxe_head')
  .displayName('Stone Pickaxe Head')
  .texture('kubejs:item/stone_pickaxe_head')

  event.create('wooden_axe_head')
  .displayName('Wooden Axe Head')
  .texture('kubejs:item/wooden_axe_head')

  event.create('stone_axe_head')
  .displayName('Stone Axe Head')
  .texture('kubejs:item/stone_axe_head')

  event.create('hinge')
  .displayName('Hinge') 
});