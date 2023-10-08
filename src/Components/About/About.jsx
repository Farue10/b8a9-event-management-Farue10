import about1 from '../../assets/about1.png';
import about2 from '../../assets/about2.png';
import about3 from '../../assets/about3.png';

const About = () => {
    return (
        <div className=' m-12' > 
            <h2 className='text-center text-3xl font-bold m-4'>About Section</h2>
            <p className='text-lg m-2 font-medium'>Every exciting event, taking place on Date at Location, promises a fantastic blend of mention the type of entertainment, music, comedy, theater that will keep you on the edge of your seat. Featuring highlight any notable performers or acts, Event Name guarantees a night filled with laughter, music, and awe-inspiring moments. </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          
                <div  data-aos="fade-up"  data-aos-duration="3000">
                    <img className='w-full' src={about1}></img>
                    <p className='text-lg text-justify'>A music event description is essential for providing attendees with information about a musical gathering, whether its a concert, music festival, live performance, or any music-related event.Clearly state the date and time of the event, including the day of the week, as well as the start and end times.Provide the complete address of the venue where the music event will take place, along with any relevant directions or parking information.</p>
                </div>

                <div  data-aos="fade-up"  data-aos-duration="3000">
                  <img className='w-full' src={about2}></img>
                  <p className='text-lg text-justify'>A music event description is essential for providing attendees with information about a musical gathering, whether its a concert, music festival, live performance, or any music-related event.Clearly state the date and time of the event, including the day of the week, as well as the start and end times.Provide the complete address of the venue where the music event will take place, along with any relevant directions or parking information.</p>
                </div>

                <div data-aos="fade-up"  data-aos-duration="3000">
                  <img className='w-full' src={about3}></img>
                  <p className='text-lg text-justify'>A music event description is essential for providing attendees with information about a musical gathering, whether its a concert, music festival, live performance, or any music-related event.Clearly state the date and time of the event, including the day of the week, as well as the start and end times.Provide the complete address of the venue where the music event will take place, along with any relevant directions or parking information.</p>
                </div>
            </div>
          
        </div>
    );
};

export default About;