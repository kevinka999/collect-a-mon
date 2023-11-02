import { TypeBanner } from ".."
import { PokemonMove } from "../../types"

interface MoveProps {
  move: PokemonMove
}
export const Move = ({ move }: MoveProps) => {
  return (
    <div className="bg-background flex w-full flex-col rounded-[20px] px-[20px] py-[10px] shadow-lg hover:cursor-pointer hover:shadow-none focus:shadow-none">
      <div className="flex w-full flex-row justify-between">
        <span className="text-text text-xl">{move.name}</span>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <TypeBanner type={move.types[0]} width={80} />
        <span className="text-text text-sm">{`0/${move.pp}`}</span>
      </div>
    </div>
  )
}
