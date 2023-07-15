import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content.jsx";


const App = () => {
    return (
        <div className="class" >
            <Header title='Welcome to my website'/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default App;