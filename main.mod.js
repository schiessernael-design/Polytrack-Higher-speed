import {
  PolyMod,
  PhysicsMixinType,
} from "https://cdn.polymodloader.com/pml/PolyModLoader/0.6.2/PolyTypes.js";

// Targets PolyTrack 0.6.2 only. In that physics WASM build, the f32.const
// at offset 0x2F840 is 4000.0 (the rear-wheel engine-force constant).
// Raising it to 6000.0 increases engine force by 50%; resulting top speed
// depends on the game's drag/physics and is not guaranteed to rise by 50%.
class HigherTopSpeed extends PolyMod {
  preInit = (pml) => {
    pml.registerPhysicsMixin({
      type: PhysicsMixinType.PATCH_F32,
      offset: 0x2f840,
      value: 6000.0,
    });
  };
}

export let polyMod = new HigherTopSpeed();
