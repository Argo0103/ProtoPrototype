const airplane = {
    name:"Boeing 747",
    isFlying : null,
    
    takeOff(){
        return `${airplane.name} isFlying: ${airplane.isFlying = true}`
        
    },
    land(){
        return `${airplane.name} isFlying: ${airplane.isFlying = false }`
    }
}
console.log(airplane.takeOff());