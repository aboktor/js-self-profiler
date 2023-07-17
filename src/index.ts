function main() {
  const profiler = new (window as any).Profiler({ sampleInterval: 10, maxBufferSize: 10000 });
  wasteTime(200);
  setTimeout(async () => {
    wasteTime(50);
    const trace = await profiler.stop();
  }, 300);
}
//const functions=[large, small];
function simulate(time) {
  const start = performance.now();
  while (performance.now() - start < time) {
    if (Math.random() < 0.1) {
      doWork();
    } else {
      doOtherWork();
    }
  }
}

function wasteTime(time) {
  const start = performance.now();
  while (performance.now() - start < time) {
    const spin = Math.random() * 100000;
    for (let i = 0; i < spin; i += 1) {}
  }
}

function doWork() {
  if (Math.random() < 0.2) {
    wasteTime(Math.random() * 10);
  } else {
    doWork();
  }
}

function doOtherWork() {
  const spin = Math.random() * 100000;
  for (let i = 0; i < spin; i += 1) {}
}

main();
