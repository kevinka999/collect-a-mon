import { useNavigate } from "react-router-dom"

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Home Page</h1>
      <button
        className="bg-primary p-2 text-white"
        onClick={() => navigate("/session")}
      >
        Look for a battle
      </button>
    </div>
  )
}
