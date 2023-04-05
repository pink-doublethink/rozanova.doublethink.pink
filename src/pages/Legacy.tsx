import { VoidComponent } from 'solid-js'
import { CulturalHeritage, PlacesMemory, BooksBiography } from "../components"

const Legacy: VoidComponent = () => {
    return (
        <div>
            <CulturalHeritage />
            <PlacesMemory />
            <BooksBiography />
        </div>
    )
}

export default Legacy