// Juego Piedra, Papel o Tijera
// La computadora elije y luego se le pide a un usuario que introduzca un valor

var computadora;
var usuario;
var numeroValido = 0;
// Funcion para convertir el valor elegido a su equivalente [Piedra, Papel, Tijera]
function getStrOption(valor){
    switch (valor) {
        case 1:
          strOption = 'Piedra';
          break;

        case 2:
          strOption = 'Papel';
          break;

        case 3:
          strOption = 'Tijera';
          break;
    }
    return strOption;
}

// Funcion para obtener al ganador
// Piedra - Papel gana Papel
// Piedra - Tijera gana Piedra
// Tijera - Papel gna Tijera 
function getWinner(computadora, usuario){
    let respuesta = '';
    switch (computadora) {
        case 'Piedra':
            if(usuario == 'Piedra'){
                respuesta = '¡Empate!';
            }else if(usuario == 'Papel'){
                respuesta = '¡Usuario Gana!';
            }else{
                respuesta = '¡Computadora Gana!';
            }
            break;

        case 'Papel':
            if(usuario == 'Piedra'){
                respuesta = '¡Computadora Gana!';
            }else if(usuario == 'Papel'){
                respuesta = '¡Empate!';
            }else{
                respuesta = '¡Usuario Gana!';
            }
            break;
        
        case 'Tijera':
            if(usuario == 'Piedra'){
                respuesta = '¡Usuario Gana!';
            }else if(usuario == 'Papel'){
                respuesta = '¡Computadora Gana!';
            }else{
                respuesta = '¡Empate!';
            }
            break;
    }
    return respuesta;
}

// Funcion para que la computadora pueda obtener un valor del 1 - 3
// 1 Piedra
// 2 Papel
// 3 Tijera
function getValor(){
    let max = 3
    let min = 1
    return Math.round(Math.random() * (max - min) + min);
}

// La computadora elije
computadora = getStrOption(getValor());
alert('La computadora eligio: ' + computadora);

// Elije la persona, se valida que introduzca un numero valido 1,2,3
usuario = parseInt(prompt('Favor de introducir un valor: \n 1 - Piedra \n 2 - Papel \n 3 - Tijera'));
if(usuario == 1 || usuario == 2 || usuario ==3){
    numeroValido = 1;
} else {
    while (numeroValido != 1) {
        usuario = parseInt(prompt('Favor de introducir un valor: \n 1 - Piedra \n 2 - Papel \n 3 - Tijera'));
        if(usuario == 1 || usuario == 2 || usuario ==3){
            numeroValido = 1;
        }
    }
}

// La opcion del usuario se convierte a su equivlante en texto
usuario = getStrOption(usuario);
alert('El usuario eligio: ' + usuario);

// Se imprime el ganador
alert(getWinner(computadora,usuario));
