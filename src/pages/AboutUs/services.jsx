import OurCustomer from "../../components/OurCustomer"


export default function Services() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = '/Path/Compro.pdf';
        link.download = 'Company_Profile_Gazalibawavigroup.pdf';
        link.click();
    };


    const FirstSection = () => {
        return (
            <section>
                <div className="flex flex-row" >
                    <div className="grid grid-cols-12 gap-4">
                        {/* Gambar utama */}
                        <div className="col-span-8">
                            <img
                                className="w-full max-h-[505px] object-cover rounded-lg"
                                src="/images/AboutUs1.svg"
                                alt="Gazali Bawavi Group"
                            />
                        </div>

                        {/* Kolom gambar */}
                        <div className="col-span-4 grid grid-rows-2">
                            {/* Gambar 2 */}
                            <div>
                                <img
                                    className="w-full h-auto object-cover rounded-lg"
                                    src="/images/AboutUs2.svg"
                                    alt="Gazali bawavi group"
                                />
                            </div>

                            {/* Gambar 3 */}
                            <div>
                                <img
                                    className="w-full h-auto object-cover rounded-lg"
                                    src="/images/AboutUs3.svg"
                                    alt="Gazali Bawavi Group"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start w-full lg:w-[593px] gap-y-5 h-auto px-4">
                        <div className="flex flex-col items-start gap-3 w-full lg:w-[593px] h-auto">
                            <h1 className="text-[32px] sm:text-[36px] lg:text-[44px] font-semibold leading-[40px] sm:leading-[50px] lg:leading-[60px] text-black">
                                PT Gazali Bawali
                            </h1>
                            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[22px] sm:leading-[26px] lg:leading-[28px] text-justify text-black">
                                Established in Indonesia, 1996. We specialize in Engineering and
                                Manufacturing of Oil and Gas Tools and Mining Industry. The founders
                                have been exposed more than 40 years to the Oil and Gas and Mining
                                operations in the field onshore and offshore. This diversity is
                                reflected in the company’s business orientation.
                            </p>

                            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[22px] sm:leading-[26px] lg:leading-[28px] text-justify text-black">
                                The company is
                                packed with an excellent team of engineers and technicians for R&D,
                                engineering and design for new products, and daily production
                                control. As well all our engineers have more than 11 years in the
                                design of equipment for Oil and Gas Industry, which enables us to
                                ensure reliable quality and delivery on-time confidently. We provide
                                multi-disciplined engineering expertise from our team as Structural,
                                Mechanical, Electrical, and Instrumentation.
                            </p>
                        </div>
                        <button className="flex flex-row justify-center items-center gap-2 px-6 border border-[#243C7A] rounded-lg w-full max-w-[320px] h-[52px]" onClick={handleDownload}>
                            <img src="/icon/IconDownload.svg" />
                            <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[30px] text-[#243C7A]">
                                Download Pitch Deck
                            </span>
                        </button>
                    </div>
                </div>

            </section >





        )
    }

    const SecondSection = () => {
        return (
            <section>
                <div className="flex flex-col">
                    <div className="mb-12 text-left w-80">
                        <h1 className="text-[44px] font-semibold text-black leading-[60px]">
                            Milestones Gazali Bawavi
                        </h1>
                        <p className="text-[20px] font-normal text-black leading-[28px] mt-4">
                            Every Milestone Represents Our Dedication to Growth and Innovation
                        </p>
                    </div>
                    <div className="self-end">
                        <img src="/images/Timeline.svg" width={900} height={300} />
                    </div>
                </div>

            </section>

        )

    }

    const ThirdSection = () => {
        return (
            <section>
                <div className="flex flex-row gap-3">
                    <div className="border rounded-lg bg-[#5EB5CE2B]">
                        <div className="grid grid-rows-3 place-items-center">
                            <div className="cols-span-4 rows-span-2">
                                <img src="/icon/light-bulb.svg" />
                            </div>
                            <div className="">
                                <p className="text-2xl font-semibold text-black">Vision</p>
                            </div>
                            <div className="rows-span-4 cols-span-3">
                                <p className="text-sm font-semibold text-black">Deliver high quality products and services to our customer . We nurture a performance culture and develop our people. We innovate to grow and diversify our business </p>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-lg bg-[#5EB5CE2B]">
                        <div className="grid grid-rows-3 place-items-center">
                            <div className="cols-span-4 rows-span-2">
                                <img src="/icon/light-bulb.svg" />
                            </div>
                            <div className="">
                                <p className="text-2xl font-semibold text-black">Vision</p>
                            </div>
                            <div className="rows-span-4 cols-span-3">
                                <p className="text-sm font-semibold text-black">Deliver high quality products and services to our customer . We nurture a performance culture and develop our people. We innovate to grow and diversify our business </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        )
    }

    const FourthSection = () => {
        const certificates = [
            "/images/Certification1.svg",
            "/images/Certification2.svg",
            "/images/Certification3.svg",
            "/images/Certification4.svg",
        ]
        return (
            <div className="flex flex-col gap-y-3">
                <span className="text-4xl font-bold text-black text-left">Certification</span>
                <div className="flex flex-row gap-2">
                    {
                        certificates.map((e, index) => (
                            <div key={index} className="w-full h-auto object-contain p-1">
                                <img src={e} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    const FifthSection = () => {
        return (
            <div className="card card-side">
                <div className="object-content w-full h-auto">
                    <img src="/images/GazaliEmployer.svg" />
                </div>
                <div className="card-body text-black w-full">
                    <p className="card-title text-4xl font-bold whitespace-normal text-left">We are proud to achieve beyond of our customer expectation</p>
                    <p className="text-xl text-justify">This MMU was seriously damage at her rear after incident at mine site. We only have six weeks to make her fully operational including to replace hydraulic components and replace damaged structure with stainless steel. We manage to complete all within four weeks and beyond our customer expectation, quality and delivery time.</p>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col  m-12 px-8 gap-y-20">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <OurCustomer />
        </div>


    );
}
