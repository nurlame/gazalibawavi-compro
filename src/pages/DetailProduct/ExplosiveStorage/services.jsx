import ProductsSlider from "../../../components/ProductsSlider";
export default function Services() {

    const Card = () => {
        return (
            <div className="flex">

                <div className="">
                    <img
                        src="/images/ExplosiveStorage_item2.svg"
                        alt="Gun and Accessories Gazalibawavigroup"
                        className="rounded-md object-contain"
                    />
                    <div className="text-black text-justify text-xl">ANE Transport Tank 2 Ton c/w pad eyes ,forklift pockets and corner locks</div>
                </div>
            </div>

        );
    };

    return (
        <div className="m-20 px-8 gap-y-10">
            <div className="flex flex-col items-center mb-16">
                <Card />
            </div>
            <ProductsSlider />
        </div>

    );
};