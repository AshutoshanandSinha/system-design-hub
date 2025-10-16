// System Design Complete Reference Guide Application - FIXED VERSION

// Comprehensive data structure with different content formats for each category
const systemDesignData = {
  // ARCHITECTURAL PATTERNS - Full detailed structure with images
  architectural_patterns: {
    'client-server': {
      title: 'Client-Server Architecture',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240715173920/Client-Server-Architecture.webp',
      introduction: "Client-Server architecture is the foundational pattern of distributed computing where clients initiate requests for services or resources, and servers provide those services in response. This model creates a clear separation of concerns between the presentation layer (client) and the business logic/data management layer (server), forming the backbone of most web and enterprise applications.",
      core_concepts: [
        "Request-Response Communication: Clients send requests to servers using standardized protocols like HTTP/HTTPS, TCP/IP, or domain-specific protocols",
        "Separation of Concerns: Clear division between client-side presentation logic and server-side business logic and data management",
        "Centralized Control: Servers manage resources, enforce security policies, and coordinate access to shared data",
        "Stateful vs Stateless: Servers can maintain session state or treat each request independently",
        "Load Balancing: Distribution of client requests across multiple server instances for improved performance and reliability"
      ],
      strengths: [
        "Simple Architecture: Easy to understand, implement, and maintain with well-established patterns",
        "Centralized Control: Simplified governance, security implementation, and system updates",
        "Predictable Performance: Clear performance characteristics enable effective caching and scaling strategies",
        "Protocol Flexibility: Support for various communication protocols (HTTP/HTTPS, gRPC, custom protocols)",
        "Mature Ecosystem: Extensive tooling, frameworks, and best practices available"
      ],
      limitations: [
        "Single Point of Failure: Server tier can become a bottleneck or failure point if not properly architected",
        "Scaling Challenges: Server capacity limitations require careful planning and complex scaling strategies",
        "Network Dependency: Client functionality depends on network connectivity to servers",
        "Resource Utilization: Servers may be underutilized during low-traffic periods",
        "Tight Coupling: Changes to server APIs can impact multiple clients simultaneously"
      ],
      design_considerations: [
        "Load Balancing Strategy: Choose appropriate L4/L7 load balancers and distribution algorithms",
        "Caching Implementation: Multi-level caching including client-side, CDN, and server-side reverse proxies",
        "Security Measures: TLS encryption, authentication/authorization, input validation, and threat mitigation",
        "Database Design: Optimize for concurrent access, implement connection pooling, and consider read replicas",
        "Monitoring and Observability: Implement comprehensive logging, metrics, and health checks"
      ],
      when_to_use: [
        "Web Applications: Traditional web apps, e-commerce sites, content management systems",
        "CRUD Systems: Applications with straightforward create, read, update, delete operations",
        "Administrative Tools: Internal business applications requiring centralized control",
        "Database-Centric Applications: Systems where data consistency and centralized management are critical",
        "Small to Medium Scale: Projects with predictable load patterns and single-team development"
      ]
    },

    'microservices': {
      title: 'Microservices Architecture',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20241107182512879006/Microservices-.webp',
      introduction: "Microservices architecture decomposes monolithic applications into a suite of small, independently deployable services, each focused on specific business capabilities. This approach enables organizations to achieve greater agility, scalability, and team autonomy while leveraging modern container technologies and DevOps practices to manage the inherent complexity of distributed systems.",
      core_concepts: [
        "Service Decomposition: Breaking applications into small, focused services aligned with business capabilities",
        "Independent Deployment: Each service can be developed, tested, and deployed independently",
        "Database Per Service: Each service owns its data and database, preventing tight coupling",
        "Service Mesh: Infrastructure layer managing service communication, security, and observability",
        "API-First Design: Services communicate through well-defined APIs, typically REST or gRPC"
      ],
      strengths: [
        "Team Autonomy: Small teams can own services end-to-end, enabling faster development cycles",
        "Independent Scaling: Services can be scaled independently based on specific requirements",
        "Technology Diversity: Teams can choose optimal technology stacks for their service needs",
        "Fault Isolation: Failures in one service don't necessarily impact other services",
        "Continuous Deployment: Independent deployments enable faster feature delivery and updates"
      ],
      limitations: [
        "Operational Complexity: Requires sophisticated DevOps practices, monitoring, and orchestration",
        "Distributed System Challenges: Network latency, partial failures, and eventual consistency",
        "Service Discovery: Complex service location and communication management",
        "Testing Complexity: Integration testing across multiple services becomes challenging",
        "Data Consistency: Managing transactions across service boundaries requires careful design"
      ],
      design_considerations: [
        "Service Boundaries: Use domain-driven design to identify appropriate service boundaries",
        "Communication Patterns: Choose between synchronous (REST/gRPC) and asynchronous (messaging) communication",
        "Data Management: Implement patterns like Saga for distributed transactions and CQRS for read/write separation",
        "Container Orchestration: Use Kubernetes or similar platforms for deployment and scaling",
        "Observability: Implement distributed tracing, centralized logging, and comprehensive monitoring"
      ],
      when_to_use: [
        "Large Applications: Complex domains with multiple business capabilities requiring independent evolution",
        "Multi-Team Development: Organizations with multiple teams needing autonomous development cycles",
        "Scalability Requirements: Applications with varying scaling needs across different components",
        "Technology Diversity: Projects benefiting from different technology stacks for different services",
        "Rapid Innovation: Environments requiring fast feature delivery and independent service updates"
      ]
    },

    'serverless': {
      title: 'Serverless Architecture',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240514213749/Serverless-Architectures-(1).webp',
      introduction: "Serverless architecture enables developers to build and run applications without managing infrastructure. The cloud provider handles server provisioning, scaling, and maintenance while developers focus purely on code. This model offers automatic scaling, reduced operational overhead, and pay-per-use pricing.",
      core_concepts: [
        "Function as a Service (FaaS): Deploy individual functions that run in stateless containers",
        "Event-Driven Execution: Functions are triggered by events like HTTP requests, database changes, or file uploads",
        "Automatic Scaling: Platform automatically handles scaling from zero to thousands of instances",
        "Stateless Design: Functions should be stateless with no persistent local storage",
        "Managed Services: Leverage cloud-native databases, queues, and storage services"
      ],
      strengths: [
        "No Server Management: Zero infrastructure management and automatic patching",
        "Automatic Scaling: Seamless scaling based on demand without manual intervention",
        "Cost Efficiency: Pay only for actual execution time and resources used",
        "Faster Development: Focus on business logic rather than infrastructure concerns",
        "Built-in Availability: Cloud provider handles redundancy and fault tolerance"
      ],
      limitations: [
        "Cold Starts: Initial invocation latency for inactive functions",
        "Vendor Lock-in: Tight coupling to specific cloud provider services",
        "Limited Execution Time: Functions have maximum execution time limits",
        "Debugging Complexity: Distributed execution makes debugging more challenging",
        "State Management: Stateless nature requires external storage for persistent data"
      ],
      design_considerations: [
        "Function Size: Keep functions small and focused on single responsibilities",
        "State Management: Use external storage for persistent state and shared data",
        "Cold Start Optimization: Minimize dependencies and use connection pooling",
        "Error Handling: Implement proper retry mechanisms and dead letter queues",
        "Monitoring: Set up comprehensive logging and monitoring for distributed functions"
      ],
      when_to_use: [
        "Event-Driven Applications: Applications responding to events like file uploads or database changes",
        "Variable Workloads: Applications with unpredictable or sporadic traffic patterns",
        "Rapid Prototyping: Quick development and deployment for proof of concepts",
        "Microservices: Individual services with specific, well-defined functions",
        "Background Processing: Asynchronous processing tasks like image resizing or data transformation"
      ]
    },

    'event-driven': {
      title: 'Event-Driven Architecture',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20241107184127944601/event-driven-architecture-of-e-commerce-site.webp',
      introduction: "Event-driven architecture organizes system components around the production, detection, and consumption of events. Components communicate asynchronously through events, enabling loose coupling and high scalability. This pattern is essential for real-time systems and reactive applications.",
      core_concepts: [
        "Events: Immutable records of something that happened in the system",
        "Event Producers: Components that generate and publish events to the system",
        "Event Consumers: Components that subscribe to and process specific types of events",
        "Event Broker: Middleware that routes events from producers to consumers",
        "Event Sourcing: Storing all changes as events rather than current state"
      ],
      strengths: [
        "Loose Coupling: Components are decoupled and can evolve independently",
        "Scalability: Easy to scale individual components based on event load",
        "Flexibility: New consumers can be added without modifying producers",
        "Real-time Processing: Enables real-time data processing and reactions",
        "Audit Trail: Complete history of all events provides natural audit logging"
      ],
      limitations: [
        "Complexity: Increased system complexity with event flow management",
        "Eventual Consistency: Asynchronous nature leads to eventual consistency challenges",
        "Event Ordering: Ensuring proper event ordering can be challenging",
        "Error Handling: Distributed error handling and compensation is complex",
        "Testing: End-to-end testing becomes more difficult with asynchronous flows"
      ],
      design_considerations: [
        "Event Schema: Design stable event schemas with proper versioning",
        "Event Store: Choose appropriate storage for events (message queues, event streams)",
        "Idempotency: Ensure event processing is idempotent to handle duplicates",
        "Error Recovery: Implement dead letter queues and retry mechanisms",
        "Monitoring: Track event flows and processing latencies across the system"
      ],
      when_to_use: [
        "Real-time Systems: Applications requiring immediate response to state changes",
        "Microservices Integration: Decoupled communication between microservices",
        "IoT Applications: Processing streams of sensor data and device events",
        "E-commerce Platforms: Order processing, inventory updates, and notification systems",
        "Financial Systems: Transaction processing and real-time fraud detection"
      ]
    },

    'peer-to-peer': {
      title: 'Peer-to-Peer (P2P) Architecture',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240515175702/Peer-to-Peer-(P2P)-Architecture.webp',
      introduction: "Peer-to-peer architecture creates a distributed network where each node acts as both client and server. Peers share resources directly without central coordination, enabling decentralized systems that are highly resilient and scalable. This architecture powers file sharing, blockchain networks, and distributed computing systems.",
      core_concepts: [
        "Decentralization: No central server; all nodes have equal roles and responsibilities",
        "Resource Sharing: Peers share computational resources, storage, and bandwidth",
        "Self-Organization: Network organizes itself without central coordination",
        "Distributed Hash Table (DHT): Efficient lookup mechanism for locating resources",
        "Overlay Networks: Logical network built on top of existing network infrastructure"
      ],
      strengths: [
        "Fault Tolerance: No single point of failure; network continues with node failures",
        "Scalability: Performance improves as more peers join the network",
        "Cost Efficiency: Utilizes distributed resources instead of centralized infrastructure",
        "Censorship Resistance: Difficult to shut down or control decentralized networks",
        "Load Distribution: Traffic and processing load distributed across all peers"
      ],
      limitations: [
        "Security Challenges: Difficult to ensure security and trust in decentralized environment",
        "Inconsistent Performance: Network performance depends on peer availability and quality",
        "Discovery Complexity: Finding specific resources or peers can be challenging",
        "Bandwidth Usage: Peers consume both upload and download bandwidth",
        "Coordination Difficulties: Achieving consensus across peers is complex"
      ],
      design_considerations: [
        "Peer Discovery: Implement mechanisms for peers to find and connect to each other",
        "Data Replication: Ensure data availability through strategic replication",
        "Security Protocols: Implement authentication and encryption between peers",
        "Incentive Mechanisms: Design systems to encourage peer participation",
        "Quality of Service: Handle varying peer capabilities and network conditions"
      ],
      when_to_use: [
        "File Sharing: Distributed file sharing systems like BitTorrent",
        "Blockchain Networks: Cryptocurrency and distributed ledger systems",
        "Content Delivery: Distributed content distribution to reduce server load",
        "Collaborative Computing: Distributed computing projects like SETI@home",
        "Messaging Systems: Decentralized chat and communication platforms"
      ]
    }
  },

  // KEY CONCEPTS - Concept-focused structure
  key_concepts: {
    'scalability': {
      title: 'Scalability',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20250807104547934960/vertical_and_horizontal_scaling.webp',
      definition: "Scalability refers to a system's ability to handle increasing workloads by adding resources to accommodate growth. It's a fundamental system design concept that determines whether applications can maintain performance and availability as user demand, data volume, or transaction frequency increases over time.",
      how_it_works: [
        "Horizontal Scaling (Scale-Out): Adding more servers or instances to distribute load across multiple machines, enabling linear capacity growth",
        "Vertical Scaling (Scale-Up): Increasing resources (CPU, RAM, storage) on existing servers to handle more load within the same infrastructure",
        "Elastic Scaling: Automatic addition or removal of resources based on real-time demand patterns and predefined thresholds",
        "Load Distribution: Spreading requests across multiple servers using load balancers, routing algorithms, and geographic distribution",
        "Resource Optimization: Efficient utilization of computing resources through caching, database optimization, and algorithmic improvements"
      ],
      benefits: [
        "Performance Maintenance: Systems can handle increased load without degrading user experience or response times",
        "Cost Efficiency: Horizontal scaling can be more cost-effective than continuously upgrading high-end hardware",
        "Business Growth Support: Scalable architectures can adapt to business growth and changing market demands",
        "Fault Tolerance: Distributed systems provide better resilience against individual component failures",
        "Global Reach: Enables serving users across different geographic regions with consistent performance"
      ],
      challenges: [
        "Architectural Complexity: Distributed systems introduce operational and design complexity that must be carefully managed",
        "Data Consistency: Maintaining consistency across scaled systems becomes challenging, especially with distributed databases",
        "Network Dependencies: Horizontal scaling increases reliance on network communication and introduces latency considerations",
        "Cost Management: Poor scaling strategies can lead to resource waste and exponentially increasing expenses",
        "State Management: Stateful applications are harder to scale than stateless ones, requiring careful session management"
      ],
      implementation: [
        "Load Balancer Implementation: Deploy Layer 4 or Layer 7 load balancers to distribute traffic across multiple instances",
        "Database Sharding: Partition data across multiple database servers to distribute load and storage requirements",
        "Caching Strategies: Implement multi-level caching (application, database, CDN) to reduce backend load",
        "Microservices Architecture: Break monolithic applications into independently scalable services",
        "Auto-scaling Configuration: Set up cloud auto-scaling groups with appropriate metrics and thresholds"
      ],
      examples: [
        "Netflix: Uses microservices and cloud auto-scaling to handle millions of concurrent streams worldwide. They run thousands of microservices across thousands of servers to serve 200+ million subscribers with horizontal scaling.",
        "Amazon: Employs horizontal scaling across data centers to manage peak shopping traffic during events like Black Friday. Their architecture can scale to handle 10x normal traffic by adding more EC2 instances behind load balancers.",
        "Facebook: Utilizes database sharding and CDN networks to serve billions of users with personalized content. They use TAO (The Associations and Objects) distributed data store with geographic sharding to handle massive scale.",
        "Uber: Implements geographic sharding and real-time scaling to handle varying demand across different cities and times. Each city operates as an independent shard that can scale based on local demand patterns.",
        "Instagram: Scaled from 14 million users to over 1 billion by using database sharding, aggressive caching with Memcached, and CDN for photo delivery. They famously operated with a very small team by leveraging cloud infrastructure."
      ],
      latency_numbers: [
        "L1 cache reference: 0.5 ns",
        "L2 cache reference: 7 ns",
        "Main memory reference: 100 ns",
        "Send 1K bytes over 1 Gbps network: 10,000 ns = 10 µs",
        "Read 1 MB sequentially from SSD: 1,000,000 ns = 1 ms",
        "Round trip within same datacenter: 500,000 ns = 0.5 ms",
        "Disk seek: 10,000,000 ns = 10 ms",
        "Send packet CA→Netherlands→CA: 150,000,000 ns = 150 ms"
      ]
    },

    'availability': {
      title: 'Availability',
      definition: "Availability refers to the percentage of time a system is operational and accessible to users. It's typically measured as uptime divided by total time, expressed as a percentage (e.g., 99.9% uptime). High availability is crucial for business-critical systems where downtime results in revenue loss, user dissatisfaction, or safety concerns.",
      sla_table: [
        { availability: '90% (1 nine)', downtime_year: '36.5 days', downtime_month: '72 hours', downtime_week: '16.8 hours', use_case: 'Batch systems' },
        { availability: '99% (2 nines)', downtime_year: '3.65 days', downtime_month: '7.2 hours', downtime_week: '1.68 hours', use_case: 'Internal tools' },
        { availability: '99.9% (3 nines)', downtime_year: '8.76 hours', downtime_month: '43.2 minutes', downtime_week: '10.1 minutes', use_case: 'B2B services' },
        { availability: '99.99% (4 nines)', downtime_year: '52.6 minutes', downtime_month: '4.32 minutes', downtime_week: '1.01 minutes', use_case: 'Payment systems' },
        { availability: '99.999% (5 nines)', downtime_year: '5.26 minutes', downtime_month: '25.9 seconds', downtime_week: '6.05 seconds', use_case: 'Critical infrastructure' }
      ],
      how_it_works: [
        "Redundancy: Multiple instances of critical components eliminate single points of failure and provide backup options",
        "Failover Mechanisms: Automatic switching to backup systems when primary components fail, minimizing service interruption",
        "Health Monitoring: Continuous monitoring of system components with automated alerts and recovery procedures",
        "Geographic Distribution: Deploying services across multiple regions to protect against localized failures or disasters",
        "Circuit Breakers: Preventing cascade failures by isolating failing components and providing graceful degradation"
      ],
      benefits: [
        "Business Continuity: Minimizes revenue loss and maintains customer trust through consistent service availability",
        "User Experience: Provides reliable access to services, improving customer satisfaction and retention",
        "Competitive Advantage: Higher availability can differentiate services in competitive markets",
        "Compliance: Meets regulatory requirements and service level agreements (SLAs) for critical applications",
        "Operational Efficiency: Reduces emergency response costs and allows for planned maintenance windows"
      ],
      challenges: [
        "Cost vs Benefit: Achieving higher availability levels (99.99% vs 99.9%) requires exponentially more investment",
        "Complexity Management: Redundant systems introduce architectural and operational complexity",
        "Testing Difficulty: Chaos engineering and failure testing are necessary but can be disruptive",
        "Update Challenges: Maintaining availability during system updates requires sophisticated deployment strategies",
        "Monitoring Overhead: Comprehensive monitoring systems require significant resources and maintenance"
      ],
      implementation: [
        "Multi-Zone Deployment: Deploy applications across multiple availability zones or data centers",
        "Database Replication: Implement master-slave or master-master database replication for data redundancy",
        "Load Balancer Configuration: Use health checks and automatic failover in load balancing configurations",
        "Backup and Recovery: Establish automated backup procedures and disaster recovery plans",
        "Blue-Green Deployments: Use blue-green or canary deployment strategies to minimize downtime during updates"
      ],
      examples: [
        "AWS S3: Provides 99.999999999% (11 9's) data durability through cross-region replication and redundancy",
        "Google Search: Maintains near 100% availability through global load balancing and massive redundancy",
        "Payment Systems: Visa and Mastercard maintain extremely high availability due to the critical nature of payment processing",
        "CDN Services: Cloudflare and AWS CloudFront use global edge locations to maintain high availability for content delivery"
      ]
    },

    'cap-theorem': {
      title: 'CAP Theorem',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240813184051/cap.png',
      definition: "The CAP theorem, also known as Brewer's theorem, states that any distributed data store can only provide at most two of the following three guarantees simultaneously: Consistency (all nodes see the same data at the same time), Availability (the system remains operational), and Partition tolerance (the system continues to operate despite network failures).",
      how_it_works: [
        "Consistency Guarantee: All nodes see the same data simultaneously, requiring synchronous replication and blocking operations during updates",
        "Availability Guarantee: The system remains responsive to requests even when some nodes are unreachable or have failed",
        "Partition Tolerance: The system continues to function despite communication breakdowns between nodes in the network",
        "Trade-off Decision: Distributed systems must choose which two properties to prioritize when network partitions occur",
        "Dynamic Behavior: Systems can behave differently during normal operations versus partition scenarios"
      ],
      benefits: [
        "Design Clarity: Provides a clear framework for understanding trade-offs in distributed system design",
        "Architecture Guidance: Helps architects make informed decisions about system behavior during failures",
        "Expectation Management: Sets realistic expectations about what distributed systems can achieve",
        "Problem Analysis: Offers a structured approach to analyzing distributed system failures and behaviors",
        "Technology Selection: Guides selection of databases and frameworks based on business requirements"
      ],
      challenges: [
        "Oversimplification: Real-world systems often involve more nuanced trade-offs than the theorem suggests",
        "Dynamic Requirements: Business needs may require different guarantees at different times",
        "Performance Impact: Strict adherence to the theorem can lead to suboptimal performance choices",
        "Partition Frequency: Network partitions are often rare, making availability vs consistency trade-offs less relevant",
        "Implementation Complexity: Building systems that gracefully handle different scenarios requires sophisticated engineering"
      ],
      implementation: [
        "CP Systems: Choose consistency and partition tolerance (e.g., MongoDB with strong consistency, traditional RDBMS with clustering)",
        "AP Systems: Choose availability and partition tolerance (e.g., Amazon DynamoDB, Apache Cassandra, DNS systems)",
        "CA Systems: Choose consistency and availability (typically single-node systems or those that don't handle partitions)",
        "Eventual Consistency: Implement systems that provide availability during partitions but achieve consistency eventually",
        "Configurable Consistency: Design systems that allow applications to choose consistency levels based on specific use cases"
      ],
      examples: [
        "MongoDB: CP system that prioritizes consistency and partition tolerance, potentially sacrificing availability during network splits",
        "Cassandra: AP system that remains available during partitions but provides eventual consistency",
        "PostgreSQL: CA system that provides consistency and availability but doesn't handle network partitions well",
        "Amazon DynamoDB: AP system with configurable consistency levels, defaulting to eventual consistency for high availability"
      ]
    },

    'acid-transactions': {
      title: 'ACID Transactions',
      definition: "ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties that guarantee reliable processing of database transactions. These properties ensure that database transactions are processed reliably and help maintain data integrity even in the face of errors, power failures, or other unexpected situations.",
      how_it_works: [
        "Atomicity: All operations in a transaction succeed or fail together as a single unit, with no partial completions",
        "Consistency: Transactions move the database from one valid state to another, maintaining all defined rules and constraints",
        "Isolation: Concurrent transactions don't interfere with each other, appearing to execute in sequential order",
        "Durability: Once a transaction is committed, its changes are permanently stored and survive system failures",
        "Transaction Management: Database systems use logs, locks, and recovery mechanisms to enforce ACID properties"
      ],
      benefits: [
        "Data Integrity: Ensures database remains in a consistent state even during concurrent access and system failures",
        "Reliability: Provides strong guarantees about transaction completion and data persistence",
        "Concurrent Safety: Allows multiple users to access the database simultaneously without data corruption",
        "Error Recovery: Enables automatic rollback of failed transactions to maintain database consistency",
        "Business Logic Support: Supports complex business operations that require multiple related changes to succeed together"
      ],
      challenges: [
        "Performance Overhead: ACID compliance requires additional processing, logging, and locking mechanisms",
        "Scalability Limitations: Strong consistency requirements can limit horizontal scaling capabilities",
        "Deadlock Potential: Multiple transactions accessing resources can create deadlock situations requiring resolution",
        "Lock Contention: Isolation mechanisms can create bottlenecks when many transactions access the same data",
        "Distributed Complexity: Maintaining ACID properties across distributed systems requires complex coordination protocols"
      ],
      implementation: [
        "Write-Ahead Logging: Use transaction logs to record all changes before they're applied to the database",
        "Two-Phase Locking: Implement locking protocols to ensure isolation between concurrent transactions",
        "MVCC (Multi-Version Concurrency Control): Maintain multiple versions of data to provide isolation without blocking",
        "Two-Phase Commit: Use distributed transaction protocols to maintain ACID properties across multiple databases",
        "Recovery Mechanisms: Implement automatic recovery procedures to restore database consistency after failures"
      ],
      examples: [
        "Banking Systems: Transfer money between accounts ensuring either both debit and credit occur or neither does",
        "E-commerce Orders: Process order, update inventory, and charge payment as a single atomic transaction",
        "PostgreSQL: Provides full ACID compliance with sophisticated concurrency control and recovery mechanisms",
        "Oracle Database: Implements ACID properties with advanced features like read consistency and automatic undo management"
      ]
    },

    'consistent-hashing': {
      title: 'Consistent Hashing',
      definition: "Consistent hashing is a distributed hashing scheme that minimizes reorganization when nodes are added or removed from a distributed system. It maps both data items and nodes to points on a circular hash ring, ensuring that only a small fraction of keys need to be relocated when the system scales, making it ideal for distributed caches and databases.",
      how_it_works: [
        "Hash Ring: Both data keys and server nodes are mapped to points on a circular hash space using hash functions",
        "Key Assignment: Each data key is assigned to the first node found by moving clockwise around the ring from the key's position",
        "Node Addition: When nodes are added, only keys between the new node and its predecessor need to be redistributed",
        "Node Removal: When nodes are removed, their keys are redistributed to the next node in the clockwise direction",
        "Virtual Nodes: Multiple virtual nodes per physical server improve load distribution and fault tolerance"
      ],
      benefits: [
        "Minimal Redistribution: Only a fraction of keys need to be moved when nodes join or leave the system",
        "Scalability: Easily add or remove nodes without major disruption to the existing data distribution",
        "Load Distribution: Virtual nodes help achieve more uniform load distribution across physical servers",
        "Fault Tolerance: System continues operating when nodes fail, automatically redistributing their load",
        "Replication Support: Natural support for data replication by storing copies on subsequent nodes in the ring"
      ],
      challenges: [
        "Load Imbalance: Without virtual nodes, some servers may handle disproportionately more data than others",
        "Hotspots: Popular keys may create hotspots if they all map to the same small set of nodes",
        "Network Topology: Doesn't consider physical network topology, potentially placing replicas on the same rack",
        "Range Queries: Doesn't support efficient range queries since related keys may be distributed across many nodes",
        "Implementation Complexity: Requires careful implementation of hash functions and virtual node management"
      ],
      implementation: [
        "Hash Function Selection: Use cryptographic hash functions like MD5 or SHA-1 to ensure uniform distribution",
        "Virtual Node Strategy: Implement multiple virtual nodes per physical server to improve load balancing",
        "Replication Logic: Store multiple copies of each key on consecutive nodes in the ring for fault tolerance",
        "Node Discovery: Implement mechanisms for nodes to join the ring and announce their presence to other nodes",
        "Monitoring and Rebalancing: Monitor load distribution and implement rebalancing strategies when needed"
      ],
      examples: [
        "Amazon DynamoDB: Uses consistent hashing to distribute data across multiple nodes in its distributed architecture",
        "Apache Cassandra: Implements consistent hashing with virtual nodes for data distribution and replication",
        "Memcached: Uses consistent hashing in client libraries to distribute cached data across multiple cache servers",
        "Chord DHT: Distributed hash table protocol that uses consistent hashing for peer-to-peer systems"
      ]
    },

    'rate-limiting': {
      title: 'Rate Limiting',
      definition: "Rate limiting is a technique used to control the number of requests a client can make to an API or service within a specified time window. It protects systems from abuse, ensures fair usage among clients, prevents resource exhaustion, and maintains service quality by throttling excessive requests.",
      how_it_works: [
        "Request Counting: Track the number of requests from each client within sliding or fixed time windows",
        "Threshold Enforcement: Block or delay requests that exceed predefined limits for specific time periods",
        "Client Identification: Use API keys, IP addresses, user IDs, or other identifiers to track individual client usage",
        "Response Handling: Return appropriate HTTP status codes (429 Too Many Requests) and headers indicating limits",
        "Multiple Tiers: Implement different rate limits for different types of clients, endpoints, or service levels"
      ],
      benefits: [
        "Resource Protection: Prevents system overload and ensures resources are available for legitimate users",
        "Fair Usage: Ensures equitable access to services among all clients and prevents abuse by heavy users",
        "Cost Control: Helps manage infrastructure costs by preventing excessive resource consumption",
        "DDoS Protection: Provides first line of defense against distributed denial-of-service attacks",
        "SLA Enforcement: Supports different service levels and pricing tiers through tiered rate limiting"
      ],
      challenges: [
        "Algorithm Selection: Choosing the right rate limiting algorithm based on specific use case requirements",
        "State Management: Maintaining rate limit counters across distributed systems and multiple server instances",
        "Legitimate Bursts: Distinguishing between malicious traffic and legitimate traffic spikes",
        "User Experience: Balancing protection with user experience to avoid frustrating legitimate users",
        "Bypass Attempts: Handling sophisticated users who try to circumvent rate limits using multiple identities"
      ],
      implementation: [
        "Token Bucket Algorithm: Allow requests to consume tokens from a bucket that refills at a constant rate",
        "Sliding Window: Maintain a rolling window of request timestamps to provide smooth rate limiting",
        "Fixed Window Counter: Count requests in fixed time intervals, resetting counters at window boundaries",
        "Leaky Bucket Algorithm: Process requests at a constant rate, queuing or dropping excess requests",
        "Distributed Rate Limiting: Use Redis or other shared storage to maintain counters across multiple servers"
      ],
      examples: [
        "Twitter API: Implements rate limiting with different tiers for different types of applications and endpoints",
        "GitHub API: Uses rate limiting with different limits for authenticated vs anonymous requests",
        "Cloudflare: Provides rate limiting as a service to protect websites from various types of attacks",
        "AWS API Gateway: Built-in rate limiting capabilities to protect backend services from overload"
      ]
    },

    'spof': {
      title: 'Single Point of Failure (SPOF)',
      definition: "A Single Point of Failure (SPOF) is any component in a system whose failure would cause the entire system or a critical function to become unavailable. SPOFs represent significant risks to system reliability and availability, making their identification and elimination crucial for building resilient distributed systems.",
      how_it_works: [
        "Critical Path Analysis: Identify components that, if they fail, would cause system-wide or critical service failures",
        "Dependency Mapping: Map all system dependencies to understand which components are essential for operation",
        "Failure Impact Assessment: Analyze the cascading effects of individual component failures on overall system functionality",
        "Redundancy Planning: Design redundant systems and failover mechanisms to eliminate single points of failure",
        "Monitoring and Detection: Implement comprehensive monitoring to quickly detect and respond to component failures"
      ],
      benefits: [
        "System Reliability: Eliminating SPOFs significantly improves overall system reliability and uptime",
        "Business Continuity: Reduces the risk of complete service outages that could impact business operations",
        "User Experience: Maintains consistent service availability, improving user satisfaction and trust",
        "Risk Mitigation: Reduces operational risk and potential revenue loss from system failures",
        "Maintenance Flexibility: Allows for planned maintenance without taking the entire system offline"
      ],
      challenges: [
        "Cost Increase: Implementing redundancy and eliminating SPOFs often requires significant additional investment",
        "Complexity Growth: Redundant systems introduce additional complexity in design, deployment, and maintenance",
        "Coordination Overhead: Multiple redundant components require sophisticated coordination and synchronization mechanisms",
        "Testing Difficulty: Validating failover mechanisms and redundant systems requires complex testing scenarios",
        "Hidden Dependencies: Some SPOFs may not be apparent until they actually fail in production"
      ],
      implementation: [
        "Load Balancer Redundancy: Deploy multiple load balancers with failover capabilities",
        "Database Clustering: Implement master-slave or master-master database replication",
        "Multi-Zone Deployment: Distribute services across multiple availability zones or data centers",
        "Circuit Breakers: Implement circuit breaker patterns to prevent cascading failures",
        "Backup Systems: Maintain hot standby systems that can take over when primary systems fail"
      ],
      examples: [
        "DNS Servers: Use multiple DNS servers to prevent DNS resolution failures from taking down services",
        "Database Servers: Implement database clustering to prevent data access failures from single database instances",
        "Network Equipment: Deploy redundant routers, switches, and internet connections to prevent network outages",
        "Application Servers: Run multiple instances of applications behind load balancers to prevent single server failures"
      ]
    },

    'fault-tolerance': {
      title: 'Fault Tolerance',
      definition: "Fault tolerance is the capability of a system to continue operating correctly even when some of its components fail. It involves designing systems with redundancy, error detection, and recovery mechanisms to maintain functionality and data integrity despite hardware failures, software bugs, or external disruptions.",
      how_it_works: [
        "Redundancy: Implement multiple copies of critical components so that backup systems can take over when primary ones fail",
        "Error Detection: Continuously monitor system health and detect failures through heartbeats, checksums, and health checks",
        "Graceful Degradation: Reduce functionality gracefully rather than failing completely when resources become unavailable",
        "Automatic Recovery: Implement automated failover and recovery mechanisms to restore service without manual intervention",
        "Isolation: Design system boundaries to prevent failures in one component from cascading to other parts of the system"
      ],
      benefits: [
        "High Availability: Maintains service availability even when individual components experience failures",
        "Data Protection: Prevents data loss and corruption through replication and backup mechanisms",
        "User Experience: Provides consistent service to users without visible interruptions or degraded performance",
        "Business Continuity: Ensures critical business functions continue operating despite technical failures",
        "Reduced Downtime: Minimizes planned and unplanned downtime through proactive failure handling"
      ],
      challenges: [
        "Increased Complexity: Fault-tolerant systems are inherently more complex to design, implement, and maintain",
        "Resource Overhead: Redundancy and monitoring mechanisms require additional computational and storage resources",
        "Coordination Challenges: Multiple redundant components need sophisticated coordination to maintain consistency",
        "Testing Complexity: Validating fault tolerance requires complex failure injection and chaos engineering practices",
        "Cost Implications: Building fault-tolerant systems requires significant upfront investment and ongoing operational costs"
      ],
      implementation: [
        "Replication Strategies: Implement synchronous or asynchronous replication for critical data and services",
        "Health Monitoring: Deploy comprehensive monitoring systems with automated alerting and response mechanisms",
        "Failover Automation: Configure automatic failover systems that can detect failures and switch to backup components",
        "Circuit Breaker Pattern: Implement circuit breakers to prevent cascading failures and enable system recovery",
        "Chaos Engineering: Regularly test fault tolerance through controlled failure injection and disaster recovery drills"
      ],
      examples: [
        "RAID Systems: Use RAID configurations to continue operating even when individual disk drives fail",
        "Cloud Regions: Deploy applications across multiple cloud regions to survive regional outages",
        "Netflix: Implements extensive fault tolerance with automatic failover and graceful degradation of video streaming services",
        "Google Services: Use massive redundancy and automatic failover to maintain search and email services globally"
      ]
    },

    'consensus-algorithms': {
      title: 'Consensus Algorithms',
      definition: "Consensus algorithms are protocols that enable distributed systems to agree on a single value or decision despite the presence of faulty nodes, network partitions, or Byzantine failures. These algorithms are fundamental to building reliable distributed systems, ensuring that all nodes maintain consistent state even in the presence of failures.",
      how_it_works: [
        "Leader Election: Many algorithms elect a leader node that coordinates the consensus process and proposes values",
        "Proposal Phase: The leader proposes a value to all other nodes in the distributed system",
        "Voting Phase: Follower nodes vote on the proposed value based on their local state and algorithm rules",
        "Commitment Phase: Once a majority agrees, the value is committed and applied across all nodes",
        "Fault Handling: Algorithms handle node failures, network partitions, and message delays through timeouts and retries"
      ],
      benefits: [
        "Data Consistency: Ensures all nodes in a distributed system maintain consistent state and data",
        "Fault Tolerance: Continues operating correctly even when some nodes fail or become unreachable",
        "Coordination: Enables distributed systems to make coordinated decisions without central authority",
        "Reliability: Provides mathematical guarantees about system behavior under various failure scenarios",
        "Distributed Leadership: Allows systems to automatically elect new leaders when current leaders fail"
      ],
      challenges: [
        "Performance Overhead: Consensus protocols require multiple rounds of communication, adding latency",
        "Network Sensitivity: Sensitive to network partitions and high latency, which can affect performance",
        "Complexity: Implementing consensus algorithms correctly is complex and error-prone",
        "Scalability Limits: Most algorithms don't scale well beyond a certain number of nodes",
        "Byzantine Failures: Handling malicious or arbitrarily faulty nodes requires more sophisticated and expensive algorithms"
      ],
      implementation: [
        "Raft Algorithm: Implement leader-based consensus with log replication for managing replicated state machines",
        "PBFT (Practical Byzantine Fault Tolerance): Use Byzantine fault-tolerant consensus for systems with potentially malicious nodes",
        "Paxos Algorithm: Implement the foundational consensus algorithm that guarantees safety in asynchronous networks",
        "RAFT with Persistent Logs: Use persistent storage for consensus logs to survive node restarts",
        "Multi-Raft: Deploy multiple Raft groups to scale consensus across larger numbers of nodes"
      ],
      examples: [
        "etcd: Uses Raft consensus algorithm to maintain consistent configuration data across distributed systems",
        "Apache Kafka: Implements Raft-based consensus for managing cluster metadata and leader election",
        "Blockchain Networks: Bitcoin uses Proof-of-Work consensus, while Ethereum 2.0 uses Proof-of-Stake",
        "Google Spanner: Uses Paxos for global consistency across geographically distributed databases"
      ]
    },

    'gossip-protocol': {
      title: 'Gossip Protocol',
      definition: "Gossip protocol is a communication protocol inspired by the spread of gossip in social networks, where information spreads through peer-to-peer communication in a decentralized manner. Nodes periodically exchange state information with randomly selected neighbors, eventually ensuring all nodes in the network receive the information.",
      how_it_works: [
        "Periodic Communication: Each node periodically selects random peers and exchanges information with them",
        "Information Spreading: Nodes share their current state, updates, or metadata with selected neighbors",
        "Epidemic Spreading: Information spreads through the network like an epidemic, reaching all nodes eventually",
        "Redundant Transmission: Multiple nodes may receive the same information through different paths, ensuring reliability",
        "Anti-Entropy: Nodes synchronize their state to resolve inconsistencies and ensure eventual convergence"
      ],
      benefits: [
        "Fault Tolerance: No single point of failure as information spreads through multiple independent paths",
        "Scalability: Scales well with network size as each node only communicates with a few random neighbors",
        "Simplicity: Simple to implement and understand compared to complex coordination protocols",
        "Self-Healing: Network automatically adapts to node failures and topology changes",
        "Load Distribution: Communication load is distributed evenly across all nodes in the network"
      ],
      challenges: [
        "Convergence Time: Information may take time to reach all nodes, leading to temporary inconsistencies",
        "Network Overhead: Redundant message transmission can create unnecessary network traffic",
        "Partial Failures: Some nodes may not receive updates if network partitions occur during propagation",
        "Message Amplification: Popular information can create message storms if not properly controlled",
        "Ordering Issues: No guaranteed ordering of updates, which can lead to conflicts in some scenarios"
      ],
      implementation: [
        "Push Model: Nodes actively push their state updates to randomly selected neighbors",
        "Pull Model: Nodes periodically pull state information from randomly selected neighbors",
        "Push-Pull Model: Combine both approaches for faster convergence and better fault tolerance",
        "Membership Management: Maintain partial views of the network topology for selecting communication partners",
        "Anti-Entropy Sessions: Implement periodic reconciliation sessions to resolve state inconsistencies"
      ],
      examples: [
        "Amazon S3: Uses gossip protocols for distributed metadata management and coordination",
        "Apache Cassandra: Implements gossip for cluster membership, failure detection, and metadata propagation",
        "Bitcoin Network: Uses gossip-like protocols for transaction and block propagation across the network",
        "Apache Spark: Uses gossip protocols for cluster coordination and task scheduling information"
      ]
    },

    'service-discovery': {
      title: 'Service Discovery',
      definition: "Service discovery is the mechanism by which services in a distributed system automatically locate and communicate with each other. It provides a way for services to register themselves and discover other services without hardcoding network locations, enabling dynamic and flexible distributed architectures.",
      how_it_works: [
        "Service Registration: Services register themselves with a service registry upon startup, providing metadata like location and health status",
        "Health Checking: Regular health checks ensure that only healthy service instances are available for discovery",
        "Service Lookup: Clients query the service registry to find available instances of required services",
        "Load Balancing: Discovery systems often include load balancing to distribute requests across multiple service instances",
        "Dynamic Updates: Services can register and deregister dynamically as they scale up, down, or fail"
      ],
      benefits: [
        "Dynamic Scaling: Enables automatic scaling of services without manual configuration updates",
        "Fault Resilience: Automatically removes unhealthy instances from service pools",
        "Location Independence: Services can move or be deployed anywhere without affecting other services",
        "Configuration Management: Centralizes service configuration and reduces hardcoded dependencies",
        "Development Agility: Simplifies development and testing by providing consistent service location mechanisms"
      ],
      challenges: [
        "Single Point of Failure: Service registry can become a bottleneck if not properly designed for high availability",
        "Consistency Issues: Distributed registries may have temporary inconsistencies during network partitions",
        "Performance Overhead: Additional network calls for service discovery can introduce latency",
        "Cache Management: Balancing between performance (caching) and accuracy (fresh service information)",
        "Security Concerns: Service registry needs proper authentication and authorization mechanisms"
      ],
      implementation: [
        "Client-Side Discovery: Clients directly query the service registry and handle load balancing logic",
        "Server-Side Discovery: Use load balancers or API gateways that query the service registry on behalf of clients",
        "DNS-Based Discovery: Leverage DNS for service discovery using SRV records and load balancing",
        "Hybrid Approaches: Combine multiple discovery mechanisms for better reliability and performance",
        "Health Check Integration: Implement comprehensive health checking and automatic deregistration of failed services"
      ],
      examples: [
        "Netflix Eureka: Service registry used in Netflix's microservices architecture for service discovery and load balancing",
        "Consul: HashiCorp's tool providing service discovery, health checking, and configuration management",
        "Kubernetes: Built-in service discovery through Services and DNS for container orchestration",
        "AWS ELB: Elastic Load Balancing provides service discovery and load balancing for cloud applications"
      ]
    },

    'api-design': {
      title: 'API Design',
      definition: "API design is the process of creating well-structured, intuitive, and efficient interfaces that enable different software systems to communicate. Good API design focuses on usability, consistency, performance, and maintainability, following established patterns and conventions to create interfaces that are easy to understand and integrate.",
      how_it_works: [
        "Resource Modeling: Design APIs around resources and entities rather than actions, using nouns for endpoints",
        "HTTP Methods: Use appropriate HTTP verbs (GET, POST, PUT, DELETE) to represent different operations on resources",
        "Status Codes: Return meaningful HTTP status codes to indicate the success or failure of operations",
        "Data Formats: Standardize on data formats like JSON or XML for request and response payloads",
        "Versioning Strategy: Implement versioning to maintain backward compatibility while evolving the API"
      ],
      benefits: [
        "Developer Experience: Well-designed APIs are intuitive and easy for developers to learn and use",
        "Maintainability: Consistent design patterns make APIs easier to maintain and extend over time",
        "Integration Speed: Clear documentation and predictable behavior accelerate integration projects",
        "Scalability: Good API design supports efficient caching, load balancing, and horizontal scaling",
        "Business Value: High-quality APIs enable ecosystem growth and third-party integrations"
      ],
      challenges: [
        "Design Consistency: Maintaining consistent patterns across large APIs with multiple teams",
        "Performance Trade-offs: Balancing between API simplicity and performance optimization",
        "Versioning Complexity: Managing multiple API versions while maintaining backward compatibility",
        "Security Integration: Implementing authentication, authorization, and data protection without compromising usability",
        "Documentation Maintenance: Keeping API documentation accurate and up-to-date as the API evolves"
      ],
      implementation: [
        "RESTful Principles: Follow REST architectural constraints for stateless, cacheable, and uniform interfaces",
        "OpenAPI Specification: Use OpenAPI (Swagger) for API documentation and contract definition",
        "Rate Limiting: Implement rate limiting and throttling to protect API resources",
        "Error Handling: Design comprehensive error responses with helpful error messages and error codes",
        "Authentication & Authorization: Implement secure authentication mechanisms like OAuth 2.0 or API keys"
      ],
      examples: [
        "GitHub API: Well-documented RESTful API with consistent resource modeling and comprehensive functionality",
        "Stripe API: Payment processing API known for excellent developer experience and clear documentation",
        "Twitter API: Social media API providing access to tweets, users, and social interactions",
        "Google Maps API: Geolocation and mapping services with multiple API endpoints for different use cases"
      ]
    },

    'disaster-recovery': {
      title: 'Disaster Recovery',
      definition: "Disaster recovery is the set of policies, tools, and procedures that enable organizations to recover or continue critical technology infrastructure and systems following a natural or human-induced disaster. It encompasses planning, preparation, and execution of strategies to restore services and data after catastrophic events.",
      how_it_works: [
        "Risk Assessment: Identify potential disasters and their impact on business operations and technology systems",
        "Recovery Planning: Develop detailed plans specifying recovery procedures, responsibilities, and timelines",
        "Data Backup: Implement regular, automated backups of critical data to geographically distributed locations",
        "Infrastructure Replication: Maintain redundant infrastructure in separate geographic regions for failover",
        "Testing and Validation: Regularly test disaster recovery procedures to ensure they work when needed"
      ],
      benefits: [
        "Business Continuity: Ensures critical business operations can continue or resume quickly after disasters",
        "Data Protection: Prevents permanent data loss through comprehensive backup and replication strategies",
        "Compliance: Meets regulatory requirements for data protection and business continuity planning",
        "Customer Trust: Maintains customer confidence by demonstrating preparedness for potential disruptions",
        "Risk Mitigation: Reduces financial and operational risks associated with prolonged service outages"
      ],
      challenges: [
        "Cost Considerations: Disaster recovery infrastructure requires significant investment in redundant systems",
        "Complexity Management: Coordinating recovery across multiple systems and locations is operationally complex",
        "RTO/RPO Balance: Balancing Recovery Time Objective and Recovery Point Objective with cost constraints",
        "Testing Disruption: Regular testing may impact production systems and require careful scheduling",
        "Data Synchronization: Ensuring data consistency between primary and disaster recovery sites"
      ],
      implementation: [
        "Hot Site Strategy: Maintain fully operational duplicate infrastructure for immediate failover",
        "Cold Site Strategy: Prepare basic infrastructure that can be quickly configured during a disaster",
        "Warm Site Strategy: Maintain partially configured infrastructure that can be activated relatively quickly",
        "Cloud-Based DR: Leverage cloud services for flexible, cost-effective disaster recovery solutions",
        "Automated Failover: Implement automated systems that can detect failures and initiate recovery procedures"
      ],
      examples: [
        "Netflix: Multi-region deployment with automated failover capabilities to handle regional outages",
        "Banking Systems: Financial institutions maintain strict disaster recovery requirements with real-time data replication",
        "AWS Disaster Recovery: Cloud-based disaster recovery services offering various RTO/RPO options",
        "Government Systems: Critical infrastructure maintains comprehensive disaster recovery for national security"
      ]
    },

    'distributed-tracing': {
      title: 'Distributed Tracing',
      definition: "Distributed tracing is a method for monitoring and troubleshooting complex distributed systems by tracking requests as they flow through multiple services. It provides visibility into the complete journey of a request, including timing, dependencies, and errors across service boundaries.",
      how_it_works: [
        "Trace Generation: Each request generates a unique trace ID that follows the request through all services",
        "Span Creation: Individual operations within services create spans that represent units of work with timing information",
        "Context Propagation: Trace context is propagated between services through HTTP headers or message metadata",
        "Data Collection: Distributed tracing systems collect timing, error, and metadata information from all spans",
        "Trace Assembly: Individual spans are assembled into complete traces showing the full request flow"
      ],
      benefits: [
        "Performance Monitoring: Identifies performance bottlenecks and slow operations across distributed systems",
        "Error Debugging: Provides detailed error context and helps pinpoint the source of failures in complex workflows",
        "Dependency Mapping: Visualizes service dependencies and communication patterns within the system",
        "Capacity Planning: Offers insights into service utilization and helps with capacity planning decisions",
        "Compliance: Supports audit trails and helps meet regulatory requirements for transaction tracking"
      ],
      challenges: [
        "Performance Overhead: Tracing infrastructure adds computational and network overhead to applications",
        "Data Volume: High-traffic systems generate enormous amounts of trace data requiring efficient storage and analysis",
        "Sampling Strategy: Balancing between trace completeness and system performance through intelligent sampling",
        "Integration Complexity: Requires instrumentation across all services and integration with existing monitoring tools",
        "Privacy Concerns: Trace data may contain sensitive information requiring careful handling and access controls"
      ],
      implementation: [
        "OpenTelemetry: Use industry-standard APIs and libraries for consistent tracing instrumentation",
        "Jaeger Integration: Deploy Jaeger as a distributed tracing system for collecting and analyzing traces",
        "Zipkin Implementation: Use Zipkin for distributed tracing with integration into existing monitoring infrastructure",
        "Custom Instrumentation: Add tracing instrumentation to application code and frameworks",
        "Correlation IDs: Implement correlation ID patterns for tracking requests across service boundaries"
      ],
      examples: [
        "Uber: Uses distributed tracing to monitor millions of ride requests across hundreds of microservices",
        "Netflix: Implements distributed tracing to track video streaming requests through their complex service architecture",
        "Google: Uses distributed tracing internally and offers Cloud Trace for monitoring applications on Google Cloud",
        "Spotify: Leverages distributed tracing to monitor music streaming and recommendation services"
      ]
    }
  },

  // BUILDING BLOCKS - Component-focused structure
  building_blocks: {
    'load-balancing': {
      title: 'Load Balancing',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20250807125750415263/LoadBalancer.webp',
      overview: "Load balancing distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed. This fundamental technique improves application responsiveness, increases availability, and provides redundancy by spreading workload across multiple computing resources, forming a critical component of scalable distributed systems.",
      how_it_works: [
        "Traffic Distribution: Incoming requests are distributed across multiple backend servers using various algorithms like round-robin, least connections, or weighted distribution",
        "Health Monitoring: Load balancers continuously monitor server health through heartbeat checks and remove unhealthy servers from rotation",
        "Session Management: Handles session persistence (sticky sessions) when required, or enables stateless design for better distribution",
        "SSL Termination: Can terminate SSL/TLS connections at the load balancer level to reduce computational overhead on backend servers"
      ],
      types: [
        "Layer 4 (Transport) Load Balancing: Operates at the TCP/UDP level, distributing traffic based on IP addresses and ports",
        "Layer 7 (Application) Load Balancing: Operates at the HTTP level, enabling content-based routing and advanced features",
        "Hardware Load Balancers: Dedicated physical appliances offering high performance but at higher cost",
        "Software Load Balancers: Applications like HAProxy, NGINX, or cloud-native solutions providing flexibility and cost-effectiveness",
        "DNS Load Balancing: Uses DNS responses to distribute traffic geographically or across different IP addresses"
      ],
      benefits: [
        "High Availability: Eliminates single points of failure by providing redundancy across multiple servers",
        "Improved Performance: Distributes load to prevent any single server from becoming a bottleneck",
        "Scalability: Enables horizontal scaling by easily adding more servers to handle increased traffic",
        "Maintenance Flexibility: Allows for rolling updates and maintenance without service interruption"
      ],
      considerations: [
        "Algorithm Selection: Choose appropriate distribution algorithms based on server capacity and request characteristics",
        "Health Check Configuration: Design effective health checks that accurately reflect server readiness",
        "Session Handling: Decide between sticky sessions (simplicity) vs stateless design (better distribution)",
        "SSL/TLS Strategy: Determine whether to terminate SSL at the load balancer or pass through to servers",
        "Geographic Distribution: Consider global load balancing for multi-region deployments"
      ],
      use_cases: [
        "Web Applications: Distributing HTTP/HTTPS traffic across multiple web servers",
        "Database Connections: Load balancing read replicas in master-slave database configurations",
        "Microservices: Distributing API calls across multiple service instances",
        "Content Delivery: Balancing requests across edge servers in CDN networks"
      ]
    },

    'apis': {
      title: 'APIs (Application Programming Interfaces)',
      overview: "APIs are sets of protocols, tools, and definitions that allow different software applications to communicate and interact with each other. They define the methods, data formats, and conventions for accessing and manipulating resources, enabling integration between disparate systems and forming the backbone of modern distributed architectures and microservices ecosystems.",
      how_it_works: [
        "Interface Definition: APIs specify endpoints, methods, parameters, and response formats for accessing functionality",
        "Request-Response Cycle: Clients send requests to API endpoints and receive structured responses containing data or operation results",
        "Authentication & Authorization: APIs implement security mechanisms to verify client identity and permissions",
        "Data Serialization: Convert data between different formats (JSON, XML, Protocol Buffers) for transmission over networks",
        "Version Management: Handle multiple API versions to maintain backward compatibility while evolving functionality"
      ],
      types: [
        "REST APIs: Use HTTP methods and follow REST architectural principles for stateless, resource-oriented communication",
        "GraphQL APIs: Query language that allows clients to request specific data fields and reduce over-fetching",
        "RPC APIs: Remote Procedure Call interfaces that invoke methods on remote servers as if they were local functions",
        "WebSocket APIs: Real-time, bidirectional communication channels for interactive applications",
        "Webhook APIs: HTTP callbacks that push data to external systems when specific events occur"
      ],
      benefits: [
        "System Integration: Enable seamless communication between different applications, platforms, and services",
        "Reusability: Allow functionality to be shared across multiple applications and development teams",
        "Scalability: Support horizontal scaling by decoupling services and enabling distributed architectures",
        "Developer Productivity: Accelerate development by providing pre-built functionality and clear interfaces",
        "Ecosystem Growth: Enable third-party integrations and platform extensibility"
      ],
      considerations: [
        "Performance Optimization: Implement caching, pagination, and efficient serialization to handle high traffic",
        "Security Implementation: Ensure proper authentication, authorization, input validation, and rate limiting",
        "Documentation Quality: Maintain comprehensive, up-to-date documentation for developer adoption",
        "Versioning Strategy: Plan for API evolution while maintaining backward compatibility",
        "Error Handling: Design consistent error responses with meaningful status codes and messages"
      ],
      use_cases: [
        "Microservices Communication: Enable service-to-service communication in distributed architectures",
        "Third-Party Integrations: Connect applications with external services like payment processors or social media platforms",
        "Mobile Applications: Provide data and functionality to mobile apps from backend services",
        "Web Applications: Power frontend applications with data and business logic from backend APIs",
        "Data Sharing: Enable controlled access to organizational data for internal and external consumers"
      ]
    },

    'cdn': {
      title: 'Content Delivery Network (CDN)',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240312094353/How-does-CDN-work.webp',
      overview: "A Content Delivery Network is a geographically distributed network of servers that cache and deliver web content to users from locations closest to them. CDNs significantly improve website performance, reduce latency, decrease server load, and enhance user experience by minimizing the physical distance between users and content servers.",
      how_it_works: [
        "Geographic Distribution: Deploy edge servers across multiple geographic locations worldwide to serve content locally",
        "Content Caching: Cache static content (images, CSS, JavaScript, videos) at edge locations for faster delivery",
        "Origin Server Communication: Fetch content from origin servers when cache misses occur and cache for future requests",
        "DNS Resolution: Use global load balancing to direct users to the nearest available edge server",
        "Cache Invalidation: Implement mechanisms to update or purge cached content when origin content changes"
      ],
      types: [
        "Static CDN: Specialized in delivering static content like images, stylesheets, and JavaScript files",
        "Dynamic CDN: Handle dynamic content and API responses with intelligent caching strategies",
        "Video CDN: Optimized for streaming video content with adaptive bitrate and specialized protocols",
        "Security CDN: Focus on DDoS protection, Web Application Firewall, and security-oriented features",
        "Multi-CDN: Use multiple CDN providers for redundancy, performance optimization, and cost management"
      ],
      benefits: [
        "Improved Performance: Dramatically reduce page load times by serving content from geographically closer servers",
        "Scalability: Handle traffic spikes and global scale without overloading origin servers",
        "Reduced Bandwidth Costs: Decrease origin server bandwidth usage by serving cached content from edge locations",
        "Enhanced Reliability: Provide redundancy and failover capabilities to maintain availability",
        "Security Protection: Offer DDoS mitigation, SSL termination, and web security features"
      ],
      considerations: [
        "Cache Strategy: Design appropriate cache headers, TTL values, and invalidation strategies for different content types",
        "Geographic Coverage: Choose CDN providers with edge locations in your target user regions",
        "Cost Optimization: Balance performance benefits with bandwidth and request costs across different regions",
        "Origin Server Configuration: Optimize origin servers to handle cache misses and provide fresh content efficiently",
        "Security Configuration: Implement proper SSL certificates, access controls, and security policies"
      ],
      use_cases: [
        "E-commerce Websites: Deliver product images, stylesheets, and static assets globally for fast shopping experiences",
        "Media Streaming: Distribute video and audio content with minimal buffering and high quality",
        "Software Distribution: Accelerate downloads of software updates, mobile apps, and large files",
        "Gaming: Reduce latency for game assets, updates, and real-time multiplayer communications",
        "Corporate Websites: Improve global website performance for international business presence"
      ]
    },

    'proxy': {
      title: 'Proxy Servers',
      overview: "Proxy servers act as intermediaries between clients and servers, forwarding requests and responses while providing additional functionality such as caching, security, load balancing, and content filtering. They enable better control, monitoring, and optimization of network traffic while hiding client or server details from each other.",
      how_it_works: [
        "Request Interception: Receive client requests and forward them to target servers on behalf of the client",
        "Response Handling: Receive server responses and forward them back to clients, potentially modifying content",
        "Connection Management: Maintain connections to both clients and servers, handling connection pooling and reuse",
        "Protocol Translation: Convert between different protocols or versions (HTTP/1.1 to HTTP/2, HTTP to HTTPS)",
        "Traffic Analysis: Monitor, log, and analyze traffic patterns for security, performance, and compliance purposes"
      ],
      types: [
        "Forward Proxy: Acts on behalf of clients, hiding client identities from servers and controlling outbound traffic",
        "Reverse Proxy: Acts on behalf of servers, hiding server details from clients and handling inbound traffic",
        "Transparent Proxy: Intercepts traffic without requiring client configuration, often used for content filtering",
        "SOCKS Proxy: Operates at a lower network level, supporting various protocols beyond HTTP",
        "Application Proxy: Operates at the application layer with protocol-specific understanding and features"
      ],
      benefits: [
        "Security Enhancement: Provide access control, content filtering, and protection against malicious traffic",
        "Performance Optimization: Enable caching, compression, and connection optimization to improve response times",
        "Anonymity: Hide client IP addresses and provide privacy protection for users",
        "Load Distribution: Distribute traffic across multiple backend servers for scalability and availability",
        "Centralized Control: Implement consistent policies and monitoring across all network traffic"
      ],
      considerations: [
        "Performance Impact: Consider latency overhead and ensure proxy servers have sufficient capacity",
        "Security Configuration: Implement proper authentication, encryption, and access controls",
        "High Availability: Design redundant proxy infrastructure to avoid single points of failure",
        "Monitoring & Logging: Set up comprehensive logging and monitoring for security and troubleshooting",
        "Protocol Support: Ensure proxy supports all required protocols and features for your applications"
      ],
      use_cases: [
        "Corporate Networks: Control and monitor employee internet access while providing security filtering",
        "Web Application Security: Protect web applications from attacks using reverse proxy with WAF capabilities",
        "API Gateways: Provide centralized access point for microservices with authentication and rate limiting",
        "Content Caching: Improve performance by caching frequently requested content closer to users",
        "Geographic Content Control: Enforce geographic restrictions and compliance requirements"
      ]
    },

    'dns': {
      title: 'Domain Name System (DNS)',
      overview: "The Domain Name System is a hierarchical distributed naming system that translates human-readable domain names into IP addresses that computers use to identify each other on networks. DNS serves as the internet's phone book, enabling users to access websites using memorable names while providing the underlying infrastructure for internet communication and service discovery.",
      how_it_works: [
        "Hierarchical Resolution: Query multiple DNS servers in a hierarchy from root servers to authoritative servers",
        "Caching Mechanism: Cache DNS responses at multiple levels (browser, OS, ISP, recursive resolvers) to improve performance",
        "Record Types: Store different types of records (A, AAAA, CNAME, MX, TXT) for various purposes and services",
        "Authoritative Servers: Maintain definitive records for specific domains and respond to queries about those domains",
        "Recursive Resolution: Perform complete domain resolution on behalf of clients by querying multiple servers"
      ],
      types: [
        "Root DNS Servers: Top-level servers that direct queries to appropriate top-level domain servers",
        "Authoritative DNS Servers: Servers that hold definitive records for specific domains and subdomains",
        "Recursive DNS Servers: Servers that perform full resolution by querying other DNS servers on behalf of clients",
        "Caching DNS Servers: Servers that cache previously resolved queries to improve response times",
        "Cloud DNS Services: Managed DNS services provided by cloud providers with global distribution and advanced features"
      ],
      benefits: [
        "User Experience: Enable users to access websites using memorable domain names instead of IP addresses",
        "Flexibility: Allow IP address changes without affecting users by updating DNS records",
        "Load Distribution: Support load balancing by returning different IP addresses for the same domain",
        "Service Discovery: Enable applications to discover services dynamically using DNS-based service discovery",
        "Global Scalability: Provide distributed, fault-tolerant infrastructure for internet-scale name resolution"
      ],
      considerations: [
        "TTL Configuration: Set appropriate Time-To-Live values to balance between performance and update responsiveness",
        "Security Implementation: Implement DNSSEC for authentication and protection against DNS poisoning attacks",
        "Redundancy Planning: Use multiple DNS providers and servers to ensure high availability",
        "Performance Optimization: Choose geographically distributed DNS providers for faster resolution times",
        "Monitoring & Analytics: Track DNS query patterns and response times for optimization and troubleshooting"
      ],
      use_cases: [
        "Website Hosting: Enable users to access websites using domain names with automatic IP resolution",
        "Email Routing: Use MX records to route email to appropriate mail servers for domains",
        "Service Discovery: Allow microservices to discover and connect to each other using DNS names",
        "Content Delivery: Direct users to nearest CDN edge servers based on geographic location",
        "Failover & Load Balancing: Automatically redirect traffic during outages or distribute load across servers"
      ]
    },

    'caching': {
      title: 'Caching',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110183740/Cache-Working.jpg',
      overview: "Caching is a technique that stores frequently accessed data in a high-speed storage layer to reduce access time, decrease load on underlying systems, and improve overall application performance. By keeping copies of data closer to where they are needed, caching systems significantly enhance user experience and system scalability while reducing computational and bandwidth costs.",
      how_it_works: [
        "Cache Storage: Store frequently accessed data in fast storage media (RAM, SSD) for quick retrieval",
        "Cache Policies: Implement algorithms (LRU, LFU, FIFO) to determine which data to keep or evict when cache is full",
        "Cache Hierarchy: Use multiple cache layers (L1, L2, L3) with different sizes, speeds, and purposes",
        "Cache Invalidation: Remove or update cached data when underlying data changes to maintain consistency",
        "Cache Strategies: Implement patterns like cache-aside, write-through, write-back, or refresh-ahead based on use cases"
      ],
      types: [
        "Browser Cache: Client-side caching of web resources (HTML, CSS, JavaScript, images) for faster page loads",
        "Application Cache: In-memory caching within applications using libraries like Redis, Memcached, or in-process caches",
        "Database Query Cache: Cache query results to avoid expensive database operations for repeated queries",
        "Content Delivery Network (CDN): Geographically distributed caching of static content close to users",
        "Proxy Cache: Intermediate caching between clients and servers to reduce backend load and improve performance"
      ],
      benefits: [
        "Performance Improvement: Dramatically reduce data access time from milliseconds to microseconds",
        "Scalability Enhancement: Handle more requests without proportionally increasing backend resources",
        "Cost Reduction: Decrease database load, bandwidth usage, and computational requirements",
        "User Experience: Provide faster application response times and reduced perceived latency",
        "System Reliability: Reduce load on backend systems, making them more stable and available"
      ],
      considerations: [
        "Cache Coherence: Ensure cached data remains consistent with source data through proper invalidation strategies",
        "Memory Management: Monitor and optimize memory usage to prevent cache overflow and performance degradation",
        "Cache Hit Ratio: Optimize cache size and policies to maximize hit rates and minimize cache misses",
        "Security Concerns: Protect cached sensitive data and implement proper access controls and encryption",
        "Monitoring & Analytics: Track cache performance metrics to identify optimization opportunities"
      ],
      use_cases: [
        "Web Applications: Cache database query results, session data, and computed values for faster response times",
        "Content Management: Store frequently accessed articles, images, and media files for quick delivery",
        "E-commerce Platforms: Cache product catalogs, user preferences, and shopping cart data",
        "Social Media: Cache user feeds, friend lists, and trending content for real-time user experiences",
        "Gaming Applications: Cache game assets, player statistics, and leaderboards for smooth gameplay"
      ]
    },

    'databases': {
      title: 'Databases',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20250108093901256398/3_tier.webp',
      overview: "Databases are organized collections of structured information stored electronically and accessed through database management systems (DBMS). They provide efficient storage, retrieval, and management of data while ensuring consistency, integrity, and security. Modern applications rely on various database types to handle different data models, access patterns, and scalability requirements.",
      how_it_works: [
        "Data Storage: Organize and store data in structured formats using tables, documents, key-value pairs, or graphs",
        "Query Processing: Parse, optimize, and execute queries to retrieve, insert, update, or delete data efficiently",
        "Transaction Management: Ensure ACID properties (Atomicity, Consistency, Isolation, Durability) for reliable data operations",
        "Indexing: Create and maintain indexes to accelerate data retrieval and improve query performance",
        "Concurrency Control: Handle multiple simultaneous users and operations while maintaining data consistency"
      ],
      types: [
        "Relational Databases (RDBMS): Structure data in tables with relationships, supporting SQL queries and ACID transactions",
        "NoSQL Document Databases: Store data as flexible documents (JSON, BSON) for rapid development and scaling",
        "Key-Value Stores: Simple data model storing values associated with unique keys for high-performance lookups",
        "Column-Family Databases: Store data in column families optimized for analytical workloads and big data",
        "Graph Databases: Model data as nodes and relationships, ideal for connected data and complex queries"
      ],
      benefits: [
        "Data Integrity: Maintain consistent, accurate, and reliable data through constraints and validation rules",
        "Concurrent Access: Support multiple users and applications accessing data simultaneously safely",
        "Scalability Options: Scale vertically (more powerful hardware) or horizontally (distributed across servers)",
        "Query Flexibility: Provide powerful query languages and interfaces for complex data retrieval and analysis",
        "Backup & Recovery: Offer built-in mechanisms for data backup, point-in-time recovery, and disaster recovery"
      ],
      considerations: [
        "Data Model Selection: Choose appropriate database type based on data structure, relationships, and access patterns",
        "Performance Optimization: Design efficient schemas, indexes, and queries to handle expected workloads",
        "Scalability Planning: Consider horizontal vs vertical scaling strategies based on growth projections",
        "Consistency Requirements: Balance between strong consistency and eventual consistency based on application needs",
        "Security Implementation: Implement authentication, authorization, encryption, and audit trails for data protection"
      ],
      use_cases: [
        "Web Applications: Store user accounts, content, transactions, and application state data",
        "E-commerce Systems: Manage product catalogs, inventory, orders, and customer information",
        "Content Management: Store articles, media files, comments, and content metadata",
        "Analytics Platforms: Collect, store, and analyze large volumes of structured and unstructured data",
        "Financial Systems: Handle transactions, account balances, and sensitive financial data with strict consistency"
      ]
    },

    'message-queues': {
      title: 'Message Queues',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240105171404/message-queue-image.jpg',
      overview: "Message queues are communication mechanisms that enable asynchronous message passing between different components or services in distributed systems. They decouple producers and consumers, allowing them to operate independently while ensuring reliable delivery of messages. Message queues improve system resilience, scalability, and flexibility by buffering messages and handling varying loads.",
      how_it_works: [
        "Message Production: Producers send messages to queues without needing to wait for consumers to be available",
        "Queue Storage: Messages are stored in queues until consumers are ready to process them, providing buffering capability",
        "Message Consumption: Consumers retrieve and process messages from queues at their own pace",
        "Delivery Guarantees: Implement various delivery semantics (at-least-once, exactly-once, at-most-once) based on requirements",
        "Dead Letter Queues: Handle failed message processing by routing unprocessable messages to special queues for analysis"
      ],
      types: [
        "Point-to-Point Queues: Direct message delivery from one producer to one consumer, ensuring each message is processed once",
        "Publish-Subscribe Topics: Multiple consumers can subscribe to receive copies of messages published to topics",
        "Priority Queues: Process messages based on assigned priorities, handling urgent messages before others",
        "Delayed Queues: Schedule message delivery for future processing, enabling time-based operations",
        "Stream Processing Queues: Handle continuous streams of messages with ordering guarantees and replay capabilities"
      ],
      benefits: [
        "Decoupling: Separate producers and consumers, allowing independent development, deployment, and scaling",
        "Reliability: Provide message persistence and delivery guarantees to prevent data loss during failures",
        "Scalability: Handle varying loads by buffering messages and enabling horizontal scaling of consumers",
        "Fault Tolerance: Continue operating when individual components fail, improving overall system resilience",
        "Load Leveling: Smooth out traffic spikes by queuing messages during high demand periods"
      ],
      considerations: [
        "Message Ordering: Decide whether message ordering is important and choose appropriate queue types",
        "Delivery Guarantees: Select appropriate delivery semantics based on application consistency requirements",
        "Queue Sizing: Plan queue capacity and implement monitoring to prevent memory exhaustion",
        "Error Handling: Design strategies for handling message processing failures and poison messages",
        "Performance Tuning: Optimize message serialization, batching, and consumer concurrency for throughput"
      ],
      use_cases: [
        "Microservices Communication: Enable asynchronous communication between services without tight coupling",
        "Background Job Processing: Queue time-consuming tasks like image processing, email sending, or report generation",
        "Event-Driven Architecture: Propagate events across system components for reactive and responsive applications",
        "Order Processing: Handle e-commerce order workflows with multiple processing steps and external integrations",
        "Notification Systems: Queue and deliver notifications (email, SMS, push) without blocking main application flow"
      ]
    },

    'circuit-breaker': {
      title: 'Circuit Breaker',
      overview: "The Circuit Breaker pattern is a design pattern that prevents cascading failures in distributed systems by monitoring the health of external service calls and temporarily blocking requests when failure rates exceed acceptable thresholds. Like an electrical circuit breaker, it 'trips' to protect the system from damage and provides a mechanism for recovery once the downstream service becomes healthy again.",
      how_it_works: [
        "Failure Monitoring: Track success and failure rates of calls to external services or components",
        "State Management: Maintain three states - Closed (normal operation), Open (blocking calls), and Half-Open (testing recovery)",
        "Threshold Detection: Trip the circuit breaker when failure rate exceeds configured thresholds within a time window",
        "Fallback Execution: Provide alternative responses or cached data when the circuit is open",
        "Recovery Testing: Periodically test downstream services to determine when to close the circuit and resume normal operation"
      ],
      types: [
        "Count-Based Circuit Breaker: Trip based on the number of consecutive failures or failure count within a sliding window",
        "Time-Based Circuit Breaker: Trip based on failure rate percentage over a specific time period",
        "Hybrid Circuit Breaker: Combine count and time-based approaches for more sophisticated failure detection",
        "Bulkhead Circuit Breaker: Isolate different types of operations with separate circuit breakers",
        "Adaptive Circuit Breaker: Dynamically adjust thresholds based on historical performance and current conditions"
      ],
      benefits: [
        "Fault Isolation: Prevent failures in one service from cascading to dependent services",
        "System Stability: Maintain overall system responsiveness when individual components fail",
        "Resource Protection: Avoid wasting resources on calls that are likely to fail",
        "Graceful Degradation: Provide fallback responses to maintain partial functionality during outages",
        "Fast Recovery: Quickly resume normal operation once downstream services recover"
      ],
      considerations: [
        "Threshold Configuration: Set appropriate failure rate thresholds and time windows for your system's tolerance",
        "Fallback Strategy: Design meaningful fallback responses that provide value even when services are unavailable",
        "Recovery Testing: Balance between quick recovery detection and avoiding premature circuit closing",
        "Monitoring & Alerting: Implement comprehensive monitoring to track circuit breaker state changes and failures",
        "Timeout Configuration: Set appropriate timeouts to work effectively with circuit breaker failure detection"
      ],
      use_cases: [
        "Microservices Architecture: Protect services from failures in their dependencies and external APIs",
        "Third-Party Integrations: Prevent external service outages from affecting your application's core functionality",
        "Database Connections: Protect against database overload by failing fast when connection pools are exhausted",
        "Payment Processing: Provide fallback mechanisms when payment gateways become unavailable",
        "Content Delivery: Serve cached or alternative content when content services are experiencing issues"
      ]
    },

    'api-gateway': {
      title: 'API Gateway',
      overview: "An API Gateway is a server that acts as a single entry point for multiple backend services, providing centralized management of API requests, security, monitoring, and routing. It serves as a reverse proxy that accepts API calls, aggregates various services needed to fulfill them, and returns appropriate results, while handling cross-cutting concerns like authentication, rate limiting, and request/response transformation.",
      how_it_works: [
        "Request Routing: Route incoming API requests to appropriate backend services based on URL patterns, headers, or other criteria",
        "Authentication & Authorization: Verify client identity and enforce access policies before forwarding requests to backend services",
        "Request/Response Transformation: Modify request and response formats, headers, and data structures between clients and services",
        "Load Balancing: Distribute requests across multiple instances of backend services for improved performance and availability",
        "Monitoring & Analytics: Collect metrics, logs, and traces for all API traffic passing through the gateway"
      ],
      types: [
        "Edge API Gateway: Deployed at the network edge to handle external client requests and provide security at the perimeter",
        "Internal API Gateway: Manage communication between internal services within a microservices architecture",
        "Backend for Frontend (BFF): Specialized gateways tailored for specific client types (mobile, web, IoT)",
        "Protocol Gateway: Handle protocol translation between different communication protocols (HTTP to gRPC, REST to GraphQL)",
        "Cloud-Native Gateway: Kubernetes-native gateways that integrate with container orchestration platforms"
      ],
      benefits: [
        "Centralized Security: Implement authentication, authorization, and security policies in a single location",
        "Cross-Cutting Concerns: Handle common functionality like rate limiting, caching, and logging centrally",
        "Service Aggregation: Combine multiple backend calls into single client requests to reduce network overhead",
        "API Versioning: Manage multiple API versions and provide smooth migration paths for clients",
        "Developer Experience: Provide consistent APIs and documentation regardless of backend service complexity"
      ],
      considerations: [
        "Performance Impact: Ensure gateway doesn't become a bottleneck by implementing proper caching and optimization",
        "High Availability: Design redundant gateway infrastructure to avoid single points of failure",
        "Security Configuration: Implement proper security controls without creating vulnerabilities at the gateway level",
        "Configuration Management: Maintain gateway configurations and routing rules as services evolve",
        "Monitoring & Observability: Set up comprehensive monitoring to track performance, errors, and security events"
      ],
      use_cases: [
        "Microservices Architecture: Provide single entry point for clients accessing multiple microservices",
        "Legacy System Integration: Modernize legacy APIs and provide consistent interfaces for new applications",
        "Mobile Applications: Aggregate backend calls and optimize responses for mobile clients with limited bandwidth",
        "Third-Party API Management: Control and monitor access to internal APIs by external partners and developers",
        "Multi-Cloud Deployments: Route requests across services deployed in different cloud providers or regions"
      ]
    },

    'websockets': {
      title: 'WebSockets',
      overview: "WebSockets provide a persistent, full-duplex communication channel between web browsers and servers, enabling real-time bidirectional data exchange. Unlike traditional HTTP requests, WebSockets maintain an open connection that allows both client and server to send messages at any time, making them ideal for interactive applications requiring instant updates and low-latency communication.",
      how_it_works: [
        "Connection Establishment: Begin with an HTTP handshake that upgrades the connection to the WebSocket protocol",
        "Persistent Connection: Maintain an open TCP connection that stays alive for the duration of the session",
        "Message Exchange: Send and receive messages in both directions without the overhead of HTTP headers",
        "Frame-Based Protocol: Use lightweight frames to wrap message data with minimal protocol overhead",
        "Connection Management: Handle connection lifecycle events including open, close, error, and heartbeat/ping-pong"
      ],
      types: [
        "Native WebSockets: Direct browser implementation using the WebSocket API for real-time web applications",
        "Socket.IO: Popular library providing WebSocket abstraction with fallback mechanisms and additional features",
        "Server-Sent Events (SSE): One-way communication from server to client for scenarios not requiring bidirectional data",
        "WebRTC Data Channels: Peer-to-peer communication channels for direct client-to-client data exchange",
        "Secure WebSockets (WSS): Encrypted WebSocket connections using TLS/SSL for secure data transmission"
      ],
      benefits: [
        "Real-Time Communication: Enable instant data exchange without polling or request overhead",
        "Low Latency: Minimize communication delay through persistent connections and reduced protocol overhead",
        "Bidirectional Data Flow: Support both client-initiated and server-initiated communication patterns",
        "Efficient Resource Usage: Reduce server load compared to frequent HTTP polling for real-time updates",
        "Rich Interactive Experiences: Enable responsive user interfaces with immediate feedback and live updates"
      ],
      considerations: [
        "Connection Management: Handle connection drops, reconnection logic, and connection pooling for scalability",
        "Security Implementation: Secure WebSocket connections against attacks like CSRF, XSS, and unauthorized access",
        "Scalability Planning: Design for horizontal scaling across multiple servers using load balancers and session affinity",
        "Message Ordering: Ensure proper message ordering and delivery in high-throughput scenarios",
        "Fallback Mechanisms: Provide alternative communication methods for environments that don't support WebSockets"
      ],
      use_cases: [
        "Chat Applications: Real-time messaging platforms with instant message delivery and typing indicators",
        "Live Gaming: Multiplayer games requiring immediate updates for player actions and game state changes",
        "Collaborative Editing: Document editing platforms where multiple users edit simultaneously with live updates",
        "Financial Trading: Real-time stock prices, trading updates, and market data feeds",
        "Live Streaming: Interactive features like live comments, reactions, and viewer engagement during broadcasts"
      ]
    },

    'database-sharding': {
      title: 'Database Sharding',
      overview: "Database sharding is a horizontal partitioning technique that distributes data across multiple database instances or servers, with each shard containing a subset of the total data. This approach enables databases to scale beyond the limitations of a single server by distributing both data storage and query load, improving performance and allowing for massive scalability in large-scale applications.",
      how_it_works: [
        "Data Partitioning: Divide data into logical shards based on a sharding key that determines which shard stores each record",
        "Shard Distribution: Distribute shards across multiple database servers or instances to balance load and storage",
        "Query Routing: Route queries to appropriate shards based on the sharding key or perform cross-shard queries when necessary",
        "Shard Management: Handle shard creation, deletion, rebalancing, and migration as data grows or requirements change",
        "Consistency Maintenance: Ensure data consistency within shards while managing potential consistency challenges across shards"
      ],
      types: [
        "Range-Based Sharding: Partition data based on ranges of values in the sharding key (alphabetical, numerical ranges)",
        "Hash-Based Sharding: Use hash functions to distribute data evenly across shards based on sharding key values",
        "Directory-Based Sharding: Maintain a lookup service that maps sharding keys to specific shard locations",
        "Geographical Sharding: Distribute data based on geographic regions to improve latency and comply with regulations",
        "Vertical Sharding: Split different tables or features across different database instances based on functionality"
      ],
      benefits: [
        "Horizontal Scalability: Scale database capacity by adding more servers rather than upgrading hardware",
        "Improved Performance: Reduce query response times by distributing load across multiple database instances",
        "Fault Isolation: Limit the impact of failures to individual shards rather than the entire database system",
        "Cost Efficiency: Use commodity hardware and cloud instances instead of expensive high-end database servers",
        "Geographic Distribution: Place data closer to users for reduced latency and regulatory compliance"
      ],
      considerations: [
        "Sharding Key Selection: Choose sharding keys that distribute data evenly and minimize cross-shard queries",
        "Cross-Shard Operations: Handle queries and transactions that span multiple shards with appropriate coordination",
        "Rebalancing Strategy: Plan for data migration and rebalancing as shards become unbalanced over time",
        "Application Complexity: Modify applications to be shard-aware and handle routing and aggregation logic",
        "Backup & Recovery: Implement consistent backup and recovery strategies across all shards"
      ],
      use_cases: [
        "Social Media Platforms: Distribute user data and posts across shards based on user ID or geographic location",
        "E-commerce Systems: Shard product catalogs, orders, and customer data to handle millions of users and transactions",
        "Multi-Tenant Applications: Isolate tenant data in separate shards for security and performance",
        "Analytics Platforms: Partition time-series data by date ranges for efficient historical data analysis",
        "Gaming Applications: Distribute player data and game states across regional shards for optimal performance"
      ]
    }
  },

  // TRADE-OFFS - Comparison structure
  tradeoffs: {
    'consistency-vs-availability': {
      title: 'Consistency vs Availability',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240105154236/Trade-off-in-the-CAP-Theorem.jpg',
      overview: "The fundamental trade-off between Consistency and Availability, as outlined in the CAP theorem, requires distributed systems to choose between guaranteeing that all nodes see the same data simultaneously versus ensuring the system remains responsive even during network failures. This trade-off influences every aspect of distributed system design and has profound implications for user experience and business requirements.",
      option_a: {
        title: "Consistency (CP Systems)",
        description: "Systems that prioritize consistency ensure all nodes see the same data at the same time, sacrificing availability during network partitions.",
        characteristics: [
          "Strong Data Consistency: All reads receive the most recent write across all nodes",
          "ACID Properties: Full transactional guarantees with rollback capabilities",
          "Synchronous Replication: Changes are committed only after all replicas acknowledge",
          "Blocking Operations: Operations may block or fail during network partitions"
        ],
        examples: ["Traditional RDBMS (PostgreSQL, MySQL)", "MongoDB with strong consistency", "HBase", "Redis Cluster"]
      },
      option_b: {
        title: "Availability (AP Systems)", 
        description: "Systems that prioritize availability remain responsive to requests even during network partitions, accepting temporary data inconsistencies.",
        characteristics: [
          "High Uptime: Systems continue operating even when some nodes are unreachable",
          "Eventual Consistency: Data will become consistent over time, but may be temporarily inconsistent",
          "Asynchronous Replication: Changes are applied immediately and replicated asynchronously",
          "Graceful Degradation: Partial functionality maintained during failures"
        ],
        examples: ["Amazon DynamoDB", "Apache Cassandra", "DNS systems", "Web caches", "CouchDB"]
      },
      decision_factors: [
        "Business Requirements: Financial systems need consistency, while social media can tolerate inconsistency",
        "User Experience: Consider whether users can handle stale data or need real-time accuracy",
        "Geographic Distribution: Global systems are more likely to experience network partitions",
        "Data Criticality: Critical data (payments) vs non-critical data (recommendations)",
        "Regulatory Compliance: Some industries require strong consistency for audit and compliance"
      ],
      implementation_examples: [
        "Banking System: Choose consistency for account balances to prevent overdrafts and maintain accurate financial records",
        "Social Media Feed: Choose availability to ensure users can always access content, even if it's slightly outdated",
        "E-commerce Inventory: Hybrid approach - strong consistency for stock levels, eventual consistency for product reviews",
        "Chat Applications: Availability for message delivery, with eventual consistency for message ordering"
      ]
    },

    'latency-vs-throughput': {
      title: 'Latency vs Throughput',
      overview: "The trade-off between latency and throughput represents a fundamental performance consideration in system design. Latency measures the time it takes to process a single request, while throughput measures the number of requests processed per unit time. Optimizing for one often comes at the expense of the other, requiring careful consideration of user experience and system requirements.",
      option_a: {
        title: "Low Latency",
        description: "Systems optimized for low latency prioritize fast response times for individual requests, ensuring immediate user feedback.",
        characteristics: [
          "Fast Response Times: Individual requests complete quickly with minimal delay",
          "Real-time Processing: Immediate processing and response to user actions",
          "Resource Intensive: May require more CPU, memory, or specialized hardware",
          "Lower Concurrency: May handle fewer simultaneous requests to maintain speed"
        ],
        examples: ["Gaming systems", "Trading platforms", "Real-time communication", "Interactive web applications", "In-memory databases"]
      },
      option_b: {
        title: "High Throughput",
        description: "Systems optimized for throughput prioritize processing large volumes of requests efficiently, even if individual requests take longer.",
        characteristics: [
          "High Volume Processing: Can handle many concurrent requests simultaneously",
          "Batch Processing: Groups requests together for more efficient processing",
          "Resource Efficient: Better utilization of system resources through batching",
          "Higher Individual Latency: Each request may take longer to complete"
        ],
        examples: ["Batch processing systems", "Data analytics platforms", "ETL pipelines", "Content delivery networks", "Background job processors"]
      },
      decision_factors: [
        "User Experience Requirements: Interactive applications need low latency, batch jobs can tolerate higher latency",
        "Business Model: Real-time services vs analytical processing requirements",
        "Resource Constraints: Available CPU, memory, and network bandwidth",
        "Scale Requirements: Number of concurrent users vs speed of individual operations",
        "SLA Requirements: Response time guarantees vs processing volume commitments"
      ],
      implementation_examples: [
        "Online Gaming: Ultra-low latency for player actions, accepting lower overall player capacity",
        "Data Warehouse: High throughput for processing large datasets, accepting longer query times",
        "API Gateway: Balance between response time and request handling capacity",
        "Video Streaming: High throughput for content delivery with acceptable buffering latency"
      ]
    },

    'horizontal-vs-vertical-scaling': {
      title: 'Horizontal vs Vertical Scaling',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240208100939/hvs-v.webp',
      overview: "Scaling strategies determine how systems handle increased load and growth. Vertical scaling (scaling up) involves adding more power to existing machines, while horizontal scaling (scaling out) involves adding more machines to the system. Each approach has distinct advantages, limitations, and cost implications that significantly impact system architecture and long-term scalability.",
      option_a: {
        title: "Vertical Scaling (Scale Up)",
        description: "Increasing the capacity of existing hardware by adding more CPU, RAM, or storage to individual servers.",
        characteristics: [
          "Hardware Upgrades: Add more powerful CPUs, increase RAM, or faster storage",
          "Simpler Architecture: No need to manage distributed systems complexity",
          "Single Point of Failure: All load depends on one machine",
          "Hardware Limits: Physical and economic limits to how much you can upgrade"
        ],
        examples: ["Database servers with more RAM", "Upgrading CPU cores", "Adding SSD storage", "GPU upgrades for ML workloads"]
      },
      option_b: {
        title: "Horizontal Scaling (Scale Out)",
        description: "Adding more servers or instances to distribute the load across multiple machines.",
        characteristics: [
          "Distributed Load: Spread work across multiple machines",
          "Better Fault Tolerance: Failure of one machine doesn't bring down the system",
          "Complex Architecture: Requires load balancing, data sharding, and coordination",
          "Near Unlimited Scale: Can add machines as needed within cost constraints"
        ],
        examples: ["Web server clusters", "Database sharding", "Microservices architecture", "Container orchestration", "CDN networks"]
      },
      decision_factors: [
        "Cost Considerations: Initial hardware costs vs ongoing operational complexity",
        "Reliability Requirements: Tolerance for single points of failure",
        "Growth Projections: Expected scale and growth patterns",
        "Technical Expertise: Team capability to manage distributed systems",
        "Application Architecture: Whether the application can be distributed effectively"
      ],
      implementation_examples: [
        "Small Business Application: Start with vertical scaling for simplicity and cost-effectiveness",
        "High-Traffic Web Application: Horizontal scaling with load balancers and multiple web servers",
        "Database Layer: Vertical scaling for master database, horizontal scaling with read replicas",
        "Global Application: Horizontal scaling across multiple regions for performance and reliability"
      ]
    },

    'sql-vs-nosql': {
      title: 'SQL vs NoSQL Databases',
      overview: "The choice between SQL (relational) and NoSQL (non-relational) databases is fundamental to system architecture. SQL databases provide strong consistency and structured relationships through ACID properties, while NoSQL databases offer flexibility and scalability for varied data types and high-volume scenarios. This decision impacts data modeling, query capabilities, scaling strategies, and long-term maintainability.",
      option_a: {
        title: "SQL Databases (RDBMS)",
        description: "Relational databases that use structured query language and enforce ACID properties with predefined schemas.",
        characteristics: [
          "ACID Compliance: Strong consistency with Atomicity, Consistency, Isolation, Durability",
          "Structured Schema: Predefined table structures with enforced data types and constraints",
          "Complex Queries: Powerful SQL with joins, aggregations, and complex relationships",
          "Mature Ecosystem: Decades of development, extensive tooling, and expertise"
        ],
        examples: ["PostgreSQL", "MySQL", "Oracle Database", "Microsoft SQL Server", "SQLite"]
      },
      option_b: {
        title: "NoSQL Databases",
        description: "Non-relational databases designed for flexible schemas and horizontal scalability, optimized for specific use cases.",
        characteristics: [
          "Flexible Schema: Dynamic structure allowing varied data formats without predefined schema",
          "Horizontal Scalability: Designed to scale across multiple servers easily",
          "Eventual Consistency: Often trade strong consistency for availability and partition tolerance",
          "Specialized Use Cases: Optimized for specific patterns like document storage, key-value, or graph relationships"
        ],
        examples: ["MongoDB (Document)", "Redis (Key-Value)", "Cassandra (Column-family)", "Neo4j (Graph)", "DynamoDB (Key-Value)"]
      },
      decision_factors: [
        "Data Structure: Relational data vs flexible/varied data formats",
        "Scale Requirements: Vertical scaling limits vs need for horizontal scaling",
        "Consistency Requirements: ACID compliance vs eventual consistency acceptance",
        "Query Complexity: Complex analytical queries vs simple read/write operations",
        "Team Expertise: SQL knowledge vs NoSQL-specific skills and learning curve"
      ],
      implementation_examples: [
        "E-commerce Platform: SQL for transactions and inventory, NoSQL for product catalogs and user sessions",
        "Social Media Application: NoSQL for posts and feeds, SQL for user accounts and relationships",
        "Analytics Dashboard: SQL for structured reporting, NoSQL for real-time event storage",
        "Content Management: NoSQL for flexible content types, SQL for user management and permissions"
      ]
    },

    'rest-vs-rpc': {
      title: 'REST vs RPC',
      overview: "The choice between REST (Representational State Transfer) and RPC (Remote Procedure Call) architectures defines how services communicate in distributed systems. REST emphasizes resource-based interactions using standard HTTP methods, while RPC focuses on action-based remote function calls. This decision affects API design, client-server coupling, caching strategies, and overall system architecture.",
      option_a: {
        title: "REST (Representational State Transfer)",
        description: "Architectural style that treats system entities as resources manipulated through standard HTTP methods.",
        characteristics: [
          "Resource-Based: URLs represent resources, HTTP methods define operations",
          "Stateless: Each request contains all necessary information, no server-side session state",
          "HTTP Standard: Leverages HTTP methods (GET, POST, PUT, DELETE) and status codes",
          "Cacheable: Natural caching support through HTTP headers and idempotent operations"
        ],
        examples: ["Web APIs", "Microservices communication", "Public APIs (Twitter, GitHub)", "Mobile app backends"]
      },
      option_b: {
        title: "RPC (Remote Procedure Call)",
        description: "Communication paradigm that allows calling functions on remote servers as if they were local procedure calls.",
        characteristics: [
          "Action-Oriented: Focus on procedures/functions rather than resources",
          "Protocol Flexibility: Can use various protocols (HTTP, TCP, UDP)",
          "Type Safety: Strong typing and contract definition (especially with gRPC)",
          "Efficiency: More compact payloads and faster serialization (binary protocols)"
        ],
        examples: ["gRPC services", "Apache Thrift", "Java RMI", "Internal microservice communication"]
      },
      decision_factors: [
        "API Design Philosophy: Resource manipulation vs function calls",
        "Performance Requirements: HTTP overhead vs binary protocol efficiency",
        "Caching Needs: REST's natural caching vs RPC's custom caching solutions",
        "Client Diversity: Web browsers and REST vs specialized clients for RPC",
        "Type Safety: REST's flexibility vs RPC's strong contracts and code generation"
      ],
      implementation_examples: [
        "Public Web API: REST for broad compatibility and caching benefits",
        "Internal Microservices: RPC for performance and type safety between services",
        "Mobile Application: REST for web compatibility, RPC for performance-critical operations",
        "Real-time Systems: RPC for efficient binary communication, REST for configuration and management"
      ]
    },

    'push-vs-pull': {
      title: 'Push vs Pull Architecture',
      overview: "Push and pull represent fundamental communication patterns in distributed systems for data synchronization and event handling. Push systems actively send data to consumers when events occur, while pull systems require consumers to actively request data. This choice affects system responsiveness, resource utilization, scalability patterns, and overall architecture complexity.",
      option_a: {
        title: "Push Architecture",
        description: "Systems actively push data or notifications to consumers immediately when events occur or data changes.",
        characteristics: [
          "Real-time Updates: Immediate data delivery when events occur",
          "Server-Initiated: Server decides when and what data to send to clients",
          "Connection Management: Requires persistent connections or notification infrastructure",
          "Resource Intensive: Maintains connections and tracks subscriber state"
        ],
        examples: ["WebSockets", "Server-Sent Events (SSE)", "Push notifications", "Pub/Sub systems", "Real-time dashboards"]
      },
      option_b: {
        title: "Pull Architecture",
        description: "Consumers actively request data from producers, typically through polling or on-demand requests.",
        characteristics: [
          "Client-Controlled: Consumers determine when to request data",
          "Stateless Servers: No need to maintain client connection state",
          "Scalable: Easier to scale as servers don't track active connections",
          "Potential Delays: Data may be stale until next pull request"
        ],
        examples: ["REST API polling", "HTTP requests", "Database queries", "Cron jobs", "Batch processing"]
      },
      decision_factors: [
        "Latency Requirements: Real-time needs vs acceptable delays",
        "Resource Constraints: Connection overhead vs polling frequency",
        "Scalability Patterns: Number of consumers and update frequency",
        "Network Reliability: Stable connections vs intermittent connectivity",
        "Data Freshness: Critical real-time updates vs eventually consistent data"
      ],
      implementation_examples: [
        "Chat Application: Push for instant message delivery, pull for message history",
        "Stock Trading Platform: Push for real-time price updates, pull for historical data",
        "Social Media Feed: Push for notifications, pull for feed refresh",
        "Monitoring System: Push for critical alerts, pull for periodic status checks"
      ]
    }
  },

  // INTERVIEW PROBLEMS - Problem-focused structure
  interview_problems: {
    'easy': {
      title: 'Easy Interview Problems',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20250809171744509715/URL-Shortner.webp',
      problems: [
        {
          title: 'Design URL Shortener (TinyURL)',
          difficulty: 'Easy',
          description: 'Design a service that shortens long URLs and redirects users to the original URL when accessed.',
          requirements: [
            'Shorten long URLs into shorter, unique identifiers',
            'Redirect short URLs to original long URLs',
            'Handle millions of URLs with low latency',
            'Provide basic analytics (optional)'
          ],
          key_components: [
            'URL Encoding Service: Generate unique short codes for long URLs',
            'Database: Store mapping between short codes and long URLs',
            'Redirect Service: Handle HTTP redirects from short to long URLs',
            'Cache Layer: Cache popular URLs for faster access'
          ],
          scaling_considerations: [
            'Database sharding based on URL hash for horizontal scaling',
            'CDN for global distribution of redirect service',
            'Read replicas for handling high read traffic',
            'Caching strategy for frequently accessed URLs'
          ],
          key_concepts: ['Hashing', 'Database Design', 'Caching', 'HTTP Redirects']
        }
      ]
    },
    'medium': {
      title: 'Medium Interview Problems',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231214121653/High-Level-Design-(HLD)-of-WhatsApp-Messenger.jpg',
      problems: [
        {
          title: 'Design Chat System (WhatsApp/Slack)',
          difficulty: 'Medium',
          description: 'Design a real-time messaging system that supports one-on-one and group conversations with delivery guarantees.',
          requirements: [
            'Support real-time messaging between users',
            'Handle group conversations with multiple participants',
            'Ensure message delivery and ordering',
            'Support online/offline user status',
            'Handle media sharing (images, files)',
            'Provide message history and search'
          ],
          key_components: [
            'WebSocket Gateway: Handle real-time connections and message routing',
            'Message Service: Process, validate, and store messages',
            'User Service: Manage user profiles, authentication, and presence',
            'Notification Service: Handle push notifications for offline users',
            'Media Service: Process and store shared media files',
            'Message Database: Store conversation history with proper indexing'
          ],
          scaling_considerations: [
            'Horizontal scaling of WebSocket connections across multiple servers',
            'Database partitioning by conversation or user ID',
            'Message queue for reliable message delivery',
            'CDN for media file distribution',
            'Connection pooling and load balancing for WebSocket servers'
          ],
          key_concepts: ['WebSockets', 'Real-time Systems', 'Message Queues', 'Database Partitioning', 'Push Notifications']
        },
        {
          title: 'Design Social Media Feed (Twitter/Instagram)',
          difficulty: 'Medium',
          description: 'Design a scalable social media feed system that delivers personalized content to millions of users.',
          requirements: [
            'Generate personalized feeds for users based on following relationships',
            'Support posting text, images, and videos',
            'Handle likes, comments, and shares',
            'Implement timeline generation (pull vs push)',
            'Support trending topics and hashtags',
            'Handle high read/write ratios efficiently'
          ],
          key_components: [
            'Post Service: Handle content creation, validation, and storage',
            'Feed Generation Service: Create personalized timelines using pull/push strategies',
            'Social Graph Service: Manage user relationships and following data',
            'Ranking Service: Algorithm to rank and personalize feed content',
            'Media Processing Service: Handle image/video upload and processing',
            'Cache Layer: Store generated feeds and frequently accessed content'
          ],
          scaling_considerations: [
            'Fanout strategies: pull model for celebrities, push model for regular users',
            'Database sharding by user ID or content type',
            'CDN for media content delivery',
            'Read replicas for handling high read traffic',
            'Caching layers for feeds, user data, and social graphs'
          ],
          key_concepts: ['Feed Generation', 'Social Graphs', 'Content Delivery', 'Caching Strategies', 'Database Sharding']
        },
        {
          title: 'Design Ride Sharing Service (Uber/Lyft)',
          difficulty: 'Medium',
          description: 'Design a location-based ride-sharing platform that matches drivers with passengers efficiently.',
          requirements: [
            'Match passengers with nearby available drivers',
            'Real-time location tracking for drivers and passengers',
            'Dynamic pricing based on supply and demand',
            'Route optimization and navigation',
            'Payment processing and trip management',
            'Rating and review system for drivers and passengers'
          ],
          key_components: [
            'Location Service: Track and update real-time locations using GPS',
            'Matching Service: Algorithm to pair passengers with optimal drivers',
            'Trip Service: Manage trip lifecycle from booking to completion',
            'Pricing Service: Calculate dynamic pricing based on demand and supply',
            'Payment Service: Handle secure payment processing',
            'Notification Service: Real-time updates to drivers and passengers'
          ],
          scaling_considerations: [
            'Geospatial indexing and partitioning for location data',
            'Real-time data streaming for location updates',
            'Load balancing across geographical regions',
            'Database replication for high availability',
            'Event-driven architecture for trip state management'
          ],
          key_concepts: ['Geospatial Indexing', 'Real-time Tracking', 'Matching Algorithms', 'Dynamic Pricing', 'Event-driven Architecture']
        }
      ]
    },
    'hard': {
      title: 'Hard Interview Problems',
      image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210128214233/Netflix-High-Level-System-Architecture.png',
      problems: [
        {
          title: 'Design Global Content Delivery Network (CDN)',
          difficulty: 'Hard',
          description: 'Design a globally distributed content delivery network that serves static and dynamic content with low latency worldwide.',
          requirements: [
            'Minimize latency for global users through edge servers',
            'Handle cache invalidation and content updates efficiently',
            'Support both static assets and dynamic content acceleration',
            'Implement intelligent routing based on network conditions',
            'Provide DDoS protection and security features',
            'Handle massive traffic spikes and peak loads',
            'Support real-time analytics and monitoring'
          ],
          key_components: [
            'Edge Servers: Geographically distributed cache servers for content delivery',
            'Origin Servers: Primary content sources with load balancing',
            'DNS Service: Intelligent routing to nearest edge servers',
            'Cache Management: Multi-tier caching with sophisticated invalidation',
            'Load Balancer: Traffic distribution across origin and edge servers',
            'Analytics Service: Real-time monitoring and performance metrics',
            'Security Layer: DDoS protection, WAF, and SSL termination'
          ],
          scaling_considerations: [
            'Global server placement strategy and PoP (Point of Presence) optimization',
            'Hierarchical caching with multiple cache tiers',
            'Anycast routing for optimal path selection',
            'Content pre-warming and predictive caching',
            'Bandwidth optimization and compression techniques',
            'Fault tolerance and automatic failover mechanisms'
          ],
          key_concepts: ['Global Distribution', 'Edge Computing', 'DNS Routing', 'Multi-tier Caching', 'Anycast', 'Performance Optimization']
        },
        {
          title: 'Design Distributed Video Streaming Platform (Netflix/YouTube)',
          difficulty: 'Hard',
          description: 'Design a scalable video streaming platform that serves millions of concurrent users with adaptive bitrate streaming.',
          requirements: [
            'Stream videos to millions of concurrent users globally',
            'Support adaptive bitrate streaming based on network conditions',
            'Handle video upload, processing, and encoding in multiple formats',
            'Implement content recommendation system',
            'Provide real-time analytics on viewing patterns',
            'Support live streaming capabilities',
            'Ensure high availability and fault tolerance'
          ],
          key_components: [
            'Video Processing Pipeline: Encoding, transcoding, and format conversion',
            'Content Delivery Network: Global distribution of video content',
            'Streaming Service: Adaptive bitrate streaming and playback control',
            'Recommendation Engine: ML-based content recommendation system',
            'User Service: Authentication, profiles, and viewing history',
            'Analytics Service: Real-time viewing metrics and user behavior tracking',
            'Live Streaming Service: Real-time video ingestion and distribution'
          ],
          scaling_considerations: [
            'Video content partitioning and global replication strategy',
            'Elastic encoding infrastructure for processing video uploads',
            'CDN optimization for video delivery and bandwidth management',
            'Real-time streaming infrastructure with low latency requirements',
            'Machine learning pipeline scaling for recommendations',
            'Database scaling for user data and viewing analytics'
          ],
          key_concepts: ['Video Processing', 'Adaptive Streaming', 'Content Recommendation', 'Real-time Analytics', 'Machine Learning', 'Live Streaming']
        },
        {
          title: 'Design Distributed Database System',
          difficulty: 'Hard',
          description: 'Design a horizontally scalable distributed database system that provides ACID guarantees and handles petabytes of data.',
          requirements: [
            'Horizontal scaling across multiple nodes and data centers',
            'ACID compliance with distributed transactions',
            'Automatic data partitioning and rebalancing',
            'Strong consistency with configurable consistency levels',
            'Fault tolerance and automatic recovery',
            'Support for complex queries and joins',
            'Hot backup and disaster recovery capabilities'
          ],
          key_components: [
            'Distributed Storage Engine: Data partitioning and replication across nodes',
            'Consensus Algorithm: Distributed consensus for consistency (Raft/Paxos)',
            'Query Processor: Distributed query planning and execution',
            'Transaction Manager: Distributed transaction coordination and ACID compliance',
            'Metadata Service: Cluster topology and data distribution metadata',
            'Monitoring Service: Health monitoring and performance metrics',
            'Backup Service: Distributed backup and disaster recovery'
          ],
          scaling_considerations: [
            'Consistent hashing for data distribution and rebalancing',
            'Multi-master replication with conflict resolution',
            'Distributed locking and deadlock detection',
            'Query optimization across distributed nodes',
            'Network partition tolerance and split-brain prevention',
            'Elastic scaling with automatic node addition/removal'
          ],
          key_concepts: ['Distributed Consensus', 'ACID Transactions', 'Data Partitioning', 'Replication', 'Consistency Models', 'Fault Tolerance']
        }
      ]
    }
  },

  // RESOURCES - Simple list structure with proper links
  resources: {
    'books': {
      title: 'Essential Books',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240219171430/Roadmap-to-Learn-System-Design.webp',
      items: [
        {
          title: 'Designing Data-Intensive Applications',
          author: 'Martin Kleppmann',
          description: 'The definitive guide to building scalable, reliable, and maintainable systems. Covers distributed systems, data modeling, and system architecture.',
          link: 'https://dataintensive.net/',
          topics: ['Distributed Systems', 'Data Modeling', 'System Architecture']
        },
        {
          title: 'System Design Interview – An Insider\'s Guide',
          author: 'Alex Xu',
          description: 'Comprehensive guide to system design interviews with step-by-step walkthroughs of designing popular systems like chat systems, web crawlers, and notification systems.',
          link: 'https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF',
          topics: ['Interview Preparation', 'System Design', 'Architecture Patterns']
        },
        {
          title: 'Building Microservices',
          author: 'Sam Newman',
          description: 'Practical guide to building and deploying microservices architecture, covering service decomposition, communication patterns, and operational concerns.',
          link: 'https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1491950358',
          topics: ['Microservices', 'Service Architecture', 'Distributed Systems']
        },
        {
          title: 'Release It! Design and Deploy Production-Ready Software',
          author: 'Michael Nygard',
          description: 'Essential patterns for building resilient systems that can handle the harsh realities of production environments, including failure modes and stability patterns.',
          link: 'https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software/dp/1680502395',
          topics: ['Production Systems', 'Resilience', 'Stability Patterns']
        },
        {
          title: 'The Phoenix Project',
          author: 'Gene Kim, Kevin Behr, George Spafford',
          description: 'Novel about IT operations that teaches DevOps principles through a compelling story, covering constraint management and continuous delivery.',
          link: 'https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592',
          topics: ['DevOps', 'Operations', 'Continuous Delivery']
        },
        {
          title: 'Database Internals',
          author: 'Alex Petrov',
          description: 'Deep dive into how database systems work under the hood, covering storage engines, distributed systems, and database algorithms.',
          link: 'https://www.amazon.com/Database-Internals-Deep-Distributed-Systems/dp/1492040347',
          topics: ['Database Systems', 'Storage Engines', 'Database Algorithms']
        }
      ]
    },
    'articles': {
      title: 'Technical Articles & Blogs',
      items: [
        {
          title: 'The Architecture of Uber\'s Real-Time Market Platform',
          author: 'Uber Engineering',
          description: 'Deep dive into how Uber built their real-time matching system to handle millions of rides globally with low latency and high availability.',
          link: 'https://eng.uber.com/real-time-market-platform/',
          topics: ['Real-time Systems', 'Matching Algorithms', 'Distributed Systems']
        },
        {
          title: 'Scaling Memcache at Facebook',
          author: 'Facebook Engineering',
          description: 'Facebook\'s approach to scaling their memcached infrastructure to handle billions of requests per second across multiple data centers.',
          link: 'https://engineering.fb.com/2013/10/15/web/scaling-memcache-at/',
          topics: ['Caching', 'Distributed Systems', 'Performance Optimization']
        },
        {
          title: 'Building LinkedIn\'s Real-time Activity Data Pipeline',
          author: 'LinkedIn Engineering',
          description: 'How LinkedIn built Kafka and their streaming data infrastructure to handle activity data at massive scale.',
          link: 'https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying',
          topics: ['Stream Processing', 'Data Pipeline', 'Event-driven Architecture']
        },
        {
          title: 'Netflix\'s Approach to Data Infrastructure',
          author: 'Netflix Technology Blog',
          description: 'Overview of Netflix\'s data platform architecture supporting petabytes of data and millions of users worldwide.',
          link: 'https://netflixtechblog.com/evolution-of-the-netflix-data-pipeline-da246ca36905',
          topics: ['Data Pipeline', 'Big Data', 'Cloud Architecture']
        },
        {
          title: 'Instagram Architecture: 14 Million Users, Terabytes Of Photos',
          author: 'High Scalability',
          description: 'Detailed breakdown of Instagram\'s technical architecture and how they scaled to handle massive photo sharing loads.',
          link: 'http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html',
          topics: ['Photo Storage', 'CDN', 'Database Scaling']
        }
      ]
    },
    'papers': {
      title: 'Research Papers & Whitepapers',
      items: [
        {
          title: 'MapReduce: Simplified Data Processing on Large Clusters',
          author: 'Jeffrey Dean and Sanjay Ghemawat (Google)',
          description: 'The seminal paper that introduced MapReduce, a programming model for processing large datasets with a distributed algorithm on a cluster.',
          link: 'https://research.google/pubs/pub62/',
          topics: ['Distributed Computing', 'Big Data', 'Parallel Processing']
        },
        {
          title: 'The Google File System',
          author: 'Sanjay Ghemawat, Howard Gobioff, and Shun-Tak Leung',
          description: 'Google\'s distributed file system designed to provide efficient, reliable access to data using large clusters of commodity hardware.',
          link: 'https://research.google/pubs/pub51/',
          topics: ['Distributed Storage', 'File Systems', 'Fault Tolerance']
        },
        {
          title: 'Bigtable: A Distributed Storage System for Structured Data',
          author: 'Fay Chang, Jeffrey Dean, et al. (Google)',
          description: 'Google\'s NoSQL database system designed to scale to petabytes of data across thousands of machines.',
          link: 'https://research.google/pubs/pub27898/',
          topics: ['NoSQL', 'Distributed Databases', 'Scalability']
        },
        {
          title: 'Dynamo: Amazon\'s Highly Available Key-value Store',
          author: 'Giuseppe DeCandia, et al. (Amazon)',
          description: 'Amazon\'s eventually consistent key-value store that prioritizes availability and partition tolerance.',
          link: 'https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf',
          topics: ['NoSQL', 'Eventual Consistency', 'Distributed Systems']
        },
        {
          title: 'The Chubby Lock Service for Loosely-Coupled Distributed Systems',
          author: 'Mike Burrows (Google)',
          description: 'Google\'s lock service providing coarse-grained locking and configuration management for distributed systems.',
          link: 'https://research.google/pubs/pub27897/',
          topics: ['Distributed Locking', 'Consensus', 'Configuration Management']
        },
        {
          title: 'In Search of an Understandable Consensus Algorithm (Raft)',
          author: 'Diego Ongaro and John Ousterhout',
          description: 'The Raft consensus algorithm designed to be more understandable than Paxos while providing equivalent guarantees.',
          link: 'https://raft.github.io/raft.pdf',
          topics: ['Consensus Algorithms', 'Distributed Systems', 'Leader Election']
        }
      ]
    },
    'channels': {
      title: 'YouTube Channels & Video Resources',
      items: [
        {
          title: 'Gaurav Sen',
          author: 'Gaurav Sen',
          description: 'Excellent system design tutorials covering popular interview questions with clear explanations and diagrams.',
          link: 'https://www.youtube.com/channel/UCRPMAqdtSgd0Ipeef7iFsKw',
          topics: ['System Design Interviews', 'Distributed Systems', 'Architecture Patterns']
        },
        {
          title: 'Tech Dummies Narendra L',
          author: 'Narendra L',
          description: 'Comprehensive system design videos covering real-world systems like Netflix, Uber, and WhatsApp with detailed architecture discussions.',
          link: 'https://www.youtube.com/c/TechDummiesNarendraL',
          topics: ['Case Studies', 'Real-world Systems', 'Architecture Deep Dives']
        },
        {
          title: 'ByteByteGo',
          author: 'Alex Xu',
          description: 'Visual system design explanations with animated diagrams covering fundamental concepts and interview preparation.',
          link: 'https://www.youtube.com/c/ByteByteGo',
          topics: ['Visual Learning', 'System Design Fundamentals', 'Interview Prep']
        },
        {
          title: 'Hussein Nasser',
          author: 'Hussein Nasser',
          description: 'Deep technical content on databases, networking, and backend engineering with practical examples.',
          link: 'https://www.youtube.com/c/HusseinNasser-software-engineering',
          topics: ['Database Engineering', 'Backend Systems', 'Network Protocols']
        },
        {
          title: 'AWS re:Invent',
          author: 'Amazon Web Services',
          description: 'Official AWS conference talks featuring real-world architecture patterns and best practices from industry experts.',
          link: 'https://www.youtube.com/user/AmazonWebServices',
          topics: ['Cloud Architecture', 'Best Practices', 'Case Studies']
        },
        {
          title: 'Engineering at Meta',
          author: 'Meta (Facebook)',
          description: 'Technical talks from Facebook engineers covering large-scale systems, data infrastructure, and engineering culture.',
          link: 'https://www.youtube.com/c/FacebookDevelopers',
          topics: ['Large-scale Systems', 'Data Infrastructure', 'Engineering Practices']
        }
      ]
    },
    'newsletters': {
      title: 'Technical Newsletters & Blogs',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240219171430/Roadmap-to-Learn-System-Design.webp',
      items: [
        {
          title: 'High Scalability',
          author: 'Todd Hoff',
          description: 'Weekly newsletter featuring real-world architecture case studies from major tech companies and scaling strategies.',
          link: 'http://highscalability.com/',
          topics: ['Case Studies', 'Scalability', 'Architecture Patterns']
        },
        {
          title: 'The Morning Paper',
          author: 'Adrian Colyer',
          description: 'Daily newsletter breaking down important computer science research papers into digestible summaries.',
          link: 'https://blog.acolyer.org/',
          topics: ['Research Papers', 'Computer Science', 'Distributed Systems']
        },
        {
          title: 'ByteByteGo Newsletter',
          author: 'Alex Xu',
          description: 'System design concepts explained with visual diagrams and real-world examples, perfect for interview preparation.',
          link: 'https://blog.bytebytego.com/',
          topics: ['System Design', 'Visual Learning', 'Interview Preparation']
        },
        {
          title: 'Distributed Systems Weekly',
          author: 'Mariusz Gil',
          description: 'Curated collection of articles, papers, and tools related to distributed systems and scalable architecture.',
          link: 'https://distributed-systems-weekly.com/',
          topics: ['Distributed Systems', 'Curated Content', 'Tools and Resources']
        },
        {
          title: 'AWS Architecture Center',
          author: 'Amazon Web Services',
          description: 'Regular updates on cloud architecture patterns, best practices, and reference architectures for various use cases.',
          link: 'https://aws.amazon.com/architecture/',
          topics: ['Cloud Architecture', 'Best Practices', 'Reference Architectures']
        },
        {
          title: 'Google Cloud Architecture Center',
          author: 'Google Cloud',
          description: 'Architecture guidance, patterns, and best practices for building scalable applications on Google Cloud Platform.',
          link: 'https://cloud.google.com/architecture',
          topics: ['Cloud Architecture', 'GCP', 'Architecture Patterns']
        },
        {
          title: 'System Design Newsletter',
          author: 'Neo Kim',
          description: 'Weekly deep dives into system design topics with practical examples and interview-focused content.',
          link: 'https://newsletter.systemdesign.one/',
          topics: ['System Design', 'Interview Preparation', 'Deep Dives']
        }
      ]
    },
    'courses': {
      title: 'Online Courses & Learning Platforms',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240219171430/Roadmap-to-Learn-System-Design.webp',
      items: [
        {
          title: 'ByteByteGo',
          author: 'Alex Xu',
          level: 'All Levels',
          price: 'Paid (~$50-100/year)',
          description: 'Visual, diagram-heavy system design learning platform based on 7 best-selling system design books. Text-based content (not video) makes it easy to review and reference. Covers System Design, OOP Design, and ML System Design with regular updates.',
          link: 'https://bytebytego.com',
          topics: ['System Design', 'Visual Learning', 'Interview Prep'],
          bestFor: 'Engineers who prefer visual learning and want comprehensive coverage'
        },
        {
          title: 'Grokking the System Design Interview',
          author: 'DesignGurus.io',
          level: 'Intermediate',
          price: 'Paid (~$79 one-time)',
          description: 'Problem-based learning approach with 15+ detailed system design questions covering all FAANG interview patterns. Step-by-step solutions with diagrams and explanations for popular systems like Twitter, Instagram, and Netflix.',
          link: 'https://www.designgurus.io/course/grokking-the-system-design-interview',
          topics: ['Interview Preparation', 'FAANG', 'Problem Solving'],
          bestFor: 'Interview preparation and learning through practice problems'
        },
        {
          title: 'Educative - System Design Complete Guide',
          author: 'Educative.io',
          level: 'All Levels',
          price: 'Subscription (~$18/month)',
          description: 'Interactive learning platform with hands-on coding exercises, comprehensive system design coverage, and certificate of completion. Covers fundamentals through advanced topics with built-in code execution.',
          link: 'https://www.educative.io/guide/complete-guide-to-system-design',
          topics: ['Interactive Learning', 'Hands-on Practice', 'Certification'],
          bestFor: 'Hands-on learners who want interactive exercises'
        },
        {
          title: 'Zero to Mastery - System Design + Architecture',
          author: 'Zero to Mastery',
          level: 'Intermediate',
          price: 'Subscription (~$39/month)',
          description: 'Practical, project-based system design course covering architecture patterns with focus on real-world implementation. Includes active community support and career guidance.',
          link: 'https://zerotomastery.io/courses/system-design/',
          topics: ['Project-based', 'Architecture Patterns', 'Community'],
          bestFor: 'Learners who prefer project-based practical learning'
        },
        {
          title: 'FreeCodeCamp - System Design Course',
          author: 'FreeCodeCamp',
          level: 'Beginner to Intermediate',
          price: 'Free',
          description: 'Comprehensive multi-hour video course covering system design fundamentals through advanced topics. Completely free with high-quality content from experienced engineers.',
          link: 'https://www.youtube.com/@freecodecamp',
          topics: ['Fundamentals', 'Free Learning', 'Video Course'],
          bestFor: 'Budget-conscious learners wanting quality free content'
        },
        {
          title: 'Coursera - Cloud Computing Specializations',
          author: 'University of Illinois, Duke, Google Cloud',
          level: 'All Levels',
          price: 'Audit Free / Certificate Paid (~$49/month)',
          description: 'Academic courses on distributed systems and cloud architecture from top universities. Can audit for free or pay for graded assignments and certificates.',
          link: 'https://www.coursera.org',
          topics: ['Distributed Systems', 'Cloud Architecture', 'Academic'],
          bestFor: 'Academic learners wanting university-level content'
        },
        {
          title: 'SystemsExpert (AlgoExpert)',
          author: 'AlgoExpert',
          level: 'All Levels',
          price: 'Paid (~$99/year)',
          description: 'Video-based system design course with practice problems and detailed explanations. Part of the AlgoExpert platform covering both algorithms and systems.',
          link: 'https://www.algoexpert.io/systems/product',
          topics: ['Video Learning', 'Practice Problems', 'Comprehensive'],
          bestFor: 'AlgoExpert users wanting integrated learning'
        }
      ]
    },
    'blogs': {
      title: 'Engineering Blogs & Company Tech Blogs',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240219171430/Roadmap-to-Learn-System-Design.webp',
      items: [
        {
          title: 'Netflix Tech Blog',
          author: 'Netflix Engineering',
          description: 'Deep technical articles on microservices, chaos engineering, A/B testing, and streaming infrastructure. Learn how Netflix handles 200M+ subscribers and petabytes of content delivery.',
          link: 'https://netflixtechblog.com',
          topics: ['Microservices', 'Chaos Engineering', 'Streaming', 'CDN'],
          mustRead: ['Netflix: What Happens When You Press Play?', 'Chaos Engineering at Netflix']
        },
        {
          title: 'Uber Engineering',
          author: 'Uber',
          description: 'Real-time systems, geospatial databases, machine learning platforms, and payment systems. Insights into building city-scale ride-sharing infrastructure.',
          link: 'https://eng.uber.com',
          topics: ['Real-time Systems', 'Geospatial', 'Distributed Databases', 'Payments'],
          mustRead: ['Schemaless: Uber\'s Scalable Datastore', 'Real-Time Streaming Analytics']
        },
        {
          title: 'Airbnb Engineering',
          author: 'Airbnb',
          description: 'Scaling challenges, data infrastructure, search systems, and machine learning applications. Learn how Airbnb handles millions of listings and bookings worldwide.',
          link: 'https://medium.com/airbnb-engineering',
          topics: ['Search Systems', 'Data Quality', 'Payments', 'Frontend Infrastructure'],
          mustRead: ['Scaling Airbnb\'s Payment Platform', 'Data Quality at Airbnb']
        },
        {
          title: 'Meta (Facebook) Engineering',
          author: 'Meta',
          description: 'Large-scale distributed systems, data infrastructure, and social networking architecture. Deep dives into TAO, Memcache, and React.',
          link: 'https://engineering.fb.com',
          topics: ['Distributed Systems', 'Caching', 'Social Networks', 'Frontend'],
          mustRead: ['TAO: Facebook\'s Distributed Data Store', 'Scaling Memcache at Facebook']
        },
        {
          title: 'LinkedIn Engineering',
          author: 'LinkedIn',
          description: 'Data pipelines, Apache Kafka (created at LinkedIn), recommendation systems, and professional networking infrastructure.',
          link: 'https://engineering.linkedin.com',
          topics: ['Data Pipelines', 'Kafka', 'Recommendations', 'Graph Databases'],
          mustRead: ['Building LinkedIn\'s Real-time Activity Data Pipeline', 'The Log: What every software engineer should know']
        },
        {
          title: 'High Scalability',
          author: 'Todd Hoff',
          description: 'Architecture case studies from major tech companies. "How X is Built" series covers Twitter, Instagram, Pinterest, Dropbox and more.',
          link: 'http://highscalability.com',
          topics: ['Case Studies', 'Scalability', 'Architecture Patterns'],
          mustRead: ['Instagram Architecture', 'How Twitter Works', 'Scaling Pinterest']
        },
        {
          title: 'Martin Fowler\'s Blog',
          author: 'Martin Fowler',
          description: 'Software architecture patterns, microservices, refactoring, and enterprise application architecture from industry thought leader.',
          link: 'https://martinfowler.com',
          topics: ['Architecture Patterns', 'Microservices', 'Refactoring', 'Enterprise'],
          mustRead: ['Microservices Guide', 'Event Sourcing', 'CQRS Pattern']
        },
        {
          title: 'All Things Distributed',
          author: 'Werner Vogels (Amazon CTO)',
          description: 'Distributed systems insights from Amazon\'s CTO covering eventual consistency, dynamo, and building scalable systems.',
          link: 'https://www.allthingsdistributed.com',
          topics: ['Distributed Systems', 'AWS', 'Eventual Consistency', 'Leadership'],
          mustRead: ['Eventually Consistent', 'Amazon\'s Dynamo']
        },
        {
          title: 'AWS Architecture Blog',
          author: 'Amazon Web Services',
          description: 'Cloud architecture patterns, best practices, reference architectures, and real customer implementations on AWS.',
          link: 'https://aws.amazon.com/blogs/architecture/',
          topics: ['Cloud Architecture', 'AWS', 'Reference Architectures', 'Best Practices']
        },
        {
          title: 'Google Cloud Blog',
          author: 'Google Cloud',
          description: 'GCP architecture guidance, Kubernetes patterns, serverless computing, and data analytics at scale.',
          link: 'https://cloud.google.com/blog/products',
          topics: ['GCP', 'Kubernetes', 'Serverless', 'Data Analytics']
        }
      ]
    },
    'tools': {
      title: 'Tools & Practice Platforms',
      items: [
        {
          title: 'Excalidraw',
          type: 'Diagramming Tool',
          price: 'Free',
          description: 'Open-source whiteboarding tool with hand-drawn style diagrams. Perfect for system design interviews and creating shareable architecture diagrams.',
          link: 'https://excalidraw.com',
          topics: ['Diagramming', 'Whiteboarding', 'Open Source']
        },
        {
          title: 'Draw.io (diagrams.net)',
          type: 'Diagramming Tool',
          price: 'Free',
          description: 'Professional architecture diagram tool with extensive shape libraries, AWS/GCP/Azure icons, and integration with various storage services.',
          link: 'https://app.diagrams.net',
          topics: ['Professional Diagrams', 'Cloud Icons', 'Integration']
        },
        {
          title: 'Lucidchart',
          type: 'Diagramming Tool',
          price: 'Freemium',
          description: 'Collaborative diagramming platform with real-time collaboration, extensive templates, and team features.',
          link: 'https://www.lucidchart.com',
          topics: ['Collaboration', 'Templates', 'Team Features']
        },
        {
          title: 'Pramp',
          type: 'Mock Interview Platform',
          price: 'Free',
          description: 'Free peer-to-peer mock interview platform where you practice with other engineers. Includes system design interview practice.',
          link: 'https://www.pramp.com',
          topics: ['Mock Interviews', 'Peer Practice', 'Free']
        },
        {
          title: 'Interviewing.io',
          type: 'Mock Interview Platform',
          price: 'Paid (with free tier)',
          description: 'Anonymous practice interviews with engineers from top companies. Get real feedback on your system design skills.',
          link: 'https://interviewing.io',
          topics: ['Anonymous Practice', 'Real Engineers', 'Feedback']
        },
        {
          title: 'Exponent',
          type: 'Interview Prep Platform',
          price: 'Paid',
          description: 'Structured system design courses combined with mock interview practice and community forums.',
          link: 'https://www.tryexponent.com',
          topics: ['Structured Learning', 'Mock Interviews', 'Community']
        },
        {
          title: 'LeetCode System Design',
          type: 'Practice Platform',
          price: 'Premium ($35/month)',
          description: 'System design problems with community discussions and solutions. Part of LeetCode Premium subscription.',
          link: 'https://leetcode.com/discuss/interview-question/system-design',
          topics: ['Practice Problems', 'Community', 'Discussions']
        }
      ]
    },
    'github': {
      title: 'GitHub Repositories & Open Source',
      items: [
        {
          title: 'System Design Primer',
          author: 'Donne Martin (ex-Facebook)',
          stars: '270K+',
          description: 'The most comprehensive system design guide on GitHub. Includes study guide with Anki flashcards, solutions to common interview problems, and extensive resource links.',
          link: 'https://github.com/donnemartin/system-design-primer',
          topics: ['Comprehensive Guide', 'Anki Flashcards', 'Interview Problems']
        },
        {
          title: 'Awesome System Design',
          author: 'Community',
          stars: '10K+',
          description: 'Curated list of system design resources including articles, books, courses, and tools organized by topic.',
          link: 'https://github.com/madd86/awesome-system-design',
          topics: ['Curated List', 'Resources', 'Community Driven']
        },
        {
          title: 'System Design Interview',
          author: 'Community',
          stars: '30K+',
          description: 'Collection of system design interview questions and solutions with detailed explanations and diagrams.',
          link: 'https://github.com/checkcheckzz/system-design-interview',
          topics: ['Interview Questions', 'Solutions', 'Explanations']
        },
        {
          title: 'Awesome Distributed Systems',
          author: 'Community',
          stars: '15K+',
          description: 'Comprehensive list of resources for distributed systems including papers, books, and courses.',
          link: 'https://github.com/theanalyst/awesome-distributed-systems',
          topics: ['Distributed Systems', 'Papers', 'Academic']
        },
        {
          title: 'Awesome Scalability',
          author: 'Community',
          stars: '50K+',
          description: 'Reading list for building scalable, high-availability, high-stability systems including case studies.',
          link: 'https://github.com/binhnguyennus/awesome-scalability',
          topics: ['Scalability', 'Case Studies', 'High Availability']
        }
      ]
    }
  },

  // COMPLETE GUIDE - Interview preparation guide with practical problems
  complete_guide: {
    'framework': {
      title: 'Interview Framework: RADIO Method',
      introduction: "The proven RADIO framework for system design interviews that demonstrates structured thinking and covers all critical aspects. This approach is used by successful candidates at FAANG and top tech companies.",
      content: `
        <div class="framework-steps">
          <div class="architecture-image">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240715175832/System-Design-Interview-Framework.webp" alt="System Design Interview Framework" class="framework-diagram" />
            <div class="diagram-caption">Figure 1: The RADIO System Design Interview Framework</div>
          </div>

          <h3>The RADIO Framework</h3>
          <p>Use this systematic approach to structure your system design interview responses:</p>

          <div class="radio-framework">
            <div class="radio-step">
              <h4>R - Requirements Clarification</h4>
              <p><strong>Spend 5-10 minutes clarifying the problem scope</strong></p>

              <h5>Functional Requirements</h5>
              <ul>
                <li>What features are needed? (e.g., "Users can post tweets")</li>
                <li>What are the core use cases? (e.g., "View timeline, follow users")</li>
                <li>What are the inputs and outputs?</li>
                <li>What features are in scope vs. out of scope?</li>
              </ul>

              <h5>Non-Functional Requirements</h5>
              <ul>
                <li><strong>Scale:</strong> How many daily/monthly active users? Read/write ratio?</li>
                <li><strong>Performance:</strong> What's the expected latency? (e.g., < 200ms for timeline)</li>
                <li><strong>Availability:</strong> What's the SLA target? (e.g., 99.99% uptime)</li>
                <li><strong>Consistency:</strong> Strong vs. eventual consistency needs?</li>
                <li><strong>Data:</strong> How much data? Retention period?</li>
              </ul>

              <h5>Example Questions to Ask</h5>
              <div class="code-block">
                <pre>
"How many daily active users do we expect?"
"What's the read/write ratio?"
"What's the expected latency for key operations?"
"Do we need strong consistency or is eventual consistency acceptable?"
"Any specific compliance requirements (GDPR, HIPAA)?"
"Should we design for a specific geographic region or global?"</pre>
              </div>
            </div>

            <div class="radio-step">
              <h4>A - API Design</h4>
              <p><strong>Define the interface (3-5 minutes)</strong></p>

              <h5>Design Core APIs</h5>
              <p>Focus on the most important operations. Use REST or RPC style.</p>

              <h5>Example: URL Shortener</h5>
              <div class="code-block">
                <pre>
// Shorten URL
POST /api/v1/shorten
Request: { "long_url": "https://example.com/..." }
Response: { "short_url": "https://short.ly/abc123" }

// Redirect
GET /api/v1/:short_code
Response: HTTP 302 Redirect to original URL

// Analytics
GET /api/v1/analytics/:short_code
Response: { "clicks": 1500, "geo_distribution": {...} }</pre>
              </div>

              <h5>Example: Twitter</h5>
              <div class="code-block">
                <pre>
POST   /api/v1/tweets
GET    /api/v1/timeline/home
GET    /api/v1/timeline/user/:user_id
POST   /api/v1/follow/:user_id
POST   /api/v1/like/:tweet_id</pre>
              </div>
            </div>

            <div class="radio-step">
              <h4>D - Data Model</h4>
              <p><strong>Design your schema and choose storage (5-10 minutes)</strong></p>

              <h5>Schema Design</h5>
              <p>Define entities, relationships, and choose appropriate storage.</p>

              <h5>Example: Twitter Schema</h5>
              <div class="code-block">
                <pre>
users (
  id BIGINT PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(255),
  created_at TIMESTAMP
)

tweets (
  id BIGINT PRIMARY KEY,
  user_id BIGINT,
  content TEXT(280),
  created_at TIMESTAMP,
  likes_count INT,
  retweets_count INT
)

follows (
  follower_id BIGINT,
  followee_id BIGINT,
  created_at TIMESTAMP,
  PRIMARY KEY (follower_id, followee_id)
)</pre>
              </div>

              <h5>Storage Choices</h5>
              <ul>
                <li><strong>SQL (PostgreSQL/MySQL):</strong> User profiles, relationships, transactional data</li>
                <li><strong>NoSQL (Cassandra/DynamoDB):</strong> Tweets, high-write workloads</li>
                <li><strong>Cache (Redis):</strong> Timeline cache, session data, hot tweets</li>
                <li><strong>Object Storage (S3):</strong> Media files (images, videos)</li>
                <li><strong>Search (Elasticsearch):</strong> Full-text search for tweets/users</li>
              </ul>
            </div>

            <div class="radio-step">
              <h4>I - Implementation (High-Level Design)</h4>
              <p><strong>Draw the architecture diagram (10-15 minutes)</strong></p>

              <h5>Core Components</h5>
              <p>Start with major building blocks:</p>

              <div class="code-block">
                <pre>
Client (Web/Mobile)
    ↓
Load Balancer
    ↓
API Gateway / API Servers
    ↓↓↓
┌─────────────┬─────────────┬─────────────┐
│   Cache     │  Services   │  Database   │
│  (Redis)    │  Layer      │  (Primary)  │
└─────────────┴─────────────┴─────────────┘
                   ↓
         Message Queue (Kafka)
                   ↓
              Background Workers
                   ↓
           Analytics Database</pre>
              </div>

              <h5>Example: Twitter Write Path</h5>
              <div class="code-block">
                <pre>
User posts tweet
    ↓
API Server validates and stores in DB
    ↓
Publishes to Message Queue (Kafka)
    ↓
Fan-out Service picks up tweet
    ↓
Writes to followers' timeline caches (Redis)
    ↓
Real-time notification to active followers</pre>
              </div>

              <h5>Example: Twitter Read Path</h5>
              <div class="code-block">
                <pre>
User requests timeline
    ↓
Check Redis cache for pre-computed timeline
    ↓
Cache Hit: Return immediately (fast path)
Cache Miss: Fetch from DB and cache (slow path)</pre>
              </div>
            </div>

            <div class="radio-step">
              <h4>O - Optimize & Dive Deep</h4>
              <p><strong>Address bottlenecks and scale the design (15-20 minutes)</strong></p>

              <h5>Identify Bottlenecks</h5>
              <ul>
                <li><strong>Database:</strong> Too many reads/writes? Consider sharding, replication, or caching</li>
                <li><strong>API Servers:</strong> CPU-bound? Add horizontal scaling and load balancing</li>
                <li><strong>Network:</strong> High latency? Use CDN, edge servers, or geographic distribution</li>
                <li><strong>Single Point of Failure:</strong> Identify and eliminate SPOFs with redundancy</li>
              </ul>

              <h5>Scaling Strategies</h5>
              <ul>
                <li><strong>Database Sharding:</strong> Partition by user_id, geographic region, or time</li>
                <li><strong>Caching Layers:</strong> Multi-level caching (CDN → Redis → Database)</li>
                <li><strong>Async Processing:</strong> Use message queues for non-critical operations</li>
                <li><strong>Read Replicas:</strong> Scale read-heavy workloads with database replicas</li>
                <li><strong>CDN:</strong> Serve static content and API responses from edge locations</li>
              </ul>

              <h5>Deep Dive Topics (Choose 2-3)</h5>
              <ul>
                <li><strong>Timeline Generation:</strong> Fan-out on write vs. fan-out on read (hybrid approach)</li>
                <li><strong>Rate Limiting:</strong> Token bucket algorithm to prevent abuse</li>
                <li><strong>Search:</strong> Elasticsearch for full-text search with ranking algorithms</li>
                <li><strong>Monitoring:</strong> Metrics, logs, traces, and alerting</li>
                <li><strong>Security:</strong> Authentication (OAuth), encryption (TLS), input validation</li>
              </ul>

              <h5>Trade-off Discussions</h5>
              <ul>
                <li><strong>Consistency vs. Availability:</strong> CAP theorem trade-offs</li>
                <li><strong>Latency vs. Throughput:</strong> Optimize for speed or volume?</li>
                <li><strong>Cost vs. Performance:</strong> Managed services vs. self-hosted</li>
                <li><strong>Complexity vs. Flexibility:</strong> Monolith vs. microservices</li>
              </ul>
            </div>
          </div>

          <div class="framework-details">
            <h4>Interview Timeline (45-60 minutes)</h4>
            <table class="interview-timeline">
              <tr>
                <td><strong>0-10 min</strong></td>
                <td>Requirements Clarification (R)</td>
              </tr>
              <tr>
                <td><strong>10-15 min</strong></td>
                <td>API Design (A) + Data Model (D)</td>
              </tr>
              <tr>
                <td><strong>15-30 min</strong></td>
                <td>Implementation - High-Level Design (I)</td>
              </tr>
              <tr>
                <td><strong>30-50 min</strong></td>
                <td>Optimize - Deep Dives & Bottlenecks (O)</td>
              </tr>
              <tr>
                <td><strong>50-60 min</strong></td>
                <td>Q&A and Wrap-up</td>
              </tr>
            </table>

            <h4>What Interviewers Look For</h4>
            <ul>
              <li><strong>Problem Clarification:</strong> Do you ask the right questions?</li>
              <li><strong>System Thinking:</strong> Can you see the big picture and break it down?</li>
              <li><strong>Technical Depth:</strong> Do you understand how components work?</li>
              <li><strong>Trade-off Analysis:</strong> Can you evaluate alternatives and justify decisions?</li>
              <li><strong>Communication:</strong> Can you explain complex concepts clearly?</li>
              <li><strong>Scalability Mindset:</strong> Do you consider scale from the beginning?</li>
            </ul>

            <h4>Common Follow-up Questions</h4>
            <ul>
              <li>"How would you handle 10x traffic growth?"</li>
              <li>"What happens if this component fails?"</li>
              <li>"How would you monitor and debug this system?"</li>
              <li>"What security considerations are important?"</li>
              <li>"How would you reduce latency for global users?"</li>
              <li>"How would you handle data consistency across regions?"</li>
              <li>"What's your strategy for database backups and disaster recovery?"</li>
            </ul>

            <h4>Common Pitfalls to Avoid</h4>
            <ul>
              <li>Jumping to solutions without clarifying requirements</li>
              <li>Ignoring scale and non-functional requirements</li>
              <li>Over-engineering for current scale vs. under-designing for future growth</li>
              <li>Not discussing trade-offs and alternatives</li>
              <li>Working silently instead of thinking out loud</li>
              <li>Focusing only on happy paths, ignoring edge cases and failures</li>
              <li>Not managing time effectively across different sections</li>
            </ul>
          </div>
        </div>
      `
    },
    
    'easy': {
      title: 'Easy Level Questions (1-9)',
      introduction: "Entry-level system design problems that focus on fundamental concepts and basic architectural patterns.",
      content: `
        <div class="problems-section">
          <h3>Easy Level Problems</h3>
          <div class="problem-list">
            <div class="problem-item">
              <h4>1. Design URL Shortener (TinyURL)</h4>
              <p><strong>One-liner and scope:</strong> Design a service that converts long URLs into shorter, memorable links with fast redirection and analytics tracking.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Shorten long URLs and return unique short URLs</li>
                    <li>Redirect short URLs to original long URLs with minimal latency</li>
                    <li>Support custom aliases and URL expiration (optional)</li>
                    <li>Provide basic analytics (click count, geographic data)</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Handle 100M URLs shortened per month with 100:1 read/write ratio</li>
                    <li>99.9% availability with < 100ms redirect latency</li>
                    <li>URLs should not be predictable or guessable</li>
                  </ul>
                </div>

                <h5>Back-of-the-envelope</h5>
                <ul>
                  <li>Write QPS: 100M/month ÷ (30×24×3600) ≈ 40 writes/sec</li>
                  <li>Read QPS: 40 × 100 = 4000 reads/sec</li>
                  <li>Storage: 100M URLs × 5 years × 12 months × 500 bytes ≈ 30TB</li>
                  <li>URL shortening using 7-character Base62 encoding provides 62^7 ≈ 3.5T unique combinations</li>
                </ul>

                <h5>High-level design</h5>
                <div class="architecture-image">
                  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240715180245/URL-Shortener-System-Design.webp" alt="URL Shortener System Design" class="diagram-image" />
                  <div class="diagram-caption">Figure 2: URL Shortener High-Level Architecture</div>
                </div>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Load Balancer + API Gateway:</strong> Distributes traffic and handles rate limiting</li>
                  <li><strong>URL Shortening Service:</strong> Generates short codes using Base62 encoding or counter-based approach</li>
                  <li><strong>URL Redirection Service:</strong> Handles GET requests and redirects to original URLs</li>
                  <li><strong>Cache Layer (Redis):</strong> Stores frequently accessed mappings for fast lookups</li>
                  <li><strong>Database:</strong> NoSQL (DynamoDB/Cassandra) for scalable key-value storage</li>
                  <li><strong>Analytics Service:</strong> Tracks click metrics and geographic data</li>
                </ul>

                <h5>Core APIs</h5>
                <div class="code-block">
                  <pre>
// Shorten URL
POST /shorten
{
  "long_url": "https://example.com/very/long/path",
  "custom_alias": "optional",
  "expiration_date": "2024-12-31"
}
→ {"short_url": "https://short.ly/abc123"}

// Redirect
GET /{short_code}
→ HTTP 302 Redirect to original URL</pre>
                </div>

                <h5>Scaling strategies</h5>
                <ul>
                  <li><strong>Read replicas</strong> for database to handle high read traffic</li>
                  <li><strong>CDN</strong> for serving redirect responses globally</li>
                  <li><strong>Circuit breaker</strong> pattern for graceful degradation</li>
                  <li><strong>Backup short code generation</strong> service for high availability</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>2. Design Leaderboard</h4>
              <p><strong>One-liner and scope:</strong> Design a real-time gaming leaderboard that supports top-N queries, player rank lookup, and nearby rank queries with low latency.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Display top N players (e.g., top 10, top 100) in real-time</li>
                    <li>Allow players to query their current rank instantly</li>
                    <li>Support nearby rank queries (e.g., ranks 45-55 around player at rank 50)</li>
                    <li>Handle score updates from millions of concurrent players</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Real-time score updates with sub-second latency</li>
                    <li>Handle thousands of concurrent players and score submissions</li>
                    <li>Support multiple game types and regional leaderboards</li>
                  </ul>
                </div>

                <h5>Back-of-the-envelope</h5>
                <ul>
                  <li>Concurrent players: 1M active players</li>
                  <li>Score updates: 10K updates/sec peak</li>
                  <li>Read queries: 50K queries/sec (top-N, rank lookups)</li>
                  <li>Storage: Player profiles + score history ≈ 1TB</li>
                </ul>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>WebSocket Connections:</strong> Real-time score updates from game clients</li>
                  <li><strong>Score Update Service:</strong> Validates and processes score changes</li>
                  <li><strong>Redis Sorted Sets:</strong> Primary data structure for leaderboard storage</li>
                  <li><strong>Cache Layers:</strong> Hot leaderboard data cached for fast access</li>
                  <li><strong>Analytics Service:</strong> Track leaderboard engagement and player behavior</li>
                </ul>

                <h5>Data storage choices</h5>
                <ul>
                  <li><strong>Redis Sorted Sets:</strong> Perfect for leaderboard operations with O(log n) complexity</li>
                  <li><strong>MySQL/PostgreSQL:</strong> Player profiles and game metadata</li>
                  <li><strong>Cassandra:</strong> Historical score data and analytics</li>
                </ul>

                <h5>Core Redis operations</h5>
                <div class="code-block">
                  <pre>
# Add/update player score
ZADD leaderboard:global 1500 "player123"

# Get top 10 players  
ZREVRANGE leaderboard:global 0 9 WITHSCORES

# Get player rank
ZREVRANK leaderboard:global "player123"

# Get nearby players (±5 around player)
ZREVRANGE leaderboard:global start stop</pre>
                </div>

                <h5>Detailed components</h5>
                <ul>
                  <li><strong>Score Validation:</strong> Prevent cheating with server-side validation</li>
                  <li><strong>Multi-tier Architecture:</strong> Global → Regional → Friends leaderboards</li>
                  <li><strong>Real-time Updates:</strong> WebSocket push notifications for rank changes</li>
                  <li><strong>Partitioning Strategy:</strong> Shard by game_id and region for scalability</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>3. Design Content Delivery Network (CDN)</h4>
              <p><strong>One-liner and scope:</strong> Design a globally distributed network of servers that cache and deliver web content with low latency and high availability.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Cache and serve static content (images, videos, CSS, JS) from edge locations</li>
                    <li>Route user requests to nearest edge server automatically</li>
                    <li>Support cache invalidation and content updates</li>
                    <li>Handle both static and dynamic content delivery</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Serve content with < 50ms latency globally</li>
                    <li>Handle millions of requests per second across all edge locations</li>
                    <li>99.99% availability with automatic failover</li>
                    <li>Reduce origin server load by 80%+ through effective caching</li>
                  </ul>
                </div>

                <h5>Back-of-the-envelope</h5>
                <ul>
                  <li>Edge locations: 200+ globally distributed PoPs</li>
                  <li>Cache hit ratio: 85-95% for optimal performance</li>
                  <li>Bandwidth: Petabytes of data transferred daily</li>
                  <li>Origins: Support thousands of origin servers</li>
                </ul>

                <h5>High-level design</h5>
                <h6>Components:</h6>
                <ul>
                  <li><strong>Edge Servers/PoPs:</strong> Geographically distributed cache servers</li>
                  <li><strong>Origin Servers:</strong> Source of truth for content</li>
                  <li><strong>DNS Routing:</strong> Directs users to optimal edge server</li>
                  <li><strong>Cache Management:</strong> TTL-based invalidation and refresh</li>
                  <li><strong>Load Balancers:</strong> Distribute load within each PoP</li>
                </ul>

                <h5>Routing mechanisms</h5>
                <ul>
                  <li><strong>DNS-based Routing:</strong> GeoDNS returns nearest edge server IP</li>
                  <li><strong>Anycast Routing:</strong> Multiple servers share single IP, network routes to nearest</li>
                  <li><strong>HTTP Redirects:</strong> Application-layer routing based on policies</li>
                </ul>

                <h5>Caching strategies</h5>
                <ul>
                  <li><strong>Push CDN:</strong> Origin actively pushes content to edge servers</li>
                  <li><strong>Pull CDN:</strong> Edge servers fetch content on-demand from origin</li>
                  <li><strong>TTL Management:</strong> Time-based cache expiration policies</li>
                  <li><strong>Cache Hierarchies:</strong> Multiple tiers (edge → regional → origin)</li>
                </ul>

                <h5>Core APIs</h5>
                <div class="code-block">
                  <pre>
// Cache content
PUT /cache/{path}
{
  "ttl": 3600,
  "cache_policy": "public",
  "compression": "gzip"
}

// Invalidate cache
DELETE /cache/{path}
POST /purge
{
  "urls": ["https://cdn.example.com/style.css"],
  "type": "immediate"
}</pre>
                </div>
              </div>
            </div>

            <div class="problem-item">
              <h4>4. Design Parking Garage System</h4>
              <p><strong>One-liner and scope:</strong> Design a smart parking system that manages vehicle entry/exit, tracks availability, handles payments, and optimizes space utilization.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Track vehicle entry/exit with automated ticket generation</li>
                    <li>Support different vehicle types (compact, large, motorcycle, electric)</li>
                    <li>Handle payment processing (cash, credit card, mobile)</li>
                    <li>Real-time availability display and reservation system</li>
                    <li>Multi-level parking with navigation assistance</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Handle 1000+ vehicles simultaneously across multiple levels</li>
                    <li>Sub-second response time for entry/exit operations</li>
                    <li>99.9% uptime for payment and access systems</li>
                  </ul>
                </div>

                <h5>Back-of-the-envelope</h5>
                <ul>
                  <li>Capacity: 2000 parking spots across 5 levels</li>
                  <li>Peak usage: 80% occupancy during business hours</li>
                  <li>Transactions: 500 entries/exits per hour peak</li>
                  <li>Average stay: 3 hours per vehicle</li>
                </ul>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Entry/Exit Gates:</strong> Automated barriers with license plate recognition</li>
                  <li><strong>Parking Management System:</strong> Central controller for spot allocation</li>
                  <li><strong>Payment Processing:</strong> Multi-channel payment gateway</li>
                  <li><strong>Availability Display:</strong> Real-time status boards per level</li>
                  <li><strong>Mobile App:</strong> Reservation and payment interface</li>
                </ul>

                <h5>Core APIs</h5>
                <div class="code-block">
                  <pre>
// Vehicle entry
POST /entry
{
  "license_plate": "ABC123",
  "vehicle_type": "compact",
  "entry_gate": "A1"
}
→ {"ticket_id": "T123456", "assigned_spot": "L2-45"}

// Payment processing
POST /payment
{
  "ticket_id": "T123456",
  "payment_method": "credit_card",
  "amount": 15.50
}

// Check availability
GET /availability?level=2&vehicle_type=compact
→ {"available_spots": 23, "total_spots": 100}</pre>
                </div>

                <h5>Data storage choices</h5>
                <ul>
                  <li><strong>MySQL:</strong> Vehicle records, transactions, user accounts</li>
                  <li><strong>Redis:</strong> Real-time spot availability and session data</li>
                  <li><strong>Time-series DB:</strong> Historical usage patterns and analytics</li>
                </ul>

                <h5>Detailed components</h5>
                <ul>
                  <li><strong>Spot Assignment Algorithm:</strong> Optimize for walking distance and level distribution</li>
                  <li><strong>Dynamic Pricing:</strong> Surge pricing during peak hours</li>
                  <li><strong>Integration Systems:</strong> Security cameras, license plate recognition</li>
                  <li><strong>Mobile Notifications:</strong> Parking reminders and overstay alerts</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>5. Design Vending Machine</h4>
              <p><strong>One-liner and scope:</strong> Design a smart vending machine system that handles product selection, payment processing, inventory management, and remote monitoring.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Product selection with inventory validation</li>
                    <li>Multiple payment methods (cash, card, mobile payments)</li>
                    <li>Automatic product dispensing with confirmation</li>
                    <li>Inventory tracking with low-stock alerts</li>
                    <li>Remote monitoring and management capabilities</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Process transactions within 30 seconds</li>
                    <li>Support 500+ transactions per day reliably</li>
                    <li>99% uptime with offline operation capability</li>
                  </ul>
                </div>

                <h5>State machine design</h5>
                <p><strong>States:</strong> Idle → Ready → Product Selected → Payment Processing → Dispensing → Complete</p>

                <h5>High-level design</h5>
                <h6>Components:</h6>
                <ul>
                  <li><strong>User Interface:</strong> Touch screen with product display</li>
                  <li><strong>Payment Processing:</strong> Multi-method payment gateway</li>
                  <li><strong>Inventory Management:</strong> Real-time stock tracking</li>
                  <li><strong>Dispensing Mechanism:</strong> Motorized product delivery</li>
                  <li><strong>Remote Monitoring:</strong> IoT connectivity for management</li>
                </ul>

                <h5>Core APIs</h5>
                <div class="code-block">
                  <pre>
// Select product
POST /select
{
  "product_id": "P001",
  "quantity": 1
}
→ {"price": 2.50, "available": true, "session_id": "S123"}

// Process payment
POST /payment
{
  "session_id": "S123",
  "payment_method": "card",
  "amount": 2.50
}
→ {"status": "success", "change": 0.00, "dispense": true}

// Inventory status
GET /inventory
→ [{"product_id": "P001", "name": "Coke", "stock": 15, "price": 2.50}]</pre>
                </div>

                <h5>Design patterns used</h5>
                <ul>
                  <li><strong>State Pattern:</strong> Manage vending machine states and transitions</li>
                  <li><strong>Strategy Pattern:</strong> Different payment processing methods</li>
                  <li><strong>Observer Pattern:</strong> Inventory alerts and monitoring</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>6. Design Distributed Key-Value Store</h4>
              <p><strong>One-liner and scope:</strong> Design a scalable key-value database that distributes data across multiple nodes with configurable consistency, high availability, and fault tolerance.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Basic operations: GET, PUT, DELETE with sub-ms latency</li>
                    <li>Configurable consistency models (strong, eventual)</li>
                    <li>Automatic data partitioning and replication</li>
                    <li>Node failure detection and recovery</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Scale to thousands of nodes globally</li>
                    <li>Handle millions of operations per second</li>
                    <li>Tunable CAP theorem trade-offs (CP vs AP)</li>
                    <li>99.99% availability target</li>
                  </ul>
                </div>

                <h5>CAP Theorem considerations</h5>
                <div class="architecture-image">
                  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240715181420/CAP-Theorem-Distributed-Systems.webp" alt="CAP Theorem in Distributed Systems" class="diagram-image" />
                  <div class="diagram-caption">Figure 3: CAP Theorem Trade-offs in Distributed Systems</div>
                </div>
                <h6>Design choices:</h6>
                <ul>
                  <li><strong>AP System:</strong> Prioritize availability and partition tolerance over consistency</li>
                  <li><strong>Eventual Consistency:</strong> Accept temporary inconsistencies for higher availability</li>
                  <li><strong>Conflict Resolution:</strong> Last-write-wins or vector clocks for concurrent updates</li>
                </ul>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Consistent Hashing Ring:</strong> Distribute keys across nodes evenly</li>
                  <li><strong>Replication Manager:</strong> Maintain N replicas per key</li>
                  <li><strong>Membership Service:</strong> Track node health and cluster changes</li>
                  <li><strong>Anti-entropy Service:</strong> Repair inconsistencies between replicas</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>7. Design Distributed Cache</h4>
              <p><strong>One-liner and scope:</strong> Design a high-performance distributed caching system that provides fast data access with automatic failover, cache coherence, and horizontal scaling.</p>
            </div>

            <div class="problem-item">
              <h4>8. Design Authentication System</h4>
              <p><strong>One-liner and scope:</strong> Design a secure, scalable authentication system supporting multiple authentication methods, session management, and role-based access control.</p>
            </div>

            <div class="problem-item">
              <h4>9. Design UPI Payment System</h4>
              <p><strong>One-liner and scope:</strong> Design a real-time payment system for instant money transfers using virtual payment addresses with strong consistency and fraud detection.</p>
            </div>
          </div>
        </div>
      `
    },

    'medium': {
      title: 'Medium Level Questions (10-34)',
      introduction: "Intermediate problems that require understanding of complex distributed systems patterns and scalability considerations.",
      content: `
        <div class="problems-section">
          <h3>Medium Level Problems</h3>
          <div class="problem-list">
            <div class="problem-item">
              <h4>10. Design WhatsApp</h4>
              <p><strong>One-liner and scope:</strong> Design a real-time messaging platform supporting billions of users with end-to-end encryption, multimedia sharing, and global scalability.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>One-to-one and group messaging with multimedia support</li>
                    <li>End-to-end encryption for message privacy</li>
                    <li>Online/offline status and last seen timestamps</li>
                    <li>Message delivery status (sent, delivered, read)</li>
                    <li>Voice and video calling functionality</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Support 2B+ users globally with 100M+ concurrent connections</li>
                    <li>Message delivery latency < 100ms</li>
                    <li>Handle 100B+ messages per day</li>
                    <li>99.99% availability with global infrastructure</li>
                  </ul>
                </div>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Message Gateway:</strong> WebSocket connections for real-time messaging</li>
                  <li><strong>Message Service:</strong> Message routing, storage, and delivery</li>
                  <li><strong>User Service:</strong> Profile management and online status</li>
                  <li><strong>Media Service:</strong> Image, video, and file sharing with CDN</li>
                  <li><strong>Encryption Service:</strong> End-to-end encryption with Signal Protocol</li>
                  <li><strong>Notification Service:</strong> Push notifications for offline users</li>
                </ul>

                <h5>Message delivery</h5>
                <ul>
                  <li><strong>Online Users:</strong> Direct WebSocket delivery</li>
                  <li><strong>Offline Users:</strong> Store and forward with push notifications</li>
                  <li><strong>Group Messages:</strong> Fan-out to all group members</li>
                  <li><strong>Acknowledgments:</strong> Delivery receipts and read receipts</li>
                </ul>

                <h5>Scaling strategies</h5>
                <ul>
                  <li><strong>Horizontal sharding:</strong> Partition users across message servers</li>
                  <li><strong>Message queues:</strong> Reliable delivery with offline storage</li>
                  <li><strong>CDN:</strong> Global distribution of media content</li>
                  <li><strong>Load balancing:</strong> Distribute WebSocket connections</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>11. Design Spotify</h4>
              <p><strong>One-liner and scope:</strong> Design a music streaming platform with personalized recommendations, social features, and high-quality audio delivery at global scale.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Stream music with multiple quality levels (96kbps to 320kbps)</li>
                    <li>Personalized playlists and music recommendations</li>
                    <li>Social features: follow friends, share music, collaborative playlists</li>
                    <li>Offline music downloading for premium users</li>
                    <li>Search and discovery across millions of tracks</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Support 400M+ users with 180M+ premium subscribers</li>
                    <li>Stream 50M+ songs with < 200ms startup latency</li>
                    <li>Handle petabytes of audio content globally</li>
                    <li>99.9% availability for uninterrupted music experience</li>
                  </ul>
                </div>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Music Catalog Service:</strong> Metadata for tracks, albums, artists</li>
                  <li><strong>Streaming Service:</strong> Audio content delivery with CDN</li>
                  <li><strong>Recommendation Engine:</strong> ML-based personalized suggestions</li>
                  <li><strong>User Service:</strong> Profiles, preferences, subscription management</li>
                  <li><strong>Social Service:</strong> Following, sharing, collaborative features</li>
                  <li><strong>Search Service:</strong> Full-text search across music catalog</li>
                </ul>

                <h5>Recommendation system</h5>
                <ul>
                  <li><strong>Collaborative Filtering:</strong> User-based and item-based recommendations</li>
                  <li><strong>Content-Based Filtering:</strong> Audio analysis and genre classification</li>
                  <li><strong>Matrix Factorization:</strong> Latent factor models for music taste</li>
                  <li><strong>Deep Learning:</strong> Neural networks for complex pattern recognition</li>
                  <li><strong>Hybrid Approach:</strong> Combine multiple signals for personalized recommendations</li>
                  <li><strong>Real-time Updates:</strong> Update recommendations based on current listening session</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>12. Design Distributed Job Scheduler</h4>
              <p><strong>One-liner and scope:</strong> Design a fault-tolerant job scheduling system that can execute millions of jobs across thousands of worker nodes with priority queues and retry mechanisms.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Schedule jobs with cron-like expressions and one-time execution</li>
                    <li>Priority-based job queues with SLA guarantees</li>
                    <li>Job dependencies and workflow orchestration</li>
                    <li>Retry mechanisms with exponential backoff</li>
                    <li>Real-time job monitoring and alerting</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Handle 1M+ jobs per day across global data centers</li>
                    <li>Job scheduling accuracy within 1 second</li>
                    <li>99.99% job execution reliability</li>
                    <li>Auto-scaling worker nodes based on queue depth</li>
                  </ul>
                </div>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Job Scheduler:</strong> Cron engine with distributed job assignment</li>
                  <li><strong>Message Queue:</strong> Kafka/RabbitMQ for job distribution to workers</li>
                  <li><strong>Worker Pool:</strong> Auto-scaling compute resources for job execution</li>
                  <li><strong>State Management:</strong> Track job status, retries, and dependencies</li>
                  <li><strong>Monitoring Dashboard:</strong> Real-time metrics and job execution history</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>13. Design Scalable Notification Service</h4>
              <p><strong>One-liner and scope:</strong> Design a multi-channel notification system supporting email, SMS, push notifications, and in-app messages with delivery guarantees and user preferences.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Send notifications via email, SMS, push notifications, in-app messages</li>
                    <li>User preference management (channels, frequency, do-not-disturb)</li>
                    <li>Template-based messaging with personalization</li>
                    <li>Delivery tracking and analytics</li>
                    <li>Rate limiting and spam prevention</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Handle 1B+ notifications per day</li>
                    <li>Delivery latency < 30 seconds for urgent notifications</li>
                    <li>99.9% delivery success rate</li>
                    <li>Support 100M+ user preference profiles</li>
                  </ul>
                </div>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Notification API:</strong> Accept notification requests from upstream services</li>
                  <li><strong>Template Engine:</strong> Dynamic content generation with user personalization</li>
                  <li><strong>Channel Routing:</strong> Route notifications based on user preferences</li>
                  <li><strong>Delivery Services:</strong> Email (SES), SMS (Twilio), Push (FCM/APNS)</li>
                  <li><strong>Analytics Service:</strong> Track delivery rates, open rates, click-through rates</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>14. Design Instagram</h4>
              <p><strong>One-liner and scope:</strong> Design a photo and video sharing platform with social features, real-time feeds, content discovery, and scalable media storage.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Upload and share photos/videos with filters and editing</li>
                    <li>Social features: follow users, like, comment, share posts</li>
                    <li>Stories feature with 24-hour expiration</li>
                    <li>Explore page with personalized content discovery</li>
                    <li>Direct messaging between users</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Support 1B+ users with 500M+ daily active users</li>
                    <li>Handle 100M+ photos/videos uploaded daily</li>
                    <li>Feed generation latency < 200ms</li>
                    <li>99.9% availability with global CDN distribution</li>
                  </ul>
                </div>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Media Upload Service:</strong> Image/video processing, compression, and storage</li>
                  <li><strong>Feed Generation Service:</strong> Timeline assembly with ranking algorithms</li>
                  <li><strong>Social Graph Service:</strong> Follow relationships and social interactions</li>
                  <li><strong>Content Discovery:</strong> ML-based recommendations for Explore page</li>
                  <li><strong>Messaging Service:</strong> Direct messages with media sharing support</li>
                </ul>

                <h5>Feed generation strategies</h5>
                <ul>
                  <li><strong>Pull Model:</strong> Generate feed on-demand (suitable for users following many accounts)</li>
                  <li><strong>Push Model:</strong> Pre-compute feeds for all followers (suitable for users with few followings)</li>  
                  <li><strong>Hybrid Model:</strong> Push for normal users, pull for celebrities to avoid fan-out explosion</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>15. Design Tinder</h4>
              <p><strong>One-liner and scope:</strong> Design a location-based dating app with user matching algorithms, real-time messaging, and scalable user discovery.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>User profile creation with photos and preferences</li>
                    <li>Location-based user discovery within specified radius</li>
                    <li>Swipe-based matching (mutual likes create matches)</li>
                    <li>Real-time messaging between matched users</li>
                    <li>Premium features: super likes, boosts, passport (location change)</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Support 100M+ users globally</li>
                    <li>User discovery latency < 500ms</li>
                    <li>Real-time messaging with < 100ms latency</li>
                    <li>Handle 1B+ swipes per day</li>
                  </ul>
                </div>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>User Service:</strong> Profile management and preference settings</li>
                  <li><strong>Location Service:</strong> Geospatial indexing for proximity-based discovery</li>
                  <li><strong>Matching Engine:</strong> Process swipes and create mutual matches</li>
                  <li><strong>Recommendation Service:</strong> ML-based user suggestions</li>
                  <li><strong>Messaging Service:</strong> Real-time chat for matched users</li>
                </ul>

                <h5>Geospatial challenges</h5>
                <ul>
                  <li><strong>Geohashing:</strong> Encode lat/lng into searchable strings</li>
                  <li><strong>QuadTree/R-Tree:</strong> Spatial data structures for efficient proximity queries</li>
                  <li><strong>Redis GeoSpatial:</strong> Built-in commands for location-based queries</li>
                  <li><strong>Sharding Strategy:</strong> Partition by geographic regions</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>16. Design Facebook</h4>
              <p><strong>One-liner and scope:</strong> Design a comprehensive social networking platform with news feeds, social graphs, content sharing, and real-time interactions at massive scale.</p>
            </div>

            <div class="problem-item">
              <h4>17. Design Twitter</h4>
              <p><strong>One-liner and scope:</strong> Design a microblogging platform with real-time tweet delivery, trending topics, social features, and global scalability.</p>
            </div>

            <div class="problem-item">
              <h4>18. Design Reddit</h4>
              <p><strong>One-liner and scope:</strong> Design a content aggregation platform with voting, comments, communities (subreddits), and democratic content ranking.</p>
            </div>

            <div class="problem-item">
              <h4>19-34. Additional Medium Problems</h4>
              <p><strong>Including:</strong> Netflix, YouTube, Google Search, Amazon, TikTok, Shopify, Airbnb, Autocomplete, Rate Limiter, Kafka, Flight Booking, Online Code Editor, Stock Exchange, Analytics Platform, Payment System, Digital Wallet</p>
              <div class="problem-details">
                <h5>Key Focus Areas:</h5>
                <ul>
                  <li><strong>Netflix/YouTube:</strong> Video streaming, CDN optimization, recommendation engines</li>
                  <li><strong>Google Search:</strong> Web crawling, indexing, ranking algorithms</li>
                  <li><strong>Amazon:</strong> E-commerce architecture, inventory management, order processing</li>
                  <li><strong>TikTok:</strong> Short-form video platform, viral content algorithms</li>
                  <li><strong>Shopify:</strong> E-commerce platform, multi-tenant architecture</li>
                  <li><strong>Airbnb:</strong> Marketplace platform, search and booking systems</li>
                  <li><strong>Rate Limiter:</strong> API throttling, distributed rate limiting algorithms</li>
                  <li><strong>Kafka:</strong> Distributed event streaming, message queuing</li>
                  <li><strong>Payment Systems:</strong> Financial transactions, fraud detection, compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },

    'hard': {
      title: 'Hard Level Questions (35-49)',
      introduction: "Advanced problems that require deep understanding of distributed systems, consistency models, and complex architectural patterns.",
      content: `
        <div class="problems-section">
          <h3>Hard Level Problems</h3>
          <div class="problem-list">
            <div class="problem-item">
              <h4>35. Design Location Based Service (Yelp)</h4>
              <p><strong>One-liner and scope:</strong> Design a local business discovery platform with geospatial search, reviews, and real-time business information at massive scale.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Search businesses by location, category, and keywords</li>
                    <li>User reviews and ratings with moderation</li>
                    <li>Business profiles with photos, hours, contact info</li>
                    <li>Real-time business updates and status</li>
                    <li>Social features: check-ins, tips, friend recommendations</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Support 100M+ users discovering 10M+ businesses</li>
                    <li>Location search results within 200ms globally</li>
                    <li>Handle 1B+ search queries per day</li>
                    <li>99.9% availability for business discovery</li>
                  </ul>
                </div>

                <h5>Geospatial challenges</h5>
                <ul>
                  <li><strong>Quadtree/R-tree:</strong> Spatial indexing for efficient proximity searches</li>
                  <li><strong>Geohashing:</strong> Encode locations for database sharding</li>
                  <li><strong>Spatial Databases:</strong> PostGIS or specialized geo databases</li>
                  <li><strong>Search Optimization:</strong> Multi-level indexing for location + category queries</li>
                </ul>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Search Service:</strong> Geospatial search with ElasticSearch/Solr</li>
                  <li><strong>Business Service:</strong> Business profiles and metadata management</li>
                  <li><strong>Review Service:</strong> User reviews, ratings, and content moderation</li>
                  <li><strong>Location Service:</strong> Geospatial indexing and proximity calculations</li>
                  <li><strong>Recommendation Engine:</strong> Personalized business suggestions</li>
                </ul>

                <h5>Scaling strategies</h5>
                <ul>
                  <li><strong>Geographic sharding:</strong> Partition data by location regions</li>
                  <li><strong>Read replicas:</strong> Multiple read-only databases per region</li>
                  <li><strong>Caching layers:</strong> Popular searches and business data</li>
                  <li><strong>CDN:</strong> Static content and images globally distributed</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>36. Design Uber</h4>
              <p><strong>One-liner and scope:</strong> Design a ride-sharing platform with real-time driver-rider matching, dynamic pricing, route optimization, and global scalability.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Real-time driver-rider matching based on proximity and preferences</li>
                    <li>Dynamic pricing based on supply-demand and location</li>
                    <li>GPS tracking and route optimization for efficient trips</li>
                    <li>Payment processing with multiple methods</li>
                    <li>Trip history and rating system for drivers and riders</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Handle 15M+ trips per day globally</li>
                    <li>Driver-rider matching within 30 seconds</li>
                    <li>Support 1M+ concurrent users during peak hours</li>
                    <li>99.99% payment processing reliability</li>
                  </ul>
                </div>

                <h5>Core algorithms</h5>
                <ul>
                  <li><strong>Matching Algorithm:</strong> Optimize for proximity, wait time, and driver preferences</li>
                  <li><strong>Dynamic Pricing:</strong> Surge pricing based on demand-supply ratio</li>
                  <li><strong>Route Optimization:</strong> Real-time traffic data for efficient routing</li>
                  <li><strong>ETA Prediction:</strong> Machine learning models for accurate time estimates</li>
                </ul>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Location Service:</strong> Real-time GPS tracking for drivers and riders</li>
                  <li><strong>Matching Service:</strong> Driver-rider pairing algorithms</li>
                  <li><strong>Pricing Service:</strong> Dynamic pricing engine with surge calculations</li>
                  <li><strong>Trip Service:</strong> Trip management and state tracking</li>
                  <li><strong>Payment Service:</strong> Secure transaction processing</li>
                  <li><strong>Notification Service:</strong> Real-time updates to drivers and riders</li>
                </ul>

                <h5>Scaling challenges</h5>
                <ul>
                  <li><strong>Real-time location updates:</strong> Handle millions of GPS pings per second</li>
                  <li><strong>Geographic distribution:</strong> Regional data centers for low latency</li>
                  <li><strong>Database partitioning:</strong> Shard by geography and user ID</li>
                  <li><strong>Event streaming:</strong> Kafka for real-time data processing</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>37. Design Food Delivery System (DoorDash)</h4>
              <p><strong>One-liner and scope:</strong> Design a three-sided marketplace connecting customers, restaurants, and delivery drivers with real-time tracking and logistics optimization.</p>
            </div>

            <div class="problem-item">
              <h4>38. Design Google Docs</h4>
              <p><strong>One-liner and scope:</strong> Design a collaborative document editing platform with real-time synchronization, conflict resolution, and version control.</p>
            </div>

            <div class="problem-item">
              <h4>39. Design Google Maps</h4>
              <p><strong>One-liner and scope:</strong> Design a mapping and navigation service with real-time traffic data, route optimization, and global point-of-interest database.</p>
            </div>

            <div class="problem-item">
              <h4>40. Design Zoom</h4>
              <p><strong>One-liner and scope:</strong> Design a video conferencing platform supporting millions of concurrent participants with high-quality audio/video and screen sharing.</p>
            </div>

            <div class="problem-item">
              <h4>41. Design Distributed Counter</h4>
              <p><strong>One-liner and scope:</strong> Design a highly available counter service that can handle millions of increments per second with eventual consistency guarantees.</p>
            </div>

            <div class="problem-item">
              <h4>42. Design Dropbox</h4>
              <p><strong>One-liner and scope:</strong> Design a cloud file storage and synchronization service with versioning, sharing, and conflict resolution across devices.</p>
            </div>

            <div class="problem-item">
              <h4>43. Design Ticket Booking System (BookMyShow)</h4>
              <p><strong>One-liner and scope:</strong> Design a ticket booking platform handling high-concurrency seat selection, payment processing, and inventory management for events.</p>
              
              <div class="problem-details">
                <h5>Key Challenges</h5>
                <ul>
                  <li><strong>Concurrency Control:</strong> Prevent double-booking of seats during high demand</li>
                  <li><strong>Flash Sales:</strong> Handle traffic spikes for popular events</li>
                  <li><strong>Payment Processing:</strong> Secure transactions with timeout handling</li>
                  <li><strong>Seat Allocation:</strong> Fair queuing and anti-bot measures</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>44. Design Web Crawler</h4>
              <p><strong>One-liner and scope:</strong> Design a distributed web crawler that can index billions of web pages efficiently while respecting robots.txt and rate limits.</p>
            </div>

            <div class="problem-item">
              <h4>45. Design Code Deployment System</h4>
              <p><strong>One-liner and scope:</strong> Design a continuous deployment system for safely rolling out code changes to thousands of servers with monitoring and rollback capabilities.</p>
            </div>

            <div class="problem-item">
              <h4>46. Design Cloud Storage (Amazon S3)</h4>
              <p><strong>One-liner and scope:</strong> Design a highly durable, scalable object storage system supporting billions of objects with 99.999999999% durability guarantee.</p>
            </div>

            <div class="problem-item">
              <h4>47. Design Distributed Locking Service</h4>
              <p><strong>One-liner and scope:</strong> Design a consensus-based distributed locking system providing mutual exclusion across distributed applications with deadlock detection.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Acquire and release distributed locks with timeout support</li>
                    <li>Deadlock detection and automatic resolution</li>
                    <li>Lock lease renewal for long-running operations</li>
                    <li>Fair queuing for lock acquisition ordering</li>
                    <li>Lock status monitoring and debugging tools</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Handle 100K+ lock operations per second</li>
                    <li>Lock acquisition latency < 10ms</li>
                    <li>99.99% availability with consensus-based consistency</li>
                    <li>Support 1000+ concurrent applications</li>
                  </ul>
                </div>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Lock Manager:</strong> Core locking logic with consensus protocol</li>
                  <li><strong>Lease Manager:</strong> Time-based lock expiration and renewal</li>
                  <li><strong>Deadlock Detector:</strong> Cycle detection in wait-for graphs</li>
                  <li><strong>Queue Manager:</strong> Fair ordering for lock requests</li>
                  <li><strong>Monitoring Service:</strong> Lock metrics and debugging tools</li>
                </ul>

                <h5>Consensus algorithms</h5>
                <ul>
                  <li><strong>Raft Protocol:</strong> Leader election and log replication for consistency</li>
                  <li><strong>Multi-Paxos:</strong> Consensus on lock operations across replicas</li>
                  <li><strong>Leases:</strong> Time-bounded locks with automatic expiration</li>
                  <li><strong>Fencing Tokens:</strong> Prevent split-brain scenarios with increasing tokens</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>48. Design Slack</h4>
              <p><strong>One-liner and scope:</strong> Design a team collaboration platform with real-time messaging, channels, file sharing, and integration with third-party tools.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Real-time messaging in channels and direct messages</li>
                    <li>File sharing with search and preview capabilities</li>
                    <li>Third-party app integrations and bot framework</li>
                    <li>Voice/video calling and screen sharing</li>
                    <li>Message search across all team history</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Support 10M+ daily active users across teams</li>
                    <li>Message delivery latency < 100ms</li>
                    <li>Handle billions of messages with full-text search</li>
                    <li>99.99% uptime for business-critical communications</li>
                  </ul>
                </div>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Message Service:</strong> Real-time message routing and storage</li>
                  <li><strong>Channel Service:</strong> Team organization and membership management</li>
                  <li><strong>Search Engine:</strong> Full-text search across messages and files</li>
                  <li><strong>Integration Platform:</strong> Third-party app and webhook management</li>
                  <li><strong>Notification Service:</strong> Push notifications and email alerts</li>
                </ul>

                <h5>Real-time messaging</h5>
                <ul>
                  <li><strong>WebSocket Connections:</strong> Persistent connections for instant messaging</li>
                  <li><strong>Message Queuing:</strong> Reliable delivery with offline message storage</li>
                  <li><strong>Presence Service:</strong> User online status and typing indicators</li>
                  <li><strong>Push Notifications:</strong> Mobile alerts for offline users</li>
                </ul>
              </div>
            </div>

            <div class="problem-item">
              <h4>49. Design Live Comments System</h4>
              <p><strong>One-liner and scope:</strong> Design a real-time commenting system for live events supporting millions of concurrent users with spam detection and moderation tools.</p>
              
              <div class="problem-details">
                <h5>Requirements</h5>
                <div class="requirements-section">
                  <h6>Functional</h6>
                  <ul>
                    <li>Real-time comment posting and display during live events</li>
                    <li>User authentication and profile-based commenting</li>
                    <li>Spam detection and automated content moderation</li>
                    <li>Comment voting (likes/dislikes) and threading</li>
                    <li>Moderator tools for comment management and user bans</li>
                  </ul>
                  <h6>Non-functional</h6>
                  <ul>
                    <li>Support 1M+ concurrent users during peak events</li>
                    <li>Comment display latency < 200ms</li>
                    <li>Handle 100K+ comments per minute during viral moments</li>
                    <li>99.9% uptime during scheduled live events</li>
                  </ul>
                </div>

                <h5>High-level design</h5>
                <h6>Core components:</h6>
                <ul>
                  <li><strong>Comment Service:</strong> Real-time comment ingestion and distribution</li>
                  <li><strong>Moderation Engine:</strong> AI-based content filtering and spam detection</li>
                  <li><strong>WebSocket Gateway:</strong> Real-time comment streaming to viewers</li>
                  <li><strong>Rate Limiter:</strong> Prevent spam and abuse from individual users</li>
                  <li><strong>Analytics Service:</strong> Comment engagement and sentiment analysis</li>
                </ul>

                <h5>Scaling strategies</h5>
                <ul>
                  <li><strong>Event Sharding:</strong> Distribute comments across multiple streams</li>
                  <li><strong>Geographic Distribution:</strong> Regional comment servers for reduced latency</li>
                  <li><strong>Comment Sampling:</strong> Show representative subset during high volume</li>
                  <li><strong>Caching Layers:</strong> Hot comments and user data for fast access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },

    'tips': {
      title: 'Interview Success Tips',
      introduction: "Proven strategies and common patterns to excel in system design interviews at top tech companies.",
      content: `
        <div class="tips-section">
          <h3>Framework Application</h3>
          <ul class="tips-list">
            <li><strong>Start with Requirements:</strong> Always clarify functional and non-functional requirements first</li>
            <li><strong>Think Out Loud:</strong> Explain your reasoning for each design decision</li>
            <li><strong>Consider Trade-offs:</strong> Discuss alternatives and why you chose specific approaches</li>
            <li><strong>Scale Incrementally:</strong> Start simple, then add complexity and scale considerations</li>
            <li><strong>Address Bottlenecks:</strong> Identify potential failure points and mitigation strategies</li>
          </ul>

          <h3>Technical Depth</h3>
          <ul class="tips-list">
            <li><strong>Data Storage:</strong> Choose appropriate databases based on access patterns</li>
            <li><strong>Caching Strategy:</strong> Implement multi-level caching for performance</li>
            <li><strong>Load Balancing:</strong> Distribute traffic effectively across servers</li>
            <li><strong>Monitoring:</strong> Include observability and alerting in designs</li>
            <li><strong>Security:</strong> Consider authentication, authorization, and data protection</li>
          </ul>

          <h3>Common Follow-up Questions</h3>
          <ul class="tips-list">
            <li>"How would you handle 10x traffic growth?"</li>
            <li>"What happens if this component fails?"</li>
            <li>"How would you monitor and debug this system?"</li>
            <li>"What security considerations are important?"</li>
            <li>"How would you reduce latency for global users?"</li>
          </ul>
        </div>
      `
    }
  }
};

// Application state
let currentTopic = null;
let currentCategory = null;
let searchResults = [];
let completedTopics = new Set();
let bookmarkedTopics = new Set();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  try {
    console.log('Initializing application...');
    setupEventListeners();
    loadUserProgress();
    updateProgressDisplay();
    showHomeContent();
    initializeTheme();
    console.log('Application initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

function setupEventListeners() {
  console.log('Setting up event listeners...');

  // Navigation event listeners
  const sectionHeaders = document.querySelectorAll('.nav-section-header');
  console.log('Found section headers:', sectionHeaders.length);
  sectionHeaders.forEach(header => {
    header.addEventListener('click', handleSectionToggle);
  });

  const navItems = document.querySelectorAll('.nav-item');
  console.log('Found nav items:', navItems.length);
  navItems.forEach(item => {
    item.addEventListener('click', handleNavigation);
  });

  // Search functionality
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');

  if (searchInput && searchClear) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        performSearch(e.target.value);
      }
    });
    searchClear.addEventListener('click', clearSearch);
  }

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Mobile menu
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobile-menu-toggle');

    if (sidebar && mobileToggle && !sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
      sidebar.classList.remove('mobile-open');
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      clearSearch();
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        sidebar.classList.remove('mobile-open');
      }
    }

    if (e.key === '/' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }
  });
}

function handleSectionToggle(e) {
  const header = e.currentTarget;
  const section = header.getAttribute('data-section');
  const items = document.getElementById(section + '-items');

  if (!items) return;

  header.classList.toggle('expanded');
  items.classList.toggle('expanded');

  // Update chevron rotation
  const chevron = header.querySelector('.nav-chevron');
  if (chevron) {
    if (header.classList.contains('expanded')) {
      chevron.style.transform = 'rotate(180deg)';
    } else {
      chevron.style.transform = 'rotate(0deg)';
    }
  }
}

function handleNavigation(e) {
  const item = e.currentTarget;
  const category = item.getAttribute('data-category');
  const topic = item.getAttribute('data-topic');

  console.log('Navigating to:', category, topic);

  // Update active states
  document.querySelectorAll('.nav-item').forEach(navItem => {
    navItem.classList.remove('active');
  });
  item.classList.add('active');

  // Navigate to topic
  navigateToTopic(category, topic);
}

function navigateToTopic(category, topic) {
  currentCategory = category;
  currentTopic = topic;

  console.log('Loading topic:', category, topic);

  // Hide home and search content
  const homeContent = document.getElementById('home-content');
  const searchResults = document.getElementById('search-results');
  if (homeContent) homeContent.classList.add('hidden');
  if (searchResults) searchResults.classList.add('hidden');

  // Show dynamic content
  const dynamicContent = document.getElementById('dynamic-content');
  if (dynamicContent) {
    dynamicContent.classList.remove('hidden');
  }

  // Load topic content
  loadTopicContent(category, topic);

  // Mark topic as read
  markTopicAsRead(category, topic);
}

function loadTopicContent(category, topic) {
  const data = systemDesignData[category] && systemDesignData[category][topic];
  if (!data) {
    console.error('No data found for:', category, topic);
    return;
  }

  const contentArea = document.getElementById('dynamic-content');
  if (!contentArea) return;

  let html = '';

  // Generate content based on category type
  if (category === 'architectural_patterns') {
    html = generateArchitecturalPatternContent(data);
  } else if (category === 'key_concepts') {
    html = generateKeyConceptContent(data);
  } else if (category === 'building_blocks') {
    html = generateBuildingBlockContent(data);
  } else if (category === 'tradeoffs') {
    html = generateTradeoffContent(data);
  } else if (category === 'interview_problems') {
    html = generateInterviewProblemContent(data);
  } else if (category === 'resources') {
    html = generateResourceContent(data);
  } else if (category === 'complete_guide') {
    html = generateCompleteGuideContent(data);
  }

  contentArea.innerHTML = html;
  contentArea.scrollTop = 0;
  
  // Initialize completion button state
  initializeCompletionButton(category, topic);
}

function initializeCompletionButton(category, topic) {
  const topicKey = `${category}:${topic}`;
  const isCompleted = completedTopics.has(topicKey);
  const button = document.getElementById('mark-completed-btn');
  
  if (button) {
    const completionIcon = button.querySelector('.completion-icon');
    const completionText = button.querySelector('.completion-text');
    
    if (isCompleted) {
      button.classList.add('completed');
      completionIcon.textContent = '✗';
      completionText.textContent = 'Mark as Incomplete';
    } else {
      button.classList.remove('completed');
      completionIcon.textContent = '✓';
      completionText.textContent = 'Mark as Completed';
    }
  }
}

function generateArchitecturalPatternContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
      <div class="topic-actions">
        <button class="completion-btn" id="mark-completed-btn" onclick="toggleTopicCompletion()">
          <span class="completion-icon">✓</span>
          <span class="completion-text">Mark as Completed</span>
        </button>
      </div>
    </div>

    ${data.image ? `
    <div class="diagram-container">
      <img src="${data.image}" alt="${data.title} Diagram" class="diagram-image" />
      <div class="diagram-caption">Figure 1: ${data.title} Overview</div>
    </div>
    ` : ''}

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">📝</span>
        Introduction
      </h2>
      <div class="section-content">
        <p class="section-intro">${data.introduction}</p>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🎯</span>
        Core Concepts
      </h2>
      <div class="section-content">
        <ul class="concept-list">
          ${data.core_concepts.map(concept => {
            const parts = concept.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="concept-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">✅</span>
        Strengths
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.strengths.map(strength => {
            const parts = strength.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">⚠️</span>
        Limitations
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.limitations.map(limitation => {
            const parts = limitation.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🔧</span>
        Design Considerations
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.design_considerations.map(consideration => {
            const parts = consideration.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🎯</span>
        When to Use
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.when_to_use.map(useCase => {
            const parts = useCase.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>
  `;
}

function generateKeyConceptContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
      <div class="topic-actions">
        <button class="completion-btn" id="mark-completed-btn" onclick="toggleTopicCompletion()">
          <span class="completion-icon">✓</span>
          <span class="completion-text">Mark as Completed</span>
        </button>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">📖</span>
        Definition
      </h2>
      <div class="section-content">
        <p class="section-intro">${data.definition}</p>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">⚙️</span>
        How It Works
      </h2>
      <div class="section-content">
        <ul class="concept-list">
          ${data.how_it_works.map(item => {
            const parts = item.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="concept-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🌟</span>
        Benefits
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.benefits.map(benefit => {
            const parts = benefit.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🚧</span>
        Challenges
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.challenges.map(challenge => {
            const parts = challenge.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🛠️</span>
        Implementation
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.implementation.map(impl => {
            const parts = impl.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">📚</span>
        Examples
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.examples.map(example => {
            const parts = example.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>
  `;
}

function generateBuildingBlockContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
      <div class="topic-actions">
        <button class="completion-btn" id="mark-completed-btn" onclick="toggleTopicCompletion()">
          <span class="completion-icon">✓</span>
          <span class="completion-text">Mark as Completed</span>
        </button>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🔍</span>
        Overview
      </h2>
      <div class="section-content">
        <p class="section-intro">${data.overview}</p>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">⚙️</span>
        How It Works
      </h2>
      <div class="section-content">
        <ul class="concept-list">
          ${data.how_it_works.map(item => {
            const parts = item.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="concept-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    ${data.types ? `
    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">📝</span>
        Types & Variations
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.types.map(type => {
            const parts = type.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>
    ` : ''}

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">✅</span>
        Benefits
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.benefits.map(benefit => {
            const parts = benefit.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🤔</span>
        Considerations
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.considerations.map(consideration => {
            const parts = consideration.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🎯</span>
        Use Cases
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.use_cases.map(useCase => {
            const parts = useCase.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>
  `;
}

function generateTradeoffContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
      <div class="topic-actions">
        <button class="completion-btn" id="mark-completed-btn" onclick="toggleTopicCompletion()">
          <span class="completion-icon">✓</span>
          <span class="completion-text">Mark as Completed</span>
        </button>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🔍</span>
        Overview
      </h2>
      <div class="section-content">
        <p class="section-intro">${data.overview}</p>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
      <div class="content-section">
        <h2 class="section-title">
          <span class="section-icon">🅰️</span>
          ${data.option_a.title}
        </h2>
        <div class="section-content">
          <p class="section-intro">${data.option_a.description}</p>
          <ul class="feature-list">
            ${data.option_a.characteristics.map(char => `
              <li class="feature-item">
                <div class="item-description">${char}</div>
              </li>
            `).join('')}
          </ul>
          <div class="mt-lg">
            <strong>Examples:</strong>
            <div class="tags">
              ${data.option_a.examples.map(example => `<span class="tag">${example}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h2 class="section-title">
          <span class="section-icon">🅱️</span>
          ${data.option_b.title}
        </h2>
        <div class="section-content">
          <p class="section-intro">${data.option_b.description}</p>
          <ul class="feature-list">
            ${data.option_b.characteristics.map(char => `
              <li class="feature-item">
                <div class="item-description">${char}</div>
              </li>
            `).join('')}
          </ul>
          <div class="mt-lg">
            <strong>Examples:</strong>
            <div class="tags">
              ${data.option_b.examples.map(example => `<span class="tag">${example}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">🎯</span>
        Decision Factors
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.decision_factors.map(factor => {
            const parts = factor.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">
        <span class="section-icon">📚</span>
        Implementation Examples
      </h2>
      <div class="section-content">
        <ul class="feature-list">
          ${data.implementation_examples.map(example => {
            const parts = example.split(':');
            const title = parts[0];
            const description = parts.slice(1).join(':').trim();
            return `
              <li class="feature-item">
                <div class="item-title">${title}</div>
                <div class="item-description">${description}</div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    </div>
  `;
}

function generateInterviewProblemContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
      <p class="topic-subtitle">Common system design interview problems at this difficulty level</p>
      <div class="topic-actions">
        <button class="completion-btn" id="mark-completed-btn" onclick="toggleTopicCompletion()">
          <span class="completion-icon">✓</span>
          <span class="completion-text">Mark as Completed</span>
        </button>
      </div>
    </div>

    ${data.problems.map((problem, index) => `
      <div class="content-section">
        <h2 class="section-title">
          <span class="section-icon">💼</span>
          ${problem.title}
        </h2>
        <div class="section-content">
          <div class="tags mb-lg">
            <span class="tag difficulty-${problem.difficulty.toLowerCase()}">${problem.difficulty}</span>
            ${problem.key_concepts.map(concept => `<span class="tag">${concept}</span>`).join('')}
          </div>

          <p class="section-intro">${problem.description}</p>

          <h4>Requirements:</h4>
          <ul class="feature-list">
            ${problem.requirements.map(req => `
              <li class="feature-item">
                <div class="item-description">${req}</div>
              </li>
            `).join('')}
          </ul>

          <h4>Key Components:</h4>
          <ul class="concept-list">
            ${problem.key_components.map(component => {
              const parts = component.split(':');
              const title = parts[0];
              const description = parts.slice(1).join(':').trim();
              return `
                <li class="concept-item">
                  <div class="item-title">${title}</div>
                  <div class="item-description">${description}</div>
                </li>
              `;
            }).join('')}
          </ul>

          <h4>Scaling Considerations:</h4>
          <ul class="feature-list">
            ${problem.scaling_considerations.map(consideration => `
              <li class="feature-item">
                <div class="item-description">${consideration}</div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('')}
  `;
}

function generateResourceContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
      <p class="topic-subtitle">Curated resources for learning system design</p>
      <div class="topic-actions">
        <button class="completion-btn" id="mark-completed-btn" onclick="toggleTopicCompletion()">
          <span class="completion-icon">✓</span>
          <span class="completion-text">Mark as Completed</span>
        </button>
      </div>
    </div>

    <div class="content-section">
      <div class="section-content">
        ${data.items.map((item, index) => `
          <div class="feature-item mb-lg">
            <div class="item-title">
              <a href="${item.link}" target="_blank" class="external-link">${item.title}</a>
            </div>
            ${item.author ? `<div style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem;">by ${item.author}</div>` : ''}
            ${item.source ? `<div style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem;">Source: ${item.source}</div>` : ''}
            <div class="item-description">${item.description}</div>
            ${item.topics ? `
              <div class="tags" style="margin-top: 0.75rem;">
                ${item.topics.map(topic => `<span class="tag">${topic}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function generateCompleteGuideContent(data) {
  return `
    <div class="topic-header">
      <h1 class="topic-title">${data.title}</h1>
      <p class="topic-subtitle">${data.introduction}</p>
      <div class="topic-actions">
        <button class="completion-btn" id="mark-completed-btn" onclick="toggleTopicCompletion()">
          <span class="completion-icon">✓</span>
          <span class="completion-text">Mark as Completed</span>
        </button>
      </div>
    </div>

    <div class="content-section">
      <div class="section-content">
        ${data.content}
      </div>
    </div>
  `;
}

// Search functionality
function handleSearch(e) {
  const query = e.target.value.trim();
  const clearButton = document.getElementById('search-clear');

  if (clearButton) {
    if (query.length > 0) {
      clearButton.classList.remove('hidden');
      if (query.length >= 2) {
        performSearch(query);
      }
    } else {
      clearButton.classList.add('hidden');
      clearSearch();
    }
  }
}

function performSearch(query) {
  if (!query || query.length < 2) return;

  const results = [];
  const searchTerms = query.toLowerCase().split(' ');

  // Search through all categories
  Object.keys(systemDesignData).forEach(category => {
    Object.keys(systemDesignData[category]).forEach(topic => {
      const data = systemDesignData[category][topic];
      const score = calculateSearchScore(data, searchTerms, category, topic);

      if (score > 0) {
        results.push({
          category,
          topic,
          data,
          score,
          snippet: generateSearchSnippet(data, searchTerms)
        });
      }
    });
  });

  // Sort by relevance score
  results.sort((a, b) => b.score - a.score);
  searchResults = results.slice(0, 20); // Limit to top 20 results

  displaySearchResults();
}

function calculateSearchScore(data, searchTerms, category, topic) {
  let score = 0;
  const text = JSON.stringify(data).toLowerCase();

  searchTerms.forEach(term => {
    // Title matches get highest score
    if (data.title && data.title.toLowerCase().includes(term)) {
      score += 10;
    }

    // Topic key matches get high score
    if (topic.includes(term)) {
      score += 8;
    }

    // Category matches get medium score
    if (category.includes(term)) {
      score += 5;
    }

    // General text matches get base score
    const matches = (text.match(new RegExp(term, 'g')) || []).length;
    score += matches;
  });

  return score;
}

function generateSearchSnippet(data, searchTerms) {
  let text = '';

  if (data.introduction) text += data.introduction + ' ';
  if (data.definition) text += data.definition + ' ';
  if (data.overview) text += data.overview + ' ';
  if (data.description) text += data.description + ' ';

  // Find the best snippet containing search terms
  const sentences = text.split(/[.!?]+/);
  let bestSentence = sentences[0] || '';
  let maxMatches = 0;

  sentences.forEach(sentence => {
    const matches = searchTerms.reduce((count, term) => {
      return count + (sentence.toLowerCase().includes(term) ? 1 : 0);
    }, 0);

    if (matches > maxMatches) {
      maxMatches = matches;
      bestSentence = sentence;
    }
  });

  // Highlight search terms
  let snippet = bestSentence.trim().substring(0, 200);
  searchTerms.forEach(term => {
    const regex = new RegExp(`(${term})`, 'gi');
    snippet = snippet.replace(regex, '<span class="search-highlight">$1</span>');
  });

  return snippet + (bestSentence.length > 200 ? '...' : '');
}

function displaySearchResults() {
  const searchResultsContainer = document.getElementById('search-results');
  const searchResultsContent = document.getElementById('search-results-content');

  if (!searchResultsContainer || !searchResultsContent) return;

  // Hide other content
  const homeContent = document.getElementById('home-content');
  const dynamicContent = document.getElementById('dynamic-content');
  if (homeContent) homeContent.classList.add('hidden');
  if (dynamicContent) dynamicContent.classList.add('hidden');

  if (searchResults.length === 0) {
    searchResultsContent.innerHTML = '<p>No results found. Try different keywords.</p>';
  } else {
    searchResultsContent.innerHTML = searchResults.map(result => `
      <div class="search-result-item" onclick="navigateToTopic('${result.category}', '${result.topic}')">
        <div class="search-result-category">${formatCategoryName(result.category)}</div>
        <div class="search-result-title">${result.data.title}</div>
        <div class="search-result-snippet">${result.snippet}</div>
      </div>
    `).join('');
  }

  searchResultsContainer.classList.remove('hidden');
}

function clearSearch() {
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const searchResultsContainer = document.getElementById('search-results');

  if (searchInput) searchInput.value = '';
  if (searchClear) searchClear.classList.add('hidden');
  if (searchResultsContainer) searchResultsContainer.classList.add('hidden');

  if (!currentTopic) {
    showHomeContent();
  }
}

function showHomeContent() {
  const homeContent = document.getElementById('home-content');
  const dynamicContent = document.getElementById('dynamic-content');
  const searchResultsContainer = document.getElementById('search-results');

  if (homeContent) homeContent.classList.remove('hidden');
  if (dynamicContent) dynamicContent.classList.add('hidden');
  if (searchResultsContainer) searchResultsContainer.classList.add('hidden');

  // Clear active navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });

  currentTopic = null;
  currentCategory = null;
}

// Progress tracking
function markTopicAsRead(category, topic) {
  const topicKey = `${category}:${topic}`;
  completedTopics.add(topicKey);
  saveUserProgress();
  updateProgressDisplay();

  // Update nav item appearance
  const navItem = document.querySelector(`[data-category="${category}"][data-topic="${topic}"]`);
  if (navItem) {
    navItem.classList.add('completed');
  }
}

function toggleTopicCompletion() {
  if (!currentTopic || !currentCategory) {
    console.error('No current topic or category set');
    return;
  }
  
  const topicKey = `${currentCategory}:${currentTopic}`;
  const isCompleted = completedTopics.has(topicKey);
  const button = document.getElementById('mark-completed-btn');
  const completionIcon = button.querySelector('.completion-icon');
  const completionText = button.querySelector('.completion-text');
  
  if (isCompleted) {
    // Remove from completed topics
    completedTopics.delete(topicKey);
    button.classList.remove('completed');
    completionIcon.textContent = '✓';
    completionText.textContent = 'Mark as Completed';
    
    // Update nav item appearance
    const navItem = document.querySelector(`[data-category="${currentCategory}"][data-topic="${currentTopic}"]`);
    if (navItem) {
      navItem.classList.remove('completed');
    }
  } else {
    // Add to completed topics
    completedTopics.add(topicKey);
    button.classList.add('completed');
    completionIcon.textContent = '✗';
    completionText.textContent = 'Mark as Incomplete';
    
    // Update nav item appearance
    const navItem = document.querySelector(`[data-category="${currentCategory}"][data-topic="${currentTopic}"]`);
    if (navItem) {
      navItem.classList.add('completed');
    }
  }
  
  saveUserProgress();
  updateProgressDisplay();
}

function updateProgressDisplay() {
  const totalTopics = getTotalTopicsCount();
  const completedCount = completedTopics.size;
  const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  if (progressFill) progressFill.style.width = `${percentage}%`;
  if (progressText) progressText.textContent = `${percentage}% Complete (${completedCount}/${totalTopics})`;
}

function getTotalTopicsCount() {
  let count = 0;
  Object.keys(systemDesignData).forEach(category => {
    count += Object.keys(systemDesignData[category]).length;
  });
  return count;
}

function saveUserProgress() {
  try {
    localStorage.setItem('systemDesignProgress', JSON.stringify({
      completedTopics: Array.from(completedTopics),
      bookmarkedTopics: Array.from(bookmarkedTopics)
    }));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

function loadUserProgress() {
  try {
    const saved = localStorage.getItem('systemDesignProgress');
    if (saved) {
      const progress = JSON.parse(saved);
      completedTopics = new Set(progress.completedTopics || []);
      bookmarkedTopics = new Set(progress.bookmarkedTopics || []);

      // Update nav items
      completedTopics.forEach(topicKey => {
        const [category, topic] = topicKey.split(':');
        const navItem = document.querySelector(`[data-category="${category}"][data-topic="${topic}"]`);
        if (navItem) {
          navItem.classList.add('completed');
        }
      });
    }
  } catch (error) {
    console.error('Error loading progress:', error);
  }
}

// Theme functionality
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Update theme icon
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = newTheme === 'dark' ? '🌞' : '🌙';
  }
}

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
  }
}

// Mobile menu
function toggleMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('mobile-open');
  }
}

// Utility functions
function formatCategoryName(category) {
  return category.replace(/_/g, ' ').replace(/\w/g, l => l.toUpperCase());
}

// Make navigateToTopic globally available for onclick handlers
window.navigateToTopic = navigateToTopic;

console.log('App script loaded successfully');