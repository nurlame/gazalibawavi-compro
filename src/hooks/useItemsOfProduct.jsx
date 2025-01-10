import { useState } from "react";

export const useItemsOfProduct = () => {
    const [itemsOfProduct] = useState([
        {
            title: "Perforating Gun Pipe",
            content: "Precision-Engineered for Safe and Efficient Perforation",
            image: "/images/perforating_gun.jpg",
            newProduct: true,
            path:"/products/perforatinggun"
        },
        {
            title: "Drilling Tools",
            content: "High-Performance Tools for Precision Drilling",
            image: "/images/DrillingTools.svg",
            path:"/products/drillingtools"
        },
        {
            title: "ANFO Truck 5 Ton",
            content: "Reliable Transport for Bulk Explosives in Mining Operations",
            image: "/images/AnfoTruck.svg",
            newProduct: true,
            path:"/products/anfotruck"
        },

        {
            title: "Explosive Storage",
            content: "Safe and Secure Storage for Hazardous Materials",
            image: "/images/ExplosiveStorage.svg",
            path:"/products/explosivestorage"
        },
        {
            title: "XBore Portable Line Boring",
            content: "Portable Solutions for Accurate Line Boring Repairs",
            image: "/images/XborePortable.svg",
            newProduct: true,
            path:"/products/xboreportable"
        },
        {
            title: "Fabrication & Assembly",
            content: "Custom Solutions Tailored to Your Industrial Needs",
            image: "/images/FabricationAssembly.svg",
            path:"/products/fabricationassembly"
        },
        {
            title: "Mining Tools & Equipments",
            content: "Durable Tools Built for Efficient Mining Operations",
            image: "/images/MinningTools.svg",
            path:"/products/miningtools"
        },
        {
            title: "Wireline Tools",
            content: "Optimized Tools for Seamless Well-Logging Operations",
            image: "/images/WirelineTools.svg",
            path:"/products/wirelinetools"
        },
        {
            title: "Heavy Equipment",
            content: "Powerful Machines for Challenging Industrial Tasks",
            image: "/images/HeavyEquipment.svg",
            path:"/products/heavyequipment"
        },
    ]);


    return { itemsOfProduct };
};


