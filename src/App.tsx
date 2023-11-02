import { useEffect, useState } from "react"
import { io } from "socket.io-client"

import "./global.css"

const socket = io("http://localhost:3000/battle", {
  autoConnect: false,
  retries: 0,
  extraHeaders: {
    Authorization: "1234",
  },
})

export const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [players, setPlayers] = useState<string[]>([])

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true))
    socket.on("disconnect", () => setIsConnected(false))
    socket.on("players", (data) => setPlayers(data))
    socket.on("battle", (data) => alert(data))
  }, [socket])

  return (
    <div>
      <h1>Socket</h1>
      <p className="mb-2">{`You are ${
        isConnected ? "connected" : "disconnected"
      }`}</p>

      <div className="mb-2 flex flex-row gap-2">
        <button
          className={"bg-slate-500"}
          disabled={isConnected}
          onClick={() => socket.connect()}
        >
          Connect
        </button>
        <button
          className={"bg-slate-500"}
          disabled={!isConnected}
          onClick={() => socket.disconnect()}
        >
          Disconnect
        </button>
      </div>

      <button
        className={"bg-red-400"}
        onClick={() => socket.emit("battle", "attack")}
      >
        Battle
      </button>

      <ul>
        {players.map((id, idx) => (
          <li key={idx}>{id}</li>
        ))}
      </ul>
    </div>
  )
}
