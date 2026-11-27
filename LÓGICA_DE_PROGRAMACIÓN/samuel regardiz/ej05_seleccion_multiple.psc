Algoritmo ej05_seleccion_multiple
	//declaraccion de variable
	Definir op Como Entero
	//inicializacion de variable
	Op <- 0
	Escribir "seleccione una de las siguientes opciones"
	Escribir "1: javascript"
	Escribir "2:java"
	Escribir "3: php"
	Escribir "4: c"
	Escribir "5: assembler"
	Escribir "6: python"
	Escribir "==>"
	Leer op
Segun op Hacer
		1,3,6:
			Escribir "un lenguaje de programacion interpretado"
		2,4: 
			Escribir "un leguaje de programacion copilado"
		De Otro Modo:
			Escribir "es un lenguaje no copilado no interpretado"
FinSegun
Escribir "fin del programa"
FinAlgoritmo
