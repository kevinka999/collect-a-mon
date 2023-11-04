import { io } from "socket.io-client"
import { Button, Spinner } from "../components"
import { useEffect } from "react"

const socket = io("http://localhost:3000/session", {
  autoConnect: true,
  extraHeaders: {
    Authorization: "1234",
  },
})

export const SessionPage = () => {
  useEffect(() => {
    if (socket.disconnected) socket.connect()

    socket.on("session_found", (session) => {
      alert(`session found ${session}`)
    })
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-background text-center">
      <Spinner />
      <h1 className="text-xl font-bold text-primary">
        Searching for an opponent
      </h1>
      <Button variant="primary" className="mt-5">
        Cancel searching
      </Button>
    </div>
  )
}
