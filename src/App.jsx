import GreetingMsg from "./components/Greeting";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Testimony from "./components/Testimony";

function App() {
    return (
       <>
            <Header />
            <h1>Mi fisrt app on React by William Hernández</h1>
            <GreetingMsg />
            <Testimony
            name='Emma Bostian'
            country='Suecia'
            image='Emma'
            position='Ingeniera de Software'
            company='Spotify'
            testimonyText="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
            />
            <Testimony
            name    ='Shawn Wang'
            country='Singapur'
            image='Shawn'
            position='Ingeniero de Software'
            company='Amazon'
            testimonyText="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
            />
            <Testimony
            name    ='Sarah'
            country='Nigeria'
            image='Sarah'
            position='Ingeniera de Software'
            company='ChatDesk'
            testimonyText="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
            />
            <Footer />
        </>
    )
}

export default App;