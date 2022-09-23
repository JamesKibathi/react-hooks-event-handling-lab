// Code Keypad Component Here

function Keypad (){
   
 function handlePwd(e){
    console.log("Entering password...")
 }

    return (
        <div><input onChange={handlePwd}
        type="password"/></div>
    )
}

export default Keypad;