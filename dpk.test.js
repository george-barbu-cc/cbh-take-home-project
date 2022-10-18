const { deterministicPartitionKey } = require("./dpk");
const LONG_PARTITION_KEY = "s03SrgD3Ypa99cgamq100wpzMB5cBzqJliN6KdELuVE51iCWsqS8LRwvkgHIIiQ3Bd6Y62nRO9BZzegIqOHoDubU2kLFASSRvxEQOEYKDA4VhxmKgfUu8JqNR7vPQiQJHYkewImBt14NZJwX8iSWXAmJJ3McJ80dxV9LyVlR1VPIUmGy2f9fWR483t4NStg354Xg6upx2i2L9J3CU7sYFmnX6FaeishAC4z8371WGlei29Qkcq8dKL3mtVm98njhQ";
const SHORT_PARTITION_KEY = "s03SrgD3Ypa99cgamq100wpzMB5cBzqJliN6KdELuVE51iCWsqS8LRwvkgHII";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns hash object input", () => {
    const trivialKey_object = deterministicPartitionKey({ lorem: "ipsum" });
    expect(trivialKey_object).toMatch(/[0-9A-Fa-f]{6}/g);
  });

  it("Returns hash string input", () => {
    const trivialKey_string = deterministicPartitionKey('lorem');
    expect(trivialKey_string).toMatch(/[0-9A-Fa-f]{6}/g);
  });
  
  it("Returns hash int input", () => {
    const trivialKey_int = deterministicPartitionKey(123);
    expect(trivialKey_int).toMatch(/[0-9A-Fa-f]{6}/g);
  });

  it("Should hash long partitionKey", () => {
	  
    const input = {
      partitionKey: LONG_PARTITION_KEY,
    };
    const trivialKey_long = deterministicPartitionKey(input);

    expect(trivialKey_long.length).toBeLessThan(256);
  });

  it("Should not hash short partitionKey", () => {
    const input = {
      partitionKey: SHORT_PARTITION_KEY,
    };
    const trivialKey_short = deterministicPartitionKey(input);

    expect(trivialKey_short).toBe(input.partitionKey);
  });
});
