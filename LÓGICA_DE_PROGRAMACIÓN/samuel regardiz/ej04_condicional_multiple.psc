Algoritmo ej03_condicionales
	//declaracion de variable
	Definir edad Como Entero
	//lectura estandar
	Escribir "por favor ingrese la edad:"
	Leer edad
	//condicional multiple
	si edad <11 Entonces
		Escribir "un niño"
	SiNo
		si edad > 11 y edad < 18 entonces
				Escribir  "un adolencente"
		SiNo
			si edad >= 18 y edad < 60 entonces
				Escribir "un adulto" 
			sino 
				escribir "es un adulto mayor"
			FinSi
			
		FinSi
	FinSi
	Escribir "fin del programa"
FinAlgoritmo
