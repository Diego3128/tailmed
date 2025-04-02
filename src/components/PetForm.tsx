import { translations } from "../data/localized-strings";
import InputError from "./InputError";
import { DraftPatient } from "../types";
import { usePatientStore } from "../stores/store";
import { useEffect } from "react";
// 3rd party libraries || packages
import { useForm, SubmitHandler } from "react-hook-form";
import { format } from "date-fns";
import { toast } from "react-toastify";

export default function PatientForm() {
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
      toast.info(translations.petForm.toastMessages.updated.en);
    } else {
      addNewPatient(data);
      toast.info(translations.petForm.toastMessages.created.es);
    }
    reset();
  };

  return (
    <div className=" px-3.5 pt-6 md:flex-1/2 lg:flex-2/5 bg-white shadow-xl rounded-2xl border border-gray-300 relative overflow-hidden">
      <div className="absolute -top-5 -right-5 w-25 h-25 bg-indigo-700 rounded-full opacity-40 "></div>
      <h2 className="font-black text-3xl text-center z-10 relative">
        {translations.petForm.title.en}
      </h2>

      <p className="text-xl mt-5 text-center mb-10">
        {translations.petForm.description.en}
      </p>

      <form
        onSubmit={handleSubmit(savePatient)}
        className="bg-white shadow-md shadow-indigo-500 rounded-lg py-10 px-5 mb-10"
        noValidate
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            {translations.petForm.patientLabel.en}
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder={translations.petForm.patientPlaceholder.en}
            {...register("name", {
              required: translations.petForm.errors.requiredName.en,
              maxLength: {
                value: 20,
                message: translations.petForm.errors.maxLengthName.en,
              },
            })}
          />
          {errors.name && (
            <InputError>
              <p>{errors.name.message}</p>
            </InputError>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            {translations.petForm.caretakerLabel.en}
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder={translations.petForm.caretakerPlaceholder.en}
            {...register("caretaker", {
              required: translations.petForm.errors.requiredCaretaker.en,
              maxLength: {
                value: 50,
                message: translations.petForm.errors.maxLengthCaretaker.en,
              },
            })}
          />
          {errors.caretaker && (
            <InputError>
              <p>{errors.caretaker.message}</p>
            </InputError>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            {translations.petForm.emailLabel.en}
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder={translations.petForm.emailPlaceholder.en}
            {...register("email", {
              required: translations.petForm.errors.requiredEmail.en,
              maxLength: {
                value: 50,
                message: translations.petForm.errors.maxLengthEmail.en,
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: translations.petForm.errors.invalidEmail.en,
              },
            })}
          />
          {errors.email && (
            <InputError>
              <p>{errors.email.message}</p>
            </InputError>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            {translations.petForm.dateLabel.en}
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: translations.petForm.errors.requiredDate.en,
            })}
          />
          {errors.date && (
            <InputError>
              <p>{errors.date.message}</p>
            </InputError>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            {translations.petForm.symptomsLabel.en}
          </label>
          <textarea
            id="symptoms"
            className="w-full min-h-20 max-h-44 p-3  border border-gray-100"
            placeholder={translations.petForm.symptomsPlaceholder.en}
            {...register("symptoms", {
              required: translations.petForm.errors.requiredSymptoms.en,
              maxLength: {
                value: 255,
                message: translations.petForm.errors.maxLengthSymptoms.en,
              },
            })}
          ></textarea>
          {errors.symptoms && (
            <InputError>
              <p>{errors.symptoms.message}</p>
            </InputError>
          )}
        </div>

        {patienteditingId && (
          <button
            onClick={() => {
              cancelUpdate();
              toast.warning(translations.petForm.toastMessages.cancelled.en);
            }}
            className="bg-red-500 w-full p-3 text-white uppercase font-bold hover:bg-red-700 cursor-pointer transition-colors mb-3"
          >
            {translations.petForm.cancelButton.en}
          </button>
        )}

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={translations.petForm.submitButton.en}
        />
      </form>
    </div>
  );
}
