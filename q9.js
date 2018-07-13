const costPerMinu = 1;
let userCash = 9; 
if (userCash < costPerMinu) {
    console.log("Moazziz Sarif, aap ka mojooda balance iss call k lye naa kaafi hai. Please re-charge karain");
} else if (userCash <= 10) {
    console.log("Moazziz sarif, aap ka balance khatam honay wala hai");
    console.log("Ring Ring!!");
} else {
    console.log("Ring Ring!!");
}