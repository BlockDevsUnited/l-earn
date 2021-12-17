# Ethereum Naming System

## What is it?
The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain.
ENS’s job is to map human-readable names like ‘alice.eth’ to machine-readable identifiers such as Ethereum addresses, other cryptocurrency addresses, content hashes, and metadata. ENS also supports ‘reverse resolution’, making it possible to associate metadata such as canonical names or interface descriptions with Ethereum addresses.
Top-level domains, like ‘.eth’ and ‘.test’, are owned by smart contracts called registrars, which specify rules governing the allocation of their subdomains. Anyone may, by following the rules imposed by these registrar contracts, obtain ownership of a domain for their own use. ENS also supports importing in DNS names already owned by the user for use on ENS.

## ENS Architecture
ENS has two principal components: the registry, and resolvers.
![image](https://user-images.githubusercontent.com/67475555/146596323-0dd94755-3fc8-485f-862c-822546f1ad80.png)

### The ENS registry consists of a single smart contract that maintains a list of all domains and subdomains, and stores three critical pieces of information about each:
-The owner of the domain

-The resolver for the domain

-The caching time-to-live for all records under the domain.

The owner of a domain may be either an external account (a user) or a smart contract. A registrar is simply a smart contract that owns a domain and issues subdomains of that domain to users that follow some set of rules defined in the contract.

### Owners of domains in the ENS registry may:
-Set the resolver and TTL for the domain

-Transfer ownership of the domain to another address

-Change the ownership of subdomains

The ENS registry is deliberately straightforward and exists only to map from a name to the resolver responsible for it.
Resolvers are responsible for the actual process of translating names into addresses. Any contract that implements the relevant standards may act as a resolver in ENS. General-purpose resolver implementations are offered for users whose requirements are straightforward, such as serving an infrequently changed address for a name.
Resolving a name in ENS is a two-step process: First, ask the registry what resolver is responsible for the name, and second, ask that resolver for the answer to your query.

## Namehash

Namehash is a recursive process that can generate a unique hash for any valid domain name. Starting with the namehash of any domain - for example, 'alice.eth' - it's possible to derive the namehash of any subdomain - for example 'iam.alice.eth' - without having to know or handle the original human-readable name. It is this property that makes it possible for ENS to provide a hierarchal system, without having to deal with human-readable text strings internally.
Before being hashed with namehash, names are first normalized, using a process called UTS-46 normalization. This ensures that upper- and lower-case names are treated equivalently, and that invalid characters are prohibited. Anything that hashes and resolves a name must first normalize it, to ensure that all users get a consistent view of ENS.

For details on how namehash and normalization works, see the developer documentation on name processing.

## Getting Started

### I'm a dapp developer and want to add ENS support to my dapp

Check out the dapp developer guide, starting with ENS Enabling your Dapp. You'll want to choose one of the many available ENS Libraries to get started working with ENS.

### I'm a contract developer and want to interact with ENS from my contract code

Check out the Contract Developer Guide, starting with Resolving Names On-chain. You can also write your own resolver (to customise the process of looking up names), or your own registrar (to customise the process of registering new names).

### I want reference documentation for the ENS smart contracts

Check out the Contract API Reference. We have reference documentation for ENS's core contract, the registry, for resolvers, and for commonly-used registrars such as the Test registrar, reverse registrar, and the .eth registrar.





