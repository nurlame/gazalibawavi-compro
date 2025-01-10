import Card from "../../components/Card"
import { useItemsOfProduct } from "../../hooks/useItemsOfProduct"

export default function Services() {
    const { itemsOfProduct } = useItemsOfProduct()
    const Products = () => {
        return (
            <div className='flex flex-col w-full'>
                <div className='flex flex-col text-black text-start'>
                    <span className='text-5xl font-semibold'>Products</span>
                    <span className='text-xl font-normal'>Combining Advanced Technology with Proven Performance</span>
                </div>
                <div className="lg:grid lg:grid-cols-3 lg:grid-rows-3 sm:flex sm:flex-wrap gap-4">
                    {itemsOfProduct.map((e, index) => (
                        <Card key={index} title={e.title} image={e.image} content={e.content} newProduct={e.newProduct} path={e.path} />
                    ))
                    }
                </div>
            </div>
        )
    }
    const CommitmentSection = () => {
        return (
            <div className="card card-side">
                <div className="object-content w-full h-auto">
                    <img src="/images/GazaliCommitment.svg" />
                </div>
                <div className="card-body text-black w-full">
                    <p className="card-title text-4xl font-bold whitespace-normal text-left">Commitment to High-Quality Products and Services</p>
                    <p className="text-xl text-justify">Gazali Bawavi Machining prioritizes delivering high-quality products and services through rigorous quality control at every stage of manufacturing and repair. The company adheres to ISO 9001:2008 and API Q1 standards, employing skilled machinists and welders who receive ongoing training in new technologies.</p>
                    <p className="text-xl text-justify">
                        Full-time inspectors ensure compliance with industry and customer requirements. Quality assurance processes are tailored to individual customer needs while meeting international standards. Known for high quality and fast delivery, the company ensures all orders undergo thorough inspection before production.</p>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col m-20 px-8 gap-y-20">
            <Products />
            <CommitmentSection />
        </div>
    )
}