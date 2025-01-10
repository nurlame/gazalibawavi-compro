import { useState } from "react";

export const useItemsOfWirelineTools = () => {
    const [itemsOfWirelineTools] = useState([
        {
            image: "/images/WirelineTools_item1.svg",
            text: "Cross Over SR PIN -SR-Box"
        },
        {
            image: "/images/WirelineTools_item2.svg",
            text: "Cross Over QLS Pin -SR Box"
        },
        {
            image: "/images/WirelineTools_item3.svg",
            text: "Cross Over QLS Pin- QLS Box"
        },
        {
            image: "/images/WirelineTools_item4.svg",
            text: "Wire Scratcher with SR/QLS Pin"
        },
        {
            image: "/images/WirelineTools_item5.svg",
            text: "Swivel Joint with QLS/SR Pin"
        },
        {
            image: "/images/WirelineTools_item6.svg",
            text: "Knuckle Joint With QLS Connectionx"
        },
        {
            image: "/images/WirelineTools_item7.svg",
            text: "Gauge Ring With QLS/SR Connection"
        },
        {
            image: "/images/WirelineTools_item8.svg",
            text: "Bull Nose With QLS/SR Connection"
        },
    ]);
    return { itemsOfWirelineTools };
};


