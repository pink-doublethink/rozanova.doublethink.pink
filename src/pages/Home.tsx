import { VoidComponent } from 'solid-js'
import { Hero, PictureGallery, WhatWasFamous, WhySheStillRemembered} from "../components"

const Home: VoidComponent = () => {
    return (
        <div>
            <Hero />
            <PictureGallery />
            <WhatWasFamous />
            <WhySheStillRemembered />
        </div>
    )
}

export default Home
  