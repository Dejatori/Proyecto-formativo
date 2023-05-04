import mysql.connector

#conexion
database = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "",
    database = "clinicas_oftalmologicas"
)

# ¿La conexion fue exitosa?
# print(database)

# Crear la base de datos

cursor = database.cursor()
"""


cursor.execute("CREATE DATABASE IF NOT EXISTS clinicas_oftalmologicas")

cursor.execute("USE clinicas_oftalmologicas")

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

# Usar base de datos
cursor.execute("USE clinicas_oftalmologicas")
"""

#cursor.execute("USE clinicas_oftalmologicas")

# Crear tablas
cursor.execute("""CREATE TABLE IF NOT EXISTS Pacientes 
               (Dni TEXT(12) not null, 
                Nombre TEXT(255) not null, 
                Fecha_Nac DATE not null, 
                Direccion VARCHAR(255) not null, 
                CONSTRAINT pk_Paciente PRIMARY KEY (Dni(12)))""")


cursor.execute("SHOW TABLES")
for table in cursor:
    print(table)
