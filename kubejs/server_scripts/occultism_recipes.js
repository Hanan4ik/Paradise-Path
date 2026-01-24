
ServerEvents.recipes((event) => {

    event.remove( {id:'occultism:spirit_fire/otherworld_sapling_natural'});
    event.remove( {id:'occultism:spirit_fire/otherrock'} );
    event.remove( {id: 'occultism:miner/ores/otherrock'} );
    event.remove( {id: 'occultism:spirit_trade/stone_to_otherrock'} );

    event.recipes.occultism.spirit_trade(
        WeightedRecipeResult.of('occultism:otherrock', 1, 100),
        'occultism:otherstone',
        'occultism:trader_otherrock'
    );
    

    event.recipes.occultism.spirit_fire('occultism:otherworld_sapling_natural', '#minecraft:saplings');
});