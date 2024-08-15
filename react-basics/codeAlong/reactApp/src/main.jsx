import { createRoot } from 'react-dom/client';

const element = (
    <>
        <h1>My First Element</h1>
        <p>I just learned React</p>
    </>
)

console.log(element);

const root = createRoot(document.getElementById('root'));

root.render(element);
