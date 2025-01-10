import { useState } from "react";

export const useItemsOfFabrication = () => {
    const [itemsOfFabrication] = useState([
        {
            image: "/images/Fabrication_item1.svg",
            text: "Wireline Container-Unit"
        },
        {
            image: "/images/Fabrication_item2.svg",
            text: "Truck Mixing Amonium Nitrate"
        },
        {
            image: "/images/Fabrication_item3.svg",
            text: "ANFO Truck"
        },
        {
            image: "/images/Fabrication_item4.svg",
            text: "Cimenting Unit, ASME Standart"
        },
        {
            image: "/images/Fabrication_item5.svg",
            text: "Mix Tanx"
        },
    ]);
    return { itemsOfFabrication };
};


