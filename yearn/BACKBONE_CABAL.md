# YCabal

> Monopolizing transaction flow for arbitrage batching with miner support

## Overview

<pre>
Proposal: YCabal
Project: SushiSwap / DEX's
Status: Active
Version: Draft 0.2.0
Timeframe: 60d
</pre>

This is a strategy that realizes profit by smart transaction batching for the purposes of arbitrage by controlling transaction ordering.

Right now every user sends a transaction directly to the network mempool and thus give away the arbitrage, front-running, back-running opportunities to miners(or random bots). 

YCabal creates a virtualized mempool (i.e. a MEV-relay network) that aggregates transactions (batching), such transactions include:

DEX trades <br>
Interactions with protocols <br>
Auctions <br>
etc <br>

#### TL;DR - Users can opt in and send transactions to YCabal and in return for not having to pay for gas for their transaction we batch process it and take the arbitrage profit from it. Risk by inventory price risk is carried by a Vault, where Vault depositers are returned the profit the YCabal realizes


## Efficiency by Aggregation

By leveraging batching, miner transaction flow, and providing additional performant utilities (e.g. faster calculations for finalizing),
we can realize the following potential avenues for realizing profitable activites:

- Meta Transaction Funtionality
- Order trades in different directions sequentially to produce positive slippage
- Backrun Trades
- Frontrun Trades
- At least 21k in the base cost on every transaction is saved 

> **If we have access to transactions before the network we can generate value because we can calculate future state, off-chain**


> Think of this as creating a Netting Settlement System (whereas blockchains are a real time gross settlement system)

## User Capture

The whole point of Backbone Cabal is to maximize profits from user actions which gets distributed for free to miners and bots. 
We intent to extract this value and provide these profits as `**cashback**` to users.

**For example**: A SushiSwap trader who loses `X%` to slippage during his trade can now get `X-Y %` slippage on his trade, because we were able to backrun his trade and give him the arbitrage profits. 


Backbone Cabal gets better and better as more transactions flow because there is less uncertaintity about the future state of the network.

### Gas Free Trading

- SushiSwap as an example

### Rebates 

Profits can be rebated to end users 

### Volume Mining

Other protocols can join the network and turn their transaction flow into a book of bussines with our network of participants

<br>

## Solution Set 

ArcherDAO <br>
Manifold Finance <br>
Kafka based JSON RPC and API Gateway <br>
kdb+  <br>

## Attack Vectors against the Backbone

DDoS <br>
Exploits <br>
Additional Disclosures forthcoming  <br>

## Ecosystem Benefits

- Can act as a failover web3 provider (e.g. Infura/AlchemyAPI outage)
- Transaction Monitoring 
- Security Operations for Contracts

## Engine

YCabal uses a batch auction-based matching engine to execute orders. Batch auctions were
chosen to reduce the impact of frontrunning on the exchange. 

1. All orders for the given market are collected.

2. Orders beyond their time-in-force are cancelled.

3. Orders are placed into separate lists by market side, and aggregate supply and
demand curves are calculated.

4. The matching engine discovers the price at which the aggregate supply and demand
curves cross, which yields the clearing price. If there is a horizontal cross - i.e., two
prices for which aggregate supply and demand are equal - then the clearing price is the
midpoint between the two prices.

5. If both sides of the market have equal volume, then all orders are completely filled. If
one side has more volume than the other, then the side with higher volume is rationed
pro-rata based on how much its volume exceeds the other side. For example, if
aggregate demand is 100 and aggregate supply is 90, then every order on the demand
side of the market will be matched 90%.

Orders are sorted based on their price, and order ID. Order IDs are generated at post time, and
is the only part of the matching engine that is time-dependent. However, the oldest order IDs
are matched first so there is no incentive to post an order ahead of someone else’s.