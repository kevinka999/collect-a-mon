import { TypeEnum } from "../../types"

interface TypeBannerProps {
  type: TypeEnum
  width: string | number
}

export const TypeBanner = ({ type, width }: TypeBannerProps) => {
  const imageMap = {
    [TypeEnum.bug]: "./assets/types/type_bug.png",
    [TypeEnum.dark]: "./assets/types/type_dark.png",
    [TypeEnum.dragon]: "./assets/types/type_dragon.png",
    [TypeEnum.electric]: "./assets/types/type_electric.png",
    [TypeEnum.fairy]: "./assets/types/type_fairy.png",
    [TypeEnum.fighting]: "./assets/types/type_fighting.png",
    [TypeEnum.fire]: "./assets/types/type_fire.png",
    [TypeEnum.flying]: "./assets/types/type_flying.png",
    [TypeEnum.ghost]: "./assets/types/type_ghost.png",
    [TypeEnum.grass]: "./assets/types/type_grass.png",
    [TypeEnum.ground]: "./assets/types/type_ground.png",
    [TypeEnum.ice]: "./assets/types/type_ice.png",
    [TypeEnum.normal]: "./assets/types/type_normal.png",
    [TypeEnum.poison]: "./assets/types/type_poison.png",
    [TypeEnum.psychic]: "./assets/types/type_psychic.png",
    [TypeEnum.rock]: "./assets/types/type_rock.png",
    [TypeEnum.steel]: "./assets/types/type_steel.png",
    [TypeEnum.water]: "./assets/types/type_water.png",
  }

  return (
    <img src={imageMap[type]} width={width} className="h-auto object-contain" />
  )
}
