import "./styles/create.css"
import NavBar from "./nav-bar-side";

const Create = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C700"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jua%3A400"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Hubballi%3A400"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Commissioner%3A400%2C700"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kyiv%2AType+Serif%3A400"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost%3A400"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Just+Me+Again+Down+Here%3A400"/>
            <NavBar />
            <div className="container" style={{ backgroundColor: '#FFF3E9', padding: '40px' }}>
                <img src="./images/0007.jpg" style={{ maxWidth: '80%', maxHeight: '80%', height: 'auto', display: 'block' }} />

                <div className="fixed-input1">
                    <input type="text" placeholder="Enter text here"></input>
                </div>
                <div className="fixed-input2">
                    <input type="text" placeholder="Enter text here"></input>
                </div>
            </div>
        </div>
    );
};

export default Create;