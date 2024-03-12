import image from './Image.png'
import Iframe from 'react-iframe';

const About = () =>{
    return(
        <div className="container">
            <div className="about h-fit min-h-screen flex justify-center">
                <div className='basis-[60%]'>
                    <h1 className=" text-white  text-7xl font-extrabold text-left pt-[10%] pb-5">About <span className="decor">Panacea</span></h1>
                    <div className="text-white text-justify py-4">
                        <p className='text-2xl'> Welcome to our innovative platform designed to revolutionize the way startups initiate their journey. Say goodbye to the complexities and delays associated with web and Android app development. Our streamlined solution offers easy category selection and tailored UI designs, making the startup initiation process smoother than ever before. With our platform, entrepreneurs can bring their ideas to life swiftly and cost-effectively, without the need for extensive technical knowledge. Join us in shaping the future of startup creation and innovation.</p>
                    </div>
                    <div className=''>
                        <h4 className='font-bold text-white pt-6 pb-4 text-3xl'>Locate Us At</h4>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5502511507657!2d76.18734297531064!3d31.481555874231756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb5aa39796f9%3A0x3d5e714694324768!2sIIIT%20Una%2C%20Academic%20Block!5e0!3m2!1sen!2sin!4v1706980317119!5m2!1sen!2sin" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mb-10'/>
                    </div>
                </div>
                <div className='basis-[40%] justify-center '>
                    <img src={image} className='w-40% min-w-[220px] p-[10%]' />
                </div>
            </div>
            <hr style={{color:"1px solid gray"}} className="mt-20 mb-10"></hr>
        </div>
    );
}

export default About