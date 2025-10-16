---
layout: default
title: CAP Theorem
parent: Fundamentals
nav_order: 2
---

# CAP Theorem
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What is CAP Theorem?

The CAP theorem, also known as Brewer's theorem (proposed by Eric Brewer in 2000), states that a distributed data store can provide only **two out of three** of the following guarantees simultaneously:

- **C**onsistency
- **A**vailability
- **P**artition Tolerance

{: .important }
> In the presence of a network partition, you must choose between consistency and availability. You cannot have both.

### CAP Theorem Visualization

<div style="text-align: center; margin: 3rem 0; padding: 2rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.1);">
  <img src="https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/bgLMI2u.png" alt="CAP Theorem" style="max-width: 100%; height: auto; border-radius: 16px; box-shadow: 0 20px 60px rgba(102, 126, 234, 0.5); border: 2px solid rgba(102, 126, 234, 0.3);">
</div>

*The CAP triangle: In a distributed system with network partitions, you must choose between Consistency (CP) or Availability (AP).*

---

## The Three Guarantees

### Consistency (C)
{: .text-green-200}

**Definition**: Every read receives the most recent write or an error.

All nodes see the same data at the same time. After a write completes, all subsequent reads must return that value until it's updated again.

**Example:**
```
User A writes: X = 5
User B reads:  X = 5  ✓ (must be 5, not old value)
```

**Real-world analogy**: Bank account balance - must be accurate across all ATMs instantly.

### Availability (A)
{: .text-blue-200}

**Definition**: Every request receives a (non-error) response, without guarantee that it contains the most recent write.

The system remains operational and responsive 100% of the time, even if some nodes are down.

**Example:**
```
User A writes: X = 5
User B reads:  X = 3  ✓ (old value is OK, but must get a response)
```

**Real-world analogy**: Social media feed - always accessible, even if slightly stale.

### Partition Tolerance (P)
{: .text-purple-200}

**Definition**: The system continues to operate despite arbitrary message loss or failure of part of the system.

The system continues functioning when network failures prevent communication between nodes.

**Example:**
```
Data Center 1 ←--X--→ Data Center 2
(Network partition occurs)
Both data centers continue operating independently
```

**Real-world analogy**: GPS navigation - works offline with cached maps.

{: .highlight }
**Key Insight**: In distributed systems, network partitions WILL happen. Therefore, you must choose between Consistency and Availability.

### Database Examples by CAP Category

| Category | Priority | Databases | Use Cases |
|:---------|:---------|:----------|:----------|
| **CP** | Consistency + Partition Tolerance | MongoDB, HBase, Redis, ZooKeeper | Banking, Bookings, Inventory |
| **AP** | Availability + Partition Tolerance | Cassandra, DynamoDB, CouchDB, Riak | Social Media, Analytics, Caching |
| **CA** | Consistency + Availability | PostgreSQL, MySQL (single node) | Traditional RDBMS |

*Real-world database choices based on CAP trade-offs.*

---

## CAP Combinations

### CP - Consistency + Partition Tolerance
{: .text-green-200}

**Sacrifice**: Availability

When a partition occurs, the system returns errors or times out rather than returning stale data.

**Characteristics:**
- Waits for network to recover before responding
- May reject writes during partitions
- Ensures data correctness

**Use Cases:**
- Banking and financial systems
- Inventory management
- Reservation systems
- Any system where correctness is critical

**Examples:**
- **MongoDB** (with default settings)
- **HBase**
- **Redis** (with persistence)
- **ZooKeeper**
- Traditional **RDBMS** (with distributed transactions)

**Real-world scenario:**
```
E-commerce inventory system:
- 5 items in stock
- Two users try to buy simultaneously
- During network partition, system blocks purchases
- Prevents overselling even if less available
```

### AP - Availability + Partition Tolerance
{: .text-blue-200}

**Sacrifice**: Consistency

System remains available during partitions but may return stale data. Eventually syncs when partition heals.

**Characteristics:**
- Always responsive
- Accepts writes during partitions
- Reconciles conflicts later
- Uses eventual consistency

**Use Cases:**
- Social media platforms
- Content management systems
- Shopping carts
- Real-time collaboration tools
- Analytics and logging

**Examples:**
- **Cassandra**
- **DynamoDB**
- **CouchDB**
- **Riak**
- **Voldemort**

**Real-world scenario:**
```
Social media posts:
- User posts from US
- User in Europe sees it 2 seconds later (eventual)
- During partition, both regions serve slightly different feeds
- Eventually consistent when connection restored
```

### CA - Consistency + Availability
{: .text-red-200}

**Sacrifice**: Partition Tolerance

{: .warning }
**Important**: In distributed systems, CA is not realistic because network partitions are inevitable. CA systems are essentially single-node or same-datacenter systems.

**Characteristics:**
- Strong consistency
- Always available
- No network partitions tolerated
- Single point of failure

**Examples:**
- Traditional single-instance **RDBMS** (PostgreSQL, MySQL)
- **LDAP**
- Single-machine file systems

---

## Practical Considerations

### Network Partitions are Inevitable

In real-world distributed systems:
- Network failures happen
- Data centers lose connectivity
- Switches and routers fail
- Cables get cut
- Wireless connections drop

{: .highlight }
**Reality Check**: Since partition tolerance is not negotiable, the real choice is between **CP** and **AP**.

### The Spectrum Approach

Modern systems don't strictly choose one or the other. Instead, they:

1. **Default behavior** + **Tunable consistency**
   - Cassandra: AP by default, tunable to CP
   - MongoDB: CP by default, tunable to AP

2. **Hybrid approaches**
   - Strong consistency for critical data
   - Eventual consistency for non-critical data

3. **Different guarantees per operation**
   - Reads: eventual consistency
   - Writes: strong consistency

---

## Real-World Examples

### Example 1: DynamoDB (AP)
{: .text-blue-200}

**Default Configuration:**
- Eventually consistent reads (faster, cheaper)
- Strongly consistent reads (optional, slower)
- Always available

**Use case**: Shopping cart
```
Scenario: User adds item to cart during network partition

✓ Write succeeds in one region
✓ User sees item in cart immediately
✓ Other regions eventually sync
✗ Brief inconsistency window (acceptable)
```

### Example 2: Google Spanner (CP with high availability)
{: .text-green-200}

**Configuration:**
- Strong consistency using synchronized clocks
- High availability through replication
- Accepts higher latency for consistency

**Use case**: Global financial transactions
```
Scenario: Money transfer during network partition

✓ Transaction waits for consensus
✓ Ensures no double-spending
✓ May timeout if partition too long
✗ Temporarily unavailable (acceptable for correctness)
```

### Example 3: Cassandra (Tunable)
{: .text-purple-200}

**Tunable Consistency Levels:**

```
// Strong consistency (CP behavior)
READ: QUORUM
WRITE: QUORUM

// High availability (AP behavior)
READ: ONE
WRITE: ONE

// Eventual consistency (AP behavior)
READ: ONE
WRITE: ANY
```

---

## Choosing Between CP and AP

### Choose CP (Consistency + Partition Tolerance) when:

✓ Data accuracy is critical
✓ Losing availability temporarily is acceptable
✓ Users can wait for correct data
✓ Regulatory compliance requires accuracy

**Examples:**
- Banking systems
- Stock trading platforms
- Booking/reservation systems
- Medical records
- Voting systems

### Choose AP (Availability + Partition Tolerance) when:

✓ System must always be responsive
✓ Temporary inconsistency is acceptable
✓ High read throughput is needed
✓ User experience is priority

**Examples:**
- Social media feeds
- Content delivery
- Shopping carts
- Real-time notifications
- Analytics dashboards

---

## Beyond CAP: PACELC

The PACELC theorem extends CAP:

**If there is a Partition (P):**
- Choose between **A**vailability and **C**onsistency

**Else (E):**
- Choose between **L**atency and **C**onsistency

{: .note }
Even when the system is running normally (no partition), you must trade off between latency and consistency.

### PACELC Examples

| System | Partition | No Partition | Classification |
|:-------|:----------|:-------------|:---------------|
| DynamoDB | AP | EL (low latency) | PA/EL |
| MongoDB | CP | EC (consistent) | PC/EC |
| Cassandra | AP | EL (low latency) | PA/EL |
| HBase | CP | EC (consistent) | PC/EC |

---

## Common Misconceptions

### Misconception 1: "CAP means pick 2 of 3"

{: .warning }
**Reality**: You must have partition tolerance in distributed systems. The real choice is between consistency and availability during a partition.

### Misconception 2: "It's a binary choice"

{: .warning }
**Reality**: It's a spectrum. Systems can be tuned, can use different strategies for different data, and can make different trade-offs per operation.

### Misconception 3: "NoSQL is always AP"

{: .warning }
**Reality**: Many NoSQL databases offer tunable consistency. MongoDB and Redis can be CP. Cassandra can behave like CP with the right settings.

---

## Design Decision Framework

### Step 1: Identify Critical Data

```
Critical Data (CP):
- Financial transactions
- Inventory counts
- User authentication
- Reservations

Non-Critical Data (AP):
- User profiles
- Product reviews
- View counts
- Recommendations
```

### Step 2: Define SLA Requirements

```
Availability Target: 99.99%
Acceptable Inconsistency Window: 100ms - 1 second
Max Latency: 200ms p99
```

### Step 3: Choose Architecture

```
Hybrid Approach:
- CP database for transactions (PostgreSQL)
- AP cache for reads (Redis with eventual consistency)
- AP database for analytics (Cassandra)
```

---

## Interview Tips

### Common Questions

**Q: "How would you design Instagram's photo feed?"**

<details markdown="1">
<summary>Answer</summary>

**Choose AP**:
- Availability is critical (users always see feeds)
- Eventual consistency is acceptable (OK if posts appear after slight delay)
- Partition tolerance needed (global distribution)

**Implementation**:
- Cassandra for feed storage
- Eventually consistent reads
- Write-through cache
- Async post fan-out

</details>

**Q: "Design a seat booking system for a concert"**

<details markdown="1">
<summary>Answer</summary>

**Choose CP**:
- Consistency is critical (no double-booking)
- Temporary unavailability acceptable (users can retry)
- Partition tolerance needed (multiple ticket counters)

**Implementation**:
- PostgreSQL with strong consistency
- Distributed locks for seat selection
- Two-phase commit for bookings
- Queue system to handle load

</details>

---

## Summary

| Aspect | CP Systems | AP Systems |
|:-------|:-----------|:-----------|
| **Priority** | Correctness | Availability |
| **During Partition** | Returns error/timeout | Returns stale data |
| **Latency** | Higher | Lower |
| **Use Cases** | Banking, bookings | Social media, caching |
| **Examples** | MongoDB, HBase | Cassandra, DynamoDB |

{: .important }
**Key Takeaway**: There's no "best" choice. The right architecture depends on your specific requirements, use case, and acceptable trade-offs.

---

## Next Steps

- Explore [Database Selection](../components/) based on CAP requirements
- Study [Design Patterns](../patterns/) for different architectural choices
- Practice with [Interview Problems](../interview-prep/)

---

## Additional Resources

### Papers
- [Brewer's CAP Theorem](https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/)
- [Eventually Consistent - Revisited](https://www.allthingsdistributed.com/2008/12/eventually_consistent.html) by Werner Vogels

### Articles
- [CAP Theorem: You Can't Have It All](https://www.dataversity.net/cap-theorem-you-cant-have-it-all/)
- [A Critique of the CAP Theorem](https://arxiv.org/abs/1509.05393)

### Videos
- [CAP Theorem Explained](https://www.youtube.com/watch?v=k-Yaq8AHlFA)
- [Designing for High Availability](https://www.youtube.com/watch?v=8BLJObHMsLQ)
