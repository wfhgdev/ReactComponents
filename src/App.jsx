import GreetingMsg from "./components/greeting/Greeting";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Testimony from "./components/testimony/Testimony";

function App() {
    return (
       <>
            <Header />
            <h1>Mi fisrt app on React by William Hernández</h1>
            <GreetingMsg />
            <Testimony
            name='Emma Bostian'
            country='Sweden'
            image='Emma'
            position='Software Engineer'
            company='Spotify'
            testimonyText="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
            />
            <Testimony
            name='Shawn Wang'
            country='Singapore'
            image='Shawn'
            position='Software Engineer'
            company='Amazon'
            testimonyText="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
            />
            <Testimony
            name='Sarah'
            country='Nigeria'
            image='Sarah'
            position='Software Engineer'
            company='ChatDesk'
            testimonyText="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
            />
            <Footer />
        </>
    )
}

export default App;