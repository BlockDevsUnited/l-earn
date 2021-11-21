# Introducción al desarrollo fullstack con Ethereum

Esta introducción servirá como guía para armar las bases de una dApp que cuente con su respectivo frontend y conexión directa a una red local de testeo del Ethereum Virtual Machine (EVM), usando el siguiente stack tecnológico:

* [React](https://es.reactjs.org/) - Biblioteca del lado del cliente, encargada de manejar el frontend.
* [Ethers.js](https://docs.ethers.io/v5/) - Biblioteca que el cliente usa para poder interactuar con el blockchain de Ethereum y los contratos inteligentes.
* [Hardhat](https://hardhat.org/) - Ambiente y framework de desarrollo de Ethereum, con el que se construyen, despliegan y compilan los contratos inteligentes en el lenguaje [Solidity](https://docs.soliditylang.org/en/v0.8.10/).

> **Aclaración:** *el presente tutorial es una adaptación al español y con cambios significativos para un enfoque orientado hacia principiantes, creado por [Nader Dabit](https://twitter.com/dabit3), y puede ser accedido [acá](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13).*

![Logos de React, Ethers.js y Hardhat](https://res.cloudinary.com/divgu8i6t/image/upload/v1637462348/Selection_103.png)

## Contenidos:

* [¿Qué se busca con este tutorial?](#que-se-busca)</br>
* [¿Qué NO se busca con este tutorial?](#que-no-se-busca)</br>
* [¿Qué proyecto se construirá?](#que-proyecto)</br>
* [Requisitos](#requisitos)</br>
* [01 - Inicio](#01)</br>
* [02 - Instalación y configuración del ambiente de desarrollo de Ethereum](#02)</br>
* [03 - Contrato inteligente](#03)</br>
* [04 - Compilación de la ABI (Interfaz de Aplicación Binaria)](#04)</br>
* [05 - Despliegue en una red de blockchain local](#05)</br>
* [06 - Conectar con el cliente de React](#06)</br>
* [Conclusión](#conclusion)</br>

<div id="que-se-busca"></div>

## ¿Qué se busca con este tutorial?

* Partir las bases para un proyecto de dApp.
* Entender cómo se juntan las piezas básicas para una dApp fullstack.
* Hacer pruebas con el ambiente local de Ethereum.

<div id="que-no-se-busca"></div>

## ¿Qué NO se busca con este tutorial?

* Aprender Solidity exhaustivamente.
* Armar una dApp compleja.
* Explicar cómo funciona Ethereum ni el EVM.
* Enseñar React o desarrollo frontend.

<div id="que-proyecto"></div>

## ¿Qué proyecto se construirá?

Se usará el contrato inteligente que Hardhat crea por default, el cual permite obtener y modificar un saludo en el blockchain de Ethereum, se desplegará en la red local, y se integrará en una aplicación construida con React.

<div id="requisitos"></div>

## Requisitos

* Instalar [Node.js](https://nodejs.org/es/).
* Instalar la extensión de [Metamask](https://metamask.io/) y crearse una cuenta - [Tutorial](https://cryptoshitcompra.com/como-crear-una-cuenta-de-metamask).
* Contar con un editor de texto para escribir código como [Visual Studio Code](https://code.visualstudio.com/).

Con esto, estamos listos para comenzar.

<div id="01"></div>

## 01 - Inicio

Se empezará el proyecto de React con el siguiente comando en la terminalen donde se quiera tener el nuevo directorio:

```
npx create-react-app react-dapp
```

Luego se entrará a la nueva carpeta, en este caso llamada `/react-dapp`, y en la terminal se ingresará lo siguiente:

```
npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
```

Con esto se instalarán las dependencias de `ethers.js` y `hardhat`, incluyendo las dependencias para tests e integración entre ellas.

<div id="02"></div>

## 02 - Instalación y configuración del ambiente de desarrollo de Ethereum

Lo siguiente será correr el comando `npx hardhat` para iniciar el ambiente de desarrollo de Ethereum, y aparecerán algunas preguntas para configurarlo. Se sugiere aceptar los que están por default para este tutorial:

```
? What do you want to do? Create a sample project
? Hardhat project root: <Choose default path>
```

Una vez hecho esto, en la carpeta raíz del proyecto se habrán creado los siguientes directorios y archivos:

**`hardhat.config.js`**

**`scripts`** - Una carpeta con un archivo de script llamado `sample-script.js` que se encargará de desplegar los contratos inteligentes al ser ejecutado.

**`test`** - Una carpeta con los archivos de prueba.

**`contracts`** - Una carpeta en donde se almacenarán los contratos y que ya contará con uno de prueba

Será necesario hacer un cambio en el archivo `hardhat.config.js`, para que el `chainId` sea `1337`. Esto es debido a un [error en la configuración de Metamask](https://hardhat.org/metamask-issue.html). Debería lucir así:

```javascript
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};
```
Además del nuevo `chainId`, también se modificó la ruta en donde se compilará luego el código de los contratos en un ABI (más adelante se explicará este tema).

<div id="03"></div>

## 03 - Contrato inteligente

En el archivo `contracts/Greeter.sol` se podrá observar el siguiente contrato:

```solidity
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract Greeter {
  string greeting;

  constructor(string memory _greeting) {
    console.log("Deploying a Greeter with greeting:", _greeting);
    greeting = _greeting;
  }

  function greet() public view returns (string memory) {
    return greeting;
  }

  function setGreeting(string memory _greeting) public {
    console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
    greeting = _greeting;
  }
}
```

Este básicamente cuenta con tres funcionalidades:

1. Muestra un mensaje en consola al ser desplegado desde el archivo `sample-script.js` con un saludo que se adjunta al ser llamado.
2. Tiene una función `greet` que devuelve el saludo actual que esté en la blockchain desde este contrato. SOlo es una función de lectura.
3. Una función `setGreeting` a la que se le pasa como parámetro un nuevo saludo, el cuál hará la modificación respectiva en la blockchain.

**Importante:** en Ethereum, desplegar y modificar datos a la blockchain cuesta [gas](https://www.investopedia.com/terms/g/gas-ethereum.asp#:~:text=What%20Is%20Gas%20(Ethereum)%3F,on%20the%20Ethereum%20blockchain%20platform.), mientras que usar funciones que solo lean datos no. Esto ocurre en el EVM real, mientras que en los ambientes locales y de pruebas, si bien también tienen un costo, se hace con tokens simulados.

<div id="04"></div>

## 04 - Compilación de la ABI (Interfaz de Aplicación Binaria)

De forma resumida, la ABI es el código compilado de los contratos inteligentes, que en este caso por usar Hardhat, están escritos en el lenguaje Solidity. Los navegadores no pueden interpretar Solidity, es por eso que son compilados a JSON/Javascript. La ABI es lo que el cliente utiliza para poder interactuar con el blockchain, que para este tutorial está construido con React, 

Para compilar el ABI será necesario ingresar el siguiente comando:

```
npx hardhat compile
```

Al hacer eso, deberá aparecer una nueva carpeta en llamada `artifacts` en `src`. A su vez, se apreciará el archivo `artifacts/contracts/Greeter.json`, el cual contiene las propiedades de la ABI.

Para utilizar la ABI en cualquier parte de nuestro frontend, será necesario primero importar el contrato de la ABI así:

```javascript
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
```

Y luego referenciarlo de la siguiente manera:

```javascript
Greeter.abi
```

<div id="05"></div>

## 05 - Despliegue en una red de blockchain local

Lo primero será ingresar el siguiente comando:

```
npx hardhat node
```

Esto inciará el nodo de testeo local, el cual generará 20 cuentas de prueba con sus respectivos **números de cuenta**, **private keys** y 10.000 ETH falsos. Con ello se podrá simular una blockchain desde un servidor local, que se comporta igual que la red real, más no lo es y esta red solo puede interactuar entre los 20 nodos creados. Lucirá parecido a esto, pero con otras 19 cuentas:

```
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========
Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

Nótese cómo está generado en el puerto `8545`.

Ahora el siguiente paso será desplegar el contrato a la red local con el siguiente comando:

```
npx hardhat run scripts/sample-script.js --network localhost
```

La línea de comando debería mostrar entonces dos cosas principales, el mensaje que está en el contrato `Greeting` que dice:

```
Deploying a Greeter with greeting: Hello, Hardhat!
```

Y además, la dirección que se usará en el cliente de la aplicación para comunicarse con el contrato. Será necesario mantener esta dirección a la mano para su respectivo uso:

```
Greeter deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
```

Para poder hacer transacciones, se tendrá que conectar Metamask con alguna de las cuentas creadas al generar los nodos de testeo locales.

Lo primero será abrir la extensión de Metamask y actualizar el network a **Localhost 8545**:

![Cambiar network de metamask a Localhost 8545](https://res.cloudinary.com/divgu8i6t/image/upload/c_scale,w_400/v1637457913/metamask1.jpg)

Luego, importar una cuenta:

![Importar cuenta](https://res.cloudinary.com/divgu8i6t/image/upload/c_scale,w_400/v1637457957/metamask2.jpg)

Se ingresa el private key de la cuenta de prueba a utilizar (que se muestra al momento de crear los nodos, pero a las que también se pueden acceder con el comando `npx hardhat accounts`):

Al hacerlo, debería aparecer el ETH falso en la nueva cuenta:

![Nueva cuenta con ETH falso](https://res.cloudinary.com/divgu8i6t/image/upload/c_scale,w_400/v1637457960/metamask3.jpg)

Nótese cómo la cuenta ya no tiene 10.000 ETH debido a que se usó un poco de gas para poder desplegar el contrato anteriormente.

<div id="06"></div>

## 06 - Conectar con el cliente de React

En este tutorial se usará un UI sencillo con el cual se podrá obtener el último saludo y modificarlo:

![UI de la aplicación](https://res.cloudinary.com/divgu8i6t/image/upload/v1637460240/Selection_102.png)

Para poder construirlo, se puede tomar en cuenta el siguiente código para el componente en `App.js`, explicado por partes:

1. Se importa la biblioteca ethers para poder interactuar con el EVM, y el ABI, con el cual poder interactuar con el contrato
```jsx
import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
```

2. Usar la dirección generada al desplegar el contrato
```jsx
const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
```

3. Se inicia el componente `App` y se guardan los valores del saludo nuevo en el estado del componente
```jsx
function App() {
  const [greeting, setGreetingValue] = useState();
  const [contractGreeting, setContractGreeting] = useState();
```

4. Función que solicita acceso a la cuenta de Metamask. 
Nótese cómo `window.ethereum` es una variable global creada al instalar la extensión de Metamask.
```jsx
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
```

5. Función que llama al contrato y lee su valor actual
```jsx
  async function fetchGreeting() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      try {
        const data = await contract.greet();
        console.log("data: ", data);
        setContractGreeting(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }
```

6. Función que llama al contrato y lo actualiza con el valor del nuevo saludo.
Nótese cómo llama a la función `requestAccount` para que se abra la extensión de Metamask y el usuario tenga que dar atorización, esto debido a que como esta función modifica datos en la blockchain, tiene un costo en gas.
```jsx
  async function setGreeting() {
    if (!greeting) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      await transaction.wait();
      fetchGreeting();
    }
  }
```

7. Este es el JSX del componente que genera el HTML de la página con los botones y el input
```jsx
  return (
    <div className="App">
      <div className="inputs__container">
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input
          onChange={(e) => setGreetingValue(e.target.value)}
          placeholder="Set greeting"
        />
      </div>

      <p>Greeting fetched from contract:</p>
      <h1>{contractGreeting}</h1>
    </div>
  );
}

export default App;

```

En [este link](https://github.com/jaco9419/react-dApp) se incluye el repositorio con el código completo implementado en el tutorial.

Ya con este código en `App.js`, solo faltaría iniciar la aplicación con el comando `npm start`, y se abrirá una pestaña en el navegador con la misma, y ya habrás terminado tu primera dApp con React, ¡felicidades!

<div id="conclusion"></div>

## Conclusión

Con este tutorial se pretendió establecer las condiciones para integrar un proyecto de dApp fulstack, y se dejaron la mayoría de los elementos predefinidos (como el contrato), solo a modo de entender cómo el stack elegido interactúa en un ambiente de pruebas local. La idea es que luego se puedan personalizar los contratos, el UI y poder desplegar a un ambiente en vivo, así que se recomienda profundizar en Solidity y en React para poder llevar este tutorial al siguiente nivel.

