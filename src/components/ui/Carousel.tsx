import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, FC, ReactNode, useState } from "react"


type Props = {
    arrowColor: string;
    children: ReactNode;
}

export const Carousel: FC<Props> = ({ arrowColor, children }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const carouselItems = Children.toArray(children);

    return (
        <>
        <div className="mb-4 relative">
          <div className="flex justify-between items-center">
            <button onClick={() => setCurrentSlide((currentSlide - 1 + carouselItems.length) % carouselItems.length)} className="text-[#0f380f]">
              <ChevronLeft color={arrowColor} />
            </button>
            <div className="flex space-x-2">
                {carouselItems[currentSlide]}
            </div>
            <button onClick={() => setCurrentSlide((currentSlide + 1) % carouselItems.length)} className="text-[#0f380f]">
              <ChevronRight color={arrowColor} />
            </button>
          </div>
        </div>
        </>
    )

}