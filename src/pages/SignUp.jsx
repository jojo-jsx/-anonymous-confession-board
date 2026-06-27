import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { LuGhost } from "react-icons/lu";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }

    setLoading(true);

    const { data: existing } = await supabase
      .from("profiles")
      .select("username")
      .eq("username", username.trim().toLowerCase())
      .single();

    if (existing) {
      setError("That username is already taken");
      setLoading(false);
      return;
    }

    const fakeEmail = `${username.trim().toLowerCase()}@confessionboard.app`;

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: fakeEmail,
      password: password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    await supabase.from("profiles").insert({
      id: data.user.id,
      username: username.trim().toLowerCase(),
    });

    setLoading(false);
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#08080F] flex flex-col items-center justify-center px-4">
      <div className="bg-[#1C1D2B] p-2 rounded-2xl mb-6">
        <LuGhost className="text-white text-3xl" />
      </div>

      <h1 className="text-white text-3xl font-bold mb-2">Create your board</h1>
      <p className="text-[#847F7B] text-center text-sm mb-8 max-w-xs">
        Pick a username and password. You'll get your own anonymous confession
        board to share with anyone.
      </p>

      <div className="bg-[#0B0D14] rounded-2xl p-6 w-full max-w-md">
        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
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
            <p className="text-[#6C6864] text-xs mt-1">
              This will be your board link: board/{username || "yourname"}
            </p>
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-1 block">
              Password
            </label>
            <div className="flex items-center gap-2 bg-[#14151C] rounded-xl px-4 py-3">
              <span className="text-[#6C6864]">🔒</span>
              <input
                type="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent text-white outline-none w-full placeholder:text-[#6C6864]"
              />
            </div>
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-1 block">
              Confirm Password
            </label>
            <div className="flex items-center gap-2 bg-[#14151C] rounded-xl px-4 py-3">
              <span className="text-[#6C6864]">🔒</span>
              <input
                type="password"
                placeholder="Type it again"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="bg-transparent text-white outline-none w-full placeholder:text-[#6C6864]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E66700] text-black font-semibold py-3 rounded-xl mt-2 disabled:opacity-50 transition-all duration-300"
          >
            {loading ? "Creating..." : "🔗 Create Account"}
          </button>
        </form>

        <p className="text-[#847F7B] text-center text-sm mt-4">
          Already have a board?{" "}
          <Link to="/login" className="text-[#E66700]">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
