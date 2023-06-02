import Image from "next/image";

export const Banner = () => {
  console.log("banner");
  return (
    <div className="h-full flex flex-col md:flex-row md:h-[300px] container my-8 md:my-16">
      <Image
        height={0}
        width={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="cursor-pointer !object-cover md:w-1/2 rounded-t-md md:rounded-t-none md:rounded-l-md !h-[300px] md:h-full"
        src="https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
        alt=""
      />
      <div className="bg-black text-white md:w-full p-8 flex flex-col space-y-4 md:space-y-0 md:justify-between rounded-b-md md:rounded-r-md">
        <p className="text-gray-300 text-sm md:text-base">LIMITED OFFER</p>
        <p className="text-3xl md:text-5xl font-semibold">
          35% off only this friday and get special gift
        </p>
        <a
          className="bg-white px-4 py-2 text-black w-fit rounded-md font-semibold"
          href="#"
        >
          Grab it now
        </a>
      </div>
    </div>
  );
};
