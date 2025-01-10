// import {headerImg} from '../../public/header_homebase.svg'
import WhatsAppButton from './ButtonWhatsapp';
export default function Hero() {
  return (
    <div className={`hero min-h-screen bg-[url("/public/header_homebase.svg")] flex p-2`}>
      <div className="hero-content max-w-5xl ">
        <div className="max-w-5xl flex flex-col items-start">
          <span className="text-5xl font-bold text-left">Your Trusted Partner in Oil, Gas & Mining Tools Repair and Fabrication</span>
          <span className="py-6 text-xl">
            Excellence and Cutting-Edge Technology to Drive Your Success
          </span>

          <WhatsAppButton />

        </div>
      </div>
    </div>
  );
}