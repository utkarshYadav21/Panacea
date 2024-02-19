

const Footer=()=>{
    return(
        <footer>
            <div className="block-1 flex p-2">
                <div className='w-16'>
                    {/* Here insert your logo Image */}
                    <img src='https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9' className='w-16 text-center' />
                </div>
                <div className="desc">
                    <p className="text-white px-2">This is XYZ site for XYZ purpose and it is used for so and so causes.</p>
                </div>
            </div>
            <div className="block-2 text-white p-2">
                <ul>
                    <h5 className="font-bold py-2">About Us</h5>
                    <li>The Developers</li>
                    <li>Types</li>
                    <li>Social Life</li>
                    <li>Institute</li>
                </ul>
            </div>

            <div className="block-2 text-white p-2">
                <ul>
                    <h5 className="font-bold py-2">Address</h5>
                    <p>Indian Institute of Information Technology, Una, Himachal Pradesh</p>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;