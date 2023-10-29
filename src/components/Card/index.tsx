import { Move, TypeBanner } from ".."
import { Pokemon } from "../../types"

interface CardProps {
  pokemon: Pokemon
}

export const Card = ({ pokemon }: CardProps) => {
  return (
    <div className="flex w-full flex-col gap-[25px] rounded-[15px] bg-secondary p-[25px]">
      <div className="flex flex-row justify-between">
        <span className="text-2xl text-black">{pokemon.name}</span>
        <TypeBanner type={pokemon.types[0]} width={100} />
      </div>
      <div className="h-[250px] w-full bg-black" />
      <div className="flex w-full flex-col gap-4">
        {pokemon.moves.map((move, idx) => {
          return <Move key={idx} move={move} />
        })}
      </div>
    </div>
  )
}
