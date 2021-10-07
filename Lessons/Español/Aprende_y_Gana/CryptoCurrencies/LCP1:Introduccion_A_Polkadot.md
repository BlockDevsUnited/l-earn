# RED POLKADOT

Polkadot es un protocolo de cadena de bloques y una red que conecta múltiples blockchains, llamadas **paracadenas** (parachains), con una cadena de bloques primaria, llamada **cadena de retransmisión** (relay chain). La criptomoneda nativa de Polkadot se llama DOT.

Las parchains están especializadas para propósitos específicos y cada una maneja su propio flujo paralelo de transacciones, mientras que al mismo tiempo intercambia datos entre sí y con la cadena de retransmisión. La cadena de retransmisión proporciona una capa de seguridad para sí misma y para todas las paracadenas.

¡Consulte el [Árbol de conocimientos](https://github.com/BlockDevsUnited/learn-and-earn/blob/master/Lessons/English/L_EARN/CryptoCurrencies/Polkadot/Polkadot_Knowledge_Tree.jpg) de Polkadot y el [Árbol de habilidades](https://github.com/BlockDevsUnited/learn-and-earn/blob/master/Lessons/English/L_EARN/CryptoCurrencies/Polkadot/Polkadot_Skill_Tree.jpg) para tener una idea de lo que ofrecerán las próximas lecciones!

![image](https://user-images.githubusercontent.com/58176712/133651482-17e1b88e-a71f-4274-adbe-1a788f439741.png)

## Teoría

Polkadot se conoce como una "red multichain fragmentada", donde las paracadenas son los fragmentos. El poder de procesamiento paralelo generado por las paracadenas conduce a una mayor escalabilidad que otras cadenas de bloques de una sola cadena, como en el caso de Bitcoin. Diferentes paracadenas otorgan diferentes compensaciones y pueden optimizarse para diferentes casos de uso, como lo serián la identidad, la cadena de suministro o el almacenamiento de archivos. La optimización alrededor de ciertos casos de uso significa que puede omitir el código innecesario para la eficiencia y seguridad.

Polkadot permite a los desarrolladores construir paracadenas utilizando el **marco de sustrato** (substrate framework). El sustrato es un marco para construir blockchains

Lea más al respecto aquí: https://polkadot.network/blog/what-is-polkadot-a-brief-introduction/

### Componentes de Polkadot:

* Cadenas de retransmisión

* Paracadenas

* Parahilos

* Puentes

![image](https://user-images.githubusercontent.com/58176712/133652249-cd4c4747-5202-42c5-b521-00d3d6a18917.png)



#### La cadena de retransmisión

La cadena de retransmisión es el corazón de Polkadot, responsable de la seguridad compartida, el consenso y la interoperabilidad entre las cadenas de la red. Polkadot usa la cadena de retransmisión principalmente para:

* Validar transacciones
* Nominar validadores para validar dichas transacciones
* Conservar datos históricos
* Monitorear la salud de todo el ecosistema de Polkadot.

Los usuarios que hagan stake de DOT pueden validar las transacciones si son nominados por la cadena de retransmisión.

#### Paracadenas

Una paracadena es un blockchain completo que se alimenta desde y hacia la cadena de retransmisión. Polkadot lo describe en el documento técnico (whitepaper) como "una aplicación con una estructura de datos específicamente enfocada que es globalmente coherente y validable".
Se dice que las paracadenas están al mismo nivel que otras redes de cadenas de bloques como Bitcoin o Ethereum. Polkadot contiene múltiples blockchains dentro de sí misma. Hipotéticamente, podría incluir tanto a Bitcoin como Ethereum como paracadenas en la red Polkadot.

#### Parahilos

Los **parahilos** (parathreads) son espacios temporales en la red Polkadot, utilizados principalmente para la prueba de ideas.
Los parahilos son similares a las paracadenas en que permiten la construcción de una cadena de bloques o una aplicación de uso especial.

#### Puentes

Los **puentes** (bridges), o la capacidad de una cadena de bloques individual para comunicarse y transferir valor a otra, ha estado ausente en la tecnología de blockchain tradicional.
Digamos que desea comprar un NFT con un precio valorado en ETH, pero solo tiene BTC. Tradicionalmente, tendría que convertir dicho BTC a fiat y luego volver a convertirlo a ETH, o comprar ETH por BTC en un exchange. Simplemente no puede transferir valor o datos de un blockchain a otro sin una capa intermedia, sea que se trate de un exchange o fiat.
Los puentes cambian esa restricción y permiten que las paracadenas, que son esencialmente cadenas de bloques integradas en el ecosistema de Polkadot, se comuniquen y compartan datos. La soberanía económica y la diversidad de las respectivas cadenas de bloques no se ven afectadas al comunicarse o realizar transacciones a través de los puentes.

### La moneda Polkadot (DOT)

En la Red Polkadot, DOT es utilizada para realizar pagos, procesamiento de transacciones y gobernanza. El DOT también se utiliza para la validación de la cadena de retransmisión de PoS (Proof Of Stake). Asímismo el DOT se implementa para compnesar a sus validadores, como token de gobernanza y como moneda generalizada.

#### Características de DOT

Los holders de DOT tienen derechos de gobernanza en la red Polkadot. Estos holders pueden ayudar a determinar las tarifas de la red, votar sobre las actualizaciones de red propuestas y permitir que se desplieguen o eliminen las paracadenas.

DOT se utiliza para facilitar el consenso en la red a través del staking. Hacer staking con DOT ayuda a mantener la seguridad de la red, fortaleciendo el consenso de Polkadot.

Tiene una función vinculante. Esta función es necesaria para la incorporación de nuevas paracadenas dentro de la red Polkadot. Cuando se genera un período de vinculación, los tokens de DOT que se han adjuntado se bloquean hasta que finaliza el proceso

### Consenso de Polkadot

El sistema de consenso de Polkadot es llamado Nominated Proof Of Stake (NPoS). NPoS es similar al mecanismo de Proof Of Stake (PoS), con ligeras variaciones.

Con NPoS, los validadores deben ofrecer una infraestructura para el mantenimiento de la red. Tienen la tarea de producir
