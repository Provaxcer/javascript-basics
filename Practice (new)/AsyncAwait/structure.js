// WAY 1 — Callbacks (Day 10)
setTimeout(function() {
  console.log("Done");
}, 1000);

// WAY 2 — Promises (Day 11)
fetchData()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

// WAY 3 — async/await (Today)
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch(error) {
    console.log(error);
  }
}