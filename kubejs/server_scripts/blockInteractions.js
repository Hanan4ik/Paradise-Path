/*
PLAYSOUND DOCS

--EXAMPLE--

BlockEvents.rightClicked('minecraft:stone', event => {
    // playSound(player, x, y, z, sound_id, volume, pitch)
    event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'minecraft:block.note_block.bell', 'blocks', 1.0, 1.0)
})

Breakdown of the Parameters

The playSound method requires specific arguments to work correctly:

    null (The Player): By passing null, the sound is played for everyone near that location. If you pass event.player, the sound will be played for everyone except that player (which is rarely what you want for a click interaction).

    x, y, z: The coordinates where the sound originates. Using event.block.x ensures the sound comes directly from the block you clicked.

    sound_id: The internal name of the sound (e.g., 'minecraft:entity.experience_orb.pickup').

    category: The audio slider that controls the volume (e.g., 'blocks', 'players', 'ambient', or 'master').

    volume: A float value (usually 1.0).

    pitch: A float value. 1.0 is normal, 0.5 is lower/slower, and 2.0 is higher/faster.
*/

console.log('Hello, world')

// TODO: Spiritfire compat
WOOD.forEach(wood => {

    BlockEvents.rightClicked(format(wood, '', 'planks'), e => {
        

        if (!e.level.isClientSide) return; 
        
        if (e.hand != 'MAIN_HAND') return;
        if (e.item.id != 'kubejs:fire_making_equipment') return;

        const blockAbove = e.block.up;

        // 2. Scan for Datura items lying on top of the plank
        // We look for entities inside the bounding box of the block ABOVE
        let daturaEntity = e.level.getEntitiesWithin(blockAbove.boundingBox).find(entity => 
            entity.type == 'minecraft:item' && 
            entity.item.id == 'occultism:datura'
        );

        // 3. Roll for Success
        if (Math.random() <= 0.3) {
            
            // Logic Branch: Spirit Fire vs Normal Fire
            if (daturaEntity) {
                // FOUND DATURA: Create Spirit Fire
                // Note: The ID is usually 'occultism:spirit_fire' (underscore), check your mod version!
                daturaEntity.discard(); 
                e.block.set('occultism:spirit_fire'); 
                
                e.server.runCommandSilent(`playsound minecraft:item.firecharge.use block @a ${blockAbove.x} ${blockAbove.y} ${blockAbove.z} 1.0 1.0`);
            } else {
                // NO DATURA: Create Normal Fire
                e.block.set('minecraft:fire');
                e.server.runCommandSilent(`playsound minecraft:item.firecharge.use block @a ${blockAbove.x} ${blockAbove.y} ${blockAbove.z} 1.0 1.0`);
            }

        } else {
            // FAILURE
            e.server.runCommandSilent(`playsound minecraft:entity.item.break block @a ${e.player.x} ${e.player.y} ${e.player.z} 1 1.2`);
        }

        // Consume fire starter
        e.item.count--;
    });
});

