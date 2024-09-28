
function ResultPage() {
  return (
    <div className="bg-[url('/ResultPage_bg.svg')] bg-[#fef0f3] bg-[length:600px_900px] md:bg-[length:1800px_1800px] bg-[center_left_1em] md:bg-[center_right_10em] bg-repeat md:bg-no-repeat h-fit md:h-[90%] flex flex-col md:flex-row gap-8 px-4 md:px-16 py-12 text-black">
      <div className="h-full backdrop-blur-sm bg-white/30 rounded-l-xl rounded-r-xl md:rounded-r-none shadow-lg shadow-zinc-500/40 w-full md:w-[30%]  hover:shadow-lg">
        <img
          src="./resultPage_resume.webp"
          className="inset-0 object-contain object-center w-full h-full px-4 py-4"
        ></img>
      </div>
      <div className="backdrop-blur-sm bg-white/30 rounded-r-xl rounded-l-xl md:rounded-l-none shadow-lg shadow-zinc-500/40 overflow-hidden w-full md:w-[65%] h-full px-4 md:px-12  hover:shadow-2xl">
        <div className="px-12 py-4 text-3xl font-semibold text-center text-gradient ">
          Best Experts For Name Of Candidant
        </div>
        <div className="flex justify-between px-12 py-4 rounded-2xl border-zinc-400 border-[1px] shadow-lg shadow-zinc-500/40 my-2  hover:shadow-lg flex-wrap">
          <div className="">
            <img
              className="object-cover object-top rounded-full w-14 h-14"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <div className="text-md font-medium text-black">Name of Expert</div>
            <div className="text-zinc-800 text-medium">
              HOD of Computer Engineering
            </div>
          </div>
          <div className="self-center text-md font-semibold">92% Match</div>
        </div>
        <div className="flex justify-between px-12 py-4 rounded-2xl border-zinc-400 border-[1px] shadow-lg shadow-zinc-500/40 my-2  hover:shadow-lg flex-wrap">
          <div className="">
            <img
              className="object-cover object-top rounded-full w-14 h-14"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <div className="text-md font-medium text-black">Name of Expert</div>
            <div className="text-zinc-800 text-medium">
              HOD of Computer Engineering
            </div>
          </div>
          <div className="self-center text-md font-semibold">92% Match</div>
        </div>
        <div className="flex justify-between px-12 py-4 rounded-2xl border-zinc-400 border-[1px] shadow-lg shadow-zinc-500/40 my-2  hover:shadow-lg flex-wrap">
          <div className="">
            <img
              className="object-cover object-top rounded-full w-14 h-14"
              src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <div className="text-md font-medium text-black">Name of Expert</div>
            <div className="text-zinc-800 text-medium">
              HOD of Computer Engineering
            </div>
          </div>
          <div className="self-center text-md font-semibold">92% Match</div>
        </div>
        <div className="flex justify-between px-12 py-4 rounded-2xl border-zinc-400 border-[1px] shadow-lg shadow-zinc-500/40 my-2 hover:shadow-lg flex-wrap">
          <div className="">
            <img
              className="object-cover object-top rounded-full w-14 h-14"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <div className="text-md font-medium text-black">Name of Expert</div>
            <div className="text-zinc-800 text-medium">
              HOD of Computer Engineering
            </div>
          </div>
          <div className="self-center text-md font-semibold">92% Match</div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
