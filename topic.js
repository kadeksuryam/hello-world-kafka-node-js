const { Kafka } = require("kafkajs");

const run = async () => {
    try {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["localhost:9094"]
        });

        const admin = kafka.admin();
        console.log("Connecting...");
        await admin.connect();
        console.log("Connected");

        //A-M, N-Z
        await admin.createTopics({
            "topics": [{
                "topic": "Users",
                "numPartitions": 2
            }]
        });

        console.log("Topics created Successfully!");
        await admin.disconnect();

    } catch(ex) {
        console.error(`There is errors ${ex}`);
    } finally{
        process.exit(0);
    }
}

run(); 