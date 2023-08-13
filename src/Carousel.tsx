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
        <Carousel 
            next={ () => {/* Do stuff */} }
            prev={ () => {/* Do other stuff */} }
            indicatorIconButtonProps={{
                style: {
                    color: 'grey'       // 3
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor: 'white' // 2
                }
            }}
            indicatorContainerProps={{
                style: {
                    marginTop: '50px', // 5
                }
        
            }}
            fullHeightHover={false}
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    borderRadius: 8
                }
            }} 
        >
            {
                items.map( (item, i) => <CarouselItem key={i} name={item.name} description={item.description} /> )
            }
        </Carousel>
    )
}