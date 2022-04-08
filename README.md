# hello-world-kafka-node-js


## How to Run
`docker-compose up`

## How to Stop
`docker-compose down`

## How to Use
1. Create `Users` topics by running `node topic.js`
2. You can publish/produce message using the producer by running `node producer.js {your message}`
3. Listen/subscribe a topic (Users) by running `node consumer.js`

## Notes
1. There are only two partitions and for every user they belong to the same groupId (with this config, 
kafka will looks like a message queue), so the maximum consumer that able to listen for Users topic is only 2, 
2. Kafka broker replication is only 1
