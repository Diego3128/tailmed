import { Patient } from "../types";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { usePatientStore } from "../stores/store";
import { toast } from "react-toastify";

import { translations } from "../data/localized-strings";
import { useTranslationStore } from "../stores/translationStore";

type PatientDetailProps = {
  patient: Patient;
};

export default function PetDetail({ patient }: PatientDetailProps) {
  const language = useTranslationStore((state) => state.language);

  const deletePatient = usePatientStore((state) => state.deletePatient);
  const setpatienteditingId = usePatientStore(
    (state) => state.setpatienteditingId
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const rightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    menuOpen || setMenuOpen(true);
  };

  return (
    <div
      onClick={() => menuOpen && setMenuOpen(false)}
      onContextMenu={rightClick}
      className="bg-white mb-5 shadow-sm hover:shadow-md hover:shadow-indigo-300 rounded-2xl p-5 border border-gray-200 transition-shadow relative"
    >
      <h3 className="mb-3 capitalize text-2xl font-bold text-indigo-700">
        {patient.name}
      </h3>

      <p className="mb-2 text-sm font-medium text-gray-600">
        <span className="text-indigo-500 font-semibold">
          {translations.petDetail.caretakerLabel[language]}:
        </span>{" "}
        {patient.caretaker}
      </p>

      <p className="mb-2 text-sm font-medium text-gray-600">
        <span className="text-indigo-500 font-semibold">
          {translations.petDetail.emailLabel[language]}:
        </span>{" "}
        {patient.email}
      </p>

      <p className="mb-2 text-sm font-medium text-gray-600">
        <span className="text-indigo-500 font-semibold">
          {translations.petDetail.dateLabel[language]}:
        </span>{" "}
        {patient.date}
      </p>

      <p className="mb-2 text-sm font-medium text-gray-600">
        <span className="text-indigo-500 font-semibold">
          {translations.petDetail.symptomsLabel[language]}:
        </span>{" "}
        {patient.symptoms}
      </p>

      {/* Content button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <MoreVertical size={20} className="text-gray-600" />
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="absolute right-4 -mt-1.5 w-28 bg-white border border-indigo-400 rounded-lg shadow-md overflow-hidden z-20">
            <button
              onClick={() => {
                setpatienteditingId(patient.id);
                toast.warning(translations.petDetail.editToast[language]);
              }}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-indigo-100"
            >
              <Edit size={16} className="text-indigo-700" />{" "}
              {translations.petDetail.editButton[language]}
            </button>
            <button
              onClick={() => {
                deletePatient(patient.id);
                toast.error(translations.petDetail.deleteToast[language]);
              }}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100"
            >
              <Trash2 size={16} />{" "}
              {translations.petDetail.deleteButton[language]}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
