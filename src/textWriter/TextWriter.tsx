import { useContext, useEffect, useState } from "react";

import pieceTableInstance from "../PieceTable/pieceTable";

function TextWriter() {
    //const {output, input} = useContext(reactContext)
    const [text, setText] = useState(pieceTableInstance.output());
        
    return (
        <>
            <div>
            <p>{text}</p>
            <button onClick={()=>setText(pieceTableInstance.output())}>Update</button>
            </div>
        </>
    );

}

export default TextWriter