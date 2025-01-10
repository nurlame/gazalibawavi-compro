import ProductsSlider from "../../../components/ProductsSlider";
import { useItemsOfHeavyEquipment } from "../../../hooks/useItemsOfHeavyEquipment";
export default function Services() {
    const { itemsOfHeavyEquipment } = useItemsOfHeavyEquipment()
    const FrameOfProduct = () => {
        return (
            <div className="lg:grid lg:grid-rows-3 lg:grid-cols-4  md:flex md:flex-wrap sm:flex sm:flex-wrap gap-x-4 gap-y-5">
                {itemsOfHeavyEquipment.map((e, index) => (
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

    const OtherProduct = () => {
        return (
            <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                    <div className="object-cover">
                        <img src="/images/HeavyEquipment_Other.svg" alt="Gazalibawavigroup" />
                    </div>
                    <span className="text-black text-2xl font-semibold m-4">Other Product</span>
                </div>
                <div className="flex flex-col">
                    <div className="object-cover">
                        <img src="/images/HeavyEquipment_Other1.svg" alt="Gazalibawavigroup" />
                    </div>
                    <span className="text-black text-2xl font-semibold m-4">TwinRamHvdraulic Tracklink Press Machine</span>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col mx-20 mb-20 px-8 gap-y-20">
            <FrameOfProduct />
            <OtherProduct />
            <ProductsSlider />
        </div>

    );
};