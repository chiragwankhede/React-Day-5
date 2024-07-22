function Condition (){
return (
<div>
    <p>Hello Chirag</p>
   <And/><br></br>
   <Or/><br></br>
   <Optionalchaining/> <br></br>
   <Nullish/>
    </div>
    );

}

//  And Condition - Both condition must true to give output
function And (){
    let lenght= 10 ;
    let width = 20;

    if(lenght===10 && width===10){
        return <p>The lenght and width are correct</p>
    }
    else {
    return<>One thing is not correct</>
    }

}

//  Or Condition - If any one condition is true it will give output

const Or = () => {
    let lenght= true ;
    let width = false;
    if(lenght || width){
        return <p>The lenght and width are correct</p>;
    }
    else {
        return<></>;
    }

};

// Optional Chaining - If there is address inside user they give the address & If there is country inside address then give country 


const Optionalchaining = () =>{
    let user = {
        name : "Chirag",
        address :{
            country:"India"
        }
    };
return <p> {user?.address?.country}</p>   ;

}


// Nullish Coalescing - If the value of user is null, then print the value of name . Else if there is value inside user, print those value only.


const Nullish =()=>{
    let user = null;
    // let user = "India"; 
    let name = "I am Chirag";
    return <p>{user??name}</p>
}







const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Condition/>);