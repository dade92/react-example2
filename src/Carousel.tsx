import Carousel from 'react-material-ui-carousel'
import { CarouselItem } from './CarouselItem'

export const MyCarousel: React.FC = () => {

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <CarouselItem key={i} name={item.name} description={item.description} /> )
            }
        </Carousel>
    )
}