"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopConsumer = exports.startConsumer = void 0;
var kafka_1 = require("../infrastructure/kafka");
var subscriber_1 = require("../infrastructure/kafka/subscriber");
var startConsumer = function () { return __awaiter(void 0, void 0, void 0, function () {
    var subscriber_2, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, kafka_1.consumer.connect()];
            case 1:
                _a.sent();
                return [4 /*yield*/, kafka_1.consumer.subscribe({
                        topic: 'course-service-topic',
                        fromBeginning: true
                    })];
            case 2:
                _a.sent();
                subscriber_2 = (0, subscriber_1.createSubscriber)();
                return [4 /*yield*/, kafka_1.consumer.run({
                        eachMessage: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                            var key, value, subscriberMethod, subscriberData, error_2;
                            var message = _b.message;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        key = message.key, value = message.value;
                                        subscriberMethod = String(key);
                                        _c.label = 1;
                                    case 1:
                                        _c.trys.push([1, 5, , 6]);
                                        if (!(typeof subscriber_2[subscriberMethod] === 'function')) return [3 /*break*/, 3];
                                        subscriberData = JSON.parse(String(value));
                                        return [4 /*yield*/, subscriber_2[subscriberMethod](subscriberData)];
                                    case 2:
                                        _c.sent();
                                        return [3 /*break*/, 4];
                                    case 3: throw new Error("".concat(subscriberMethod, " is not a function"));
                                    case 4: return [3 /*break*/, 6];
                                    case 5:
                                        error_2 = _c.sent();
                                        console.error("Error processing message with key ".concat(key, ": ").concat(error_2 === null || error_2 === void 0 ? void 0 : error_2.message));
                                        return [3 /*break*/, 6];
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); }
                    })];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.error("Kafka Consume Error:", error_1 === null || error_1 === void 0 ? void 0 : error_1.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.startConsumer = startConsumer;
var stopConsumer = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, kafka_1.consumer.stop()];
            case 1:
                _a.sent();
                return [4 /*yield*/, kafka_1.consumer.disconnect()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.stopConsumer = stopConsumer;
