
import WhatsAppButton from '../../components/ButtonWhatsapp';
export default function Hero() {
    return (
        <div className={`hero min-h-screen bg-[url("/images/HeroProducts.svg")] flex p-2`}>
            <div className="hero-content max-w-5xl ">
                <div className="max-w-5xl flex flex-col items-start">
                    <span className="text-5xl font-bold text-left">High-Quality Products and Services for Every Industry Need</span>
                    <span className="py-6 text-xl w-1/2 text-left">Tailored Solutions for Durable and Efficient Equipment Repair and Fabrication</span>
                    <WhatsAppButton />
                </div>
            </div>
        </div>
    );
}