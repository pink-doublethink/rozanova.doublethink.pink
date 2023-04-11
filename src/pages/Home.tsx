import { VoidComponent, createEffect } from 'solid-js'
import { Hero, PictureGallery, WhatWasFamous, WhySheStillRemembered} from "../components"

const Home: VoidComponent = () => {
    createEffect(() => {
        document.title = 'Home Page';
    });

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
  