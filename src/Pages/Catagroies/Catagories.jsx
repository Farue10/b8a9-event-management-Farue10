import Navbar from "../../Components/Navbar/Navbar";
import backgroundImg1 from '../../assets/F.jpg'
import backgroundImg2 from '../../assets/img1.jpg'
import backgroundImg3 from '../../assets/featur1.png'
import backgroundImg4 from '../../assets/img4.png'
import backgroundImg5 from '../../assets/img5.png'
import backgroundImg6 from '../../assets/img6.png'



const Catagories = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-5xl text-center font-bold m-6">Upcoming Event</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto">
                <div className="col-span-2">
                   <div className="m-4">
                   
                   <img src={backgroundImg1}></img>
                   <p className="text-justify text-lg">An extraordinary concatenation of serendipitous circumstances culminates in a supercalifragilisticexpialidocious event that promises to captivate and edify attendees. This quintessential extravaganza amalgamates an eclectic mélange of entertainment forms, ranging from exquisitely orchestrated symphonic compositions to avant-garde theatrical spectacles, all interwoven into a phantasmagorical tapestry of visual and auditory delights. With an effervescent ambiance that imbues euphoria, this event endeavors to transcend the mundane, providing an unprecedented milieu for revelry and intellectual engagement. Attendees are invited to embark on an odyssey of sensory stimulation, where the ineffable becomes palpable and the ordinary transforms into the extraordinary.</p>
                 
                   </div>

                   <div className="m-4">
                   <img src={backgroundImg2}></img>
                   <p className="text-justify text-lg">An extraordinary concatenation of serendipitous circumstances culminates in a supercalifragilisticexpialidocious event that promises to captivate and edify attendees. This quintessential extravaganza amalgamates an eclectic mélange of entertainment forms, ranging from exquisitely orchestrated symphonic compositions to avant-garde theatrical spectacles, all interwoven into a phantasmagorical tapestry of visual and auditory delights. With an effervescent ambiance that imbues euphoria, this event endeavors to transcend the mundane, providing an unprecedented milieu for revelry and intellectual engagement. Attendees are invited to embark on an odyssey of sensory stimulation, where the ineffable becomes palpable and the ordinary transforms into the extraordinary.</p>
                   </div>

                   <div className="m-4">
                   <img src={backgroundImg3}></img>
                   <p className="text-justify text-lg">An extraordinary concatenation of serendipitous circumstances culminates in a supercalifragilisticexpialidocious event that promises to captivate and edify attendees. This quintessential extravaganza amalgamates an eclectic mélange of entertainment forms, ranging from exquisitely orchestrated symphonic compositions to avant-garde theatrical spectacles, all interwoven into a phantasmagorical tapestry of visual and auditory delights. With an effervescent ambiance that imbues euphoria, this event endeavors to transcend the mundane, providing an unprecedented milieu for revelry and intellectual engagement. Attendees are invited to embark on an odyssey of sensory stimulation, where the ineffable becomes palpable and the ordinary transforms into the extraordinary.</p>
                   </div>
                   
                  
                </div>

                <div>
                  
                   <div className="m-4">
                    <img className="w-72" src={backgroundImg5}></img>
                   <p className="text-justify text-lg">Events that celebrate the traditions, customs, and heritage of a particular culture, such as Chinese New Year celebrations, Diwali festivals, or Mardi Gras.</p>
                   </div>

                   <div className="m-4">
                    <img className="w-72" src={backgroundImg4}></img>
                   <p className="text-justify text-lg">Multi-day music festivals featuring multiple stages, camping, and a variety of music genres.Culinary events where attendees can sample a variety of foods, wines, and beverages.</p>
                   </div>

                   <div className="m-4">
                    <img className="w-72" src={backgroundImg6}></img>
                   <p className="text-justify text-lg">Multi-day music festivals featuring multiple stages, camping, and a variety of music genres.Culinary events where attendees can sample a variety of foods, wines, and beverages. Authors reading their works, book launches, and literary events where attendees can immerse themselves in literature.Intimate performances featuring a combination of music, comedy, and variety acts.</p>
                   </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Catagories;