import Header from "../components/Header";

export default function dashboard() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col mx-20 space-y-8">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <div className="w-2/3">
          <h2 className="text-2xl font-semibold border-b">Statistiken</h2>
        </div>
        <div className="w-2/3">
          <h2 className="text-2xl font-semibold border-b">
            Neuen Blogpost erstellen
          </h2>
        </div>
        <div className="w-2/3">
          <h2 className="text-2xl font-semibold border-b">
            Sonstige Änderungen
          </h2>
        </div>
      </div>
    </div>
  );
}
