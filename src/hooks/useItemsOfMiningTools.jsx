import { useState } from "react";

export const useItemsOfMiningTools = () => {
    const [itemsOfMiningTools] = useState([
        {
            image: "/images/MiningTools_item1.svg",
            text: "Refurbish and Upgrade Mobile Manufacturing Unit"
        },
        {
            image: "/images/MiningTools_item2.svg",
            text: "Rebuild track frame dozer"
        },
        {
            image: "/images/MiningTools_item3.svg",
            text: "Rebuild idler Dozer, Excavator such as Komatsu and Caterpillar"
        },
        {
            image: "/images/MiningTools_item4.svg",
            text: "Machine Cover"
        },
        {
            image: "/images/MiningTools_item5.svg",
            text: "Filter Screen Mud Pump"
        },
        {
            image: "/images/MiningTools_item6.svg",
            text: "Rebuild track frame dozer"
        },
        {
            image: "/images/MiningTools_item7.svg",
            text: "Line boring services"
        },
    ]);
    return { itemsOfMiningTools };
};


