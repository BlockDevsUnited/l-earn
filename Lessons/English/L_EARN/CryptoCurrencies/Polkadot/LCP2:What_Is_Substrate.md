# Lesson 2: What is Substrate?

In this lesson you will learn about Substrate: the next generation framework for building blockchains.
At the end of this lesson, you can submit a request and get tested on your knowledge for a reward.
This lesson has 4 main sections and a practice section.

The lesson is designed to point you to various resources that will help you understand some fundamental concepts in Substrate. 
The contents in these resources contain a lot more information than the write-up of this lesson. 
You are expected to explore these by following each hyperlink and reading the required reading before moving onto the next section. 

## High level and architecture

> Required reading:
>
> - [**Using Substrate**](https://docs.substrate.io/v3/getting-started/overview/#usage)
> - [**Node architecture**](https://docs.substrate.io/v3/getting-started/architecture/)

At a high level, [Substrate](https://substrate.io/) gives developers the ability to build application specific blockchains.
By design, these blockchains can become parachains or parathreads to [the Polkadot relay chain](https://polkadot.js.org/apps/#/explorer).
However, some blockchain implementations may prefer to be standalone chains (or "solo-chains") with their own relay chain implementation.

### Network layers 

It helps to think about the types of network layers we're talking about when looking at what Substrate can enable in terms of building "Polkadot-like networks".

- **Layer 0** - Relay chain blockchains like Polkadot are considered as "layer-zero" blockchains. 
    That's because they provide the networking and consensus protocols designed to connect and secure application specific blockchains that want to benefit from sitting ontop of.

- **Layer 1** - Application specific blockchains that are connected to an underlying network layer. 
    For example, [Polkadot currently has Statemint](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot.api.onfinality.io%2Fpublic-ws#/parachains) as its first parachain.
    This parachain's sole application domain is to provide a layer for anyone to mint fungible and non-fungible assets. Check it's source code [here](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot.api.onfinality.io%2Fpublic-ws#/parachains).

- **Layer 2** - Business logic ontop of the application specific blockchain. 
    This could be the additional pallets or smart contracts of a chain. 

Each of these layers can be built using Substrate. This implies:

- Substrate allows customizing logic on the Node and client level (core libraries).
- Substrate provides ways to customize on-chain governance and lower-level consensus mechanisms (consensus libraries).
- Substrate can be used to write a blockchain's application business logic and smart contracts (FRAME libraries).

This gives developers building with Substrate (or "runtime engineers") a lot of freedom in terms of extending low level blockchain capabilities or customizing higher-order logic. 

For any of these layers, developers can use FRAME: a crate system that make it easy to write pallets for Substrate blockchains. 
For smart contract logic, developers can use ink!: an [eDSL](https://wiki.haskell.org/Embedded_domain_specific_language) to write smart contracts in Rust for blockchains built with [Substrate](https://github.com/paritytech/substrate). 
There are lots of other efforts that enable to write smart contracts and smart contracting tooling for Substrate chains.

## What are Pallets?

> Required reading:
>
> - [**FRAME primitives**](https://docs.substrate.io/v3/concepts/runtime/#frame-primitives)
> - [**Section on FRAME and Pallets**](https://docs.substrate.io/v3/runtime/frame/#pallets)

All the capabilities of a Substrate node's runtime comes from various "pallets", each of which is designed to fullfill a set of tasks. 
For example, Polkadot has [46 pallets at the time of writing](https://polkadot.subscan.io/runtime). 
A pallet can perform highly customizable logic designed to execute according to the rules of the blockchain.
[FRAME](https://docs.substrate.io/v3/runtime/frame/) makes it easy for developers to build the application specific logic of their runtime. 

## What's the difference between a Smart Contract and Pallet? 

> Required reading: 
>
> - [**Smart contract toolkits**](https://docs.substrate.io/v3/runtime/smart-contracts/)
> - [**ink! vs. Solidity**](https://paritytech.github.io/ink-docs/ink-vs-solidity)

There is common confusion around whether to build a smart contract or a pallet; a dApp or a blockchain.
The material in the required reading section will help you get a better understanding of the tradeoffs and advantages of choosing one over the other &mdash; even though they are not mutually exclusive!

## Why Rust ?

> Required reading:
>
> - [**Cargo and crates.io**](https://doc.rust-lang.org/book/ch14-00-more-about-cargo.html)
> - [**Rust blog post**](https://thenewstack.io/rust-by-the-numbers-the-rust-programming-language-in-2021/)
> - [**Why Rust for smart contracts?**](https://paritytech.github.io/ink-docs/why-rust-for-smart-contracts)
> - ***All** of the hyperlinks in this section*

Beyond the fact that Rust provides high performance, type safety and memory efficiency, it provides Substrate with unique characteristics. Generally speaking, these are:

- [**Cargo**](https://doc.rust-lang.org/cargo/guide/why-cargo-exists.html). This is Rust's package management tool, also containing CLI tools for running tests, building documentation, benchmarks and more. 

- [**Crates.io**](https://crates.io/). This is Rust's community managed package registry. 
Any Rust developer can publish their crates there for others to use in their projects. 
This is useful to make Substrate accessible to developers and for developers to reuse existing modules in their projects.

- [**Types, traits and generics**](https://doc.rust-lang.org/book/ch10-00-generics.html). Rust has a sophisticated [trait system](https://doc.rust-lang.org/book/ch19-03-advanced-traits.html) that helps developers make use of Substrate's many layers of abstraction.

- [**Metaprogramming**](https://doc.rust-lang.org/book/ch19-06-macros.html). Substrate uses macros to introduce the concept of "metaprogramming" to its codebase, i.e. writing code that writes code.
For example, [FRAME uses macros](https://docs.substrate.io/v3/runtime/macros/) to alleviate the need to write the heavy lifting code that is required for a pallet to integrate into a runtime. 
Similarly, [ink!](https://paritytech.github.io/ink-docs/) uses macros to handle common type creations and functions.

- [**Webassembly**](https://webassembly.org/). Rust compiles to executable Wasm (Webassembly) byte code, enabling Substrate runtimes to also compile to Wasm. 
Beyond beign a powerful "next-generation web" technology, for Substrate, having Wasm at the core of its design means a few very specific things:
    - **Upgradability**. First and foremost, Wasm is a key piece of technology for [forkless runtime upgrades](https://docs.substrate.io/v3/runtime/upgrades/).
    - **Portability**. Wasm has use cases in selecting validators in cross chain consensus between relay-chain and parachains.
    - **Smart contract compatibility**. Any Smart Contract that compiles to Wasm can be executed by a compatible Substrate node. See a [list of key advantages of having Wasm smart contracts](https://paritytech.github.io/ink-docs/why-webassembly-for-smart-contracts).
    - **Light-client ready**. Wasm is also a key piece in how all Substrate chains are [light-client ready out of the box](https://paritytech.github.io/substrate-connect/#wasm-light-clients). 

## Practice

### Install cargo 

Complete this [guide on getting started with Cargo](https://doc.rust-lang.org/cargo/getting-started/first-steps.html).

### Clone a copy of Substrate

1. Get a local copy of the [Substrate](https://github.com/paritytech/substrate) codebase.
1. Under the [FRAME folder](https://github.com/paritytech/substrate/tree/master/frame), pick a pallet that interests you, `cd` into it and look through its code.
1. Run the tests for that pallet using `cargo test`.
1. Build and open the docs using `cargo doc --open`.


## Testing

After completing this lesson, let us know when you are ready to take the test. 
The tester will ask you questions about the material and gauge whether you pass the test or not based on your understanding of the material in this lesson.
You will also be asked to show what you learned from completing the [practice section](#Practice).
The reward for passing is 0.2 DOT.

## Resources

* [Substrate developer hub](https://docs.substrate.io/)
* [Rust book](https://doc.rust-lang.org/book/)
* [Subtsrate codebase](https://github.com/paritytech/substrate)

------------------------------------------

*Are you contributing here as an author for this L_EARN resource? 
Make sure to add your name, the commit hash of your contribution and your DOT or ETH tipping address below so that others can spread their love ❤️.*

| Author     | Tip Jar Address |  Commit |
|----------|:---------------:| -------:|
|   Sacha       |   1wBg4LZz2rALV9z2awLnrUQLGmfjhx2Fa6F6nGGd46m2q3K  | [`1238`][contributor-commit-1]|


<!--- list of notable commits --->
[contributor-commit-1]: https://github.com/BlockDevsUnited/learn-and-earn/commit/12388d51a204bfceebc85c676def44604168aafb