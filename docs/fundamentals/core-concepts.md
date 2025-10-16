---
layout: default
title: Core Concepts
parent: Fundamentals
nav_order: 1
---

# Core System Design Concepts
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Introduction

Understanding core system design concepts is essential for building scalable, reliable, and efficient systems. These concepts form the vocabulary and framework for discussing and evaluating system architectures.

---

## Scalability

### What is Scalability?

Scalability is the capability of a system to handle a growing amount of work by adding resources to the system.

### Types of Scaling

![Vertical vs Horizontal Scaling](https://miro.medium.com/v2/resize:fit:1400/1*On7yijHHXZUAqMTj6fB3Rw.png)

*Visual comparison of vertical (scale-up) vs horizontal (scale-out) scaling strategies.*

#### Vertical Scaling (Scale Up)
{: .text-green-200}

Adding more power to an existing machine (CPU, RAM, storage).

**Advantages:**
- Simpler to implement
- No application changes needed
- Data consistency is easier
- Lower latency (single machine)

**Disadvantages:**
- Hardware limits
- Single point of failure
- More expensive at scale
- Downtime during upgrades

**Example:**
```
Before: 4 CPU cores, 8GB RAM
After:  16 CPU cores, 64GB RAM
```

#### Horizontal Scaling (Scale Out)
{: .text-blue-200}

Adding more machines to your pool of resources.

**Advantages:**
- No upper limit (add more machines)
- Redundancy (fault tolerance)
- Cost-effective
- Can scale incrementally

**Disadvantages:**
- Complex architecture
- Data consistency challenges
- Network latency
- Load balancing needed

**Example:**
```
Before: 1 server
After:  10 servers behind a load balancer
```

{: .important }
> **Real World**: Netflix uses horizontal scaling extensively. They run thousands of microservices across thousands of servers to serve 200+ million subscribers.

---

## Performance Metrics

![Latency vs Throughput](https://miro.medium.com/v2/resize:fit:1400/1*bDYu6z7rUAkH8HxLGvUNOA.png)

*The relationship between latency (response time) and throughput (requests per second).*

### Latency

Time delay between a request and response.

**Types:**
- **Network Latency**: Time for data to travel across the network
- **Processing Latency**: Time to process the request
- **Database Latency**: Time to query and retrieve data

**Common Latency Numbers (2025):**
```
L1 cache reference:              0.5 ns
L2 cache reference:              7 ns
Main memory reference:           100 ns
Read 1 MB sequentially from SSD: 1 ms
Disk seek:                       10 ms
Send packet CA->Netherlands:     150 ms
```

### Throughput

The number of operations a system can handle per unit of time.

**Measured as:**
- Requests per second (RPS)
- Queries per second (QPS)
- Transactions per second (TPS)
- Bits per second (bps)

**Example:**
```
Low throughput:  100 requests/second
High throughput: 1,000,000 requests/second
```

### Latency vs Throughput Trade-off

{: .highlight }
**Key Insight**: You can have high throughput with high latency, or low latency with low throughput. The goal is to maximize throughput while maintaining acceptable latency.

**Example:**
- **Batch processing**: High throughput, high latency (process 1M records in 1 hour)
- **Real-time API**: Low latency, moderate throughput (respond in 100ms, handle 10K RPS)

---

## Availability

### Definition

The percentage of time a system is operational and accessible.

**Formula:**
```
Availability = (Uptime / (Uptime + Downtime)) × 100%
```

### Availability Levels (SLA Standards)

| Availability | Downtime/Year | Downtime/Month | Downtime/Week | Use Case |
|:-------------|:--------------|:---------------|:--------------|:---------|
| 90% (1 nine) | 36.5 days | 72 hours | 16.8 hours | Batch systems |
| 99% (2 nines) | 3.65 days | 7.2 hours | 1.68 hours | Internal tools |
| 99.9% (3 nines) | 8.76 hours | 43.2 minutes | 10.1 minutes | B2B services |
| 99.99% (4 nines) | 52.6 minutes | 4.32 minutes | 1.01 minutes | Payment systems |
| 99.999% (5 nines) | 5.26 minutes | 25.9 seconds | 6.05 seconds | Critical infrastructure |

{: .note }
**Real World**: AWS S3 promises 99.999999999% (11 nines) durability and 99.99% availability.

### Techniques to Improve Availability

1. **Redundancy**: Multiple instances of services
2. **Failover**: Automatic switching to backup systems
3. **Health Checks**: Monitoring and automatic recovery
4. **Geographic Distribution**: Multiple data centers
5. **Graceful Degradation**: Partial functionality during failures

---

## Reliability

### Definition

The probability that a system will perform its intended function without failure for a specified period.

### Key Principles

#### Fault Tolerance
System continues operating even when components fail.

**Techniques:**
- Replication
- Redundancy
- Error detection and correction
- Graceful degradation

#### Resilience
System's ability to recover from failures quickly.

**Techniques:**
- Circuit breakers
- Retry mechanisms with exponential backoff
- Bulkheads (isolation)
- Chaos engineering

---

## Consistency

### What is Consistency?

All nodes in a distributed system see the same data at the same time.

### Consistency Levels

#### Strong Consistency
{: .text-green-200}

After a write, all subsequent reads return the new value.

**Use Cases:**
- Banking transactions
- Inventory management
- Booking systems

**Trade-off**: Lower availability, higher latency

#### Eventual Consistency
{: .text-blue-200}

After a write, reads will eventually return the new value (usually within milliseconds).

**Use Cases:**
- Social media feeds
- DNS
- Shopping carts
- Analytics

**Trade-off**: Higher availability, lower latency, temporary inconsistency

#### Weak Consistency
{: .text-purple-200}

No guarantee that reads will return the new value.

**Use Cases:**
- Real-time video/voice calls
- Live gaming
- Stock prices

---

## Maintainability

### Definition

How easy it is to operate, monitor, and modify the system.

### Key Aspects

1. **Operability**: Easy to keep the system running
2. **Simplicity**: Easy to understand
3. **Evolvability**: Easy to make changes

### Best Practices

- Clear documentation
- Comprehensive logging
- Monitoring and alerting
- Automated testing
- CI/CD pipelines
- Code review processes

---

## Efficiency

### Resource Utilization

How effectively a system uses resources (CPU, memory, network, storage).

**Metrics:**
- CPU utilization %
- Memory usage
- Network bandwidth
- Storage I/O operations per second (IOPS)

### Cost Efficiency

Balance between performance and cost.

**Considerations:**
- Infrastructure costs (compute, storage, network)
- Operational costs (monitoring, support)
- Development costs (time to market)
- Opportunity costs

{: .highlight }
**Pro Tip**: "Premature optimization is the root of all evil" - Donald Knuth. Focus on getting it working, then optimize based on measurements.

---

## Real-World Examples

### Example 1: E-commerce Platform

**Requirements:**
- **Scalability**: Handle Black Friday traffic (10x normal load)
- **Availability**: 99.99% uptime (4.32 min/month downtime)
- **Latency**: Page load < 2 seconds
- **Consistency**: Strong for inventory, eventual for reviews

**Design Decisions:**
- Horizontal scaling with auto-scaling
- Multi-region deployment
- CDN for static assets
- Separate databases for transactions vs. analytics

### Example 2: Social Media Feed

**Requirements:**
- **Scalability**: Billions of users
- **Availability**: 99.9% uptime acceptable
- **Latency**: Feed load < 1 second
- **Consistency**: Eventual consistency is fine

**Design Decisions:**
- Write-through cache for feeds
- Async job processing for post distribution
- Sharded databases by user ID
- Eventually consistent read replicas

---

## Practice Questions

### Question 1
{: .text-purple-200}

A startup is building a ride-sharing app. Initially, they have 1000 users in one city. How should they approach scalability?

<details markdown="1">
<summary>Answer</summary>

**Start with vertical scaling:**
- Simple architecture (monolithic app)
- Single database server
- Scale up as needed (larger instance)

**Plan for horizontal scaling:**
- Design stateless services
- Use managed databases (RDS/Cloud SQL)
- Implement caching layer early
- Prepare for load balancing

**Transition point**: When vertical scaling becomes too expensive or you hit hardware limits (typically 10,000-100,000 users).

</details>

### Question 2
{: .text-purple-200}

Why does Netflix use eventual consistency for viewing history but strong consistency for billing?

<details markdown="1">
<summary>Answer</summary>

**Viewing History (Eventual Consistency):**
- Not critical if slightly out of sync
- High availability is more important
- Better user experience (lower latency)
- Can tolerate temporary inconsistencies

**Billing (Strong Consistency):**
- Critical for financial accuracy
- Cannot charge customer twice
- Must maintain transaction integrity
- Regulatory requirements
- Lower frequency of operations (acceptable higher latency)

</details>

---

## Summary

| Concept | Key Question | Trade-off |
|:--------|:-------------|:----------|
| **Scalability** | Can it handle growth? | Simplicity vs. Scale |
| **Availability** | Is it always accessible? | Cost vs. Uptime |
| **Latency** | How fast does it respond? | Speed vs. Throughput |
| **Consistency** | Is data always correct? | Correctness vs. Availability |
| **Reliability** | Does it work correctly? | Complexity vs. Fault Tolerance |

---

## Next Steps

- Learn about [CAP Theorem](cap-theorem) to understand consistency trade-offs
- Explore [Design Patterns](../patterns/) for common architectural solutions
- Study [Infrastructure Components](../components/) to understand building blocks

---

## Additional Resources

### Articles
- [Scalability for Dummies](https://www.lecloud.net/tagged/scalability)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

### Books
- *Designing Data-Intensive Applications* - Chapter 1: Reliable, Scalable, and Maintainable Applications

### Videos
- [Scaling Instagram Infrastructure](https://www.youtube.com/watch?v=hnpzNAPiC0E)
- [System Design: Scalability](https://www.youtube.com/watch?v=-W9F__D3oY4)
