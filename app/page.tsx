import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex my-20 items-center justify-around">

        {/* Left Side (Text) */}
        <div className="p-6 text-start max-w-sm">
          <h1 className="libre-bodoni-font text-2xl font-bold mb-4   leading-relaxed">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="libre-bodoni-font text-[#787054] mb-6 leading-relaxed -mr-16 text-md tracking-wide">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] libre-bodoni-font text-white py-2 px-8 rounded-xl hover:bg-[#6d664a] duration-500">
            Explore Now
          </button>
        </div>

        {/* Right Side (Images) */}
        <div className="relative flex justify-end"> 
          <Image
            src="/images/border.png"
            alt="Image"
            width={290}
            height={290}
            className="absolute top-5 right-4 z-50" 
          />
          <Image
            src="/images/women.png"
            alt="Image Of Women"
            width={321}
            height={450}
            className="relative"
          />
        </div>

      </div>
    </div>

  );
}
