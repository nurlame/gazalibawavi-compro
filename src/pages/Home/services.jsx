import employers from '../../assets/employers.jpg'
import IconUser from '/icon/icon_user.svg'
import IconCertified from '/icon/icon_certified.svg'
import IconDiamond from '/icon/icon_diamond.svg'
import IconTools from '/icon/icon_tools.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from 'prop-types'
import IconArrow from '/icon/icon_arrow_outline.svg'
import CardOurServiceArea from '../../components/CardOurService'
import IndonesiaMap from '/images/IndonesiaMap.svg'
import  OurCustomer  from '../../components/OurCustomer'
import Card from '../../components/Card'
import { useItemsOfProduct } from '../../hooks/useItemsOfProduct'
import { useNavigate } from 'react-router-dom'
export default function Services() {
    const navigate = useNavigate()
    const ContentAboutUs = () => {
        return (
            <section>
                <div className="card lg:card-side ">
                    <figure>
                        <img src={employers} className='w-full' />
                    </figure>
                    <div className="card-body p-5">
                        <article className='prose'>
                            <p className="card-title text-5xl text-black mt-20">PT Gazali Bawavi</p>
                            <p className='text-black text-sm w-[500px] mt-10 text-justify'>The company PT GAZALI BAWAVI was established in Indonesia in 1996. GAZALI BAWAVI specializes in Engineering and Manufacturing of Oil and Gas Tools and Mining Industry. Historically, the founders have been exposed more than 40 years to the Oil and Gas and Mining operations in the field onshore and offshore. This diversity is reflected in the company business orientation; PT GAZALI BAWAVI has an exceptional level of expertise in Customized solution for Oil and Gas Tool, Mining, Machining, our main focus at this stage</p>
                        </article>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary btn-wide mt-20" onClick={() => navigate('/about-us')}>Read More About Us</button>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

    const ContentInovationWith = () => {
        return (
            <section>
                <div className='flex flex-col gap-y-10'>
                    <div className='flex flex-col text-black'>
                        <span className='text-5xl font-semibold'> Innovation with Gazali Bawavi</span>
                        <span className='text-xl font-normal'>Empowering Your Operations with Unmatched Quality and Precision</span>
                    </div>
                    <div className='flex flex-row justify-around'>
                        <div className='grid grid-row-3 place-items-center'>
                            <img src={IconUser} />
                            <p className='text-navy font-semibold text-2xl'>Extensive Experience</p>
                            <p className='text-navy w-[316px] text-base'>Over 20 years in the industry serving oil, gas, repair and fabrication</p>
                        </div>
                        <div className='grid grid-row-3 place-items-center'>
                            <img src={IconTools} />
                            <p className='text-navy font-semibold text-2xl'>Advanced Technology</p>
                            <p className='text-navy w-[316px] text-base'>We use cutting-edge tools and equipment to ensure the best results.</p>
                        </div>
                        <div className='grid grid-row-3 place-items-center'>
                            <img src={IconDiamond} />
                            <p className='text-navy font-semibold text-2xl'>High Quality Product</p>
                            <p className='text-navy w-[316px] text-base'>Our reputation is based on our, high quality and rapid delivery, product.</p>
                        </div>
                        <div className='grid grid-row-3 place-items-center'>
                            <img src={IconCertified} />
                            <p className='text-navy font-semibold text-2xl'>Certified Expertise</p>
                            <p className='text-navy w-[316px] text-base'>Our team consists of skilled professionals certified to handle all requirements.</p>
                        </div>
                    </div>

                </div>
            </section>

        )
    }

    const Products = () => {
        const { itemsOfProduct } = useItemsOfProduct()
        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
          
            return (
                <div
                    className={className}
                    style={{
                        ...style,
                        display: "flex", // Menggunakan flexbox untuk centering
                        alignItems: "center", // Vertikal centering
                        justifyContent: "center", // Horizontal centering
                        width: "60px",
                        height: "60px",
                        //   top: "3718px", // Perhatikan: Posisi top dan left ini mungkin perlu disesuaikan tergantung layout Anda
                        //   left: "1654px",
                        // padding: "px 10px 10px 5px",
                        borderRadius: "50%",
                        opacity: "1", // Opacity diubah menjadi 1 agar terlihat
                        background: "white",
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        zIndex: 1, // memastikan button berada di depan konten slider
                        boxSizing: "border-box"
                    }}
                    onClick={onClick}
                >
                    <div style={{ transform: "translate(0%, 0%)" }}>
                        <img src={IconArrow} width={40} height={40} alt="" />
                    </div>
                </div>
            );
        }

        // function SamplePrevArrow(props) {
        //     const { className, style, onClick } = props;
        //     return (
        //         <button className={className} style={style} onClick={onClick} ><img src={IconArrow} width={200} height={200} alt="" /></button>

        //     );
        // }


        const settings = {
            // className: "center",
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            slidesPerRow: 1,
            rows: 2,
            nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
            adaptiveHeight: true,
            initialSlide: 0,
            swipeToSlide: true,
            // lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                        rows: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        rows: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1,
                    }
                }
            ]
        };
        return (
            <section>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col text-black text-start'>
                        <span className='text-5xl font-semibold'>Products</span>
                        <span className='text-xl font-normal'>Combining Advanced Technology with Proven Performance</span>
                    </div>
                    <Slider {...settings} >
                        {
                            itemsOfProduct.map((e, index) => (
                                <Card key={index} title={e.title} image={e.image} content={e.content} newProduct={e.newProduct} className={'w-96'} path={e.path}/>
                            ))
                        }
                    </Slider>
                </div>
            </section>

        )
    }
    Products.propTypes = {
        className: propTypes.string.isRequired,
        style: propTypes.string.isRequired,
        onClick: propTypes.any.isRequired,
    }

    const OurServicesArea = () => {

        const itemsOfProduct = [
            {
                title: "Oil & Gas Industries",
                content: [
                    {
                        text: "Wireline Slickline Tools String (Downhole) "
                    },
                    {
                        text: "Drilling Tools"
                    },
                    {
                        text: "Perforating Gun"
                    },
                    {
                        text: "System Fabrication & Repair"
                    },
                    {
                        text: "EPCC (Engineering Procurement Construction & Commissioning) Project "
                    },
                ],
                image: "/images/OilAndGas.svg",
                newProduct: true
            },
            {
                title: "Mining Industries",
                content: [
                    {
                        text: "Refurbish Undercarriage Dozzer & Excavator"
                    },
                    {
                        text: "Refurbish & Repair Bucket"
                    },
                    {
                        text: "Fabrication & Repair"
                    },
                    {
                        text: "Onsite Repair & Line Boring Services"
                    },
                    {
                        text: "EPCC (Engineering Procurement Construction & Commissioning) Project "
                    },
                ],
                image: "/images/MiningIndustries.svg",
            },
            {
                title: "Geotermal Industries",
                content: [
                    {
                        text: "Refurbish Main Gate Valce "
                    },
                    {
                        text: "Refurbish Electrical Motor ExD Proof"
                    },
                    {
                        text: "Inconel Cladding Services"
                    },
                ],
                image: "/images/GeotermalIndustries.svg",
            },
            {
                title: "Explosive Industries",
                content: [
                    {
                        text: "Design & Manufacturing ANFO Truck"
                    },
                    {
                        text: "Design & Manufacturing MMU Ammonium"
                    },
                    {
                        text: "AN Emulsion Storage Tank"
                    },
                    {
                        text: "Auger System"
                    },
                    {
                        text: "Underground Emulsion Storage Tank"
                    },
                    {
                        text: "Installation Site Emulsion Plant"
                    },
                ],
                image: "/images/ExplosiveIndustries.svg",
            },
            {
                title: "Agriculture Industries",
                content: [
                    {
                        text: "Design & Manufacturing Attachment For Tractor such as : Rotary Tiller, Disk Plough"
                    },

                ],
                image: "/images/AgricultureIndustries.svg",

            },
            {
                title: "Export & Import Industries",
                content: [
                    {
                        text: "Machinery & Chemical "
                    },

                ],
                image: "/images/ExportImportIndustries.svg",
            },

        ]
        return (
            <div className='flex flex-col gap-y-10'>
                <div className='flex flex-col text-black'>
                    <span className='text-5xl font-semibold'> Our Service Area</span>
                    <span className='text-xl font-normal'>Comprehensive Expertise Across Key Industry Sectors</span>
                </div>
                <div className='grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-4 sm:gap-y-4  sm:grid-cols-1 sm:grid sm:grid-rows-1 sm:m-4 md:grid-cols-2 md:m-2 lg:grid-cols-2 lg:m-1'>
                    {
                        itemsOfProduct.map((e, index) => (
                            <CardOurServiceArea key={index} title={e.title} image={e.image} content={e.content} />
                        ))
                    }
                </div>
            </div>
        )
    }

    const OurOfficesContents = () => {
        return (
            <section>
                <div className='card lg:card-side '>
                    <figure>
                        <img src={IndonesiaMap} alt="Gazalibawavi" />
                    </figure>
                    <div className="card-body p-5">
                        <article className='prose'>
                            <p className="card-title text-5xl text-black text-left mt-20">Our Offices Across Indonesia</p>
                            <p className='text-black text-sm w-[500px] mt-10 text-justify'>With a strong presence in key regions, we ensure that our services are always within your reach. From Sumatra to Sulawesi, our offices are strategically located to support your operational needs effectively and efficiently</p>
                        </article>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary btn-wide mt-20 " onClick={() => navigate('/contact-us')}>Detail Location</button>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

    return (
        <div className="flex flex-col py-10 px-8 gap-y-20">
            <ContentAboutUs />
            <ContentInovationWith />
            <OurServicesArea />
            <Products />
            <OurOfficesContents />
            <OurCustomer />
        </div>
    );
}

