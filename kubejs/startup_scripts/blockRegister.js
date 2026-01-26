/*
 * ============================================================================
 * KubeJS Block Registration Documentation
 * ============================================================================
 * 
 * OVERVIEW
 * --------
 * This file handles custom block registration for the modpack. Blocks are 
 * registered during the startup phase using StartupEvents.registry() handlers.
 * 
 * 
 * BASIC SYNTAX
 * -----------
 * 
 * StartupEvents.registry('block', event => {
 *     event.create('block_id')
 *         .property1(value)
 *         .property2(value)
 * })
 * 
 * 
 * BLOCK TYPES AVAILABLE
 * --------------------
 * - 'block'       : Standard solid block
 * - 'slab'        : Half-height block (stacking versions auto-created)
 * - 'stair'       : Stair block (all variants auto-created)
 * - 'wall'        : Wall block
 * - 'fence'       : Fence block
 * - 'fence_gate'  : Fence gate block
 * - 'pillar'      : Pillar block (side and end textures)
 * 
 * 
 * COMMON BLOCK PROPERTIES
 * -----------------------
 * 
 * DISPLAY & NAMING
 * .displayName('&2Display Name')    - Set display name with color codes (&0-&9, &a-&f)
 * 
 * MATERIAL & HARDNESS
 * .material('stone')                - Material type (stone, wood, dirt, etc.)
 * .hardness(2.5)                    - Break time in seconds (negative = unbreakable)
 * .resistance(10.0)                 - Explosion resistance
 * .requiresTool(true)               - Requires proper tool to drop
 * .tagBoth('minecraft:needs_stone_tool') - Required tool level
 * 
 * TEXTURES
 * .texture('all', 'kubejs:block/name')     - All sides
 * .texture('top', 'kubejs:block/top')      - Top face
 * .texture('bottom', 'kubejs:block/bottom') - Bottom face
 * .texture('side', 'kubejs:block/side')    - Side faces (north, south, east, west)
 * .texture('north', 'kubejs:block/north')  - Specific direction
 * .texture('south', 'kubejs:block/south')
 * .texture('east', 'kubejs:block/east')
 * .texture('west', 'kubejs:block/west')
 * .texture('end', 'kubejs:block/end')      - Pillar end texture
 * 
 * Texture location: assets/kubejs/textures/block/
 * Supported formats: PNG (16x16 minimum recommended)
 * 
 * RENDERING & BEHAVIOR
 * .translucent(true)                - Block is semi-transparent
 * .notSolid()                       - Can walk through
 * .noCollision()                    - Entities pass through
 * .noDrops()                        - Doesn't drop when broken
 * .renderType('solid')              - Render type: solid, cutout, cutout_mipped, translucent
 * 
 * COLLISION & SHAPE
 * .box(0, 0, 0, 4, 8, 16, false)   - Custom bounding box (minX, minY, minZ, maxX, maxY, maxZ, collides)
 * 
 * 
 * EXAMPLES
 * --------
 * 
 * BASIC BLOCK
 * StartupEvents.registry('block', event => {
 *     event.create('my_block')
 *         .displayName('My Custom Block')
 *         .material('stone')
 *         .hardness(2.5)
 *         .texture('all', 'kubejs:block/my_block')
 * })
 * 
 * SLAB
 * StartupEvents.registry('slab', event => {
 *     event.create('my_slab')
 *         .displayName('My Slab')
 *         .texture('all', 'kubejs:block/my_slab')
 *         .material('stone')
 * })
 * 
 * STAIRS
 * StartupEvents.registry('stair', event => {
 *     event.create('my_stairs')
 *         .displayName('My Stairs')
 *         .texture('all', 'kubejs:block/my_stone')
 *         .material('stone')
 * })
 * 
 * PILLAR
 * StartupEvents.registry('pillar', event => {
 *     event.create('my_pillar')
 *         .texture('side', 'kubejs:block/pillar_side')
 *         .texture('end', 'kubejs:block/pillar_end')
 *         .material('wood')
 * })
 * 
 * ADVANCED BLOCK
 * StartupEvents.registry('block', event => {
 *     event.create('enchanted_stone')
 *         .displayName('&5Enchanted Stone')
 *         .material('stone')
 *         .hardness(3.5)
 *         .resistance(12.0)
 *         .texture('all', 'kubejs:block/enchanted_stone')
 *         .requiresTool(true)
 *         .tagBoth('minecraft:needs_iron_tool')
 *         .renderType('cutout')
 * })
 * 
 * 
 * TEXTURE FILE STRUCTURE
 * ----------------------
 * Place texture files in: assets/kubejs/textures/block/
 * 
 * Example structure:
 * assets/
 *   └── kubejs/
 *       └── textures/
 *           └── block/
 *               ├── my_block.png
 *               ├── my_slab.png
 *               ├── pillar_side.png
 *               └── pillar_end.png
 * 
 * 
 * TROUBLESHOOTING
 * ---------------
 * Block not appearing?
 *   - Check texture paths match exactly
 *   - Ensure textures exist in assets/kubejs/textures/block/
 *   - Reload game (F3 + T)
 * 
 * Block not breakable?
 *   - Set hardness to a positive value
 *   - Check tool requirements aren't too strict
 * 
 * Texture looks wrong?
 *   - Verify texture is 16x16 or larger
 *   - Ensure texture is PNG format
 *   - Check file name matches exactly (case-sensitive)
 * 
 * ============================================================================
 */

StartupEvents.registry('block', event => {
    event.create('crafting_table_base')
    .displayName('Crafting Table Base')
    .hardness(2.0)
    .mapColor('wood')
    .soundType('wood')
    .tagBlock('minecraft:mineable/axe');
    
    event.create('compressed_cobblestone')
        .displayName('Compressed Cobblestone')
        .mapColor('stone')
        .hardness(5.0)
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .requiresTool(true);

    event.create('compressed_cobblestone_slab', 'slab')
        .displayName('Compressed Cobblestone Slab')
        .mapColor('stone')
        .hardness(5.0)
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .requiresTool(true)
        .texture('all', 'kubejs:block/compressed_cobblestone');
    
        event.create('double_compressed_cobblestone')
        .displayName('Double Compressed Cobblestone')
        .mapColor('stone')
        .hardness(7.0)
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true);

        event.create('double_compressed_cobblestone_slab', 'slab')
        .displayName('Double Compressed Cobblestone Slab')
        .mapColor('stone')
        .hardness(7.0)
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(true)
        .texture('all', 'kubejs:block/double_compressed_cobblestone');
    
    event.create('triple_compressed_cobblestone')
        .displayName('Triple Compressed Cobblestone')
        .mapColor('stone')
        .hardness(10.0)
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .requiresTool(true);

    event.create('triple_compressed_cobblestone_slab', 'slab')
        .displayName('Triple Compressed Cobblestone Slab')
        .mapColor('stone')
        .hardness(10.0)
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .requiresTool(true)
        .texture('all', 'kubejs:block/triple_compressed_cobblestone');

    event.create('compressed_obsidian')
        .displayName('Compressed Obsidian')
        .mapColor('stone')
        .soundType('stone')
        .requiresTool(true)
        .hardness(80)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool');
    
    event.create('double_compressed_obsidian')
        .displayName('Double Compressed Obsidian')
        .mapColor('stone')
        .soundType('stone')
        .requiresTool(true)
        .hardness(100)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool');

    event.create('triple_compressed_obsidian')
        .displayName('Triple Compressed Obsidian')
        .mapColor('stone')
        .soundType('stone')
        .requiresTool(true)
        .hardness(120)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool');

    event.create('burnt_otherstone')
        .displayName('Burnt Otherstone')
        .mapColor('stone')
        .soundType('stone')
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe');

    event.create(`demonic_calcite`)
    .displayName(`Demonic Calcite`)
    .soundType('calcite')
    .requiresTool(true)
    .tagBlock('kubejs:demonic_materials')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagItem('kubejs:demonic_materials');
    });