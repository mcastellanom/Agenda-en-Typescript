import Persona from "./Persona";
import Direccion from "./Direccion";
import Telefono from "./Telefono";
import Mail from "./Mail";

// Crear 3 registros de persona
const persona1 = new Persona(
  "Marta",
  "Castellano",
  27,
  "12345678A",
  "07/04/1996",
  "Azul",
  "Femenino",
  [new Direccion("Calle Vecna", 10, "2º", "A", "12345", "Hawkins", "Indiana")],
  [new Mail("Personal", "marta@example.com")],
  [new Telefono("Móvil", "123456789")],
  "Le gustan las series de misterio y películas de Marvel"
);

const persona2 = new Persona(
  "Juan",
  "Palomo",
  40,
  "98765432B",
  "02/02/1980",
  "Verde",
  "Masculino",
  [new Direccion("Calle Chef", 20, "1º", "B", "54321", "Pueblo Nuevo", "Cadiz")],
  [new Mail("Trabajo", "juan@example.com")],
  [new Telefono("Casa", "987654321")],
  "Le gustan los programas de cocina"
);

const persona3 = new Persona(
  "Francisco",
  "Perea",
  25,
  "45678912C",
  "03/03/1995",
  "Rojo",
  "Masculino",
  [new Direccion("Calle 3", 30, "3º", "C", "67890", "VillaSerrano", "Sevilla")],
  [new Mail("Personal", "francisco@example.com")],
  [new Telefono("Trabajo", "654321987")],
  "Le gustan las series de tv familiares"
);

// Mostrar los registros en forma de lista en la consola
console.log("Registros de personas:");
console.log("=======================");
console.log("Persona 1:");
console.log(persona1.toString());
console.log("=======================");
console.log("Persona 2:");
console.log(persona2.toString());
console.log("=======================");
console.log("Persona 3:");
console.log(persona3.toString());

// Modificar uno de los registros de persona
const dniBuscado = "98765432B";
let personaEncontrada: Persona | undefined = undefined;

// Buscar la persona por DNI
if (persona2.dni === dniBuscado) {
  personaEncontrada = persona2;
}

// Realizar los cambios si se encontró la persona
if (personaEncontrada) {
  personaEncontrada.agregarDireccion(
    new Direccion("Calle Nueva", 25, "4º", "D", "54321", "PuebloViejo", "Huelva")
  );

  personaEncontrada.agregarMail(new Mail("Personal", "juan.nuevo@example.com"));

  personaEncontrada.agregarTelefono(new Telefono("Móvil", "9876543210"));
}

// Mostrar los registros modificados en forma de lista en la consola
console.log("=======================");
console.log("Registros modificados:");
console.log("=======================");
console.log("Persona 1:");
console.log(persona1.toString());
console.log("=======================");
console.log("Persona 2:");
console.log(persona2.toString());
console.log("=======================");
console.log("Persona 3:");
console.log(persona3.toString());
