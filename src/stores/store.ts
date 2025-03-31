import { create } from "zustand";
import { DraftPatient, Patient } from "../types";

import { v4 as uuidv4 } from "uuid";

type PatientStoreState = {
  patients: Patient[];
  addNewPatient: (drafPatient: DraftPatient) => void;
};

const createPatient = (draftPatient: DraftPatient): Patient => {
  return { ...draftPatient, id: uuidv4() };
};

export const usePatientStore = create<PatientStoreState>((set) => ({
  patients: [],
  addNewPatient: (draftPatient) => {
    // create patient
    const newPatient: Patient = createPatient(draftPatient);
    //save new patient
    set((state) => ({
      patients: [...state.patients, newPatient],
    }));
  },
}));
