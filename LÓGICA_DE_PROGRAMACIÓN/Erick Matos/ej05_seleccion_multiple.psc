Algoritmo ej05_seleccion_multiple
	// Declaración de variable.
	Definir op Como Entero
	// Inicializacioón de variable
	op <- 0
	Escribir 'Por favor, seleccione una de las siguientes opciones.'
	Escribir '1:Javascript.'
	Escribir '2:Java.'
	Escribir '3:PHP.'
	Escribir '4:C.'
	Escribir '5:Assembler.'
	Escribir '6:Python.'
	Escribir '==>'
	Leer op
	Limpiar Pantalla
	Según op Hacer
		1, 3, 6:
			Escribir 'Usted selecciono un lenguaje de programación interpretado.'
		2, 4, :
			Escribir 'Usted selecciono un lenguaje de programación compilado.'
		De Otro Modo:
			Escribir 'Usted selecciono un lenguaje compilado no interpretado (de maquina).'
	FinSegún
	Escribir 'FIN DEL PROGRAMA'
FinAlgoritmo
