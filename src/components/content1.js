export default function Content1() {
  return (
    <>
      <div className="flex w-[90%] md:w-[49%] h-full md:h-[95%] bg-white border-4 border-gray-400 rounded-xl">
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full h-full rounded-xl">
          <div className="flex justify-center items-center bg-slate-200 md:w-[48%] md:h-[95%] w-[95%] h-[48%] rounded-md">
            <div className="w-[90%] h-full md:h-[85%]">
              <div className="flex flex-col justify-evenly w-full h-full">
                <div className="flex justify-evenly items-center h-[20%]">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-5 py-2.5 text-center border-2 border-white"
                  >
                    Start
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-5 py-2.5 text-center border-2 border-white"
                  >
                    Stop
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-5 py-2.5 text-center border-2 border-white"
                  >
                    Upload
                  </button>
                </div>
                <div className="flex justify-center items-center w-full h-[20%]">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-24 py-2.5 text-center border-2 border-white"
                  >
                    Audio (VN)
                  </button>
                </div>
                <div className="flex justify-center items-center w-full h-[20%]">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-16 py-2.5 text-center border-2 border-white"
                  >
                    Audio (Component)
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-slate-400 md:w-[48%] md:h-[95%] w-[95%] h-[48%] rounded-md">
            <div className="w-[90%] h-full md:h-[85%]">
              <div className="flex flex-col justify-evenly w-full h-full">
                <div className="flex justify-evenly items-center h-[20%]">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-5 py-2.5 text-center border-2 border-white"
                  >
                    Start
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-5 py-2.5 text-center border-2 border-white"
                  >
                    Stop
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-5 py-2.5 text-center border-2 border-white"
                  >
                    Upload
                  </button>
                </div>
                <div className="flex justify-center items-center w-full h-[20%]">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-24 py-2.5 text-center border-2 border-white"
                  >
                    Audio (VN)
                  </button>
                </div>
                <div className="flex justify-center items-center w-full h-[20%]">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm 
                            px-16 py-2.5 text-center border-2 border-white"
                  >
                    Audio (Component)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
