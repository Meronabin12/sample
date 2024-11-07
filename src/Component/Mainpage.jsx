import './Mainpage.css';

export default function Mainpage() {
    return (
        <div>
            <div className='main'>

                <div className='logo' > <a href="#">Logo</a></div>

                <ul className='navitem'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>

            </div>
            <div className="sec">
                <div className="image"></div>
                <div className="center">
                    <div className="title">Create Amazing Website</div>
                    <div className="sub_title">Wallpeper

                    </div>
                    <div className="btns">
                        <button>Learn More</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

    )
}