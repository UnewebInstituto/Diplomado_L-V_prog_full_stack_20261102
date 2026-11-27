Algoritmo ej04_condicionales
	// Declaración de variables
	Definir edad Como Entero
	// Lectura estándar
	Escribir 'Por favor ingrese la edad:'
	Leer edad
	// Condicional múltiple
	Si edad<11 Entonces
		Escribir 'Es un niño'
	SiNo
		Si edad>=11 Y edad<18 Entonces
			Escribir 'Es un adolescente'
		SiNo
			Si edad>=18 Y edad<60 Entonces
				Escribir 'Es un adulto'
			SiNo
				Escribir 'Es un adulto mayor'
			FinSi
		FinSi
	FinSi
	Escribir 'Fin del programa'
FinAlgoritmo
