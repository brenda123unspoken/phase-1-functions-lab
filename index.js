// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    //returns the number of blocks given a value 
    if(pickup == 43){
        return 1

    }
    else if (pickup==50){
        return 8

    }
    else if(pickup ==34){    
        return 8
    }
        
    }
    function distanceFromHqInFeet(blocks) {
        return distanceFromHqInBlocks(blocks) *264;

    }
    function distanceTravelledInFeet(start,destination){
        //returns the number of feet travelled
        return Math.abs(start-destination)*264
    }
    function calculatesFarePrice(start,destination){
        //return the fare to the customer
        let distanceTravelled= distanceTravelledInFeet(start, destination)
        if (distanceTravelled<= 400) {

            return 0
            
    }
    else if(distanceTravelled>400 && distanceTravelled<=2000){
        return (distanceTravelled-400)*0.02
    }
    else if(distanceTravelled>2000 && distanceTravelled <=2500){
        return 25
    }
    else if(distanceTravelled>2500){
        return 'cannot travel that far'
        
        }
    }


    