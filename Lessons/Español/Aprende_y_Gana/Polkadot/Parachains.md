# Parachains


## Teoria

Las parachains son las diversas cadenas de bloques individuales de capa 1 que funcionan en paralelo dentro del ecosistema Polkadot. Conectadas y aseguradas por la relay chain central, las parachains comparten y se benefician de la seguridad, interoperabilidad, escalabilidad y gobernanza de Polkadot 
comparten la seguridad de toda la red y pueden comunicarse con otros a través de la parachains XCM formato, esto  permite transferir cualquier tipo de datos o activos entre parachains, lo que, a su vez, abre un nuevo horizonte de casos de uso y aplicaciones potenciales, no sólo en DeFi, sino en todo el mundo de las criptomonedas.


<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/J043JJZY/parachain.png' border='0' alt='parachain'/></a>

Las parachains son mantenidas por un mantenedor de red conocido como collators. La función del nodo de agrupación es mantener un nodo completo de la parachain, retener toda la información necesaria de la parachain y producir nuevos candidatos de bloque para pasar a los validadores de la cadena de retransmisión para su verificación e inclusión en el estado compartido de Pol

### Parachains: El futuro de la cadena de bloques

El modelo de parachain de Polkadot se diseñó con la convicción de que la Internet del futuro conllevará muchas cadenas de bloques diferentes que trabajarán en conjunto y colaborarán entre sí. Así, al igual que Internet se adapta a los diferentes usuarios y a sus necesidades específicas, las cadenas de bloques también deben ser capaces de proporcionar una variedad de servicios, con una red quizás específica para los juegos, otra para las finanzas, otra para el almacenamiento de datos, otras redes para los NFTs y las aplicaciones de la Internet de las cosas, entre otras muchas utilidades posibles.
Por lo tanto, debido a esta visión interoperable del futuro, Polkadot no impone ningún requisito específico al diseño de sus parachains, aparte del hecho de que deben ser capaces de demostrar a los validadores de Polkadot que cada bloque de la parachain sigue el protocolo acordado. Esto permite que las parachains disfruten de un amplio margen de maniobra infraestructural, y esta flexibilidad significa que cada parachain puede tener su propio diseño, proceso de gobernanza y token, optimizado para su caso de uso particular.

* Escalabilidad

A través de su modelo de parachain, Polkadot permite que los proyectos logren la escalabilidad en la capa 1, en lugar de tener que depender totalmente de las soluciones de la capa 2. Esto es, de hecho, un gran avance, ya que permite la creación de una metodología mayormente descentralizada y más eficiente para implementar la escalabilidad de la cadena de bloques.

* Interoperabilidad

Las parachains permiten a las comunidades de las cadenas de bloques tener pleno control y soberanía sobre su propia cadena de bloques de capa 1, al tiempo que se benefician de la posibilidad de participar en el libre comercio con otras parachains y redes externas. Al aprovechar las características de interoperabilidad entre cadenas de Polkadot, las parachains pueden sintetizar una infraestructura económica interoperable a través de la cual pueden intercambiar activos, datos, llamadas a contratos inteligentes e información de oráculos fuera de la cadena, como fuentes de precios de las acciones o la evolución del mercado en tiempo real.

* Gobernanza

Las parachains de Polkadot son flexibles y libres de adoptar el modelo de gobernanza que consideren oportuno, y pueden acceder a una serie de módulos ya preparados para implementar diversos sistemas de gobernanza dentro de la cadena. Como Polkadot proporciona a sus parachains y a sus respectivos equipos una serie de sofisticados sistemas de gobernanza dentro de la cadena, esto reduce en gran medida las posibilidades de bifurcaciones duras de su cadena, que podrían dividir su comunidad en dos.



### Paso de mensajes entre cadenas (XCMP)

las parachains están totalmente conectadas a la relay chain y disfrutan de la seguridad que proporciona el entorno de Polkadot. Sin embargo, para comunicarse con otros sistemas, los parachains aprovechan un mecanismo llamado paso de mensajes entre cadenas (XCMP).

El XCMP de Polkadot es un protocolo que permite que sus redes de parachains, que de otro modo estarían aisladas, envíen mensajes y datos entre sí de forma segura y completamente sin confianza. Para conseguirlo, Polkadot despliega un sencillo mecanismo de colas basado en una estructura de árbol de Merkle para garantizar la confianza y la claridad de la verificación. Los validadores de la relay Chain se encargan de mover las transacciones de la cola de salida de una parachain a la cola de entrada de la parachain de destino, pero sólo los metadatos asociados a este proceso de salida-entrada se almacenan como hash dentro de la relay Chain.

Aunque el diseño del XCMP aún está en desarrollo, Polkadot ha establecido algunos parámetros que definen su arquitectura y sus principales funcionalidades, y que se enumeran a continuación:

* Los mensajes entre cadenas no irán a la relay chain.
* Los mensajes entre cadenas estarán limitados a un tamaño máximo en bytes.
* Las parachains pueden rechazar los mensajes de otras parachains.
* Los recopiladores se encargan de enrutar los mensajes entre cadenas.
* Los recopiladores generan una lista de mensajes de salida y recibirán mensajes de entrada de otras parachains.
* Cuando un recopilador produce un nuevo bloque para entregarlo a un validador, agregará los últimos datos de la cola de entrada y los procesará.
* Los validadores autenticarán la prueba de que el bloque de una parachain incluye el procesamiento de los mensajes de entrada previstos para esa parachain.

### Diferencia entre parachains y contratos inteligentes.

Los contratos inteligentes son pequeñas piezas de software que se ejecutan en cadenas de bloques dedicadas, como Ethereum, Elrond, Solana, Tezos y Cardano, entre muchas otras. 
Como todos se ejecutan en la misma cadena de bloques y compiten por sus recursos informáticos, esto puede provocar congestión, largos tiempos de ejecución y costes de funcionamiento imprevisibles.

Por otro lado, las parachains son cadenas de bloques individuales e independientes diseñadas para un único propósito y que proporcionan a sus usuarios una enorme variedad de servicios y diferentes casos de uso. Además, estas parachains individuales son
capaces de comunicarse entre sí, construyendo una red de cadenas de bloques de alto rendimiento en lugar de una única cadena de bloques que intenta resolver todos los problemas en un solo ordenador virtual.

### La economias de las Parachain

Las paracaídas pueden tener sus propias economías con sus propios tokens nativos. Los esquemas como Prueba de participación se utilizan generalmente para seleccionar el conjunto de validadores para manejar la validación y finalización; No se requerirá que los paracaidistas hagan ninguna de esas cosas. 
Sin embargo, dado que Polkadot no es demasiado particular sobre lo que puede implementar la parachain, puede ser la elección de la parachain implementar un token de participación, pero generalmente no es necesario.

### Adquisición de ranuras de parachain

Polkadot sólo admite un número limitado de parachains, que actualmente se estima en unas 100. Dada esta limitada disponibilidad de ranuras, Polkadot puede asignarlas de la siguiente manera:

Parachains concedidos para la gobernanza, o parachains de “bien común”.p
Parachains concedidos por subasta.
Parathreads.
Los parachains concedidos para la gobernanza son asignados por el sistema de gobernanza dentro de la cadena de Polkadot, y se consideran de “bien común” para la red. Pueden suponer, por ejemplo, puentes entre cadenas desde Polkadot a otras cadenas. Las parachains de bien común suelen considerarse cadenas a nivel de sistema y no suelen poseer un modelo económico propio. La finalidad de estas parachains es principalmente ayudar a eliminar las transacciones de la relay chain, permitiendo un procesamiento más eficiente de las parachains.

Las parachains concedidas en subasta son las que se conceden en una subasta pública, de ahí su nombre. Los equipos de parachains pueden pujar con sus propios activos DOT, o desplegar un sistema de financiación colectiva para obtener tokens de la comunidad del proyecto.

