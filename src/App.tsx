import PetForm from "./components/PetForm";
import PetList from "./components/PetList";

import { translations } from "./data/localized-strings";

export default function App() {
  return (
    <>
      <header className="bg-indigo-700 text-white">
        <div className="container p-3 text-center capitalize">
          <h1 className="uppercase font-bold text-2xl">
            {translations.header.title.en}
          </h1>
          <span>{translations.header.slogan.en}</span>
        </div>
      </header>
      <div className="container mx-auto mt-4">
        <h2 className="capitalize font-black text-3xl text-center md:w-2/3 md:mx-auto">
          {" "}
          {translations.app.sectionTitle.en}{" "}
          <span className="text-indigo-700">vet</span>
        </h2>

        <div className="mt-12 md:flex">
          <PetForm />
          <PetList />
        </div>
      </div>
    </>
  );
}
