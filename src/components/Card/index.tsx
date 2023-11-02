import { Move, TypeBanner } from ".."
import { Pokemon, TypeEnum } from "../../types"

interface CardProps {
  pokemon: Pokemon
}

export const pokemonMock: Pokemon = {
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

export const Card = ({ pokemon }: CardProps) => {
  return (
    <div className="bg-background flex w-full flex-col gap-[25px] rounded-[15px] p-[25px] shadow-lg">
      <div className="flex flex-row justify-between">
        <span className="text-text text-2xl">{pokemon.name}</span>
        <TypeBanner type={pokemon.types[0]} width={100} />
      </div>
      <div className="bg-text h-[250px] w-full" />
      <div className="flex w-full flex-col gap-4">
        {pokemon.moves.map((move, idx) => {
          return <Move key={idx} move={move} />
        })}
      </div>
    </div>
  )
}
