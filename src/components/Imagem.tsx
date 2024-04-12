/* eslint-disable @next/next/no-img-element */

import { Carousel } from "@material-tailwind/react";



export function Imagem() {
    return (
        <div className="items-center flex flex-1 justify-center mx-8 max-w-[420px]">
            <Carousel
                autoplay
                transition={{ duration: 2.5 }}
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-orange-500" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczM23pOBElpMu0o0IS5AFxcNF5mSGyIjyi47JcUveWz2Eg6QDph8YbchVHUN1hlAxvE4udZFFSaIxSAJ_1w3w3qGGNA2DUPuJB1RiCaJhQj631EhuIMxG4_sQyq-dkMAkoUpFpP4EmJo6IS3OzUI3xRsLw=w1298-h1730-s-no"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczO0o36Jly2idxyGTVmtJxJM_11qPjWdM4Fme1HKxR_jmuL24oyD08bRqzQCeAFMOvZTEeXg7vAk4uXMK3dkXodG-E9ANCcirQgNHxd7jWjEhubV9rn_jWwKeA746WPomReylCJ-djeOhrYc0CW6dXVvfA=w1298-h1730-s-no"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczPmHtuezYScxHnWs-iemCmMgXyTKqeyhAA1EsJrVZH2JZYklVgWinh2-Ageb8zBnN1FbM68Z63EnLpn324BVQb9z2iw3mr4JgwxIS1z0YIppt5gzuOI5wDeOlqJNgEukoa-T5EqxWH9Keww8v2UUfEp0g=w1298-h1730-s-no"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    )
}

