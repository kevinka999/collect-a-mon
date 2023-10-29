import { TypeBanner } from ".."
import { PokemonMove } from "../../types"

interface MoveProps {
  move: PokemonMove
}
export const Move = ({ move }: MoveProps) => {
  return (
    <div className="flex w-full flex-col rounded-[20px] bg-secondary px-[20px] py-[10px] shadow-lg">
      <div className="flex w-full flex-row justify-between">
        <span className="text-xl text-black">{move.name}</span>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <TypeBanner type={move.types[0]} width={80} />
        <span className="text-sm text-black">{`0/${move.pp}`}</span>
      </div>
    </div>
  )
}
