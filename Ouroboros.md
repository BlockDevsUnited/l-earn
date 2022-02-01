# OUROBOROS ALGORITMO DE CARDANO

## TABLA DE CONTENIDO

* [Cardano](#Cardano)
* [Ouroboros](#Ouroboros)
* [cómo funciona ouroboros](#Cómo-funciona-Ouroboros)
* [Sistema de Ouroboros](#SISTEMA-DE-OUROBOS)
* [slots y epoch de Ouroboros](#SLOTS-Y-EPOCH-DE-OUROBOROS)
* [Incentivos](#INCENTIVOS)
* [Beneficios de Ouroboros](#BENEFICIOS-DE-OUROBOROS)
* [Implementaciones de Ouroboros](#IMPLEMENTACIONES-DE-OUROBOROS)
* [Ouroboros Clasico](#Ouroboros-clasico)
* [Ouroboro Byzantine fault tolerance](#Ouroboros-Byzantine-Fault-Tolerance)
* [Ouroboros Praos](#Ouroboros-Praos)
* [Genesis de Oroboros](#Génesis-de-Ouroboros)
* [Hidra de Ouroboros](#Hidra-de-Ouroboros)
* [Pow vs Pos](#POW-VS-POS)
* [FUENTES](#FUENTES-UTILIZADAS-Y-LINKS-PARA-PROFUNDIZAR-EL-APENDIZAJE)


### [CARDANO](cardano.org)


<a href="https://ibb.co/3zQKKJS"><img src="https://i.ibb.co/vYR99tL/Que-es-Cardano.jpg" alt="Que-es-Cardano" border="0"></a>

Es una blockchain descentralizada de código abierto basada en contratos inteligentes, ha sido desarrollado con el fin de permitir las contribuciones de cualquier persona que desee ayudar a mejorarlo. cuenta con diferentes tecnologías creadas con la capacidad de soportar una gran cantidad de transacciones. Cardano cuenta con su propia criptomoneda ADA y brinda transacciones con bajas comisiones y gran seguridad

###  OUROBOROS
Ouroboros resulta interesante ya que su nombre hace referencia a un símbolo mítico utilizado por diferentes civilizaciones, dicho termino es usado como representación del ciclo infinito de las cosas. 
ahora bien, ouroboros en Cardano hace referencia al algoritmo de consenso de prueba de participación Proof-of-stake (PoS) el cual combina tecnología única y mecanismos verificados matemáticamente. Este algoritmo permite que los mineros sean elegidos aleatoriamente de la lista de nodos con derechos de creación de bloques utilizando un algoritmo matemático.
### CÓMO FUNCIONA OUROBOROS
Ouroboros procesa bloques de transacciones dividiendo las cadenas en épocas, que a su vez se dividen en intervalos de tiempo. Se elige un líder de franja para cada franja horaria y es responsable de agregar un bloque a la cadena. Para protegerse contra los intentos adversarios de subvertir el protocolo, se requiere que cada nuevo líder de ranura considere los últimos bloques de la cadena recibida como transitorios: solo se considera resuelta la cadena que precede a un número predeterminado de bloques transitorios. Esto también se conoce como retraso en la liquidación y es el mecanismo a través del cual el libro mayor se transfiere de forma segura entre los participantes.

Cardano también cuenta con su propia funcionalidad que “imita” a los pools de minería de otras monedas. En este caso, se llaman stake pools y con nodos fiables centrados en mantener y concentrar el interés combinado de varios nodos en una sola entidad. Al contrario que los pools de minería, los de stake no concentran el poder minero, sino la confianza, el voto y la delegación para generar bloques dentro de Cardano utilizando el protocolo Ouroboros.

Por otra parte, la red tiene dos capas diferenciadas: CCL y CSL.

CSL es la que maneja todo lo relacionado con el ledger (libro contable) o historial de Cardano, así como el conjunto principal de reglas principales de consenso de la red. Sobre esta capa tiene lugar el protocolo de consenso, la emisión de recompensas y las transacciones.

CCL es la encargada de mantener toda la información sobre lo que pasa con las transacciones que se realizan en la plataforma. Con las próximas actualizaciones, CCL será la encargada de que los smart contracts puedan dirigirse a máquinas virtuales como EVM de Ethereum.

###  SISTEMA DE OUROBOS

Ouroboros utiliza bloques, ciclos (epochs) e intervalos (slots). Por lo tanto, un bloque es básicamente una caja en la que se almacenan las transacciones. Un intervalo es otra caja un poco más grande que la primera, y donde aloja la primera caja en él. Y un ciclo es na caja donde se guardan todas estas cajas un poco más grandes.

###  SLOTS Y EPOCH DE OUROBOROS

 En Ouroboros podemos ver dos nuevos conceptos que no se ven en otros sistemas PoS. Estamos hablando de los intervalos (slots) y ciclos (epochs). Los intervalos o slots en Ouroboros, son intervalos de tiempo que duran 1 segundo. Mientras que los epochs o ciclos, tienen una duración de 5 días a 432.000 slots. La producción de estos slots y epochs también responde al sistema PoS, asegurando así que los mismos puedan producirse en todo momento, y bajo un sistema descentralizado de producción.

Esto ofrece una fuerte protección contra participantes malintencionados que buscan subvertir el protocolo, ya que su validación sólo puede darse durante su época y slot correspondiente, en una ventana de tiempo de 20 segundos, en caso contrario, deberán esperar a un nuevo proceso de elección para participar. Además, de los bloques generados por el resto de nominados, solo uno de ellos llegará la cadena mientras se rechazan el resto, disminuyen las reorganizaciones de cadena y la generación involuntaria de forks dentro de la misma.

###  INCENTIVOS

En Ouroboros, los incentivos no dependen de los bloques, sino que las recompensas de un ciclo (epoch) se recogen de un fondo de reserva y se distribuyen entre las partes delegantes y los stake pools que participan durante los intervalos (slots) de forma proporcional a su participación. En el caso de los stake pools, cada pool líder obtiene una fracción de las recompensas para cubrir sus costes operativos y un margen de beneficio. El resto se distribuye entre los miembros del pool líder, de forma proporcional a la participación que han delegado al mismo.

###  BENEFICIOS DE OUROBOROS 

Con la PoS en lugar de usar electricidad para resolver los problemas matemáticos, se selecciona un nodo para formar un nuevo bloque con una probabilidad proporcional a la cantidad de tokens mantenidos en el nodo.
Este algoritmo, Ouroboros, ha demostrado poseer una mayor eficiencia energética y permite transacciones más rápidas. Dotando a los poseedores de ADA de nuevos esquemas para la gobernanza.

### [IMPLEMENTACIONES DE OUROBOROS](https://docs.cardano.org/core-concepts/ouroboros-overview)

#### [Ouroboros clasico](https://eprint.iacr.org/2016/889.pdf) 

##### Fue La primera implementación de Ouroboro, logró tres hitos importantes:

> * La base para un protocolo de eficiencia energética para competir con la prueba de trabajo
> * La introducción del marco matemático para analizar la prueba de participación
> * La implementación de un nuevo mecanismo de incentivos para recompensar a los participantes en un entorno de prueba de participación

#### [Ouroboros Byzantine Fault Tolerance](https://eprint.iacr.org/2018/1049.pdf) 

> Fue la segunda implementación del protocolo, utilizada durante la actualización de Byron (transición del antiguo código base de Cardano al nuevo). La segunda instancia del protocolo preparó a Cardano para la descentralización que vino con el lanzamiento de Shelley.

#### [Ouroboros Praos](https://eprint.iacr.org/2017/573.pdf)

> Ouroboros Praos introdujo mejoras sustanciales de seguridad y escalabilidad en la implementación de Ouroboros Classic. Praos procesa bloques de transacciones dividiendo las cadenas en ranuras, que se agregan en épocas. Pero a diferencia de Ouroboros Classic, Praos se analiza en un entorno semisincrónico y es seguro contra atacantes adaptativos, utilizando la selección de líder privado y firmas de evolución de clave seguras hacia adelante para garantizar que un adversario fuerte no pueda predecir el próximo líder de ranura y lanzar un ataque enfocado (como un ataque DDoS).

#### [Génesis de Ouroboros](https://eprint.iacr.org/2018/378.pdf)

> Una vez implementada, la cuarta iteración de Ouroboros -Génesis- mejorará aún más a Ouroboros Praos al agregar una nueva regla de selección de cadena que permite a las partes arrancar desde un bloque de génesis sin la necesidad de puntos de control confiables o suposiciones sobre disponibilidad pasada. 

#### [Hidra de Ouroboros](https://eprint.iacr.org/2020/299.pdf)

> La última iteración es Ouroboros Hydra, una arquitectura de escalabilidad fuera de la cadena que aborda tres desafíos clave de escalabilidad: alto rendimiento de transacciones, baja latencia y almacenamiento mínimo por nodo.

Ouroboros Hydra permite a Cardano escalar horizontalmente, aumentando el rendimiento mediante la incorporación de nodos adicionales, en lugar de verticalmente, mediante la adición de hardware más potente. Las primeras simulaciones muestran que cada cabeza puede realizar hasta 1000 TPS. Con 1,000 cabezas, esto podría ser tan alto como 1,000,000 TPS.

### POW VS POS

Prueba de participación (PoS) este algoritmo se utiliza para que la red funcione, además protege a la red de ataques aumentando así su estabilidad, proporciona un ahorro en costo de energía y permite un procesamiento de transacciones mas rápidas; mientras que (PoW) es un sistema en el que se necesita tener infraestructura es decir ordenadores para poder participar en el proceso de consenso de la red.
Cabe destacar que el algoritmo de prueba de participación utilizado en Cardano (PoS) resulta más avanzado que el de prueba de trabajo ya que garantiza crear y agregar diversos tokens en su cuenta, en menor tiempo y con mayor eficiencia

### FUENTES UTILIZADAS Y LINKS PARA PROFUNDIZAR EL APENDIZAJE

* [Pagina oficial de Cardano](cardano.org)
* [Documentos Cardano](https://docs.cardano.org/core-concepts/ouroboros-overview)
* [Articulo sobre Cardano](https://economia3.com/cardano-revolucion-criptomonedas/#:~:text=Cardano%20utiliza%20un%20nuevo%20algoritmo,ataques%20y%20aumenta%20su%20estabilidad.)













