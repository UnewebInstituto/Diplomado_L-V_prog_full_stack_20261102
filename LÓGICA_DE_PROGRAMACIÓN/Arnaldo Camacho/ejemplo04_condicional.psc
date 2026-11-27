Algoritmo ej04_condicionales
	// Declaración de variables
	Definir edad Como Entero
	// Lectura estándar
	Escribir 'Por favor ingrese la edad:'
	Leer edad
	// Condicional múltiple
	Si edad < 11 Entonces
		Escribir "Es un niño"
	Sino
		Si edad >= 11 y edad < 18 Entonces
			Escribir "Es un adolescente"
		SiNo
			Si edad >= 18 y edad < 60 Entonces
				Escribir "Es un adulto"
			SiNo
				Si edad >= 60 Entonces
					Escribir "Es un adulto mayor"
				FinSi
			FinSi
		FinSi
	FinSi
	
	Escribir 'Fin del programa'
FinAlgoritmo
