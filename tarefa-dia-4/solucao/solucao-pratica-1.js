function legalAgeOrNot (age) {
    if (age >= 18) {
        console.log("A idade é maior ou igual a 18 anos. Pode entrar na boate")
    } else {
        console.log("A idade é menor que 18 anos, entrada não permitida!")
    }    
}

let age1 = 13
let age2 = 18
let age3 = 20

legalAgeOrNot(age1)
legalAgeOrNot(age2)
legalAgeOrNot(age3)