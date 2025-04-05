import { ToastContainer, Zoom } from "react-toastify";
import PetForm from "./components/PetForm";
import PetList from "./components/PetList";

import { translations } from "./data/localized-strings";
import { LangSwitcher } from "./components/LangSwitcher";
import { useTranslationStore } from "./stores/translationStore";

export default function App() {
  const language = useTranslationStore((state) => state.language);
  return (
    <>
      <header className="bg-indigo-700 text-white shadow-md shadow-indigo-400">
        <div className="mx-auto container p-3 text-center md:relative">
          <h1 className="uppercase font-extrabold text-3xl tracking-wide">
            {translations.header.title[language]}
            <span className="text-base font-medium block mt-1 text-indigo-100">
              {translations.header.slogan[language]}
            </span>
          </h1>
          <div className="mt-4 flex justify-center md:absolute top-2 left-3">
            <LangSwitcher />
          </div>
        </div>
      </header>
  
      <main className="container mx-auto mt-8 pb-16 px-4">
        <h2 className="capitalize font-black text-3xl text-center md:w-3/4 md:mx-auto leading-snug">
          <span className="text-indigo-700">vet </span>
          {translations.app.sectionTitle[language]}
        </h2>
  
        <section className="mt-12 flex flex-col items-center md:flex-row gap-6 md:gap-10 md:items-start">
          <PetForm />
          <PetList />
        </section>
      </main>
  
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </>
  );  
}