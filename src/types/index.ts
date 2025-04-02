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
    cancelButton: TranslationKeys;
    errors: {
      requiredName: TranslationKeys;
      maxLengthName: TranslationKeys;
      requiredCaretaker: TranslationKeys;
      maxLengthCaretaker: TranslationKeys;
      requiredEmail: TranslationKeys;
      maxLengthEmail: TranslationKeys;
      invalidEmail: TranslationKeys;
      requiredDate: TranslationKeys;
      requiredSymptoms: TranslationKeys;
      maxLengthSymptoms: TranslationKeys;
    };
    toastMessages: {
      created: TranslationKeys;
      updated: TranslationKeys;
      cancelled: TranslationKeys;
    };
  };
  petDetail: {
    caretakerLabel: TranslationKeys;
    emailLabel: TranslationKeys;
    dateLabel: TranslationKeys;
    symptomsLabel: TranslationKeys;
    editButton: TranslationKeys;
    deleteButton: TranslationKeys;
    editToast: TranslationKeys;
    deleteToast: TranslationKeys;
  };
  petList: {
    emptyTitle: TranslationKeys;
    emptyDescription: TranslationKeys;
    listTitle: TranslationKeys;
    listDescription: TranslationKeys;
  };
};
