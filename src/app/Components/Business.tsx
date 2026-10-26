import { Briefcase } from "lucide-react";

export default function Entertainment() {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="flex items-center justify-center cursor-pointer mb-2 rounded-full bg-indigo-500/10 w-20 h-20 sm:w-25 sm:h-25 border-4 sm:border-6 border-indigo-800 ring-4 sm:ring-8 ring-white text-white hover:scale-110 hover:border-emerald-400 hover:ring-mist-400 transition-all duration-300 ease-out">
        <Briefcase className="w-8 h-8 sm:w-10 sm:h-10" color="indigo" />
      </button>
      <p className="text-white text-sm sm:text-lg font-medium text-center">
        Business
      </p>
    </div>
  );
}