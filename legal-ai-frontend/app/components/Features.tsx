export default function Features() {
  return (
    <div className="px-12 py-2">
      <div className="p-12 bg-[#292929] text-white rounded-3xl">
        <div className="flex justify-center">
          <span className="font-bold text-4xl">
            Submit Your Case and Get Legal Insights
          </span>
        </div>
        <div className="flex justify-center pt-4">
          <span className="text-sm text-[#7C7C7C] text-center">
            First Enter your case name to get its summary, after it you can
            query more details about it.
          </span>
        </div>
        <div className="flex items-center justify-center pt-8 gap-12">
          <div className="border-[1px] border-[#FF7722] rounded-3xl px-16 py-10 flex flex-col items-center gap-2.5 max-w-[25%] hover:bg-[#2c2c2c] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-file-info size-24 text-[#FF7722]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M11 14h1v4h1" />
              <path d="M12 11h.01" />
            </svg>
            <span className="font-bold text-xl text-center">
              Query About your Cases
            </span>
            <span className="text-sm text-[#7C7C7C] text-center">
              Choose your cases and get info about it
            </span>
          </div>
          <div className="border-[1px] border-[#FF7722] rounded-3xl px-16 py-10 flex flex-col items-center gap-2.5 max-w-[25%] hover:bg-[#2c2c2c] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-24 text-[#FF7722]"
            >
              <path
                fill-rule="evenodd"
                d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="font-bold text-xl text-center">
              Multilingual Support
            </span>
            <span className="text-sm text-[#7C7C7C] text-center">
              Choose Language for better interaction
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
