import React from 'react'

function Box({ title, videoId }) {
    return (
        <>
          <div className=' w-[30%] max-md:w-full'>
            <div className="relative w-full h-52 bg-gray-200 rounded-3xl overflow-hidden my-5">
                <iframe
                    className="absolute inset-0 w-full h-full object-cover"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&showinfo=0&rel=0`}

                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={title}
                ></iframe>
               
            </div>
            <h2 className="text-xl font-bold text-submainBlue text-center">{title}</h2>
          </div>
            



        </>
    )
}

export default Box