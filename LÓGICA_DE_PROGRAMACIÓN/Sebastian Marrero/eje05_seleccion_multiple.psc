Algoritmo eje05_seleccion_multiple
	// Declaracion de variable
	Definir op Como Entero
	// Inicializacion de variable
	op <- 0
	Escribir 'Seleccione una de las siguientes opcienos'
	Escribir '1: javascript'
	Escribir '2: java'
	Escribir '3: php'
	Escribir '4: c'
	Escribir '5: Assamble'
	Escribir '6: python'
	Escribir '=>'
	Leer op
	Según op Hacer
		1, 3, 6:
			Escribir 'es un lenguaje de programacion interpretado'
		2, 4:
			Escribir 'es un lenguaje de programacion compilado'
		De Otro Modo:
			Escribir 'es un lenguaje no compilado no interpretado (de maquina)'
	FinSegún
	Escribir 'fin del prgrama'
FinAlgoritmo
