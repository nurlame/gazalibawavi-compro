import ProductsSlider from "../../../components/ProductsSlider";
export default function Services() {

    const Card = () => {
        return (
            <div className="flex lg:flex-row sm:flex-col p-3 bg-white items-center">
                <article className="text-justify max-w-[700px]">
                    <p className="text-black text-lg">
                        To further extend the life of your rebuilt bulk truck, many companies have elected to invest in a new or more current used chassis for the remounting of the remanufactured unit. And as an added service, GBB has the facilities, paint booth and equipment to professionally prepare and repaint your existing, late model or new chassis to the original color or color of your choice. New chassis or repainted used chassis - the finished product has the look of a new bulk truck that proudly projects your company image.
                        <br />
                        <br />
                        The REMANUFACTURED truck is not complete until all safety equipment is upgraded to conform with the current standards, tanks are certified; and the bulk truck is then recertified to meet all applicable geographic
                    </p>
                </article>
                <div className="ml-4">
                    <img
                        src="/images/AnfoTruck_item2.svg"
                        alt="Gun and Accessories Gazalibawavigroup"
                        className="rounded-md object-contain"
                    />
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col m-20 px-8 gap-y-10">
            <Card />
            <ProductsSlider />
        </div>
    )
}