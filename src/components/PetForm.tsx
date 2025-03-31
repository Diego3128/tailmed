import { translations } from "../data/localized-strings";
import InputError from "./InputError";
import { DraftPatient } from "../types";
import { usePatientStore } from "../stores/store";
// 3rd party libraries || packages
import { useForm, SubmitHandler } from "react-hook-form";
import { format } from "date-fns";

export default function PatientForm() {
  const addNewPatient = usePatientStore((state) => state.addNewPatient);

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
    formState: { errors },
  } = useForm<DraftPatient>({ defaultValues: formDefaultValues });

  const savePatient: SubmitHandler<DraftPatient> = (data) => {
    addNewPatient(data);
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
              required: "the pet name is required.",
              maxLength: { value: 20, message: "pet's name is too long." },
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
              required: "the caretaker name is required.",
              maxLength: { value: 50, message: "the name is too long." },
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
              required: "the email is required.",
              maxLength: { value: 50, message: "the email is too long." },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
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
            {...register("date", { required: "the date is required." })}
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
              required: "the symptoms are required.",
              maxLength: { value: 255, message: "the symptoms are too long." },
            })}
          ></textarea>
          {errors.symptoms && (
            <InputError>
              <p>{errors.symptoms.message}</p>
            </InputError>
          )}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={translations.petForm.submitButton.en}
        />
      </form>
    </div>
  );
}
