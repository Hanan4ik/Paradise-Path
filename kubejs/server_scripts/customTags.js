console.log('STARTING EDITING TAGS');

ServerEvents.tags('item', e => {
    e.add('c:compressable', 'minecraft:cobblestone');
  }
);
