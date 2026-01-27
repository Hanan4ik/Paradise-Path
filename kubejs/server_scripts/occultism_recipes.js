
ServerEvents.recipes((event) => {

    // spirit: Spirit to summon eg: foliot, djinni
    // spirit_job: what it should do eg: crusher, crystalizer
    // spirit_tier: tier of spirit eg: 1, 2, 3
    // ingredientJson: ingredients for ritual eg: {"item": "minecraft:diamond", "tag: "c:ingots/iron"}
    // activatorJson: activator: {"tag: 'c:ingots'"}
    const occultismSpiritCrusher = (spirit, spirit_tier, ingredientJson, activatorJson, duration) => {
        event.custom(
        {
            "type": "occultism:ritual",
            "activation_item": activatorJson,
            "duration": duration,
            "spirit_max_age": 300,
            "entity_to_summon": `occultism:${spirit}`,
            "ingredients": ingredientJson,
            "pentacle_id": `occultism:summon_${spirit}`,
            "result": {
                "components": {
                "minecraft:item_name": `{\"translate\":\"item.occultism.ritual_dummy.summon_${spirit}_crusher\"}`,
                "minecraft:lore": [
                    `{\"translate\":\"item.occultism.ritual_dummy.summon_${spirit}_crusher.tooltip\"}`
                ]
                },
                "count": 1,
                "id": `occultism:spawn_egg/${spirit}`
            },
            "ritual_dummy": {
                "count": 1,
                "id": `occultism:ritual_dummy/summon_${spirit}_crusher`
            },
            "ritual_type": "occultism:summon_spirit_with_job",
            "spirit_job_type": `occultism:crush_tier${spirit_tier}`}
        );
    };

    event.remove( {id:'occultism:spirit_fire/otherworld_sapling_natural'});
    event.remove( {id:'occultism:spirit_fire/otherrock'} );
    event.remove( {id: 'occultism:miner/ores/otherrock'} );
    event.remove( {id: 'occultism:spirit_trade/stone_to_otherrock'} );

    event.remove( {id: 'occultism:ritual/summon_foliot_crusher'} );
    
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
    
    occultismSpiritCrusher('foliot', 1, [
        {'item': 'kubejs:foliot_dust'},
        {'item': 'occultism:spirit_attuned_gem'},
        {'tag': 'c:storage_blocks/iron'},
        {'tag': 'c:storage_blocks/silver'},
        {'tag': 'c:storage_blocks/copper'},
        {'tag': 'c:storage_blocks/gold'}
    ], {'item': 'occultism:book_of_binding_bound_foliot'}, 60);
    
});