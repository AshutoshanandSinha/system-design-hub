---
layout: default
title: Advanced Topics
nav_order: 8
has_children: true
permalink: /advanced-topics/
---

# Advanced System Design Topics
{: .no_toc }

Deep dives into complex distributed systems concepts for senior and staff+ engineers.
{: .fs-6 .fw-300 }

---

## Overview

This section covers advanced topics typically encountered by senior, staff, and distinguished engineers designing complex distributed systems at scale.

## Who Should Read This

- **Senior Engineers** (5-8 years) looking to level up
- **Staff+ Engineers** (8+ years) solving complex architectural problems
- **System Architects** designing large-scale distributed systems
- **Anyone** interested in cutting-edge distributed systems concepts

## Topics Covered

### Distributed Systems

- **[Consensus Algorithms](/advanced-topics/consensus)** - Paxos, Raft, and practical implementations
- **[Distributed Transactions](/advanced-topics/distributed-transactions)** - 2PC, 3PC, Saga patterns
- **[Clock Synchronization](/advanced-topics/clocks)** - Logical clocks, vector clocks, TrueTime
- **[Conflict Resolution](/advanced-topics/conflict-resolution)** - CRDTs, operational transformation

### Data Systems

- **[Advanced Database Concepts](/advanced-topics/databases)** - Isolation levels, MVCC, WAL
- **[Time-Series Databases](/advanced-topics/time-series)** - Design patterns for temporal data
- **[Graph Databases](/advanced-topics/graph-databases)** - When and how to use
- **[NewSQL](/advanced-topics/newsql)** - CockroachDB, TiDB, Google Spanner

### Architecture Patterns

- **[Multi-Region Architecture](/advanced-topics/multi-region)** - Global distribution strategies
- **[Event Sourcing at Scale](/advanced-topics/event-sourcing)** - Beyond the basics
- **[CQRS Advanced](/advanced-topics/cqrs-advanced)** - Complex read/write patterns
- **[Service Mesh](/advanced-topics/service-mesh)** - Istio, Linkerd, and when to use

### Performance & Optimization

- **[Performance Engineering](/advanced-topics/performance)** - Profiling, optimization techniques
- **[Cost Optimization](/advanced-topics/cost-optimization)** - Cloud cost management at scale
- **[Capacity Planning](/advanced-topics/capacity-planning)** - Forecasting and provisioning
- **[Cache Invalidation](/advanced-topics/cache-invalidation)** - One of the two hard problems

### Reliability & Operations

- **[Chaos Engineering](/advanced-topics/chaos-engineering)** - Netflix Simian Army, principles
- **[Site Reliability Engineering](/advanced-topics/sre)** - SLOs, SLIs, error budgets
- **[Disaster Recovery](/advanced-topics/disaster-recovery)** - Multi-region failover, backups
- **[Observability](/advanced-topics/observability)** - Beyond monitoring

### Security

- **[Zero Trust Architecture](/advanced-topics/zero-trust)** - Modern security model
- **[Encryption at Scale](/advanced-topics/encryption)** - Key management, performance
- **[DDoS Mitigation](/advanced-topics/ddos)** - Defense strategies
- **[OAuth2 & OIDC Deep Dive](/advanced-topics/auth)** - Modern authentication

### Emerging Technologies

- **[ML System Design](/advanced-topics/ml-systems)** - Training pipelines, inference, feature stores
- **[Blockchain Fundamentals](/advanced-topics/blockchain)** - Distributed ledger basics
- **[Edge Computing](/advanced-topics/edge-computing)** - CDN++, Cloudflare Workers
- **[WebAssembly](/advanced-topics/wasm)** - Beyond the browser

---

## Distributed Consensus

### The Problem

How do multiple nodes in a distributed system agree on a single value in the presence of failures?

### Algorithms

#### Paxos
{: .text-green-200}

**Developed**: 1990s by Leslie Lamport

**Key Concepts**:
- Proposer, Acceptor, Learner roles
- Two phases: Prepare and Accept
- Majority-based consensus

**Challenges**:
- Difficult to understand and implement
- Many edge cases
- Performance under contention

**Used By**: Google Chubby, Apache ZooKeeper (partially)

#### Raft
{: .text-blue-200}

**Developed**: 2014 by Diego Ongaro & John Ousterhout

**Key Concepts**:
- Leader election
- Log replication
- Safety guarantees

**Advantages**:
- Easier to understand than Paxos
- Strong leader model
- Better modularity

**Used By**: etcd, Consul, CockroachDB

#### Practical Byzantine Fault Tolerance (PBFT)
{: .text-purple-200}

**Use Case**: Systems with malicious actors

**Key Concepts**:
- Tolerates Byzantine failures
- 3f + 1 nodes needed for f failures
- High message overhead

**Used By**: Some blockchain systems

### Comparison

| Algorithm | Complexity | Performance | Fault Tolerance | Use Case |
|:----------|:-----------|:------------|:----------------|:---------|
| **Paxos** | High | Good | Crash failures | Academic, some production |
| **Raft** | Medium | Good | Crash failures | Modern distributed systems |
| **PBFT** | Very High | Lower | Byzantine failures | Blockchain, high-security |

---

## Multi-Region Architecture

### Design Patterns

#### Active-Active
{: .text-green-200}

All regions handle writes and reads simultaneously.

**Advantages**:
- Low latency globally
- High availability
- No single point of failure

**Challenges**:
- Conflict resolution
- Data consistency
- Complex operational model

**Example**: DynamoDB Global Tables, Cassandra multi-DC

**Architecture**:
```
Region US-East          Region EU-West          Region Asia
    ↓                       ↓                       ↓
  App Servers          App Servers              App Servers
    ↓                       ↓                       ↓
Local DB ←------ Bidirectional Replication ------→ Local DB
```

#### Active-Passive
{: .text-blue-200}

Primary region handles writes, secondary regions handle reads or standby.

**Advantages**:
- Simpler consistency model
- Easier to reason about
- Lower operational complexity

**Challenges**:
- Higher latency for some users
- Wasted capacity in passive regions
- Failover complexity

**Example**: Traditional database replication

#### Active-Active with Sharding
{: .text-purple-200}

Different regions own different data shards.

**Advantages**:
- No write conflicts
- Strong consistency per shard
- Good for geo-partitioned data

**Challenges**:
- Cross-region queries complex
- Data locality requirements
- Rebalancing challenges

**Example**: Uber's geo-partitioned architecture

### Key Decisions

1. **Data Partitioning**
   - Geographic (user location)
   - Functional (feature boundaries)
   - Hash-based (uniform distribution)

2. **Replication Strategy**
   - Synchronous (strong consistency, high latency)
   - Asynchronous (eventual consistency, low latency)
   - Semi-synchronous (hybrid)

3. **Conflict Resolution**
   - Last-write-wins (simple, data loss possible)
   - Custom merge functions
   - CRDTs (complex, correct)

---

## Chaos Engineering

### Principles

1. **Build a hypothesis** around steady-state behavior
2. **Vary real-world events** (failures)
3. **Run experiments in production** (carefully)
4. **Automate** experiments to run continuously
5. **Minimize blast radius** of experiments

### Netflix's Simian Army

#### Chaos Monkey
{: .text-red-200}

**Purpose**: Randomly terminates instances

**Lesson**: Services must handle instance failure gracefully

**Implementation**:
```
During business hours:
  - Select random instance
  - Terminate it
  - Monitor for impact
  - Alert if service degraded
```

#### Chaos Kong
{: .text-red-200}

**Purpose**: Simulates entire AWS region failure

**Lesson**: Must be able to failover regions

**Frequency**: Quarterly exercises

#### Latency Monkey
{: .text-orange-200}

**Purpose**: Introduces artificial delays

**Lesson**: Services must have timeouts and retries

#### Others

- **Conformity Monkey**: Finds instances not following best practices
- **Security Monkey**: Finds security vulnerabilities
- **Janitor Monkey**: Cleans up unused resources

### Chaos Engineering Tools

- **Gremlin**: Chaos Engineering as a Service
- **Chaos Mesh**: Kubernetes-native chaos engineering
- **LitmusChaos**: Cloud-native chaos engineering

---

## Cost Optimization at Scale

### AWS Cost Optimization

#### Compute

**Right-Sizing**:
```
Analysis:
- Review CloudWatch metrics (CPU, memory, network)
- Identify over-provisioned instances
- Downsize or use T-series with bursting

Savings: 20-40%
```

**Reserved Instances / Savings Plans**:
```
Strategy:
- Analyze baseline usage
- Commit for 1-3 years
- Mix RI with On-Demand for flexibility

Savings: 30-70%
```

**Spot Instances**:
```
Use Cases:
- Batch processing
- CI/CD
- Stateless services with fault tolerance

Savings: 60-90%
```

#### Storage

**S3 Lifecycle Policies**:
```yaml
Rules:
  - After 30 days: Move to S3-IA
  - After 90 days: Move to Glacier
  - After 365 days: Delete or Deep Archive

Savings: 50-90%
```

**EBS Optimization**:
```
- Delete unused volumes
- Snapshot old volumes, delete original
- Use gp3 instead of gp2
- Right-size IOPS

Savings: 30-60%
```

#### Data Transfer

**Strategies**:
```
- Use CloudFront CDN
- Keep traffic within same region
- Use VPC endpoints
- Compress data

Savings: 20-50%
```

### Netflix's Cost Optimization

**Scale**: $1B+ annual AWS spend

**Strategies**:
1. **Spot Instances**: 90% of video encoding
2. **Custom Tools**: Real-time cost monitoring
3. **Auto-Scaling**: Aggressive scale-down
4. **Regional Optimization**: Content placement

**Results**: 30%+ cost reduction while growing 2x

---

## ML System Design

### Components

#### Feature Store
{: .text-green-200}

**Purpose**: Centralized repository for ML features

**Requirements**:
- Low latency (< 10ms for serving)
- High throughput (millions QPS)
- Point-in-time correctness
- Online/offline consistency

**Example Architecture**:
```
Offline:
  Raw Data → Feature Pipeline → Feature Store (S3/BigQuery)
                                        ↓
                                  Training Pipeline → Model

Online:
  Request → Feature Store (Redis/DynamoDB) → Model → Prediction
```

**Solutions**: Tecton, Feast, AWS SageMaker Feature Store

#### Training Pipeline
{: .text-blue-200}

**Components**:
1. **Data Collection**: Logs, databases, streams
2. **Data Validation**: Schema checks, data quality
3. **Feature Engineering**: Transformations, aggregations
4. **Training**: Distributed training on GPUs/TPUs
5. **Evaluation**: Metrics, validation datasets
6. **Model Registry**: Version control for models

**Challenges**:
- Data drift detection
- Reproducibility
- Resource management
- Experiment tracking

#### Inference Serving
{: .text-purple-200}

**Patterns**:

1. **Batch Inference**:
   ```
   Use Case: Recommendations, email campaigns
   Latency: Minutes to hours
   Scale: Process millions offline
   ```

2. **Real-Time Inference**:
   ```
   Use Case: Fraud detection, search ranking
   Latency: < 100ms
   Scale: Thousands of QPS
   ```

3. **Edge Inference**:
   ```
   Use Case: Mobile apps, IoT devices
   Latency: < 10ms
   Scale: Billions of devices
   ```

**Model Serving Frameworks**:
- TensorFlow Serving
- TorchServe
- Triton Inference Server
- AWS SageMaker
- Seldon Core

### Example: Recommendation System

**Architecture**:
```
User Event → Kafka → Feature Pipeline → Feature Store
                                            ↓
User Request → API Gateway → Candidate Generation → Ranking
                                    ↓                   ↓
                            (Embedding Search)    (ML Model)
                                    ↓                   ↓
                                Recommendations ← Re-ranking
```

**Components**:
1. **Candidate Generation**: ANN search (FAISS)
2. **Ranking**: Gradient boosted trees or deep learning
3. **Re-ranking**: Business rules, diversity

**Metrics**:
- CTR (Click-Through Rate)
- Engagement time
- User satisfaction surveys

---

## Site Reliability Engineering (SRE)

### SLIs, SLOs, SLAs

#### Service Level Indicator (SLI)
{: .text-green-200}

**Definition**: Quantitative measure of service level

**Examples**:
```
- Request latency (p99 < 200ms)
- Availability (% of successful requests)
- Throughput (requests per second)
- Error rate (% of failed requests)
```

#### Service Level Objective (SLO)
{: .text-blue-200}

**Definition**: Target value or range for SLI

**Examples**:
```
- 99.9% of requests complete in < 200ms
- 99.99% availability
- < 0.1% error rate
```

#### Service Level Agreement (SLA)
{: .text-purple-200}

**Definition**: Contractual commitment with consequences

**Examples**:
```
- If availability < 99.9%, customer gets 10% credit
- If p99 latency > 500ms, customer gets refund
```

### Error Budgets

**Concept**: SLO allows some amount of downtime

**Calculation**:
```
SLO: 99.9% availability = 0.1% allowed downtime
Monthly: 43.2 minutes allowed downtime
```

**Usage**:
- **Budget remaining**: Can deploy risky changes
- **Budget exhausted**: Focus on reliability, no new features
- **Below budget**: Take more risks, innovate

### On-Call Best Practices

1. **Rotation**: Share the load
2. **Runbooks**: Document common issues
3. **Blameless Postmortems**: Learn from incidents
4. **Alert Fatigue**: Reduce noise
5. **Escalation**: Clear escalation paths

---

## Next Steps

- Deep dive into [Consensus Algorithms](/advanced-topics/consensus)
- Explore [Multi-Region Patterns](/advanced-topics/multi-region)
- Learn [Chaos Engineering](/advanced-topics/chaos-engineering)
- Study [ML System Design](/advanced-topics/ml-systems)

---

## Additional Resources

### Papers
- [The Google File System](https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf)
- [MapReduce: Simplified Data Processing on Large Clusters](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)
- [In Search of an Understandable Consensus Algorithm (Raft)](https://raft.github.io/raft.pdf)
- [Dynamo: Amazon's Highly Available Key-value Store](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)

### Books
- *Designing Distributed Systems* by Brendan Burns
- *Database Internals* by Alex Petrov
- *Site Reliability Engineering* by Google

### Courses
- MIT 6.824: Distributed Systems
- CMU 15-721: Advanced Database Systems
