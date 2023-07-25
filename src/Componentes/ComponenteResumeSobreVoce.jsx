import { useEffect } from "react";

function ComponenteResumeSobreVoce(props) {
    
    useEffect(() => {
        
        alert('Olá, Esse é o resumo sobre mim :)');
        
    }, []);

    return (
        <div>
            <div>Resume</div>
            <p>{props.children}</p>
        </div>
    );
}

export default ComponenteResumeSobreVoce;
