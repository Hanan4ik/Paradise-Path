
ServerEvents.recipes((event) => {

    event.remove( {id:'occultism:spirit_fire/otherworld_sapling_natural'})

    event.recipes.occultism.spirit_fire('occultism:otherworld_sapling_natural', '#minecraft:saplings');
});