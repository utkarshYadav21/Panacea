import logo2 from "../../images/logo2.png"

const Footer=()=>{
    return(
        <footer>
            <div className="block-1 flex p-2">
                <div className='w-[25%]'>
                    <img src={logo2} className=" h-fit" />
                </div>
                <div className="desc">
                    <p className="text-white px-2">Now, Entrepreneurs can bring their ideas to life swiftly and cost-effectively, without the need for extensive technical knowledge.</p>
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