Algoritmo ej04_Condicionales
	// Declaracion de variables
	Definir edad Como Entero
	// lectura estandar
	Escribir 'por favor ingrese la edad'
	Leer edad
	// condicional multiple
	Si edad<11 Entonces
		Escribir 'es un niño'
	SiNo
		Si edad>=11 Y edad<18 Entonces
			Escribir 'es un adolecente'
		SiNo
			Si edad>=18 Y edad<60 Entonces
				Escribir 'es un adulto'
			SiNo
				Si edad>=60 Entonces
					Escribir ' es adulto mayor'
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir 'fin del programa'
FinAlgoritmo
