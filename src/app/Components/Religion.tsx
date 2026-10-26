import { Church } from "lucide-react";

export default function Religion() {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="flex items-center justify-center cursor-pointer mb-2 rounded-full bg-yellow-500/10 w-20 h-20 sm:w-25 sm:h-25 border-4 sm:border-6 border-yellow-800 ring-4 sm:ring-8 ring-white text-white hover:scale-110 hover:border-green-400 hover:ring-gray-400 transition-all duration-300 ease-out">
        <Church className="w-8 h-8 sm:w-10 sm:h-10" color="yellow" />
      </button>
      <p className="text-white text-sm sm:text-lg font-medium text-center">
        Religion
      </p>
    </div>
  );
}