import { translations } from "../data/localized-strings";
import InputError from "./InputError";
import { DraftPatient } from "../types";
import { usePatientStore } from "../stores/store";
import { useEffect } from "react";
// 3rd party libraries || packages
import { useForm, SubmitHandler } from "react-hook-form";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { useTranslationStore } from "../stores/translationStore";

export default function PatientForm() {
  const language = useTranslationStore((state) => state.language);

  const addNewPatient = usePatientStore((state) => state.addNewPatient);
  const patienteditingId = usePatientStore((state) => state.patienteditingId);
  const patients = usePatientStore((state) => state.patients);
  const updatePatient = usePatientStore((state) => state.updatePatient);
  const cancelUpdate = usePatientStore((state) => state.cancelUpdate);

  const formDefaultValues: DraftPatient = {
    name: "",
    caretaker: "",
    email: "",
    date: format(new Date(), "yyyy-MM-dd"),
    symptoms: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DraftPatient>({ defaultValues: formDefaultValues });

  // check if there's an active patientEditingId
  useEffect(() => {
    if (patienteditingId) {
      // filter patient being edited
      const editingPatient = patients.filter(
        (patient) => patient.id === patienteditingId
      )[0];
      // set form values
      setValue("name", editingPatient.name);
      setValue("caretaker", editingPatient.caretaker);
      setValue("email", editingPatient.email);
      setValue("date", editingPatient.date);
      setValue("symptoms", editingPatient.symptoms);
    } else {
      reset();
    }
  }, [patienteditingId]);

  const savePatient: SubmitHandler<DraftPatient> = (data) => {
    if (patienteditingId) {
      updatePatient(data);
      toast.info(translations.petForm.toastMessages.updated[language]);
    } else {
      addNewPatient(data);
      toast.info(translations.petForm.toastMessages.created[language]);
    }
    reset();
  };

  return (
    <div className="px-4 pt-8 pb-6 md:flex-1/2 lg:flex-2/5 bg-white shadow-xl rounded-2xl border border-gray-200 relative overflow-hidden">
      <div className="absolute -top-5 -right-5 w-24 h-24 bg-indigo-700 rounded-full opacity-20 z-0" />
      <h2 className="font-black text-3xl text-center z-10 relative text-gray-800">
        {translations.petForm.title[language]}
      </h2>

      <p className="text-lg mt-4 text-center mb-10 text-gray-600 z-10 relative">
        {translations.petForm.description[language]}
      </p>

      <form
        onSubmit={handleSubmit(savePatient)}
        className="bg-white rounded-xl py-8 px-5 space-y-5 relative z-10"
        noValidate
      >
        {/* Nombre */}
        <div>
          <label
            htmlFor="name"
            className="text-sm uppercase font-semibold text-gray-700"
          >
            {translations.petForm.patientLabel[language]}
          </label>
          <input
            id="name"
            className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder={translations.petForm.patientPlaceholder[language]}
            {...register("name", {
              required: translations.petForm.errors.requiredName[language],
              maxLength: {
                value: 20,
                message: translations.petForm.errors.maxLengthName[language],
              },
            })}
          />
          {errors.name && (
            <InputError>
              <p>{errors.name.message}</p>
            </InputError>
          )}
        </div>

        {/* Responsable */}
        <div>
          <label
            htmlFor="caretaker"
            className="text-sm uppercase font-semibold text-gray-700"
          >
            {translations.petForm.caretakerLabel[language]}
          </label>
          <input
            id="caretaker"
            className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder={translations.petForm.caretakerPlaceholder[language]}
            {...register("caretaker", {
              required: translations.petForm.errors.requiredCaretaker[language],
              maxLength: {
                value: 50,
                message:
                  translations.petForm.errors.maxLengthCaretaker[language],
              },
            })}
          />
          {errors.caretaker && (
            <InputError>
              <p>{errors.caretaker.message}</p>
            </InputError>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-sm uppercase font-semibold text-gray-700"
          >
            {translations.petForm.emailLabel[language]}
          </label>
          <input
            id="email"
            className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="email"
            placeholder={translations.petForm.emailPlaceholder[language]}
            {...register("email", {
              required: translations.petForm.errors.requiredEmail[language],
              maxLength: {
                value: 50,
                message: translations.petForm.errors.maxLengthEmail[language],
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: translations.petForm.errors.invalidEmail[language],
              },
            })}
          />
          {errors.email && (
            <InputError>
              <p>{errors.email.message}</p>
            </InputError>
          )}
        </div>

        {/* Fecha */}
        <div>
          <label
            htmlFor="date"
            className="text-sm uppercase font-semibold text-gray-700"
          >
            {translations.petForm.dateLabel[language]}
          </label>
          <input
            id="date"
            className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="date"
            {...register("date", {
              required: translations.petForm.errors.requiredDate[language],
            })}
          />
          {errors.date && (
            <InputError>
              <p>{errors.date.message}</p>
            </InputError>
          )}
        </div>

        {/* Síntomas */}
        <div>
          <label
            htmlFor="symptoms"
            className="text-sm uppercase font-semibold text-gray-700"
          >
            {translations.petForm.symptomsLabel[language]}
          </label>
          <textarea
            id="symptoms"
            className="w-full mt-1 p-3 min-h-24 max-h-44 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={translations.petForm.symptomsPlaceholder[language]}
            {...register("symptoms", {
              required: translations.petForm.errors.requiredSymptoms[language],
              maxLength: {
                value: 255,
                message:
                  translations.petForm.errors.maxLengthSymptoms[language],
              },
            })}
          ></textarea>
          {errors.symptoms && (
            <InputError>
              <p>{errors.symptoms.message}</p>
            </InputError>
          )}
        </div>

        {/* Botones */}
        {patienteditingId && (
          <button
            onClick={() => {
              cancelUpdate();
              toast.warning(
                translations.petForm.toastMessages.cancelled[language]
              );
            }}
            className="bg-red-500 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-red-600 transition-colors"
          >
            {translations.petForm.cancelButton[language]}
          </button>
        )}

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 transition-colors"
          value={translations.petForm.submitButton[language]}
        />
      </form>
    </div>
  );
}
