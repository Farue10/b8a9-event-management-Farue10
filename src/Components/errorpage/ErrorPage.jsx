
import backgorundImg1 from '../../assets/error.png'
const ErrorPage = () => {
    return (
        <div className='max-w-3xl mx-auto'>
           <h2 className="text-center text-5xl text-red-700 font-medium">this page is 404!!!</h2>
           <img src={backgorundImg1}></img>
        </div>
    );
};

export default ErrorPage;