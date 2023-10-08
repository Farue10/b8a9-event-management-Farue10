import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";
import Feature from "../../Components/Feature/Feature";



const Home = () => {
    const data = useLoaderData([])
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
           <div  className='grid grid-cols-1 md:grid-cols-3'>
        
           {
            data.map(cards =>  <Card key={cards.id} cards={cards}> </Card> )
           }
  
         
           </div>
           <About></About>
           <Feature></Feature>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;