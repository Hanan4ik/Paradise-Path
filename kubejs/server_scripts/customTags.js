console.log('STARTING EDITING TAGS');

ServerEvents.tags('item', e => {
    e.remove('twilightforest:portal/activator', 'minecraft:diamond');

    e.add('c:compressable', 'minecraft:cobblestone');
    e.add('twilightforest:portal/activator', 'kubejs:twilight_activator');
    e.add('c:gems/spirit_attuned', 'occultism:spirit_attuned');
  }
);
