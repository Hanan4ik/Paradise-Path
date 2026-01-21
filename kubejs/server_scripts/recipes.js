// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)');


function format(str, value0, value1) {
  return str.replace(/{0}/g, value0).replace(/{1}/g, value1);
}

const LOGS = [
        'minecraft:{0}oak_{1}',
        'minecraft:{0}birch_{1}',
        'minecraft:{0}spruce_{1}',
        'minecraft:{0}jungle_{1}',
        'minecraft:{0}acacia_{1}',
        'minecraft:{0}dark_oak_{1}',
        'minecraft:{0}mangrove_{1}',
        'minecraft:{0}cherry_{1}',
        'biomesoplenty:{0}fir_{1}',
        'biomesoplenty:{0}pine_{1}',
        'biomesoplenty:{0}maple_{1}',
        'biomesoplenty:{0}redwood_{1}',
        'biomesoplenty:{0}mahogany_{1}',
        'biomesoplenty:{0}jacaranda_{1}',
        'biomesoplenty:{0}palm_{1}',
        'biomesoplenty:{0}willow_{1}',
        'biomesoplenty:{0}dead_{1}',
        'biomesoplenty:{0}magic_{1}',
        'biomesoplenty:{0}umbran_{1}',
        'biomesoplenty:{0}hellbark_{1}',
        'biomesoplenty:{0}empyreal_{1}',
        'biomesoplenty:{0}fir_{1}',
        'divinerpg:{0}divine_{1}',
        'divinerpg:{0}shiverspine_{1}',
        'divinerpg:{0}auroraoak_{1}',
        'divinerpg:{0}cozybark_{1}',
        'divinerpg:{0}streamleaf_{1}',
        'divinerpg:{0}eucalyptus_{1}',
        'divinerpg:{0}eden_{1}',
        'divinerpg:{0}wildwood_{1}',
        'divinerpg:{0}apalachia_{1}',
        'divinerpg:{0}skythern_{1}',
        'divinerpg:{0}apalachia_{1}',
        'divinerpg:{0}mortum_{1}',
        'twilightforest:{0}twilight_oak_{1}',
        'twilightforest:{0}twilight_oak_{1}',
        'twilightforest:{0}canopy_{1}',
        'twilightforest:{0}mangrove_{1}',
        'twilightforest:{0}dark_{1}',
        'twilightforest:{0}time_{1}',
        'twilightforest:{0}transformation_{1}',
        'twilightforest:{0}mining_{1}',
        'twilightforest:{0}sorting_{1}',
    ]

ServerEvents.recipes(event => {

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

    event.remove( {output: 'minecraft:chest'} );
    event.remove( {output: 'minecraft:ender_chest' });
    
    // Adding recipies for custom items
    

    for (let i=0; i < LOGS.length; i++){
        event.shapeless(Item.of(format(LOGS[i], '', 'planks'), 2),
        [
            format(LOGS[i], '', 'log')
        ]);
        event.shapeless(Item.of(format(LOGS[i], '', 'planks'), 2),
        [
            format(LOGS[i], '', 'wood')
        ]);
        event.shapeless(Item.of(format(LOGS[i], '', 'planks'), 2),
        [
            format(LOGS[i], 'stripped_', 'log')
        ]);
        event.shapeless(Item.of(format(LOGS[i], '', 'planks'), 2),
        [
            format(LOGS[i], 'stripped_', 'wood')
        ]);
    }

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
    
    event.shaped('kubejs:compressed_cobblestone', [
        'CCC',
        'CCC',
        'CCC',
    ], {
        C: 'minecraft:cobblestone'
    })
    event.shaped('6x kubejs:compressed_cobblestone_slab', [
        'CCC'
    ], {
        C: 'kubejs:compressed_cobblestone'
    });
    event.shaped('kubejs:compressed_cobblestone', [
        'A',
        'A'
    ], {
        A: 'kubejs:compressed_cobblestone_slab'
    });
    event.stonecutting('2x kubejs:compressed_cobblestone_slab', 'kubejs:compressed_cobblestone');


    event.shaped('kubejs:double_compressed_cobblestone', [
        'CCC',
        'CCC',
        'CCC',
    ], {
        C: 'kubejs:compressed_cobblestone'
    });
    event.shaped('6x kubejs:double_compressed_cobblestone_slab', [
        'CCC'
    ], {
        C: 'kubejs:double_compressed_cobblestone'
    });
    event.shaped('kubejs:double_compressed_cobblestone', [
        'A',
        'A'
    ], {
        A: 'kubejs:double_compressed_cobblestone_slab'
    });
    event.stonecutting('2x kubejs:double_compressed_cobblestone_slab', 'kubejs:double_compressed_cobblestone');


    event.shaped('kubejs:triple_compressed_cobblestone', [
        'CCC',
        'CCC',
        'CCC',
    ], {
        C: 'kubejs:double_compressed_cobblestone'
    });
    event.shaped('6x kubejs:triple_compressed_cobblestone_slab', [
        'CCC'
    ], {
        C: 'kubejs:triple_compressed_cobblestone'
    });
    event.shaped('kubejs:triple_compressed_cobblestone', [
        'A',
        'A'
    ], {
        A: 'kubejs:triple_compressed_cobblestone_slab'
    });
    event.stonecutting('3x kubejs:triple_compressed_cobblestone_slab', 'kubejs:triple_compressed_cobblestone');

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

});

