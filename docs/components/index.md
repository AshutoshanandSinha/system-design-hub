---
layout: default
title: Components
nav_order: 3
has_children: true
permalink: /components/
---

# Infrastructure Components
{: .no_toc }

Deep dive into the building blocks of distributed systems.
{: .fs-6 .fw-300 }

---

## Overview

Modern distributed systems are built from various infrastructure components, each serving specific purposes. Understanding these components deeply is crucial for mid-level to senior engineers designing scalable systems.

### Distributed System Architecture Layers

```
┌─────────────────────────────────────────────┐
│         Client Layer (Web/Mobile)           │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  Traffic Management (Load Balancer, CDN)    │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│    Application Layer (API Servers)          │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│   Caching Layer (Redis, Memcached)          │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│   Data Layer (Databases, Message Queues)    │
└─────────────────────────────────────────────┘
```

*Typical layered architecture of a modern distributed system.*

## What You'll Learn

This section covers the key infrastructure components used in system design:

- **Load Balancers** - Distributing traffic across servers
- **Databases** - SQL vs NoSQL, scaling strategies
- **Caching Systems** - Improving performance and reducing load
- **Message Queues** - Asynchronous communication
- **CDNs** - Content delivery and edge computing
- **API Gateways** - Managing and routing API traffic
- **Service Mesh** - Microservices communication infrastructure

## Components Overview

### Traffic Management
- **Load Balancers**: Nginx, HAProxy, AWS ALB/NLB
- **API Gateways**: Kong, AWS API Gateway, Apigee
- **CDNs**: CloudFront, Cloudflare, Akamai
- **Reverse Proxies**: Nginx, Apache, Envoy

### Data Storage
- **Relational Databases**: PostgreSQL, MySQL, Oracle
- **NoSQL Databases**: MongoDB, Cassandra, DynamoDB
- **In-Memory Stores**: Redis, Memcached
- **Object Storage**: S3, Google Cloud Storage, MinIO
- **Time-Series DBs**: InfluxDB, TimescaleDB, Prometheus

### Communication & Integration
- **Message Queues**: RabbitMQ, Apache Kafka, AWS SQS
- **Event Streaming**: Apache Kafka, AWS Kinesis, Pulsar
- **Service Mesh**: Istio, Linkerd, Consul
- **gRPC & Protocol Buffers**: Inter-service communication

### Compute & Orchestration
- **Container Orchestration**: Kubernetes, Docker Swarm, ECS
- **Serverless**: AWS Lambda, Google Cloud Functions, Azure Functions
- **Batch Processing**: Apache Spark, Apache Flink, Hadoop

### Observability
- **Monitoring**: Prometheus, Datadog, New Relic
- **Logging**: ELK Stack, Splunk, CloudWatch
- **Tracing**: Jaeger, Zipkin, OpenTelemetry
- **APM**: New Relic, AppDynamics, Dynatrace

## Learning Path by Experience

### Mid-Level Engineers (3-5 years)

Focus on understanding how components work and when to use them:

1. Load Balancers (L4 vs L7)
2. Caching strategies
3. Relational vs NoSQL databases
4. Message queues basics
5. CDN fundamentals

### Senior Engineers (5-8 years)

Deep dive into trade-offs and advanced features:

1. Database scaling (sharding, replication)
2. Advanced caching patterns
3. Message queue patterns (at-least-once, exactly-once)
4. Multi-region architecture
5. Service mesh implementation

### Staff+ Engineers (8+ years)

Focus on architectural patterns and cost optimization:

1. Polyglot persistence strategies
2. Event-driven architectures
3. CQRS and Event Sourcing
4. Cost optimization at scale
5. Platform engineering

## Topics in This Section

### Coming Soon
1. **Load Balancers** - Traffic distribution and algorithms
2. **Databases** - SQL, NoSQL, and NewSQL comparison
3. **Caching** - Strategies, patterns, and implementations
4. **Message Queues** - Async communication patterns
5. **CDNs** - Content delivery and edge computing
6. **API Gateways** - API management and routing
7. **Object Storage** - Scalable file storage
8. **Search Engines** - Elasticsearch, Solr, and full-text search

## Component Selection Framework

### Step 1: Define Requirements

```markdown
Functional Requirements:
- What data needs to be stored?
- What operations are needed?
- What integrations are required?

Non-Functional Requirements:
- Performance (latency, throughput)
- Scalability (read/write patterns)
- Consistency requirements
- Availability targets
```

### Step 2: Evaluate Options

| Criteria | Weight | Option A | Option B | Option C |
|:---------|:-------|:---------|:---------|:---------|
| Performance | High | 8/10 | 6/10 | 9/10 |
| Cost | Medium | 6/10 | 9/10 | 5/10 |
| Maturity | High | 9/10 | 7/10 | 6/10 |
| Team Expertise | Medium | 8/10 | 5/10 | 4/10 |

### Step 3: Consider Trade-offs

{: .important }
Every technology choice involves trade-offs. There's no perfect solution, only appropriate ones for your context.

## Common Patterns

### Pattern 1: Read-Heavy Workload

<div style="text-align: center; margin: 2rem 0;">
  <img src="https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/OcjuRRH.png" alt="Load Balancer with multiple servers" style="max-width: 700px; border-radius: 12px; box-shadow: 0 10px 40px rgba(59, 130, 246, 0.4);">
</div>

**Caching Strategy:**

```
User Request → CDN → Load Balancer → Cache → Database
                ↓
           (Cache Hit: 95%)
```

**Components**:
- CDN for static assets
- Redis/Memcached for application cache
- Read replicas for database
- Load balancer for distribution

### Pattern 2: Write-Heavy Workload

```
User Request → Load Balancer → API Server → Message Queue → Workers → Database
```

**Components**:
- Message queue to handle spikes
- Worker pools for processing
- Database optimized for writes
- Monitoring for queue depth

### Pattern 3: Event-Driven Architecture

```
Service A → Event Bus (Kafka) → Multiple Consumers
                ↓
            Event Store
```

**Components**:
- Apache Kafka for event streaming
- Event store for replay capability
- Multiple consumer services
- Schema registry for compatibility

## Real-World Examples

### Example 1: Netflix Architecture

**Components Used**:
- **CDN**: Custom CDN (Open Connect)
- **Load Balancing**: AWS ELB + Zuul API Gateway
- **Databases**: Cassandra (viewing history), MySQL (billing)
- **Caching**: EVCache (Memcached-based)
- **Messaging**: Apache Kafka
- **Compute**: AWS EC2, Lambda

### Example 2: Uber Architecture

**Components Used**:
- **Load Balancing**: Custom with geo-routing
- **Databases**: Schemaless (on MySQL), PostgreSQL, Cassandra
- **Caching**: Redis
- **Messaging**: Apache Kafka
- **Real-time**: WebSockets, Server-Sent Events
- **Storage**: S3, Hadoop

### Example 3: Airbnb Architecture

**Components Used**:
- **Load Balancing**: AWS ALB
- **Databases**: MySQL (primary), Presto (analytics)
- **Caching**: Redis, Memcached
- **Messaging**: Kafka, RabbitMQ
- **Search**: Elasticsearch
- **Storage**: S3

## Cost Considerations

### Open Source vs Managed Services

| Aspect | Open Source | Managed Service |
|:-------|:------------|:----------------|
| **Cost** | Lower (infrastructure only) | Higher (convenience premium) |
| **Maintenance** | Team responsibility | Vendor responsibility |
| **Flexibility** | High customization | Limited to vendor features |
| **Expertise** | Required in-house | Vendor expertise |
| **Best For** | Large teams, custom needs | Small teams, standard needs |

### Cost Optimization Strategies

1. **Right-sizing**: Don't over-provision
2. **Reserved Instances**: Commit for discounts
3. **Spot Instances**: Use for fault-tolerant workloads
4. **Auto-scaling**: Scale down during low traffic
5. **Data Lifecycle**: Archive/delete old data
6. **CDN Caching**: Reduce origin requests

## Best Practices

### Monitoring & Observability

{: .highlight }
**Golden Signals**: Track latency, traffic, errors, and saturation for every component.

```yaml
Metrics to Track:
  Load Balancer:
    - Request rate
    - Error rate (5xx)
    - Connection count
    - Latency (p50, p95, p99)

  Database:
    - Query latency
    - Connection pool usage
    - Disk I/O
    - Replication lag

  Cache:
    - Hit rate
    - Memory usage
    - Eviction rate
    - Key count

  Message Queue:
    - Message rate
    - Queue depth
    - Consumer lag
    - Dead letter queue size
```

### High Availability

1. **Eliminate Single Points of Failure**: Redundancy for every component
2. **Health Checks**: Active monitoring and auto-recovery
3. **Graceful Degradation**: Partial functionality over total failure
4. **Circuit Breakers**: Prevent cascade failures
5. **Multi-AZ/Region**: Geographic redundancy

### Security

1. **Encryption**: At rest and in transit
2. **Authentication**: Strong identity verification
3. **Authorization**: Least privilege access
4. **Network Segmentation**: VPCs, security groups
5. **Secrets Management**: Vault, AWS Secrets Manager
6. **Regular Updates**: Patch management

## Interview Preparation

### Common Questions

**Q: "When would you use Redis vs Memcached?"**

<details markdown="1">
<summary>Answer</summary>

**Use Redis when**:
- Need persistence
- Require data structures (lists, sets, sorted sets)
- Need pub/sub functionality
- Want built-in replication
- Require transactions

**Use Memcached when**:
- Simple key-value cache only
- Multi-threaded performance needed
- Lower memory overhead important
- Don't need persistence

**Real-world**: Most companies choose Redis due to richer features, but Memcached can be simpler and faster for pure caching.

</details>

**Q: "How do you choose between SQL and NoSQL databases?"**

<details markdown="1">
<summary>Answer</summary>

**Choose SQL (PostgreSQL, MySQL) when**:
- ACID transactions required
- Complex queries and joins needed
- Schema is well-defined and stable
- Data integrity is critical

**Choose NoSQL when**:
- Massive scale required (TB/PB of data)
- Flexible/evolving schema needed
- High write throughput
- Simple access patterns
- Geographic distribution

**Real-world**: Many companies use both (polyglot persistence) - SQL for transactional data, NoSQL for analytics/caching.

</details>

---

## Next Steps

- Review [Fundamentals](../fundamentals/) to strengthen your foundation
- Study [Design Patterns](../patterns/) to learn architectural approaches
- Practice with [Interview Problems](../interview-prep/)

---

## Additional Resources

### Documentation
- [AWS Architecture Center](https://aws.amazon.com/architecture/)
- [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework)
- [Azure Architecture Center](https://docs.microsoft.com/en-us/azure/architecture/)

### Tools for Comparison
- [DB-Engines Ranking](https://db-engines.com/en/ranking)
- [StackShare](https://stackshare.io/) - See what companies use

### Books
- *Database Internals* by Alex Petrov
- *Kafka: The Definitive Guide* by Neha Narkhede
