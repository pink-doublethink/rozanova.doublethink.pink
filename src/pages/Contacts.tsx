import { VoidComponent, createEffect } from 'solid-js'
import { Contact} from "../components"

const Contacts: VoidComponent = () => {
    createEffect(() => {
        document.title = 'Contacts Page';
    });
    
    return (
        <div>
            <Contact />
        </div>
    )
}

export default Contacts