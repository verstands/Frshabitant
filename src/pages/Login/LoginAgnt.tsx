import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginService from "../../Services/Login.service";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";


const LoginAgnt = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const loginServiceInstance = new LoginService(config);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log('Form submitted');
    try {
      const response = await loginServiceInstance.login(email, password);
      sessionStorage.setItem('token', response.access_token);
      sessionStorage.setItem('application', JSON.stringify(response.application));
      sessionStorage.setItem('user', JSON.stringify(response.agent));
      sessionStorage.setItem('role', JSON.stringify(response.role));
      setLoading(false);
      navigate('/dashboard')
    } catch (error: unknown) {
      if (isError(error)) {
        setError(error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      setLoading(false);
    }
  };

  function isError(error: unknown): error is Error {
    return error instanceof Error;
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-[#f8f9fb]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <p className="text-dark-purple">Mon réseau Habitat</p>
          </a>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white  dark:border-white">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <center>
                <h2 className="text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl">
                  Content de vous revoir !
                </h2>
                <p className="text-[15px]">
                  Connectez-vous pour continuer avec mon réseau habitat
                </p>
              </center>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="emails"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="rabby@gmail.com"
                    value={email}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Mot de passe <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <Link
                      to="/Mdpoublier"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Mot de passe oublié?
                    </Link>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex  items-center gap-2">
                    <input type="checkbox" id="remember-me" />
                    <label
                      htmlFor="remember-me"
                      className="text-[15px] cursor-pointer"
                    >
                      Se souvenir de moi
                    </label>
                  </div>
                  <div></div>
                </div>
                {loading ? (
                 <center>
                   <Spinner />
                 </center>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600  dark:focus:ring-primary-800"
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-center">Se connecter</span>
                    </div>
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginAgnt;
