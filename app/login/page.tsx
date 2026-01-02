import Header from "../components/Header";
import LoginForm from "./components/LoginForm";

export default function login() {
  return (
    <div className="bg-white">
      <div>
        <Header />
      </div>
      <LoginForm />
    </div>
  );
}
