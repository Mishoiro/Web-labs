function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function testSleep() {
  console.log("Wait...");
  await sleep(1000);
  console.log("1 second passed");
  return 1;
}

testSleep().then((r) => console.log(r));
