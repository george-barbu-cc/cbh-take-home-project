const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const deterministicPartitionKey = (event) => {
  let trivialKey = event?.partitionKey ?? event ?? TRIVIAL_PARTITION_KEY; // if null/undefined returns its right-hand side operand
  let data = event === trivialKey; // true || false


  if (typeof trivialKey !== "string") {
	  trivialKey = JSON.stringify(trivialKey);
  }
  
  if (data || trivialKey.length > MAX_PARTITION_KEY_LENGTH) {
    trivialKey = crypto.createHash("sha3-512").update(trivialKey).digest("hex");
  }

  return trivialKey;
};

exports.deterministicPartitionKey = deterministicPartitionKey;