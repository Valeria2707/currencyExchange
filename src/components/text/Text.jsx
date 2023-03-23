import './Text.css';

const Text = ({text, nameClass}) =>{
    return(
        <p className = {nameClass}>{text}</p>
    );
}

export default Text;