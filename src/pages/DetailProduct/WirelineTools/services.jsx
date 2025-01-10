import ProductsSlider from "../../../components/ProductsSlider";
import { useItemsOfWirelineTools } from "../../../hooks/useItemsOfWireline";
export default function Services() {
    const { itemsOfWirelineTools } = useItemsOfWirelineTools()
    const FrameOfProduct = () => {
        return (
            <div className="lg:grid lg:grid-rows-2 lg:grid-cols-4 md:flex md:flex-wrap sm:flex sm:flex-wrap gap-x-6 gap-y-5">
                {itemsOfWirelineTools.map((e, index) => (
                    <div className="rounded-md object-content items-center flex flex-col" key={index}>
                        <img src={e.image} alt="Gazalibawavigroup" />
                        <div className="m-5">
                            <p className="text-xl text-black font-semibold">{e.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };


    return (
        <div className="flex flex-col mx-20 mb-20 px-8 gap-y-20">
            <FrameOfProduct />
            <ProductsSlider />
        </div>

    );
};