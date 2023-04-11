import { VoidComponent, createEffect} from 'solid-js'
import { BecomingArtist, CreativeDissolution, LifeThroughArt} from "../components"

const Biography: VoidComponent = () => {
    createEffect(() => {
        document.title = 'Bio Page';
    });

    return (
        <>
        
            <BecomingArtist />
            <CreativeDissolution />
            <LifeThroughArt />
        </>          
    )
}

export default Biography
  