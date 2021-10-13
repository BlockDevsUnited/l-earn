# Introducción a la RED DE POLKADOT

Polkadot es un protocolo de cadena de bloques y una red que conecta múltiples blockchains, llamados **paracadenas** (parachains), con una cadena de bloques primaria, llamada **cadena de retransmisión** (relay chain). La criptomoneda nativa de Polkadot se llama DOT.

Las paracadenas están especializadas para propósitos específicos y cada una maneja su propio flujo paralelo de transacciones, mientras que al mismo tiempo intercambia datos entre sí y con la cadena de retransmisión. La cadena de retransmisión proporciona una capa de seguridad para sí misma y para todas las paracadenas.

# Conviértase en un desarrollador de Polkadot

Las próximas lecciones se centrarán en enseñarle acerca del desarrollo de Polkadot a usted y a otros aspirantes a desarrolladores de Polkadot. ¡No solo aprenderá habilidades altamente demandadas, sino que también obtendrá DOT por hacerlo! Únase a nuestros canales comunitarios para recibir notificaciones sobre nuevas lecciones disponibles.

¡Consulte el [Árbol de conocimientos](https://github.com/BlockDevsUnited/learn-and-earn/blob/master/Lessons/English/L_EARN/CryptoCurrencies/Polkadot/Polkadot_Knowledge_Tree.jpg) de Polkadot y el [Árbol de habilidades](https://github.com/BlockDevsUnited/learn-and-earn/blob/master/Lessons/English/L_EARN/CryptoCurrencies/Polkadot/Polkadot_Skill_Tree.jpg) para tener una idea de lo que ofrecerán las próximas lecciones!

![image](https://user-images.githubusercontent.com/58176712/133651482-17e1b88e-a71f-4274-adbe-1a788f439741.png)

## Teoría

Polkadot se conoce como una "red multicadena fragmentada", donde las paracadenas son los fragmentos. El poder de procesamiento paralelo generado por las paracadenas conduce a una mayor escalabilidad que otras cadenas de bloques de una sola cadena, como en el caso de Bitcoin. Diferentes paracadenas otorgan diferentes compensaciones y pueden optimizarse para diferentes casos de uso, como lo serián la identidad, la cadena de suministro o el almacenamiento de archivos. La optimización alrededor de ciertos casos de uso significa que puede omitir el código innecesario para la eficiencia y seguridad.

Polkadot permite a los desarrolladores construir paracadenas utilizando el **marco de sustrato** (substrate framework). El sustrato es un marco para construir cadenas de bloque

Lea más al respecto aquí: https://polkadot.network/blog/what-is-polkadot-a-brief-introduction/

### Componentes de Polkadot:

* Cadenas de retransmisión

* Paracadenas

* Parahilos

* Puentes

![image](https://user-images.githubusercontent.com/58176712/133652249-cd4c4747-5202-42c5-b521-00d3d6a18917.png)


#### La cadena de retransmisión

La cadena de retransmisión es el corazón de Polkadot; siendo responsable de la seguridad compartida, el consenso y la interoperabilidad entre las cadenas de la red. Polkadot usa la cadena de retransmisión principalmente para:

* Validar transacciones
* Nominar validadores para aprobar dichas transacciones
* Conservar datos históricos
* Monitorear la salud de todo el ecosistema de Polkadot.

Los usuarios que hagan stake de DOT pueden validar las transacciones si son nominados por la cadena de retransmisión.

#### Paracadenas

La mayoría de las paracadenas toman la forma de cadenas de bloques, pero no es necesario que lo sean. Polkadot describe a una paracadena en su documento técnico como "una estructura de datos específica de la aplicación que es globalmente coherente y validable". Esto significa que debe ser validable por los validadores de la cadena de retransmisión. Las paracadenas pueden albergar sus propias aplicaciones y economías.

Polkadot solo admite un número limitado de paracadenas. Los constructores de paracadenas deben adquirir con éxito una vacante de paracadenas para que la suya sea aceptada por la red de Polkadot. Estas vacantes se otorgan a través de la gobernanza de Polkadot y sus subastas. Actualmente hay alrededor de 100 vacantes disponibles.

Se dice que las paracadenas están al mismo nivel que otras redes de cadenas de bloques como Bitcoin o Ethereum. Polkadot contiene múltiples paracadenas dentro de sí misma. Hipotéticamente, podría incluir tanto a Bitcoin como Ethereum como paracadenas en la red Polkadot.

[Lea más aquí](https://wiki.polkadot.network/docs/learn-parachains)

#### Parahilos

Los parahilos (parathreads) son similares a las paracadenas en casi todos los aspectos, excepto que solo se les concede acceso temporal para participar en la red Polkadot. Múltiples parahilos pueden compartir la misma vacante de paracadena, así como acceder a la cadena de retransmisión y compartir su seguridad, siempre que tenga sentido económicamente.

[Lea más aquí](https://wiki.polkadot.network/docs/learn-parathreads)

#### Puentes

Los puentes se utilizan para comunicarse entre dos cadenas de bloques soberanas. Son un aspecto relativamente nuevo y en crecimiento de la tecnología blockchain. Por esa razón, los puentes dentro y alrededor de la red Polkadot son todavía un trabajo en progreso.

Los puentes deberían permitir que las paracadenas, que son esencialmente cadenas de bloques integradas en el ecosistema de Polkadot, se comuniquen y compartan datos. La soberanía económica y la diversidad de las paracadenas no se ven afectadas al comunicarse o realizar transacciones a través de puentes.

[Lea más aquí](https://wiki.polkadot.network/docs/learn-bridges)


### DOT, la moneda de Polkadot

DOT es la criptomoneda nativa de la Red Polkadot. El DOT se utiliza para pagos, pagos de tarifas de transacción y gobernanza. El DOT también se utiliza para compensar a los validadores de la cadena de retransmisión y como moneda generalizada.

#### Características de DOT

Los holders de DOT tienen derechos de gobernanza en la red Polkadot. Estos holders pueden ayudar a determinar las tarifas de la red, votar sobre las actualizaciones de red propuestas y permitir que se desplieguen o eliminen las paracadenas.

El DOT se puede usar para ofertar en las vacantes de paracadenas y asegurar un lugar para la que poseen.

El DOT facilita el consenso sobre la red a través del staking. El staking de DOT ayuda a mantener la seguridad de la red, reforzando el consenso de Polkadot.

El DOT también tiene una función de vinculación. Vincular DOT es necesario para agregar nuevas paracadenas a la Red Polkadot. Cuando se genera un período de vinculación, los tokens de DOT que se han adjuntado se bloquean hasta que finalice el proceso.

### Consenso de Polkadot

El sistema de consenso de Polkadot es llamado Nominated Proof Of Stake (NPoS). NPoS es similar al mecanismo de Proof Of Stake (PoS), con ligeras variaciones.

Con NPoS, los validadores deben ofrecer una infraestructura para el mantenimiento de la red. Tienen la tarea de ejecutar nodos, producir los nuevos bloques, validar bloques de paracadenas e incrementar la seguridad de la red. Los validadores de NPoS Deben estar disponibles en todo momento y tener la capacidad de ejecutar la infraestructura de manera segura y confiable.

### Problemas que Polkadot quiere resolver:

#### Escalabilidad.


La mayoría de las cadenas de bloques populares no son escalables debido a su estructura.
Por ejemplo, hace mucho tiempo, costaba entre unos pocos centavos y unos cuántos dólares (equivalentes a ETH) realizar transacciones en Ethereum, la cadena de bloques más popular del mundo. Hoy en día, las tarifas de Ethereum han llegado a costar hasta más de $250

#### Comunicación e intercambio de datos nulo o limitado.

Docenas de blockchains fueron creadas de forma aislada y no es posible que se comuniquen o intercambien valor entre sí. Por ejemplo, no se puede enviar BTC en la red de ETH.

#### Falta de customización.


Hasta el adviento de Ethereum, las cadenas de bloques no admitían ninguna customización de la transferencia de valor de un propietario a otro. Bitcoin, por ejemplo, solo permitía transacciones persona-a-persona. Los contratos inteligentes permitieron customizar y programar lo que se puede lograr en una cadena de bloques, hasta cierto punto.


#### Mecanismo de validación de impacto de baja energía.

Polkadot apunta a obtener un mecanismo de validación de transacciones seguro, que al mismo tiempo no requiera un hardware costoso y alto consumo energético

## Práctica

### Configure una billetera de Polkadot

Para esta lección, todo lo que necesita hacer es configurar una billetera de Polkadot. Existen muchas carteras disponibles, entre las cuales se encuentran Atomic Wallet, IMToken, Enjin Wallet y Trust Wallet.

## Prueba

Después de estudiar esta lección, avísenos cuando esté listo para realizar el examen. La recompensa por aprobar es de 0.2 DOT.

## Recursos

* [Documento técnico de Polkadot](https://polkadot.network/PolkaDotPaper.pdf)
* [¿Qué es Polkadot?](https://polkadot.network/blog/what-is-polkadot-a-brief-introduction)
* [Wiki de Polkadot](https://wiki.polkadot.network/)
* [Resumen de Polkadot y sustrato](https://medium.com/polkadot-network/a-brief-summary-of-everything-substrate-and-polkadot-f1f21071499d)
