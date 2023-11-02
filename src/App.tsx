import { Card, pokemonMock } from "./components"
import "./global.css"

export const App = () => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="flex w-1/3 justify-center">
        <Card pokemon={pokemonMock} />
      </div>
    </div>
  )
}
