import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { LuGhost } from "react-icons/lu";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const fakeEmail = `${username.trim().toLowerCase()}@confessionboard.app`;

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: fakeEmail,
      password: password,
    });

    if (loginError) {
      setError("Invalid username or password");
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#08080F] flex flex-col items-center justify-center px-4">
      <div className="bg-[#1C1D2B] p-2 rounded-2xl mb-6">
        <LuGhost className="text-white text-3xl" />
      </div>

      <h1 className="text-white text-3xl font-bold mb-2">Welcome back</h1>
      <p className="text-[#847F7B] text-center text-sm mb-8 max-w-xs">
        Log in to see the confessions people have left on your board.
      </p>

      <div className="bg-[#0B0D14] rounded-2xl p-6 w-full max-w-md">
        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="text-white text-sm font-medium mb-1 block">
              Username
            </label>
            <div className="flex items-center gap-2 bg-[#14151C] rounded-xl px-4 py-3">
              <span className="text-[#6C6864]">@</span>
              <input
                type="text"
                placeholder="yourname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent text-white outline-none w-full placeholder:text-[#6C6864]"
              />
            </div>
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-1 block">
              Password
            </label>
            <div className="flex items-center gap-2 bg-[#14151C] rounded-xl px-4 py-3">
              <span className="text-[#6C6864]">🔒</span>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent text-white outline-none w-full placeholder:text-[#6C6864]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E66700] text-black font-semibold py-3 rounded-xl mt-2 disabled:opacity-50 transition-all duration-300"
          >
            {loading ? "Logging in..." : "⬛ Log In"}
          </button>
        </form>

        <p className="text-[#847F7B] text-center text-sm mt-4">
          Don't have a board yet?{" "}
          <Link to="/signup" className="text-[#E66700]">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
