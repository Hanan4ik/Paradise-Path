
ServerEvents.recipes((event) => {

    
    // spirit_job: what it should do eg: crusher, crystalizer
    // spirit_tier: tier of spirit eg: 1, 2, 3
    // ingredientJson: ingredients for ritual eg: [{"item": "minecraft:diamond"}, {"tag: "c:ingots/iron"}]
    // activatorJson: activator: {"tag: 'c:ingots'"}
    const occultismSpiritFoliot = (spiritJob, ingredientJson) => {
        const SJ = jobMap[spiritJob];
        event.custom(
        {
            "type": "occultism:ritual",
            "activation_item": {
                "item": "occultism:book_of_binding_bound_foliot"
            },
            "duration": 60,
            "spirit_max_age": 300,
            "entity_to_summon": "occultism:foliot",
            "ingredients": ingredientJson,
            "pentacle_id": "occultism:summon_foliot",
            "result": {
                "components": {
                "minecraft:item_name": `{\"translate\":\"item.occultism.ritual_dummy.summon_foliot_${SJ}\"}`,
                "minecraft:lore": [
                    `{\"translate\":\"item.occultism.ritual_dummy.summon_foliot_${SJ}.tooltip\"}`
                ]
                },
                "count": 1,
                "id": "occultism:spawn_egg/foliot"
            },
            "ritual_dummy": {
                "count": 1,
                "id": `occultism:ritual_dummy/summon_foliot_${SJ}`
            },
            "ritual_type": "occultism:summon_spirit_with_job",
            "spirit_job_type": `occultism:${spiritJob}_tier1`
            }
        );
    };
    const occultismSpiritDjinni = (spiritJob, ingredientJson) => {
        const SJ = jobMap[spiritJob];
        event.custom(
        {
            "type": "occultism:ritual",
            "activation_item": {
                "item": "occultism:book_of_binding_bound_djinni"
            },
            "duration": 120,
            "entity_to_summon": "occultism:djinni",
            "ingredients": ingredientJson,
            "pentacle_id": "occultism:summon_djinni",
            "result": {
                "components": {
                "minecraft:item_name": `{\"translate\":\"item.occultism.ritual_dummy.summon_djinni_${SJ}\"}`,
                "minecraft:lore": [
                    `{\"translate\":\"item.occultism.ritual_dummy.summon_djinni_${SJ}.tooltip\"}`
                ]
                },
                "count": 1,
                "id": "occultism:spawn_egg/djinni"
            },
            "ritual_dummy": {
                "count": 1,
                "id": `occultism:ritual_dummy/summon_djinni_${SJ}`
            },
            "ritual_type": "occultism:summon_spirit_with_job",
            "spirit_job_type": `occultism:${spiritJob}_tier2`
        }
        );
    };
    const occultismSpiritAfrit = (spiritJob, ingredientJson) => {
        const SJ = jobMap[spiritJob];
        event.custom(
        {
            "type": "occultism:ritual",
            "activation_item": {
                "item": "occultism:book_of_binding_bound_afrit"
            },
            "duration": 180,
            "spirit_max_age": 1800,
            "entity_to_summon": "occultism:afrit",
            "ingredients": ingredientJson,
            "pentacle_id": "occultism:summon_afrit",
            "result": {
                "components": {
                "minecraft:item_name": `{\"translate\":\"item.occultism.ritual_dummy.summon_afrit_${SJ}\"}`,
                "minecraft:lore": [
                    `{\"translate\":\"item.occultism.ritual_dummy.summon_afrit_${SJ}.tooltip\"}`
                ]
                },
                "count": 1,
                "id": "occultism:spawn_egg/afrit"
            },
            "ritual_dummy": {
                "count": 1,
                "id": `occultism:ritual_dummy/summon_afrit_${SJ}`
            },
            "ritual_type": "occultism:summon_spirit_with_job",
            "spirit_job_type": `occultism:${spiritJob}_tier3`
            }
        );
    };
    const occultismSpiritMarid = (spiritJob, ingredientJson) => {
        const SJ = jobMap[spiritJob];
        event.custom(
        {
            "type": "occultism:ritual",
            "activation_item": {
                "item": "occultism:book_of_binding_bound_marid"
            },
            "duration": 240,
            "spirit_max_age": 3600,
            "entity_to_summon": "occultism:marid",
            "ingredients": ingredientJson,
            "pentacle_id": "occultism:summon_marid",
            "result": {
                "components": {
                "minecraft:item_name": `{\"translate\":\"item.occultism.ritual_dummy.summon_marid_${SJ}\"}`,
                "minecraft:lore": [
                    `{\"translate\":\"item.occultism.ritual_dummy.summon_marid_${SJ}.tooltip\"}`
                ]
                },
                "count": 1,
                "id": "occultism:spawn_egg/marid"
            },
            "ritual_dummy": {
                "count": 1,
                "id": `occultism:ritual_dummy/summon_marid_${SJ}`
            },
            "ritual_type": "occultism:summon_spirit_with_job",
            "spirit_job_type": `occultism:${spiritJob}_tier4`
            }
        );
    };

    event.remove( {id:'occultism:spirit_fire/otherworld_sapling_natural'});
    event.remove( {id:'occultism:spirit_fire/otherrock'} );

    event.remove( {id: 'occultism:miner/ores/otherrock'} );

    event.remove( {id: 'occultism:spirit_trade/stone_to_otherrock'} );

    event.remove( {id: 'occultism:ritual/craft_ritual_satchel_t2'} )
    event.remove( {id: 'occultism:ritual/craft_satchel'} );
    event.remove( {id: 'occultism:ritual/craft_ender_satchel'} );

    event.remove( {id: 'occultism:ritual/summon_wondering_trader'} );

    event.remove( {id: 'occultism:ritual/summon_foliot_crusher'} );
    event.remove( {id: 'occultism:ritual/summon_djinni_crusher'} );
    event.remove( {id: 'occultism:ritual/summon_afrit_crusher'} );
    event.remove( {id: 'occultism:ritual/summon_marid_crusher'} );

    event.remove( {id: 'occultism:ritual/summon_otherstone_trader'} );
    event.remove( {id: 'occultism:ritual/summon_foliot_otherrock_trader'} );

    // Disabled rituals
    event.remove( {id: 'occultism:summon_foliot_crystallizer'} );
    event.remove( {id: 'occultism:summon_foliot_otherrock_trader'} );
    event.remove( {id: 'occultism:summon_foliot_transporter'} );
    
    
    event.replaceInput({input: 'occultism:burnt_otherstone'},
        'occultism:burnt_otherstone',
        'occultism:otherstone'
    );

    event.replaceInput({input: 'occultism:burnt_otherrock'},
        'occultism:burnt_otherrock',
        'occultism:otherstone'
    );

    event.replaceInput({output:'occultism:purified_ink'}, '#c:dyes/black', 'kubejs:ink_bottle');

    event.recipes.occultism.spirit_trade(
        WeightedRecipeResult.of('occultism:otherrock', 1, 100),
        'occultism:otherstone',
        'occultism:trader_otherrock'
    );

    event.replaceInput( {id: 'occultism:ritual/craft_infused_lenses'}, '#c:ingots/silver',
        'kubejs:demonic_silver_ingot'
    );
    event.replaceInput( {id: 'occultism:ritual/craft_infused_lenses'}, '#c:ingots/gold',
        'kubejs:demonic_gold_ingot'
    );
    

    const replaceIngotDust = mat => {

        event.remove( {mod: 'occultism', type: 'crushing', output: `#c:dusts/${mat}`} );

        event.recipes.occultism.crushing(
        RecipeResult.of(`kubejs:demonic_${mat}_dust`),
        `#c:ingots/${mat}`);
    };

    const replaceGemDust = mat => {

        event.remove( {mod: 'occultism', type: 'crushing', output: `#c:dusts/${mat}`} );

        event.recipes.occultism.crushing(
        RecipeResult.of(`kubejs:demonic_${mat}_dust`),
        `#c:gems/${mat}`);
    };

    replaceIngotDust('gold');
    replaceIngotDust('iron');
    replaceGemDust('amethyst');
    replaceGemDust('diamond');
    replaceGemDust('emerald');

    event.recipes.occultism.crushing(
        RecipeResult.of('kubejs:otherstone_dust'),
        'occultism:otherstone');
    
    event.recipes.occultism.crushing(
        RecipeResult.of('kubejs:otherrock_dust'),
        'occultism:otherrock');
    
    event.recipes.occultism.spirit_fire('occultism:otherworld_sapling_natural', '#minecraft:saplings');
    event.recipes.occultism.spirit_fire('kubejs:foliot_dust', '#c:dyes/blue');
    event.recipes.occultism.spirit_fire('kubejs:djinni_dust', '#c:dyes/purple');
    event.recipes.occultism.spirit_fire('kubejs:afrit_dust', '#c:dyes/yellow');
    event.recipes.occultism.spirit_fire('kubejs:marid_dust', '#c:dyes/green');
    
    // Chapter stages
    occultismSpiritFoliot('crush', [
        {'item': 'kubejs:foliot_dust'},
        {'item': 'occultism:spirit_attuned_gem'},
        {'tag': 'c:storage_blocks/iron'},
        {'tag': 'c:storage_blocks/silver'},
        {'tag': 'c:storage_blocks/copper'},
        {'tag': 'c:storage_blocks/gold'}
    ]);
    
    occultismSpiritDjinni('crystal', [
        {'item': 'kubejs:djinni_dust'},
        {'item': 'occultism:spirit_attuned_gem'},
        {'tag': 'c:dusts/demonic_iron'},
        {'tag': 'c:dusts/demonic_silver'},
        {'tag': 'c:dusts/demonic_copper'},
        {'tag': 'c:dusts/demonic_gold'}
    ]);

    event.custom(
        {
            "type": "occultism:ritual",
            "activation_item": {
                "item": "occultism:book_of_binding_bound_afrit"
            },
            "duration": 180,
            "entity_to_summon": "occultism:afrit",
            "ingredients": [
                {'item': 'kubejs:afrit_dust'},
                {'item': 'occultism:spirit_attuned_gem'},
                {"tag": "c:storage_blocks/demonic_iron"},
                {"tag": "c:storage_blocks/demonic_gold"},
                {"tag": "c:storage_blocks/demonic_silver"},
                {"tag": "c:storage_blocks/demonic_copper"},
                {'item': 'occultism:otherstone'},
                {'item': 'occultism:otherstone'},
                {'item': 'kubejs:burnt_otherstone'},
                {'item': 'kubejs:burnt_otherstone'}
            ],
            "pentacle_id": "occultism:summon_afrit",
            "result": {
                "components": {
                "minecraft:item_name": "{\"translate\":\"item.occultism.ritual_dummy.summon_foliot_otherrock_trader\"}",
                "minecraft:lore": [
                    "{\"translate\":\"item.occultism.ritual_dummy.summon_foliot_otherrock_trader.tooltip\"}"
                ]
                },
                "count": 1,
                "id": "occultism:spawn_egg/afrit"
            },
            "ritual_dummy": {
                "count": 1,
                "id": "occultism:ritual_dummy/summon_foliot_otherrock_trader"
            },
            "ritual_type": "occultism:summon_spirit_with_job",
            "spirit_job_type": "occultism:trader_otherrock",
            "spirit_max_age": 3600
        }
    ).id('ritual/summon_otherrock_trader');
    

    // Ritual adjustments
    event.recipes.occultism.ritual(
        'occultism:satchel', // Result
        [
            'ironchest:diamond_chest',
            'minecraft:string',
            'twilightforest:tanned_leather',
            'twilightforest:tanned_leather',
            'kubejs:demonic_silver_ingot'
        ], // Ingreds
        'occultism:book_of_binding_bound_foliot', // Central ingr,
        'occultism:craft_foliot' // Demon tier
    ).dummy("occultism:ritual_dummy/craft_satchel");

    event.recipes.occultism.ritual(
        'occultism:ender_satchel',
        [
            'minecraft:ender_chest',
            'minecraft:string',
            'twilightforest:tanned_leather',
            'twilightforest:tanned_leather',
            'kubejs:demonic_gold_ingot'
        ],
        'occultism:book_of_binding_bound_foliot',
        'occultism:craft_foliot'
    ).dummy("occultism:ritual_dummy/craft_ender_satchel");

    event.recipes.occultism.ritual(
        'occultism:ritual_satchel_t1',
        [
            'minecraft:chest',
            'occultism:golden_sacrificial_bowl',
            'twilightforest:tanned_leather',
            'twilightforest:tanned_leather',
            'kubejs:demonic_gold_ingot'
        ],
        'occultism:book_of_binding_bound_foliot',
        'occultism:craft_djinni'
    ).dummy("occultism:ritual_dummy/craft_ritual_satchel_t1");

    event.recipes.occultism.ritual(
        'kubejs:djinni_dust',
        [
            'kubejs:demonic_amethyst_dust',
            'kubejs:demonic_amethyst_dust',
            'kubejs:demonic_amethyst_dust',
            'kubejs:demonic_amethyst_dust'
        ],
        'kubejs:foliot_dust',
        'occultism:craft_foliot'
    ).dummy("kubejs:ritual_dummy/craft_djinni_dust");

    event.recipes.occultism.ritual(
        'kubejs:afrit_dust',
        [
            'kubejs:demonic_gold_ingot',
            'kubejs:demonic_gold_ingot',
            'kubejs:demonic_gold_ingot',
            'kubejs:demonic_gold_ingot'
        ],
        'kubejs:djinni_dust',
        'occultism:craft_djinni'
    ).dummy("kubejs:ritual_dummy/craft_afrit_dust");

    event.recipes.occultism.ritual(
        'kubejs:marid_dust',
        [
            'avaritia:infinity_ingot'
        ],
        'kubejs:djinni_dust',
        'occultism:craft_afrit'
    ).dummy("kubejs:ritual_dummy/craft_marid_dust");
});