import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showUpdateLayout, setshowUpdateLayout] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);
  const [hideMessage2, setHideMessage2] = useState(false);
  const [isPasswordUpdated, setPasswordUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setshowUpdateLayout(true);
    setTimeout(() => {
      setHideMessage(true);
    }, 3000);
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setPasswordUpdated(true);
    }, 3000);
    setIsLoading(true);

    setTimeout(() => {
      setHideMessage2(true);
      navigate(ROUTES.LOGIN);
    }, 5000);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Recover Password
            </h1>
            <p className="mt-2 text-gray-600">Let's help you recover </p>
          </div>

          {!showUpdateLayout ? (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-white bg-orange-400 "
                >
                  Continue
                </button>
              </div>
            </form>
          ) : (
            <>
              <p className="mt-2 text-gray-600 text-sm font-semibold">
                Enter the Validation PIN sent to your email then setup a new
                password
              </p>
              <form className="mt-1 space-y-6" onSubmit={handleSubmit2}>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Validation PIN
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="validationPin"
                        name="validationPin"
                        type={"text"}
                        autoComplete="current-password"
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Create New Password
                  </h2>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {showUpdateLayout ? (
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={
                        isLoading
                          ? "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-white bg-orange-300 "
                          : "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-white bg-orange-400 "
                      }
                    >
                      {isLoading ? "Updating.." : " update password"}
                    </button>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-white bg-orange-400 "
                  >
                    Continue
                  </button>
                )}
              </form>
            </>
          )}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              onClick={() => navigate(ROUTES.SIGNUP)}
              className="font-medium text-orange-500 hover:text-orange-600"
            >
              Sign up
            </a>
          </p>
        </div>
        {showUpdateLayout && (
          <div
            className={
              hideMessage
                ? "info p-3 rounded-md font-bold absolute shadow-md top-2 left-3 transition-opacity duration-1000 ease-in-out opacity-0 bg-orange-300"
                : "info p-3 rounded-md font-bold absolute shadow-md top-2 left-3 transition-opacity duration-5000 ease-in-out  bg-orange-300"
            }
          >
            <h3>A confirmation code has been sent to {email}!</h3>
          </div>
        )}
        {isPasswordUpdated && (
          <div
            className={
              hideMessage2
                ? "info p-3 rounded-md font-bold absolute shadow-md top-2 left-3 transition-opacity duration-1000 ease-in-out opacity-0 bg-orange-300"
                : "info p-3 rounded-md font-bold absolute shadow-md top-2 left-3 transition-opacity duration-5000 ease-in-out  bg-green-300"
            }
          >
            <h3>password has been updated succesfully!.. </h3>
          </div>
        )}
      </div>
    </>
  );
};
export default ForgotPassword;
