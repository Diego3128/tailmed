import { useMemo } from "react";
import { usePatientStore } from "../stores/store";
import PetDetail from "./PetDetail";
import { translations } from "../data/localized-strings";
import { useTranslationStore } from "../stores/translationStore";

export default function PetList() {
  const language = useTranslationStore((state) => state.language);

  const patients = usePatientStore((state) => state.patients);
  const emptyPatients = useMemo(() => patients.length === 0, [patients]);

  return (
    <div className="mb-10 md:mb-0 px-4 py-6 md:flex-1/2 lg:flex-3/5 bg-white shadow-xl rounded-2xl border border-gray-200 relative overflow-hidden">
      <div className="absolute -top-5 -left-5 w-20 h-20 bg-indigo-700 rounded-full opacity-20 z-0"></div>
      {emptyPatients ? (
        <div className="mt-24 pb-16 text-center z-10 relative">
          <h3 className="capitalize font-black text-3xl text-gray-800">
            {translations.petList.emptyTitle[language]}
          </h3>
          <p className="text-lg mt-4 text-indigo-600">
            {translations.petList.emptyDescription[language]}
          </p>
        </div>
      ) : (
        <>
          <h3 className="capitalize font-black text-3xl text-center text-gray-800 z-10 relative">
            {translations.petList.listTitle[language]}
          </h3>
          <p className="text-lg mt-4 text-center mb-10 text-gray-600 text-pretty z-10 relative">
            {translations.petList.listDescription[language]}
          </p>

          <div className="max-h-[70dvh] overflow-y-auto z-10 relative px-1">
            {patients.map((patient) => (
              <PetDetail key={patient.id} patient={patient} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
