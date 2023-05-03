import mysql.connector

#conexion
database = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = ""
)

# ¿La conexion fue exitosa?
# print(database)

# Crear la base de datos

cursor = database.cursor()

try:
    # Listar bases de datos
    cursor.execute("SHOW DATABASES")

    # Obtener resultados
    resultados = cursor.fetchall()

    # Imprimir resultados
    for resultado in resultados:
        print(resultado)

except mysql.connector.Error as error:
    # Revertir transacción en caso de error
    database.rollback()
    print("Error al listar bases de datos: {}".format(error))

finally:
    # Cerrar cursor
    cursor.close()

# Cambio