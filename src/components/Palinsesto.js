import React, {Component} from 'react';
import Daily from "./Daily";
import Lun from "./Palinsesto/Lun";
import Mar from "./Palinsesto/Mar";
import Mer from "./Palinsesto/Mer";
import Giov from "./Palinsesto/Giov";
import Ven from "./Palinsesto/Ven";
import Sab from "./Palinsesto/Sab";
import Dom from "./Palinsesto/Dom";

class Palinsesto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "#388FA5",
            lun: "#000000",
            mar: "#000000",
            mer: "#000000",
            gio: "#000000",
            ven: "#000000",
            sab: "#000000",
            dom: "#000000",
            active: "lun"
        }
    }

    render() {
        return (
            <div className="site-section" style={{backgroundColor: "#333333"}}>

                <div className="container">

                    <div className="row justify-content-center">
                        <div className="site-section-heading text-center mb-5 w-border col-md-12 mx-auto"
                             data-aos="fade-up">
                            <h2 className="mb-5" style={{color: "#FFFFFF"}}>Programma Radio Settimanale</h2>
                        </div>


                        <div className="col-md-2" style={{backgroundColor: "#333333", color: "#FFFFFF", paddingTop: "20px"}}>

                            <h3 onMouseEnter={() => this.setState({lun: this.state.selected})}
                                onMouseLeave={() => this.setState({lun: "#000000"}) }
                                onClick={() => this.setState({active: "lun"})}
                                className="mb-5" style={{borderBottomColor: this.state.lun ,
                                borderBottom: this.state.lun === "#388FA5" ? ("2px #388FA5 solid") : (""),
                                marginRight: "5px"}}>Lunedì
                            </h3>

                            <h3 onMouseEnter={() => this.setState({mar: this.state.selected})}
                                onMouseLeave={() => this.setState({mar: "#000000"}) }
                                onClick={() => this.setState({active: "mar"})}
                                className="mb-5" style={{borderBottomColor: this.state.lun ,
                                borderBottom: this.state.mar === "#388FA5" ? ("2px #388FA5 solid") : (""),
                                marginRight: "5px"}}>Martedì
                            </h3>

                            <h3 onMouseEnter={() => this.setState({mer: this.state.selected})}
                                onMouseLeave={() => this.setState({mer: "#000000"}) }
                                onClick={() => this.setState({active: "mer"})}
                                className="mb-5" style={{borderBottomColor: this.state.lun ,
                                borderBottom: this.state.mer === "#388FA5" ? ("2px #388FA5 solid") : (""),
                                marginRight: "5px"}}>Mercoledì
                            </h3>

                            <h3 onMouseEnter={() => this.setState({gio: this.state.selected})}
                                onMouseLeave={() => this.setState({gio: "#000000"}) }
                                onClick={() => this.setState({active: "gio"})}
                                className="mb-5" style={{borderBottomColor: this.state.lun ,
                                borderBottom: this.state.gio === "#388FA5" ? ("2px #388FA5 solid") : (""),
                                marginRight: "5px"}}>Giovedì
                            </h3>

                            <h3 onMouseEnter={() => this.setState({ven: this.state.selected})}
                                onMouseLeave={() => this.setState({ven: "#000000"}) }
                                onClick={() => this.setState({active: "ven"})}
                                className="mb-5" style={{borderBottomColor: this.state.lun ,
                                borderBottom: this.state.ven === "#388FA5" ? ("2px #388FA5 solid") : (""),
                                marginRight: "5px"}}>Venerdì
                            </h3>

                            <h3 onMouseEnter={() => this.setState({sab: this.state.selected})}
                                onMouseLeave={() => this.setState({sab: "#000000"}) }
                                onClick={() => this.setState({active: "sab"})}
                                className="mb-5" style={{borderBottomColor: this.state.lun ,
                                borderBottom: this.state.sab === "#388FA5" ? ("2px #388FA5 solid") : (""),
                                marginRight: "5px"}}>Sabato
                            </h3>


                            <h3 onMouseEnter={() => this.setState({dom: this.state.selected})}
                                onMouseLeave={() => this.setState({dom: "#000000"}) }
                                onClick={() => this.setState({active: "dom"})}
                                className="mb-5" style={{ borderBottomColor: this.state.lun ,
                                borderBottom: this.state.dom === "#388FA5" ? ("2px #388FA5 solid") : (""),
                                marginRight: "5px"}}>Domenica
                            </h3>
                        </div>

                        <div className="col-md-1">

                        </div>

                        <div className="col-md-9">


                            { this.state.active === "lun" && <Lun  />}
                            { this.state.active === "mar" && <Mar  />}
                            { this.state.active === "mer" && <Mer  />}
                            { this.state.active === "gio" && <Giov  />}
                            { this.state.active === "ven" && <Ven  />}
                            { this.state.active === "sab" && <Sab  />}
                            { this.state.active === "dom" && <Dom  />}




                        </div>




                    </div>



                </div>
            </div>
        );
    }
}

export default Palinsesto;
