"use client";

import {useState} from "react";
import Politics from "./Components/Politics";
import Sports from "./Components/Sports";
import Religion from "./Components/Religion";
import Entertainment from "./Components/Entertainment";
import Movies from "./Components/Movies";
import Business from "./Components/Business";


export default function Home() {
  const [text, setText] = useState("");


  return (
    <main className="relative flex flex-col flex-1 font-sans  min-h-screen w-full p-4 sm:p-8 bg-[url('/background.png.png')] bg-cover bg-center bg-no-repeat bg-fixed">
    <div className= " relative flex flex-col  sticky top-0 z-20 mb-6">
      
       <div className = "w-full max-w-2xl flex flex-col gap-4 mb-5 ">
          <h1 className="text-4xl  text-left font-bold text-purple-500 dark:text-purple-400 ">Convos</h1>
        </div>
     
      <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search for a convo"
            className="bg-black-200  text-white-800 placeholder:text-white-500 border border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none  dark:placeholder:text-white-500 p-3 rounded-lg  w-full max-w-sm md:max-w-xl lg:max-w-7xl items-center justify-center "
          />
</div>

          <div className="grid grid-cols-3 gap-10 sm:gap-x-6 sm:gap-y-20 justify-items-center w-full bg-zinc-50/5 border border-zinc-50/8 rounded-lg p-4 sm:p-8 mt-4">
            <Politics />
            <Sports />
            <Religion />
            <Entertainment />
            <Movies />
            <Business />
            
          
        </div>
</main>
        
    
  );
}
