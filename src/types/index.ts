// saved patient
export type Patient = {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  date: string;
  symptoms: string;
};
// patient being created
export type DraftPatient = Omit<Patient, "id">;

// localization
type Language = "en" | "es";

type TranslationKeys = {
  [key in Language]: string;
};

export type Translation = {
  header: {
    title: TranslationKeys;
    slogan: TranslationKeys;
  };
  app: {
    sectionTitle: TranslationKeys;
  };
  petForm: {
    title: TranslationKeys;
    description: TranslationKeys;
    patientLabel: TranslationKeys;
    patientPlaceholder: TranslationKeys;
    caretakerLabel: TranslationKeys;
    caretakerPlaceholder: TranslationKeys;
    emailLabel: TranslationKeys;
    emailPlaceholder: TranslationKeys;
    dateLabel: TranslationKeys;
    symptomsLabel: TranslationKeys;
    symptomsPlaceholder: TranslationKeys;
    submitButton: TranslationKeys;
  };
};
