import ProductsSlider from "../../../components/ProductsSlider";
export default function Services() {

    const Card = () => {
        return (
            <div className="flex lg:flex-row sm:flex-col p-3 gap-4 bg-white items-center">
                <div className="flex lg:flex-col text-left">
                    <h2 className="text-3xl font-bold text-black">Gun & Accessories for Assembly of Following System</h2>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-xl text-black">
                        <li>
                            Electric 2.2 KW or hydraulic power drive (XBore Heavy)
                        </li>
                        <li>
                            High torque transfer with smooth power delivery
                        </li>
                        <li>
                            Heavy duty capability over 425 N.m of torque at bar
                        </li>
                        <li>
                            Capable of cutting all materials
                        </li>
                        <li>
                            Quick set up with modular components
                        </li>
                    </ul>
                </div>
                <div className="ml-4">
                    <img
                        src="/images/XborePortable_item3.svg"
                        alt="Gun and Accessories Gazalibawavigroup"
                        className="rounded-md object-contain"
                    />
                </div>
                <div className="ml-4">
                    <img
                        src="/images/XborePortable_item2.svg"
                        alt="Gun and Accessories Gazalibawavigroup"
                        className="rounded-md object-contain"
                    />
                </div>
            </div>
        )
    }
    const Card2 = () => {
        return (
            <div className="flex lg:flex-row-reverse sm:flex-col p-3 gap-4 bg-white items-center justify-center">
                <div className="flex flex-row text-left gap-x-5">
                    <div className="grid grid-rows-4 gap-2">
                        <div className="flex flex-col text-black">
                            <span className="text-3xl font-semibold">Bar Diameters</span>
                            <span className="text-xl">44.5 mm (1.75&quot;) - 50.8 mm (2&quot;)</span>
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-3xl font-semibold">Max Stroke</span>
                            <span className="text-xl">965.2 mm (38&quot;)</span>
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-3xl font-semibold">Torque at Bar</span>
                            <span className="text-xl">425 Nm (XBore Heavy)</span>
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-3xl font-semibold">Power Option</span>
                            <span className="text-xl">Electric AC 220 V, 380V or Hydraulic</span>
                        </div>
                    </div>
                    <div className="grid grid-rows-4 gap-2">
                        <div className="flex flex-col text-black">
                            <span className="text-3xl font-semibold">Hand Feed / Revolution</span>
                            <span className="text-xl">2.0mm</span>
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-3xl font-semibold">Hydraulic Power pack</span>
                            <span className="text-xl">380 VAC, 7.5 HP</span>
                        </div>
                        <div className="flex flex-col text-black">
                            <span className="text-3xl font-semibold">Hand Feed / Revolution</span>
                            <span className="text-xl">2.0mm</span>
                        </div>
                        <div className="flex flex-none">
                            <span className="text-3xl font-semibold">Bar RPM</span>
                            <span className="text-xl">44.5 mm (1.75&quot;) - 50.8 mm (2&quot;)</span>
                        </div>
                    
                    </div>
                </div>
                <div className="mr-4">
                    <img
                        src="/images/XborePortable_item4.svg"
                        alt="Gun and Accessories Gazalibawavigroup"
                        className="rounded-md object-cover"
                    />
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col m-20 px-8 gap-y-20">
            <Card />
            <Card2 />
            <ProductsSlider />
        </div>
    )
}