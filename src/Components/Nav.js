import React, {useState ,useEffect} from 'react';
import './Nav.css';

function Nav(){
    const [handleShow, sethandleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 60){
                sethandleShow(true);
            }else{
                sethandleShow(false)
            }
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);

    return (
        <div className={`nav ${handleShow && "make-black"}`}>
            <img className="netflix-logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
        </div>
    )
}

export default Nav;