// Code EyesOnMe Component Here

function EyesOnMe(){
    function handleBtnFocus(){
        console.log("Good!")
    }
    function handleBtnBlur(){
        console.log("Hey! Eyes on me!")
    }
    return <button 
    onFocus={handleBtnFocus}
    onBlur={handleBtnBlur}>Eyes on me
    </button>
}

export default EyesOnMe;