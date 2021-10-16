# Plataforma de Recompensas DevCash

El programa de recompensas DevCash es una aplicación descentralizada que le permite publicar y cazar recompensas.

La plataforma está alojada en https://xdai.devcash.dev

Durante esta lección, aprenderemos acerca de la plataforma, el por qué de su existencia, y su implementación para completar recompensas. Asegúrese de estudiar la lección en su totalidad, incluyendo el material adjuntado en cada uno de los enlaces.


## Teoría

### Caza de recompensas.
"La caza de recompensas es una profesión complicada" - The Client (Mandalorian Temporada 1, Episodio 1)

Un bounty (recompensa) es una tarea con un premio asociado a ella. Dicho premio normalmente se otorga basándose en la exitosa culminación de una labor, independientemente del tiempo o esfuerzo invertidos en la misma. 

Existen múltiples plataformas de recompensas en el espacio de las criptomonedas, incluyendo [Gitcoin](gitcoin.co), [bounties.network](https://bounties.network), [0x Bounties](https://bounty0x.io), [Rabbithole](https://rabbithole.gg), [BitcoinTalk bounties](https://bitcointalk.org/index.php?board=238.0) y muchas más. Todas éstas le permiten realizar tareas a cambio de cripto.

La caza de recompensas puede ser despiadada, pero muy lucrativa para aquellos en el tope de sus habilidades.

La forma más común de recompensa son las recompensas por errores (bugs), sin embargo, las recompensas por trabajo general se están volviendo cada vez más populares.



### Descripción general de la plataforma.

La plataforma de recompensas Devcash fue desarrollada por BDU con la intención de incentivar a otros desarrolladores a contribuir a nuestra organización. Funciona tanto en Ethereum Mainnet (https://devcash.dev) como en xDaiChain (https://xdai.devcash.dev). En ésta ocasión usaremos la versión de xDai.

Cualquier persona puede usar la plataforma para publicar o buscar recompensas.  Actualmente, se admiten ETH, xDaiy DevCash como premios.



### Antecedentes de BDU

BDU son las siglas de Blockchain Developers United.
https://bdu.dev

BDU es una red descentralizada conformada por una comunidad de desarrolladores. Contamos con la participación de colaboradores y comunidades pertenecientes a Toronto, Buenos Aires y Singapur, quienes realizan eventos de manera regular.

Puede unirse a nuestra comunidad en Discord aquí: https://discord.gg/V4Tncte9D5



### Antecedentes de DevCash

DevCash es la criptomoneda nativa del ecosistema BDU. Le llamamos DevCash haciendo alusión al "efectivo para la economía de los desarrolladores". DevCash es un [token ERC20](https://etherscan.io/address/0x0fca8fdb0fb115a33baadec6e7a141ffc1bc7d5a) en Ethereum, y hace puente a [xDaiChain](https://blockscout.com/xdai/mainnet/tokens/0x248E081e3C9e738D7C1ded5d471069dcf4Fd9B15). 

Puede ganar DevCash al realizar bounties en la plataforma de recompensas y contribuyendo al ecosistema BDU. Puede utilizar Devcash para incentivar a otros a trabajar para usted mediante la publicación de recompensas.

Actualmente estamos ejecutando un IBO (Oferta de Recompensa Inicial).

Lea más al respecto aquí: https://devcash.dev



### ¿Cómo funciona la plataforma?

Hay dos tipos de usuarios dentro de la plataforma: Anunciantes de recompensas y Cazadores de recompensas. Ambos requieren de una cartera de Ethereum para usar la plataforma.

A su vez se ofrecen dos tipos de recompensas: Recompensas abiertas y recompensas personales. Las recompensas abiertas están disponibles para todos los cazadores de recompensas. En cambio, las recompensas personales sólo están disponibles para los titulares de una dirección individual. En algunos casos, un anunciante de recompensas puede publicar una recompensa abierta con el fin de enviar propuestas para un gran proyecto y recompensar a todas aquellas propuestas que considere sensatas, pero aún así elegir a un solo cazarrecompensas y publicar otra recompensa personal para completar el proyecto.

Cuando una recompensa es publicada, el anunciante debe proveer:

- Un título
- Una descripción
- Cantidades de los premios en xDai y DevCash
- Número de recompensas disponibles
- Fecha límite (opcional) 
- Dirección del cazarecompensas (opcional)

Una vez publicada la recompensa, los cazadores pueden comenzar a realizar propuestas. El anunciante procederá entonces a revisar su contenido y aprobarla o rechazarla según las condiciones de la descripción. Será trabajo del anunciante verificar el trabajo realizado.

Tan pronto como el bounty sea publicado, las cantidades de xDai y DevCash requeridas son resguardadas en un contrato inteligente especial llamado "cofre de recompensas". El premio de éste bounty debe permanecer en su cofre hasta que la tarea sea completada o la fecha límite del mismo expire. El premio dentro del cofre de recompensas es públicamente visible y verificable en cadena, por lo que el cazarrecompensas puede sentirse seguro de que el dinero existe y está reservado para la terminación de la tarea.

Una vez sea aprobada una propuesta, el premio será enviado desde el contrato del cofre de recompensas hacia la dirección del cazador de recompensas ganador.


## Práctica

### Conviértase en un Cazador de Recompensas

Siga los pasos a continuación para convertirse en un Cazarrecompensas de DevCash: https://xdai.devcash.dev/bountyplatform/bounty/75

### Verifique su pago

Una vez que se haya aprobado su propuesta, asegúrese de que le hayan pagado correctamente. Verifique Blockscout para conocer si el pago se envió a su dirección.

### ¡Continúe cazando recompensas!
 
Hay más recompensas disponibles. ¡También publicaremos recompensas para ayudar a desarrollar el programa BDU - Aprende a ganar!

## Pruebas

Para esta lección, uno de nuestros colaboradores pondrá a prueba sus conocimientos en una conversación uno-a-uno utilizando [BrightID](https://www.brightid.org/) para verificar su identidad. Póngase en contacto con nosotros a través de este repositorio o en el grupo de Telegram en nuestro sitio web. Recompensa: 5 xDai.
