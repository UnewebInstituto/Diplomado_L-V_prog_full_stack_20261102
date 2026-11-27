Algoritmo ej04_condicionales
	// Declaración de variables
	Definir edad Como Entero
	// Lectura Estándar
	Escribir 'Por favor, ingrese la edad'
	Leer edad
	// Condicional multiple
	Si edad<11 Entonces
		Escribir 'El usuario es un NIÑO.'
	SiNo
		Si edad>=11 Y edad<18 Entonces
			Escribir 'El usuario es un ADOLESCENTE.'
		SiNo
			Si edad>=18 Y edad<60 Entonces
				Escribir 'El usuario es un ADULTO JOVEN.'
			SiNo
				Escribir 'El usuario es un ADULTO MAYOR.'
			FinSi
		FinSi
	FinSi
	Escribir 'FIN DEL PROGRAMA.'
FinAlgoritmo
