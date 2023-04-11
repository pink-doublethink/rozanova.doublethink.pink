import { VoidComponent, createEffect } from 'solid-js'
import { CulturalHeritage, PlacesMemory, BooksBiography } from "../components"

const Legacy: VoidComponent = () => {
    createEffect(() => {
        document.title = 'Lagacy Page';
    });

    return (
        <div>
            <CulturalHeritage />
            <PlacesMemory />
            <BooksBiography />
        </div>
    )
}

export default Legacy