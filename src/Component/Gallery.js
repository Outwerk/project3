import React from 'react'

export default function Gallery() {
    return (
        <div className='my-32'>
            <h1 className='my-5 text-3xl ms-[3vw] font-bold'>Capturing Moments, Creating Memories.</h1>
            <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 mx-4 md:mx-16">
                <div>
                    <img src="https://ljmorelli.com/wp-content/uploads/2024/07/4.-IMG_0190-scaled.jpg" alt="" loading="lazy" />
                </div>
                <div class="col-start-3">
                    <img src="https://ljmorelli.com/wp-content/uploads/2024/07/IMG_7292-scaled.jpg" alt="" loading="lazy" />
                </div>
                <div>
                    <img src="https://ljmorelli.com/wp-content/uploads/2024/07/2.-CAPIZZI-KOLAKOWSK.jpg" alt="" loading="lazy" />
                </div>
                <div>
                    <img src="https://ljmorelli.com/wp-content/uploads/2024/07/IMG_9493_PENZI-scaled.jpg" alt="" loading="lazy" />
                </div>
                <div class="row-start-1 col-start-2 col-span-2">
                    <img src="https://ljmorelli.com/wp-content/uploads/2024/07/IMG_9099-scaled.jpg" alt="" loading="lazy" />
                </div>
            </div>
        </div>
    )
}
