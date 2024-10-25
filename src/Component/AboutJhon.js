import React from 'react'

export default function AboutJhon() {
    return (
        <div>
            {/* HERO SECTION */}
            <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center relative mt-5">
                <div className="p-8 md:p-12 lg:px-16 lg:py-44 md:ms-0">
                    <div className="mx-auto max-w-xl ">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-6xl ">
                            L. John Morelli
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            L. John Morelli is an experienced wedding videographer and event filmmaker based on Long Island, NY. He has been shooting weddings, bar mitzvahs, large and small events, parties, and intimate family affairs professionally for more than 30 years.
                        </p>
                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            John is dedicated to capturing your special day with beautiful cinematography, giving you something to treasure for years to come. A consummate professional, he has accrued exclusively positive reviews on Wedding Wire and The Knot and has been featured on both sites. He will make the deeply important task of filming your wedding an easy and smooth process.
                        </p>

                        <div className="mt-4 md:mt-8 self-start">
                            <a
                                href="#"
                                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-110"
                            >
                                Book NOW!
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    src="https://ljmorelli.com/wp-content/uploads/2024/05/aboutimg-1.jpg"
                    className="h-fit w-fit object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[1000px] md:rounded-ss-[60px] md:absolute right-0 top-4 md:w-[800px]"
                />


            </section>


            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 my-20">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="bg-[#0D9488] p-8 md:p-12 lg:px-16 lg:py-24">
                            <div className="mx-auto max-w-xl text-center">
                                <h2 className="text-2xl font-bold text-white md:text-3xl">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                                </h2>

                                <p className="hidden text-white/90 sm:mt-4 sm:block">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                                    sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                                    volutpat quisque ut interdum tincidunt duis.
                                </p>

                                <div className="mt-4 md:mt-8">
                                    <a
                                        href="#"
                                        className="inline-block rounded border border-white bg-[#0D9488] text-white px-12 py-3 text-sm font-medium transition hover:bg-transparent hover:scale-110 focus:outline-none focus:ring focus:ring-yellow-400"
                                    >
                                        Get Started Today
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                            <img
                                alt=""
                                src="https://ljmorelli.com/wp-content/uploads/2024/05/14.jpg"
                                className="h-40 w-full object-cover sm:h-56 md:h-full"
                            />

                            <img
                                alt=""
                                src="https://ljmorelli.com/wp-content/uploads/2024/07/900A9879-copy-scaled.jpg"
                                className="h-40 w-full object-cover sm:h-56 md:h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
