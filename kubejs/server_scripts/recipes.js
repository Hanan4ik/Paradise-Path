// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)');
import { WOOD, format } from constants;

// For wood 


ServerEvents.recipes(event => {

    const compressed_recipe = (output, input) => {
        event.shaped(output, [
            'III',
            'III',
            'III'
        ], {I: input});
    }
    const slab_recipe = (slab, block) => {
        event.shaped(Item.of(slab, 6), [
            'III'
        ], {I: block});

        event.stonecutting(Item.of(slab, 2), block);

        event.shaped(Item.of(block),['I','I'], {I:slab});
    }


    // Deletion of recipies

    event.remove( {mod: 'minecraft', output: 'minecraft:crafting_table'} ); //
    
    event.remove( {mod: 'minecraft', output: '#minecraft:planks'} ); //
    event.remove( {mod: 'biomesoplenty', output: '#minecraft:planks'} ); //
    event.remove( {mod: 'divinerpg', output: '#minecraft:planks'} ); // 
    event.remove( {mod: 'twilightforest', output: '#minecraft:planks'} ); //
    event.remove( {mod: 'arsnouveau', output: '#minecraft:planks'} ); //
    event.remove( {mod: 'occultism', output: '#minecraft:planks'} ); //
    event.remove( {mod: 'ars_nouveau', output: '#minecraft:planks'} ); //

    event.remove( {output: 'minecraft:furnace'} ); //

    event.remove( {output: 'minecraft:chest'} ); //
    event.remove( {output: 'minecraft:ender_chest' }); //

    event.remove( {output:'minecraft:flint_and_steel' });
    
    // Adding recipies for custom items
    
    WOOD.forEach(wood => {

        event.shapeless(Item.of(format(wood, '', 'planks'), 2),
        [
            format(wood, '', 'log')
        ]);
        event.shapeless(Item.of(format(wood, '', 'planks'), 2),
        [
            format(wood, '', 'wood')
        ]);
        event.shapeless(Item.of(format(wood, '', 'planks'), 2),
        [
            format(wood, 'stripped_', 'log')
        ]);
        event.shapeless(Item.of(format(wood, '', 'planks'), 2),
        [
            format(wood, 'stripped_', 'wood')
        ]);
    });

    event.shapeless(Item.of('ars_nouveau:archwood_planks', 2), 
        [
            "#c:logs/archwood"
        ]);
    
    event.shapeless(Item.of('minecraft:warped_planks', 2),
        [
            '#minecraft:warped_stems'
        ]);
    
    event.shapeless(Item.of('minecraft:crimson_planks', 2),
        [
            '#minecraft:crimson_stems'
        ]);
    
    event.shapeless(Item.of('occultism:otherplanks', 2),
        [
            'occultism:otherworld_log'
        ]);

    event.shaped('kubejs:wooden_grip', [
        'A  ',
        ' A ',
        
    ], {
        A: 'minecraft:stick'
    });

    // Editing recipes

    event.shaped('minecraft:wooden_pickaxe', [
        'A  ',
        ' B '
    ], {
        A: 'kubejs:wooden_pickaxe_head',
        B: 'kubejs:wooden_grip'
    });
    
    event.shaped('minecraft:wooden_axe', [
        'A  ',
        ' B '
    ], {
        A: 'kubejs:wooden_axe_head',
        B: 'kubejs:wooden_grip'
    });

    event.shaped('minecraft:stone_pickaxe', [
        'A  ',
        ' B '
    ], {
        A: 'kubejs:stone_pickaxe_head',
        B: 'kubejs:wooden_grip'
    });

    event.shaped('minecraft:stone_axe', [
        'A  ',
        ' B '
    ], {
        A: 'kubejs:stone_axe_head',
        B: 'kubejs:wooden_grip'
    });

    event.shaped('minecraft:crafting_table', [
        'Aa ',
        'BB '
    ], {
        A: 'minecraft:stone_pickaxe',
        a: 'minecraft:stone_axe',
        B: 'kubejs:crafting_table_base',
    });

    event.shaped('kubejs:crafting_table_base', [
        'AA ',
        'BB '
    ], {
        A: "#minecraft:planks",
        B: "#minecraft:logs"
    });

    event.shaped('kubejs:wooden_axe_head', [
        'AA ',
        'A  '
    ], {
        A: "#minecraft:planks"
    }).noMirror();

    event.shaped('kubejs:wooden_pickaxe_head', [
        ' AA',
        '  A'
    ], {
        A: "#minecraft:planks"
    }).noMirror();

    event.shaped('kubejs:stone_axe_head', [
        'AA ',
        'A  '
    ], {
        A: "#c:cobblestones/normal"
    }).noMirror();

    event.shaped('kubejs:stone_pickaxe_head', [
        ' AA',
        '  A'
    ], {
        A: "#c:cobblestones/normal"
    }).noMirror();
    
    
    compressed_recipe('kubejs:compressed_cobblestone', 'minecraft:cobblestone');
    slab_recipe('kubejs:compressed_cobblestone_slab', 'kubejs:compressed_cobblestone');

    compressed_recipe('kubejs:double_compressed_cobblestone', 'kubejs:compressed_cobblestone');
    slab_recipe('kubejs:double_compressed_cobblestone_slab', 'kubejs:double_compressed_cobblestone');

    compressed_recipe('kubejs:triple_compressed_cobblestone', 'kubejs:double_compressed_cobblestone');
    slab_recipe('kubejs:triple_compressed_cobblestone_slab', 'kubejs:triple_compressed_cobblestone');
    

    event.shaped('minecraft:furnace', [
        'CcC',
        'CBC',
        'CcC',
    ], {
        C: 'kubejs:compressed_cobblestone',
        c: 'kubejs:compressed_cobblestone_slab',
        B: 'minecraft:coal_block'
    });

    event.shaped('kubejs:hinge', [
        'iIi'
    ], {
        i: 'minecraft:iron_nugget',
        I: 'minecraft:iron_ingot'
    });

    event.shaped('minecraft:chest', [
        'HPH',
        'PiP',
        'PPP'
    ], {
        H: 'kubejs:hinge',
        P: '#minecraft:planks',
        i: 'minecraft:iron_nugget'
    });

    event.shaped('minecraft:ender_chest', [
        'OPO',
        'PCP',
        'OPO'
    ], {
        O: 'minecraft:obsidian',
        P: 'minecraft:ender_pearl',
        C: '#c:chests'
    });

    event.shapeless('minecraft:flint_and_steel', ['minecraft:flint', '#c:ingots/steel'])

    compressed_recipe('kubejs:compressed_obsidian', 'minecraft:obsidian');
    compressed_recipe('kubejs:double_compressed_obsidian', 'kubejs:compressed_obsidian');
    compressed_recipe('kubejs:triple_compressed_obsidian', 'kubejs:double_compressed_obsidian');

    event.shapeless('kubejs:fire_making_equipment', ['kubejs:sharped_stick', 'kubejs:sharped_stick']);
    

});

