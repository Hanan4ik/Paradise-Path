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
        
        if (e.hand != 'MAIN_HAND') return;
        if (e.item.id != 'kubejs:fire_making_equipment') return;

        let x = e.block.x;
        let y = e.block.y + 1;
        let z = e.block.z;

        // Search for Datura in a 3x3 horizontal area
        let daturaEntity = e.level.getEntities().find(ent => 
            ent.type == 'minecraft:item' && 
            ent.item.id == 'occultism:datura' &&
            ent.x >= x - 1 && ent.x <= x + 2 &&
            ent.z >= z - 1 && ent.z <= z + 2 &&
            Math.abs(ent.y - y) < 1.2
        );

        // 3. Roll for Success
        if (Math.random() <= 0.3) {
            
            // Logic Branch: Spirit Fire vs Normal Fire
            if (daturaEntity) {
                
                e.block.set('occultism:spirit_fire'); 
                daturaEntity.discard();
                e.server.runCommandSilent(`playsound minecraft:item.firecharge.use block @a ${e.block.x} ${e.block.y} ${e.block.z} 1.0 1.0`);
            } else {
                
                e.block.set('minecraft:fire');
                e.server.runCommandSilent(`playsound minecraft:item.firecharge.use block @a ${e.block.x} ${e.block.y} ${e.block.z} 1.0 1.0`);
            }

        } else {
            // FAILURE
            e.server.runCommandSilent(`playsound minecraft:entity.item.break block @a ${e.player.x} ${e.player.y} ${e.player.z} 1 1.2`);
        }

        // Consume fire starter
        e.item.count--;
    });
});

BlockEvents.rightClicked('kubejs:compressed_cobblestone', e => {
    if (e.item.id == 'minecraft:stick' && e.hand == 'MAIN_HAND') {
        e.item.count--;
        e.player.give('kubejs:sharped_stick');
    }
});

