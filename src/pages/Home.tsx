import { VoidComponent, createEffect } from 'solid-js'
import { Hero, LiveAuction, TopAuthors, PopulerCollections, CreatorWeek, OurPopularTeam, LatestBlog } from "../components"

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
            <CreatorWeek />
            <OurPopularTeam />
            <LatestBlog />
        </div>
    )
}

export default Home
  