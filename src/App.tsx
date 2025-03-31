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
      <div className="container mx-auto mt-4 pb-10">
        <h2 className="capitalize font-black text-3xl text-center md:w-2/3 md:mx-auto">
          {" "}
          {translations.app.sectionTitle.en}{" "}
          <span className="text-indigo-700">vet</span>
        </h2>

        <div className="p-3 md:p-0 mt-12 flex flex-col md:flex-row gap-4 md:gap-8 items-start">
          <PetForm />
          <PetList />
        </div>
      </div>
    </>
  );
}
