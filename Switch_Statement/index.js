//Switch Statement:
//Switch statement is used when comparing a value to multiple possible casses..

//Approach1
const marks=51;
if (marks>=100){
    console.log("Faboulas!!");
}
else if(marks>90){
    console.log("Grade1");
    
}
else if(marks>80){
    console.log("Grade2");
    
}
else if(marks>70){
    console.log("Grade3");
}
else if(marks>60){
    console.log("Grade4");
    
}
else if(marks>50){
    console.log("Grade5");
    
}
else{
    console.log("Failed");
    
}

//Approach2

const Grade="Grade1";
switch (Grade) {
    case "Faboulas":
        console.log("Marks are 100");
        break;

        case"Grade1":
        console.log("Marks are Greater than 90 and Less than 100");
        break;
        case "Grade2":
            console.log("Marks are greater than 80 and less than 90");
            break;
            case "Grade3":
                console.log("Marks are greater than 70 and Less than 80");
                break;

                case "Grade4":
                    console.log("Marks are greater than 60 and less than 70");
                    break;

                    case "Grade5":
                        console.log("Marks are greater than 50 and less than 60");
        break;

    default:
        console.log("You have Failed");
        
        break;
}