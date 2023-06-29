import { VoidComponent, createEffect } from 'solid-js'
import { Hero, LiveAuction, TopAuthors, PopulerCollections} from "../components"

const Home: VoidComponent = () => {
    createEffect(() => {
        document.title = 'Home Page';
    });

    return (
        <div>
            <Hero />
            <LiveAuction />
            <TopAuthors />
            <PopulerCollections />
        </div>
    )
}

export default Home
  