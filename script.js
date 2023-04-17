const calculateAge=()=>{

    let date=document.getElementById("dateField").value;
    let month=document.getElementById("monthField").value;
    let year=document.getElementById("yearField").value;

    if(date>31){
        alert("Please enter a valid date");
        return;
    }
    console.log(date);
    //parsing date
    let dob=new Date(`${date} ${month} ${year}`);
    //current date
    let today=new Date();
    //difference in msec
    let diff=today-dob;
    let days=Math.floor(diff/(1000*60*60*24));
    
    if(days<=1)
    {
        alert(`Hey! Your age is ${days} day.`);
    }
    else{
        alert(`Hey! Your age is ${days} days.`);
    }
    
}