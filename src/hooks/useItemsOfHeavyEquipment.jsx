import { useState } from "react";

export const useItemsOfHeavyEquipment = () => {
    const [itemsOfHeavyEquipment] = useState([
        {
            image: "/images/HeavyEquipment_item1.svg",
            text: "Track Adjuster Assy"
        },
        {
            image: "/images/HeavyEquipment_item2.svg",
            text: "Carrier Roller Assy"
        },
        {
            image: "/images/HeavyEquipment_item3.svg",
            text: "Track Shoe"
        },
        {
            image: "/images/HeavyEquipment_item4.svg",
            text: "Track Roller Assy"
        },
        {
            image: "/images/HeavyEquipment_item5.svg",
            text: "Idler Assy"
        },
        {
            image: "/images/HeavyEquipment_item6.svg",
            text: "Track Chain Assy & Bushing Pin"
        },
        {
            image: "/images/HeavyEquipment_item7.svg",
            text: "Bolt/Nut"
        },
        {
            image: "/images/HeavyEquipment_item8.svg",
            text: "Hydraulic Pump"
        },
        {
            image: "/images/HeavyEquipment_item9.svg",
            text: "Bucket & Bucket Teeth"
        },
        {
            image: "/images/HeavyEquipment_item10.svg",
            text: "Hydraulic Parts"
        },
        {
            image: "/images/HeavyEquipment_item11.svg",
            text: "Final Drive/Swing Motor "
        },
        {
            image: "/images/HeavyEquipment_item12.svg",
            text: "Cutting Edge / Blad"
        },

    ]);


    return { itemsOfHeavyEquipment };
};


