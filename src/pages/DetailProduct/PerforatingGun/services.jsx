import ProductsSlider from "../../../components/ProductsSlider";
export default function Services() {

    const Card1 = () => {
        return (
            <div className="flex lg:flex-row sm:flex-col md:flex-wrap justify-between border rounded-md p-3 bg-white items-center">
                <div className="flex lg:flex-col text-left">
                    <h2 className="text-lg font-bold text-black">Gun & Accessories for Assembly of Following System</h2>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-black">
                        <li>
                            TCP Lower
                        </li>
                        <li>
                            Ignation Bottom Fire
                        </li>
                        <li>
                            Higher Ignation Top Fire
                        </li>
                        <li>
                            Selective Ignation Fire
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col text-left">
                    <h3 className="font-bold text-black">Size Gun Available</h3>
                    <p className="text-sm mt-1">
                        <span className="font-semibold">Diameters:</span>
                    </p>
                    <ul className="inline-grid grid-cols-4 gap-x-4 text-sm text-black list-disc list-inside">
                        <li>1.9/16”</li>
                        <li>3.1/2”</li>
                        <li>2.50”</li>
                        <li>4.1/2</li>
                        <li>3.1/8”</li>
                        <li>7.00”</li>
                        <li>2.7/8”</li>
                    </ul>
                    <p className="text-sm mt-2 text-black">
                        <span className="font-semibold">Length:</span> From 2 ft to 21 ft
                    </p>
                </div>
                <div className="ml-4">
                    <img
                        src="/images/PerforatingGun_item.svg"
                        alt="Gun and Accessories Gazalibawavigroup"
                        className="rounded-md max-h-40"
                    />
                </div>
            </div>
        )
    }
    const Card2 = () => {
        return (
            <div className="flex lg:flex-row-reverse justify-between border rounded-md p-3 bg-white items-center">
                <div className="flex flex-col text-left">
                    <h2 className="text-lg font-bold text-black"> Working Pressure (Psi)</h2>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-black">
                        <li>
                            Low Pressure LP Guns (Low Pressure ) Pressure rating up to 12.000 Psi for Guns 3.1/2” to 4.1/2”
                        </li>
                        <li>
                            High Pressure HP Gun ( High Pressure ) Pressure rating from 14.000 Psi to 25.000 Psi for 1.9/16” to 7.00”
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col text-left">
                    <h3 className="font-bold text-black">Density of Charge (SPF) & Phases of Various Combinations</h3>
                    <p className="text-sm mt-1">
                        <span className="font-semibold">Diameters:</span>
                    </p>
                    <ul className="flex flex-col text-sm text-black list-disc list-inside">
                        <li><span className="font-bold text-black">Densities ( Shoot Per Foot )</span> : From 4 Spf To 12 Spf</li>
                        <li><span className="font-bold text-black">Phases Degree </span>: 60,72,35, 150 , 180 </li>
                    </ul>
                    <p className="text-sm mt-2 text-black">
                        <span className="font-semibold">Length:</span> From 2 ft to 21 ft
                    </p>
                </div>
                <div className="ml-4">
                    <img
                        src="/images/PerforatingGun_item2.svg"
                        alt="Gun and Accessories Gazalibawavigroup"
                        className="rounded-md max-h-40"
                    />
                </div>
            </div>
        )
    }
    const Card3 = () => {
        return (
            <div className="flex lg:flex-row sm:flex-col md:flex-wrap justify-between border rounded-md p-3 bg-white items-center">
                <div className="flex flex-col gap-4 text-left">
                    <h1 className="font-bold text-2xl text-black">Port Plug Gun 5&quot;</h1>
                    <ul className="inline-grid gap-x-4 text-sm text-black list-disc list-inside">
                        <li>Suitable To Shoot Up To 15 Races </li>
                        <li>Do Not Require Loading Tube</li>
                        <li>Loads Eta Up To 22 Gr </li>
                        <li>Threaded End Or Bayonet</li>
                    </ul>
                    <img className="rounded-md object-contain max-h-64" src="/images/PerforatingGun_item4.svg" alt="Gazalibawavigroup" />
                </div>
                <div className="ml-4">
                    <img
                        src="/images/PerforatingGun_item3.svg"
                        alt="Gun and Accessories Gazalibawavigroup"
                        className="rounded-md object-contain"
                    />
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col m-20 px-8 gap-y-10">
            <Card1 />
            <Card2 />
            <Card3 />
            <ProductsSlider />
        </div>
    )
}