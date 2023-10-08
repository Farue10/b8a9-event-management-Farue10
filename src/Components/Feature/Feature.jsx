import feature1 from '../../assets/F.jpg'
import feature2 from '../../assets/featur1.png'

const Feature = () => {
    return (
        <div className='m-10'>

        
            <h2 className="text-center font-bold text-3xl m-4">Events Feature </h2>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
           <div className='' >
                <img className='w-full' src={feature1} data-aos="fade-up"  data-aos-duration="3000"></img>
                <h2 className='text-3xl m-2'>Feature Section:</h2>
                <ul>
                    <li className='text-xl font-medium'>1. Headlining Acts:
                    <span className='text-lg font-normal'>
                    Prepare to be dazzled by an extraordinary lineup of headlining artists and performers who will take the stage and deliver unforgettable performances.</span> </li>

                    <li className='text-xl font-medium'>2. Interactive Experiences:
                    <span className='text-lg font-normal'>
                    Immerse yourself in interactive zones and experiences, from photo booths to VR simulations, ensuring youre part of the action.</span> </li>

                    <li className='text-xl font-medium'>3. Culinary Delights:
                    <span className='text-lg font-normal'>
                    Savor a diverse array of gourmet food and beverages from local vendors, catering to all tastes and preferences.</span> </li>

                    <li className='text-xl font-medium'>4. Live Art Installations:
                    <span className='text-lg font-normal'>
                    Witness the creation of stunning art pieces in real-time by talented artists, adding an artistic touch to the event.</span> </li>

                    <li className='text-xl font-medium'>5. VIP Exclusives:
                    <span className='text-lg font-normal'>
                    Elevate your experience with VIP packages offering premium seating, exclusive access, and special amenities.</span> </li>

                    <li className='text-xl font-medium'>6. Family-Friendly Fun:
                    <span className='text-lg font-normal'>
                    Bring the whole family, as we have a dedicated kids zone with activities and entertainment suitable for all ages.</span> </li>

                    <li className='text-xl font-medium'>7. Thematic Decor:
                    <span className='text-lg font-normal'>
                    Be transported to a different world with our meticulously designed thematic decor that sets the mood and enhances the atmosphere.</span> </li>

                </ul>
            </div>
            <div >
                <img className='w-full' src={feature2} data-aos="fade-up"  data-aos-duration="3000"></img>
                <h2 className='text-3xl m-2'>Feature Section:</h2>
                <ul>
                    <li className='text-xl font-medium'>1. Headlining Acts:
                    <span className='text-lg font-normal'>
                    Prepare to be dazzled by an extraordinary lineup of headlining artists and performers who will take the stage and deliver unforgettable performances.</span> </li>

                    <li className='text-xl font-medium'>2. Interactive Experiences:
                    <span className='text-lg font-normal'>
                    Immerse yourself in interactive zones and experiences, from photo booths to VR simulations, ensuring youre part of the action.</span> </li>

                    <li className='text-xl font-medium'>3. Culinary Delights:
                    <span className='text-lg font-normal'>
                    Savor a diverse array of gourmet food and beverages from local vendors, catering to all tastes and preferences.</span> </li>

                    <li className='text-xl font-medium'>4. Live Art Installations:
                    <span className='text-lg font-normal'>
                    Witness the creation of stunning art pieces in real-time by talented artists, adding an artistic touch to the event.</span> </li>

                    <li className='text-xl font-medium'>5. VIP Exclusives:
                    <span className='text-lg font-normal'>
                    Elevate your experience with VIP packages offering premium seating, exclusive access, and special amenities.</span> </li>

                    <li className='text-xl font-medium'>6. Family-Friendly Fun:
                    <span className='text-lg font-normal'>
                    Bring the whole family, as we have a dedicated kids zone with activities and entertainment suitable for all ages.</span> </li>

                    <li className='text-xl font-medium'>7. Thematic Decor:
                    <span className='text-lg font-normal'>
                    Be transported to a different world with our meticulously designed thematic decor that sets the mood and enhances the atmosphere.</span> </li>

                </ul>
                
            </div>
           </div>
    
            
        </div>
    );
};

export default Feature;