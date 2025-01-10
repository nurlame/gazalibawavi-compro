
export default function Hero() {
  return (
    <div className={`hero min-h-screen bg-[url("/images/HeroAboutUs.svg")] p-2`}>
      <div className="hero-content max-w-5xl ">
        <div className="max-w-5xl flex flex-col text-center">
          <span className="text-5xl font-bold">Committed to Quality and Reliability</span>
          <span className="py-6 text-xl">
          Serving the Oil, Gas, and Mining Industries with Dedication Since 1996
          </span>
        </div>
      </div>
    </div>
  );
}