import React, {useState} from 'react';

function Vegetables() {
    const [tomato, setTomato] = useState(10);
    const [potato, setPotato] = useState(8);
    const [carrot, setCarrot] = useState(5);
    const [onion, setOnion] = useState(7);

    const Tsub = (ele) => {
        setTomato(tomato + ele)
    }
    const Psub = (ele) => {
        setPotato(potato + ele)
    }
    const Csub = (ele) => {
        setCarrot(carrot + ele)
    }
    const Osub = (ele) => {
        setOnion(onion + ele)
    }

    return (
        <>
            <h1>Vegetables</h1>
            <div>
                <h2>Tomato - {tomato} Kg</h2>
                <button onClick={() => Tsub(+1)}>+</button>
                <button onClick={() => Tsub(-1)}>-</button>
            </div>

            <div>
                <h2>Potato - {potato} Kg</h2>
                <button onClick={() => Psub(+1)}>+</button>
                <button onClick={() => Psub(-1)}>-</button>
            </div>

            <div>
                <h2>Carrot - {carrot} Kg</h2>
                <button onClick={() => Csub(+1)}>+</button>
                <button onClick={() => Csub(-1)}>-</button>
            </div>

            <div>
                <h2>Onion - {onion} Kg</h2>
                <button onClick={() => Osub(+1)}>+</button>
                <button onClick={() => Osub(-1)}>-</button>
            </div>
        </>
    )
}

export default Vegetables;