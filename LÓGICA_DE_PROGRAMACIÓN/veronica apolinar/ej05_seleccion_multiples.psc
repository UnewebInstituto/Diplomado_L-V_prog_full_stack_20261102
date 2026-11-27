Algoritmo ej05_seleccion_multiples
	// Declaracion de variable
	Definir op Como Entero
	// Inicializacion de variable
	op <- 0
	Escribir 'Seleccione una de las siguientes opciones'
	Escribir '1: Javascript'
	Escribir '2: Java'
	Escribir '3: Php'
	Escribir '4: C'
	Escribir '5: Assembler'
	Escribir '6: Python'
	Escribir '==>'
	Leer op
	Según op Hacer
		1, 3, 6:
			Escribir 'Es un lenguaje de programacion interpretado'
		2, 4:
			Escribir 'Es un lenguaje de programacion compilado'
		De Otro Modo:
			Escribir 'Es un lenguaje no compilado, no interpretado (de maquina)'
	FinSegún
	Escribir 'Fin del priograma'
FinAlgoritmo
