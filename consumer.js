const { Kafka } = require("kafkajs");

const run = async () => {
    try {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["localhost:9094"]
        });

        const consumer = kafka.consumer({
            "groupId": "test"
        });
        console.log("Connecting...");
        await consumer.connect();
        console.log("Connected");

        consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        });

        await consumer.run({
            "eachMessage": async result => {
                console.log(`Hello ${result.message.value} from partition-${result.partition}`);
            }
        });

    } catch(ex) {
        console.error(`There is errors ${ex}`);
    } finally{
    }
}

run(); 