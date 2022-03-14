import React, {useState} from "react";

function Wish() {
    const [str, setStr] = useState("");
    const [array, setArray] = useState([]);

    const inp = (ele) => {
        let val = ele.target.value;
        setStr(val);
    }

    const submit = () => {
        const load = {
            item : str
        }

        let n = [...array, load];
        setArray(n);
        console.log(array.length);
    }

    // if(array.length > 3){
    //     return <p>Sorry!</p>
    // }

    return (
        <>
            <h1>Wishlist</h1>

            {/* <input type="text" onChange={inp} placeholder="Your item"/> */}
            {
                array.length < 4 ? <input type = "text" onChange={inp} placeholder = 'Your item'/> : <p>Maximum limit reached!</p>
            }

            {
                array.length < 4 ? (<button onClick={submit}>ADD</button>) : (<p>You cannot add more than 3 items to wishlist</p>)
            }
            {/* <button onClick={submit}>ADD</button> */}
            {
                array.map(item => {
                    return <p> {item.item} </p>
                })
            }
        </>
    )
}

export default Wish;