
StartupEvents.registry('item', e => {
  e.create(`ritual_dummy/craft_satchel`, 'occultism:ritual_dummy')
    .pentacleType('craft')
    .displayName("Craft satchel with A LOT OF slots")
    .ritualTooltip('This satchel has many slots like diamond chest');

  e.create(`ritual_dummy/craft_ender_satchel`, 'occultism:ritual_dummy')
    .pentacleType('craft')
    .displayName("Craft satchel that is connected to ender storage")
    .ritualTooltip('This satchel uses your ender chest network');

  e.create(`ritual_dummy/craft_ritual_satchel_t1`, 'occultism:ritual_dummy')
    .pentacleType('craft')
    .displayName("Craft satchel that help you build pentacles")
    .ritualTooltip('This satchel uses items in its inventory to build pentacles. Don\'t worry your chalks won\'t be broken by accident');

  e.create(`ritual_dummy/craft_djinni_dust`, 'occultism:ritual_dummy')
    .pentacleType('craft')
    .displayName("Craft djinni dust")
    .ritualTooltip('Djinni dust is for djinni summoning, possessing and so on. Logically');

  e.create(`ritual_dummy/craft_afrit_dust`, 'occultism:ritual_dummy')
    .pentacleType('craft')
    .displayName("Craft afrit dust")
    .ritualTooltip('Afrit dust is for afrit summoning, possessing and so on. Logically?');

  e.create(`ritual_dummy/craft_marid_dust`, 'occultism:ritual_dummy')
    .pentacleType('craft')
    .displayName("Craft marid dust")
    .ritualTooltip('Marid dust is for... Well, you know...');
});