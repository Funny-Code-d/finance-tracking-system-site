import React from "react";
import Button from "./button";



const NuvButtons = function() {

    // const [stateButton, setStateButton] = useState({
    //     classButton = "",
    //     text = ""
    // })

    return (
        <div className="nuv_button">
            <Button button={{classButton: "nuv_button", text: "Главная"}} />
            <Button button={{classButton: "nuv_button", text: "Покупки"}} />
            <Button button={{classButton: "nuv_button", text: "Семья"}} />
            <Button button={{classButton: "nuv_button", text: "Отчёты"}} />
        </div>
    )
}

export default NuvButtons