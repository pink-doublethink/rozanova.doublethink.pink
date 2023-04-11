import { VoidComponent, createEffect  } from 'solid-js'
import { Link } from 'solid-app-router'

const NotFound: VoidComponent = () => {
    createEffect(() => {
        document.title = 'Ошибка 404';
    });

    return (
        <div style={{ "min-height": '100vh' , display: 'flex',  "flex-direction": 'column', "align-items": 'center', "justify-content": 'center', margin: '0 4%'}}>
            <div style={{ width: "clamp(200px, 50%, 800px)", height: "clamp(200px, 42%, 900px)"}}>
            <h1 style={{ "line-height": '2.25rem', "letter-spacing": '1px', margin: 'min(6vh, 2.45rem) 0 1.1rem' }}>Ошибка 404</h1>
            <p style={{ "line-height": 'calc(1.3em + .2vw)', margin: 'min(6vh, 2.45rem) 0 1.21rem' }}>Cтраница, которую вы ищете, не найдена</p>
            <Link href="/" style={{ "line-height": 'calc(1.3em + .2vw)', margin: 'min(6vh, 2.45rem) 0 1.21rem' }}>
                Вернуться к домашний странице
            </Link>
            </div>
        </div>
    )
}

export default NotFound