Algoritmo ej05_seleccionmultiple
	// declaracion de variable
	Definir op Como Entero
	// inicializacion de variable
	op <- 0
	Escribir 'seleccione una de las siguiente opciones'
	Escribir '1: javascrip'
	Escribir '2: java'
	Escribir '3: php'
	Escribir '4: c'
	Escribir '5: Assembler'
	Escribir '6: python'
	Escribir '==>'
	Leer op
	Según op Hacer
		1, 3, 6:
			Escribir ' usted selecciono un lenguaje de programacion interpretado'
		2, 4:
			Escribir 'usted selecciono un lenguaje de programacion compilado'
		De Otro Modo:
			Escribir 'es un lenguaje  no compilado no interpretado'
	FinSegún
	Escribir 'fin del programa'
FinAlgoritmo
