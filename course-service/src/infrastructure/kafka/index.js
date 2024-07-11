"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumer = exports.producer = exports.kafka = void 0;
var kafkajs_1 = require("kafkajs");
exports.kafka = new kafkajs_1.Kafka({
    clientId: "course-service",
    brokers: ["localhost:29092"],
});
exports.producer = exports.kafka.producer({
    createPartitioner: kafkajs_1.Partitioners.LegacyPartitioner,
});
exports.consumer = exports.kafka.consumer({
    groupId: "course-service-kafka-group",
});
