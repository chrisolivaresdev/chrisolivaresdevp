import dynamic from "next/dynamic"

export const Carousel = dynamic(() => import("./carousel").then((m) => m.Carousel), { ssr: false })
export const CarouselContent = dynamic(() => import("./carousel").then((m) => m.CarouselContent), { ssr: false })
export const CarouselItem = dynamic(() => import("./carousel").then((m) => m.CarouselItem), { ssr: false })
export const CarouselPrevious = dynamic(() => import("./carousel").then((m) => m.CarouselPrevious), { ssr: false })
export const CarouselNext = dynamic(() => import("./carousel").then((m) => m.CarouselNext), { ssr: false })
