// import React, { useState } from "react";
// import { supabase } from "../lib/supabase";

// const Auth = () => {
//   const [email, setEmail] = useState("");
//   const [sent, setSent] = useState(false);

//   const handleLogin = async () => {
//     const { error } = await supabase.auth.signInWithOtp({ email });
//     if (!error) setSent(true);
//   };

//   return (
//     <div className="max-w-sm mx-auto text-center space-y-4 ">
//       <h2 className="text-xl font-bold">
//         Login via Email to save current city
//       </h2>
//       {sent ? (
//         <p className="text-green-600">Check your email for the login link.</p>
//       ) : (
//         <>
//           <input
//             type="email"
//             className="w-full px-4 py-2 border rounded"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button
//             onClick={handleLogin}
//             className=" bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300"
//           >
//             Send Login Link
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Auth;

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const Auth = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleMagicLinkSignIn = async () => {
      const params = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = params.get("access_token");
      const type = params.get("type");

      if (accessToken && type === "magiclink") {
        setLoading(true);
        setError(null);
        try {
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
          });
          if (error) {
            setError(error.message);
          } else {
            console.log("Magic link sign-in successful:", data);
            if (onLoginSuccess && data?.user) {
              onLoginSuccess(data.user);
            }
          }
        } catch (err) {
          setError("An unexpected error occurred during magic link sign-in.");
          console.error("Magic link sign-in error:", err);
        } finally {
          setLoading(false);
          // Clear the hash from the URL
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname + window.location.search
          );
        }
      }
    };

    handleMagicLinkSignIn();
  }, [onLoginSuccess]);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    setSent(false);
    try {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (!error) {
        setSent(true);
      } else {
        setError(error.message);
      }
    } catch (err) {
      setError("An unexpected error occurred while sending the login link.");
      console.error("Error sending login link:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto text-center space-y-4 ">
      <h2 className="text-xl font-bold">
        Login via Email to save current city
      </h2>
      {error && <p className="text-red-600">{error}</p>}
      {loading ? (
        <p>Sending magic link...</p>
      ) : sent ? (
        <p className="text-green-600">Check your email for the login link.</p>
      ) : (
        <>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className=" bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300"
            disabled={loading}
          >
            Send Login Link
          </button>
        </>
      )}
    </div>
  );
};

export default Auth;
