const express = require("express");
const { createClient, fetchExchange } = require("@urql/core");
const fetch = require("node-fetch");

const app = express();
const port = 3002;

// Create a URQL client
const client = createClient({
  url: "https://api.studio.thegraph.com/query/63941/finalows/version/latest",
  exchanges: [fetchExchange],
  fetch: fetch,
});

// Define your GraphQL query
const MY_QUERY = `
  query {
    nftminteds(orderBy: tokenId) {
    id
    creator
    tokenId
  }
  nftpurchaseds(orderBy: tokenId) {
    id
    buyer
    tokenId
  }
  nftrenteds {
    id
    renter
    tokenId
    duration
  }
  rentInfoSets(orderBy: tokenId) {
    id
    rentBaseAmount
    rentDuration
    tokenId
  }
  royaltyPaids(orderBy: tokenId) {
    id
    creator
    tokenId
    amount
  }
  transfers(orderBy: OwnSound_id) {
    id
    from
    to
    OwnSound_id
  }
  }
`;

// Function to fetch data from The Graph
async function fetchData() {
  try {
    const result = await client.query(MY_QUERY).toPromise();
    if (result.error) {
      console.error("Error:", result.error);
      return null;
    }
    console.log("Query result:", result.data);
    return result.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// API endpoint to get data
app.get("/api/data", async (req, res) => {
  const data = await fetchData();
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
