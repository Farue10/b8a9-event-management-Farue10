import Navbar from "../../Components/Navbar/Navbar";
import backgroundImg1 from '../../assets/movietheme.png'
import backgroundImg2 from '../../assets/musictheme1.png'
import backgroundImg3 from '../../assets/sporttheme.png'
import backgroundImg4 from '../../assets/birthdaytheme.png'
import backgroundImg5 from '../../assets/comodytheme.png'
import backgroundImg6 from '../../assets/dancetheme.png'

const Feature = () => {
    return (
        <div>
            <Navbar></Navbar>
         <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <div>
                <img className="w-96 h-56" src={backgroundImg1}></img>
                <p className="text-2xl text-center font-medium">Movie Event Themes</p>
                <p className="text-center text-xl ">Price:$2000</p>
                <p className="text-2xl ">Facility:-</p>
                <p className="text-xl text-justify">1.Cineplex Elysium: Where Cinematic Dreams Come to Life:<br></br>
                    <small>Nestled in the heart of the city, Cineplex Elysium stands as a beacon of cinematic excellence, offering a haven for movie aficionados and a sanctuary for the silver screen. This state-of-the-art movie event facility redefines the art of moviegoing, transcending the ordinary to create an extraordinary experience for all who enter.</small>
                </p>

                <p className="text-xl text-justify">2.A Cinematic Oasis:<br></br>
                    <small>Cineplex Elysium is a sprawling cinematic oasis, boasting a modern architectural marvel that seamlessly blends elegance and innovation. With its sleek, futuristic design, the facility is a testament to the evolution of cinema. The moment you step inside, youll be transported to a realm where movies come to life in the most immersive way imaginable.</small>
                </p>


            </div>
            <div className="">
                <img  className="w-96 h-56" src={backgroundImg2}></img>
                <p className="text-2xl text-center font-medium">Music Event Themes</p>
                <p className="text-center text-xl ">Price:$6000</p>
                <p className="text-2xl ">Facility:-</p>

                <p className="text-xl text-justify">1.Cutting-Edge Acoustics:<br></br>
                    <small>Our commitment to sonic excellence is evident in the cutting-edge acoustics deployed throughout the facility. Harmony Haven is equipped with world-class sound systems, acoustically treated performance spaces, and an intimate setting that ensures every note and melody resonates with precision and clarity.</small>
                </p>

                <p className="text-xl text-justify">2.Versatile Performance Venues:<br></br>
                    <small >From intimate chambers for chamber music to grand stages for orchestral performances, Harmony Haven offers a range of versatile performance venues. Each space is meticulously designed to provide an immersive experience, whether youre enjoying a solo recital, a jazz ensemble, or a symphony orchestra.</small>
                </p>
            </div>
            <div>
            <img className="w-96 h-56" src={backgroundImg3}></img>
            <p className="text-2xl text-center font-medium">sport Event Themes</p>
            <p className="text-center text-xl ">Price:$6700</p>
            <p className="text-2xl ">Facility:-</p>
            <p className="text-xl text-justify">1.A Sporting Oasis:<br></br>
                    <small>Sports Arena Grandeur is a sprawling sporting oasis, featuring modern architectural design that seamlessly blends form and function. As you approach, youll be struck by the grandeur of the venue, an homage to the dedication and passion of athletes from around the world.</small>
                </p>

            <p className="text-xl text-justify">2.A Sporting Haven:<br></br>
                    <small>Sports Arena Grandeur isnt just an arena; its a sporting haven, a place where champions are crowned, records are shattered, and lifelong memories are forged in the crucible of competition. Whether youre an athlete, a die-hard fan, or a casual observer, Sports Arena Grandeur welcomes you to a world where the pursuit of excellence is celebrated and the spirit of sportsmanship thrives.</small>
                </p>
            </div>

            <div>
                <img className="w-96 h-56" src={backgroundImg4}></img>
                <p className="text-2xl text-center font-medium">Birhtday Event Themes</p>
                <p className="text-center text-xl ">Price:$3200</p>
                <p className="text-2xl ">Facility:</p>
                <p className="text-xl text-justify">1.A Celebration of Life:<br></br>
                    <small>More than just a party, Birthday Bliss Extravaganza is a celebration of life itself. Its a time to cherish the journey youve taken, the milestones youve achieved, and the people who have been a part of your story. Its a day to be surrounded by loved ones, to share laughter, and to revel in the sheer joy of existence.</small>
                </p>
                <p className="text-xl text-justify">2.Culinary Delights:<br></br>
                    <small>Indulge your taste buds with a culinary experience that tantalizes the senses. Birthday Bliss Extravaganza offers a delectable menu curated by expert chefs, featuring a selection of appetizers, gourmet dishes, and a lavish dessert spread. Customized cake designs add a sweet touch to the festivities.
                    </small>
                </p>

            </div>
            <div className="">
                <img  className="w-96 h-56" src={backgroundImg5}></img>
                <p className="text-2xl text-center font-medium">Comdy Event Themes</p>
                <p className="text-center text-xl ">Price:$5600</p>
                <p className="text-2xl ">Facility:</p>
                <p className="text-xl text-justify">1.A Comdy Haven:<br></br>
                    <small>Comdy Arena Grandeur isnt just an arena; its a sporting haven, a place where champions are crowned, records are shattered, and lifelong memories are forged in the crucible of competition. Whether youre an athlete, a die-hard fan, or a casual observer, Sports Arena Grandeur welcomes you to a world where the pursuit of excellence is celebrated and the spirit of sportsmanship thrives.</small>
                </p>

                <p className="text-xl text-justify">2.Comdy Haven:<br></br>
                    <small>Comdy Arena Grandeur isnt just an arena; its a sporting haven, a place where champions are crowned, records are shattered, and lifelong memories are forged in the crucible of competition. Whether youre an athlete, a die-hard fan, or a casual observer, Sports Arena Grandeur welcomes you to a world where the pursuit of excellence is celebrated and the spirit of sportsmanship thrives.</small>
                </p>
            </div>
            <div>
            <img className="w-96 h-56" src={backgroundImg6}></img>
            <p className="text-2xl text-center font-medium">Dance Event Themes</p>
            <p className="text-center text-xl ">Price:$7800</p>
            <p className="text-2xl ">Facility:</p>
            <p className="text-xl text-justify">1.Dance Diversity:<br></br>
                    <small>From classical ballet to contemporary choreography, hip-hop grooves to traditional folk dances,Rhythmic Reverie Dance Spectacular showcases a diverse tapestry of dance styles. Each performance is a testament to the dancers  dedication and skill, taking the audience on a journey through the rich and vibrant world of dance.</small>
                </p>

                <p className="text-xl text-justify">2.Audience Engagement:<br></br>
                    <small>Rhythmic Reverie Dance Spectacular encourages audience engagement through workshops, meet-and-greets with the dancers, and opportunities to learn more about the art of dance. Its a chance for dance enthusiasts and novices alike to immerse themselves in the world of dance.Join us for an unforgettable evening of dance that will ignite your imagination, touch your heart, and leave you with a newfound appreciation for the beauty and power of movement. Rhythmic Reverie Dance Spectacular invites you to witness the magic of dance in all its glory</small>
                </p>
            </div>
         </div>
        </div>
    );
};

export default Feature;