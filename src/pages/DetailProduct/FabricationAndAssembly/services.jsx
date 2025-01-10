import ProductsSlider from "../../../components/ProductsSlider";
import { useItemsOfFabrication } from "../../../hooks/useItemsOfFabrication";
export default function Services() {
    const { itemsOfFabrication } = useItemsOfFabrication()
    const FrameOfProduct = () => {
        return (
            <div className="lg:grid lg:grid-rows-2 lg:grid-cols-3  md:flex md:flex-wrap sm:flex sm:flex-wrap gap-x-4 gap-y-5">
                {itemsOfFabrication.map((e, index) => (
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