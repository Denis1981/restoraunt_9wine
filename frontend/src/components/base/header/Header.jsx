import "./index.css";
import { logo } from ".././././../../assets";
import { header } from ".././././../../constants";


const Header = () => {
    return (
        <>
            <section id="header-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-4">
                             {header.map((textHeader) => (
                                <div className="addr">
                                   <address>
                                       <p>{textHeader.content}</p>
                                       <p><a href={`tel: ${textHeader.tel}`}>{textHeader.tel}</a></p>
                                   </address>
                                </div>
                             ))}
                        </div>
                        <div className="col-xxl-4">
                             <img src={logo} alt="" className="logo" />
                        </div>
                        <div className="col-xxl-2">
                           social
                        </div>
                        <div className="col-xxl-2">
                           menu
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;