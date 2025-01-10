import { useState } from "react";

export const useItemsOfDrillingTools = () => {
    const [itemsOfDrillingTools] = useState([
        {
            image: "/images/DrillingTools_item1.svg",
            text: "DSAF-11-x-10M-to-7.0625x-3M"
        },
        {
            image: "/images/DrillingTools_item2.svg",
            text: "Riser-spool-7.0625-X-3M-to-Flange-OD-15-ID-7.0625-T-2.5"
        },
        {
            image: "/images/DrillingTools_item3.svg",
            text: "Cross-Over-2.375-EUE-Pin-X-2.375-HSLA-Box"
        },
        {
            image: "/images/DrillingTools_item4.svg",
            text: "Cross-Over-4.5-IF-PIN-x-Thread-HQ"
        },
        {
            image: "/images/DrillingTools_item5.svg",
            text: "DP-reconditioning"
        },
        {
            image: "/images/DrillingTools_item6.svg",
            text: "X-Over-2.875-Premium-Conn-Pin-X-2.875-EUE-Box"
        },
    ]);
    return { itemsOfDrillingTools };
};


