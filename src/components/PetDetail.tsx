import { Patient } from "../types";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

// Define props
type PatientDetailProps = {
  patient: Patient;
};

export default function PetDetail({ patient }: PatientDetailProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const rightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    menuOpen || setMenuOpen(true);
  };

  return (
    <div
      onClick={() => menuOpen && setMenuOpen(false)}
      onContextMenu={rightClick}
      className="bg-white mb-5 shadow-md shadow-indigo-300 hover:shadow-indigo-400 rounded-2xl p-6 border border-gray-200 relative"
    >
      <h3 className="mb-2.5 capitalize text-2xl font-bold text-indigo-700">{patient.name}</h3>
      <p className="mb-1.5 capitalize text-indigo-500 text-sm font-semibold">
        Caretaker: <span className="text-gray-800">{patient.caretaker}</span>
      </p>
      <p className="mb-1.5 text-indigo-500 text-sm font-semibold">
        Email: <span className="text-gray-800">{patient.email}</span>
      </p>
      <p className="mb-1.5 text-indigo-500 text-sm font-semibold">
        Date: <span className="text-gray-800">{patient.date}</span>
      </p>
      <p className="mb-1.5 text-indigo-500 text-sm font-semibold">
        Symptoms: <span className="text-gray-800">{patient.symptoms}</span>
      </p>

      {/* content button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <MoreVertical size={20} className="text-gray-600" />
        </button>
      {/* Content menu */}
        {menuOpen && (
          <div className="absolute right-4 -mt-1.5 w-28 bg-white border border-indigo-400 rounded-lg shadow-lg overflow-hidden">
            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-indigo-200 hover:cursor-pointer">
              <Edit size={16} className="text-indigo-700" /> Edit
            </button>
            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-200 hover:cursor-pointer">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
