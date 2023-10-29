import { Card } from "./components"
import { Pokemon, TypeEnum } from "./types"
import "./global.css"

const pokemonMock: Pokemon = {
  name: "Blaziken",
  picture: "",
  types: [TypeEnum.fire],
  moves: [
    {
      name: "Blaze Kick",
      pp: 15,
      types: [TypeEnum.fire],
    },
    {
      name: "Focus Punch",
      pp: 5,
      types: [TypeEnum.fighting],
    },
    {
      name: "Fire Punch",
      pp: 20,
      types: [TypeEnum.fire],
    },
    {
      name: "Swords Dance",
      pp: 10,
      types: [TypeEnum.normal],
    },
  ],
}

export const App = () => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="flex w-1/3 justify-center">
        <Card pokemon={pokemonMock} />
      </div>
    </div>
  )
}
