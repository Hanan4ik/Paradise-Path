
StartupEvents.registry('item', e => {
  
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