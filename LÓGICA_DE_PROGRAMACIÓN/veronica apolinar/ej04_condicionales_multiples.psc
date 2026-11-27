Algoritmo ej02_condicionales
	//Declaracion de variables
	Definir edad Como Entero
	//Lectura estandar
	Escribir 'Por favor ingrese la edad:'
	Leer edad 
	// Condicional simple
	si edad < 11 Entonces
		Escribir 'Es un niño'
	sino
			si edad >= 11 y edad < 18 Entonces
				Escribir 'Es un adolecente'
			SiNo
				si edad >= 18 y edad <60 Entonces
						Escribir 'Es un adulto'
				SiNo
						Escribir 'Es un adulto mayor'
					
					Escribir 'Es mayor de edad'
				FinSi
			FinSi
		
	FinSi
	
	
FinAlgoritmo
