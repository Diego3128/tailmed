import { Translation } from "../types";

export const translations: Translation = {
  header: {
    title: {
      en: "tailmed",
      es: "tailmed",
    },
    slogan: {
      en: "smart care for furry friends.",
      es: "cuidado adecuado paraamigos peludos. ",
    },
  },
  app: {
    sectionTitle: {
      en: "patient follow-up",
      es: "seguimiento de paciente",
    },
  },
  petForm: {
    title: {
      en: "Patient Tracking",
      es: "Seguimiento Pacientes",
    },
    description: {
      en: "Add patients and manage them efficiently.",
      es: "Añade Pacientes y Adminístralos",
    },
    patientLabel: {
      en: "Patient",
      es: "Paciente",
    },
    patientPlaceholder: {
      en: "Patient Name",
      es: "Nombre del Paciente",
    },
    caretakerLabel: {
      en: "Owner",
      es: "Propietario",
    },
    caretakerPlaceholder: {
      en: "Owner's Name",
      es: "Nombre del Propietario",
    },
    emailLabel: {
      en: "Email",
      es: "Correo Electrónico",
    },
    emailPlaceholder: {
      en: "Registration Email",
      es: "Correo de Registro",
    },
    dateLabel: {
      en: "Admission Date",
      es: "Fecha de Ingreso",
    },
    symptomsLabel: {
      en: "Symptoms",
      es: "Síntomas",
    },
    symptomsPlaceholder: {
      en: "Patient's symptoms",
      es: "Síntomas del paciente",
    },
    submitButton: {
      en: "Save Patient",
      es: "Guardar Paciente",
    },
    cancelButton: {
      en: "Cancel Update",
      es: "Cancelar Actualización",
    },
    errors: {
      requiredName: {
        en: "The pet name is required.",
        es: "El nombre de la mascota es obligatorio.",
      },
      maxLengthName: {
        en: "Pet's name is too long.",
        es: "El nombre de la mascota es demasiado largo.",
      },
      requiredCaretaker: {
        en: "The caretaker name is required.",
        es: "El nombre del propietario es obligatorio.",
      },
      maxLengthCaretaker: {
        en: "The name is too long.",
        es: "El nombre es demasiado largo.",
      },
      requiredEmail: {
        en: "The email is required.",
        es: "El correo electrónico es obligatorio.",
      },
      maxLengthEmail: {
        en: "The email is too long.",
        es: "El correo electrónico es demasiado largo.",
      },
      invalidEmail: {
        en: "Invalid email address.",
        es: "Dirección de correo electrónico no válida.",
      },
      requiredDate: {
        en: "The date is required.",
        es: "La fecha es obligatoria.",
      },
      requiredSymptoms: {
        en: "The symptoms are required.",
        es: "Los síntomas son obligatorios.",
      },
      maxLengthSymptoms: {
        en: "The symptoms are too long.",
        es: "Los síntomas son demasiado largos.",
      },
    },
    toastMessages: {
      created: {
        en: "A new patient has been created.",
        es: "Se ha creado un nuevo paciente.",
      },
      updated: {
        en: "The patient has been updated.",
        es: "El paciente ha sido actualizado.",
      },
      cancelled: {
        en: "The update has been cancelled.",
        es: "La actualización ha sido cancelada.",
      },
    },
  },
  petDetail: {
    caretakerLabel: {
      en: "Caretaker",
      es: "Propietario",
    },
    emailLabel: {
      en: "Email",
      es: "Correo Electrónico",
    },
    dateLabel: {
      en: "Date",
      es: "Fecha",
    },
    symptomsLabel: {
      en: "Symptoms",
      es: "Síntomas",
    },
    editButton: {
      en: "Edit",
      es: "Editar",
    },
    deleteButton: {
      en: "Delete",
      es: "Eliminar",
    },
    editToast: {
      en: "Editing patient",
      es: "Editando paciente",
    },
    deleteToast: {
      en: "The patient has been deleted",
      es: "El paciente ha sido eliminado",
    },
  },
  petList: {
    emptyTitle: {
      en: "No patients yet",
      es: "Aún no hay pacientes",
    },
    emptyDescription: {
      en: "Start by creating new patients and they will appear here.",
      es: "Comienza creando nuevos pacientes y aparecerán aquí.",
    },
    listTitle: {
      en: "Patient list",
      es: "Lista de pacientes",
    },
    listDescription: {
      en: "Manage your patients and appointments here.",
      es: "Administra tus pacientes y citas aquí.",
    },
  },
};
