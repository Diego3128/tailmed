import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { DraftPatient, Patient } from "../types";

import { v4 as uuidv4 } from "uuid";

type PatientStoreState = {
  patients: Patient[];
  addNewPatient: (drafPatient: DraftPatient) => void;
  deletePatient: (patientId: Patient["id"]) => void;
  patienteditingId: Patient["id"];
  setpatienteditingId: (patientId: Patient["id"]) => void;
  updatePatient: (drafPatient: DraftPatient) => void;
  cancelUpdate: () => void;
};

const createPatient = (draftPatient: DraftPatient): Patient => {
  return { ...draftPatient, id: uuidv4() };
};

export const usePatientStore = create<PatientStoreState>()(
  devtools(
    persist(
      (set) => ({
        patients: [],
        addNewPatient: (draftPatient) => {
          // create patient
          const newPatient: Patient = createPatient(draftPatient);
          //save new patient
          set((state) => ({
            patients: [...state.patients, newPatient],
          }));
        },
        deletePatient: (patientId) => {
          set((state) => ({
            patients: state.patients.filter(
              (patient) => patient.id !== patientId
            ),
          }));
        },
        patienteditingId: "",
        setpatienteditingId(patientId) {
          set({ patienteditingId: patientId });
        },
        cancelUpdate: () => {
          set({ patienteditingId: "" });
        },
        updatePatient(drafPatient) {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.patienteditingId
                ? { ...patient, ...drafPatient }
                : patient
            ),
            patienteditingId: "",
          }));
        },
      }),
      { name: "patient-storage" }
    )
  )
);
