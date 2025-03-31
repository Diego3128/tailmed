import { useMemo } from "react";
import { usePatientStore } from "../stores/store";
import PetDetail from "./PetDetail";

export default function PetList() {
  const patients = usePatientStore((state) => state.patients);
  const emptyPatients = useMemo(() => patients.length === 0, [patients]);

  return (
    <div className="mb-10 md:mb-0 px-3.5 md:flex-1/2 lg:flex-3/5 bg-white shadow-xl rounded-2xl border border-gray-300 py-6 relative overflow-hidden">
<div className="absolute -top-5 -left-5 w-20 h-20 bg-indigo-700 rounded-full opacity-40"></div>
      {emptyPatients ? (
        <div className="mt-30 pb-20">
          <h3 className="capitalize font-black text-3xl text-center">
            No patiens yet
          </h3>
          <p className="text-xl mt-5 text-center mb-10">
            Start by creating new patiens{" "}
            <span className="font-bold text-indigo-700">
              and they will apper here
            </span>
            .
          </p>
        </div>
      ) : (
        <>
          <h3 className="capitalize font-black text-3xl text-center">
            patient list
          </h3>
          <p className="text-xl mt-5 text-center mb-10 text-pretty">
            Manage your patiens{" "}
            <span className="font-bold text-indigo-700">
              and appointments here
            </span>
            .
          </p>

          <div className="max-h-[70dvh] overflow-y-auto">
            {patients.map((patient) => (
              <PetDetail key={patient.id} patient={patient} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
