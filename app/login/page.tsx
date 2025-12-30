import Header from "../components/Header";

export default function login() {
  return (
    <div className="bg-white">
      <div>
        <Header />
      </div>
      <div className="flex flex-col items-center">
        <form className="flex flex-col items-center p-8 rounded-box border border-gray-200 space-y-8 w-1/3 shadow-md">
          <h1 className="text-4xl font-semibold">Login</h1>
          <input type="text" className="input bg-white" placeholder="email " />
          <input
            type="text"
            className="input bg-white"
            placeholder="password"
          />
          <button className="btn w-full">Enter</button>
        </form>
      </div>
    </div>
  );
}
