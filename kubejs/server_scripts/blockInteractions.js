console.log('Hello, world')

WOOD.forEach(wood => {

    BlockEvents.rightClicked(format(wood, '', 'planks'), e => {
        
        if (e.hand != 'MAIN_HAND') return;
        if (e.item.id != 'kubejs:fire_making_equipment') return;


        // Search for Datura in a 3x3 horizontal area
        let daturaEntity = e.level.getEntities().find(ent => 
            ent.type == 'minecraft:item' && 
            ent.item.id == 'occultism:datura' &&
            ent.x >= e.block.x && ent.x <= e.block.x + 2 &&
            ent.z >= e.block.z - 1 && ent.z <= e.block.z + 2 &&
            ent.y - e.block.y < 1.2
        );

        if ((Math.random() <= 0.3 && 
        e.block.up.id != 'minecraft:obsidian' && 
        e.block.down.id != 'minecraft:obsidian' && 
        e.block.north.id != 'minecraft:obsidian' && 
        e.block.south.id != 'minecraft:obsidian' &&
        e.block.west.id != 'minecraft:obsidian' &&
        e.block.east.id != 'minecraft:obsidian') || e.player.isCreative()) {
            if (daturaEntity) {
                
                e.block.set('occultism:spirit_fire'); 
                daturaEntity.discard();
                e.server.runCommandSilent(`playsound occultism:start_ritual block @a ${e.block.x} ${e.block.y} ${e.block.z} 1.0 1.0`);
            } else {
                console.log(e.block.down.id);
                e.block.set('minecraft:fire');
                e.server.runCommandSilent(`playsound minecraft:item.firecharge.use block @a ${e.block.x} ${e.block.y} ${e.block.z} 1.0 1.0`);
            }

        } else {
            
            e.server.runCommandSilent(`playsound minecraft:entity.item.break block @a ${e.player.x} ${e.player.y} ${e.player.z} 1 1.2`);
        }
        if (!e.player.isCreative()) e.item.count--;
    });
});

BlockEvents.rightClicked('kubejs:compressed_cobblestone', e => {
    if (e.item.id == 'minecraft:stick' && e.hand == 'MAIN_HAND') {
        e.item.count--;
        e.player.give('kubejs:sharped_stick');
    }
});

