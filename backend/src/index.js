const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const { JsonRpcProvider, ethers } = require("ethers");
const { defaultAbiCoder } = require("ethers/lib/utils");
const { FHE, createInstance } = require("fhevmjs");
const axios = require("axios");
const FormData = require("form-data");
const app = express();

dotenv.config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const allowedIps = [
  "http://localhost:3000",
  "https://ownsound.xyz/",
  "https://ownsound-three.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedIps.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "FETCH"],

    credentials: true,
  })
);

app.use(cookieParser());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/audio");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
let ipfsHash;

function encrypt(text, secretKey) {
  const cipher = crypto.createCipher("aes-128-ecb", secretKey);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(encryptedText, secretKey) {
  const decipher = crypto.createDecipher("aes-128-ecb", "" + secretKey + "");
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

// for uploading music file
app.post(
  "/endpoint",
  upload.fields([{ name: "musicFile" }, { name: "coverImage" }]),
  async (req, res) => {
    var JWT = process.env.JWT;
    const { userAddress } = req.body;

    const musicFile = req.files["musicFile"] ? req.files["musicFile"][0] : null;
    // const coverImage = req.files["coverImage"]
    //   ? req.files["coverImage"][0]
    //   : null;
    if (musicFile) {
      const formData = new FormData();
      const fileStream = fs.createReadStream(musicFile.path);
      formData.append("file", fileStream);

      const pinataMetadata = JSON.stringify({
        name: musicFile.originalname,
      });
      formData.append("pinataMetadata", pinataMetadata);

      const pinataOptions = JSON.stringify({
        cidVersion: 1,
      });
      formData.append("pinataOptions", pinataOptions);

      try {
        const pinataResponse = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            headers: {
              Authorization: `Bearer ${JWT}`,
              ...formData.getHeaders(),
            },
          }
        );

        ipfsHash = pinataResponse.data.IpfsHash;
        const FHE_LIB_ADDRESS = "0x000000000000000000000000000000000000005d";

        const provider = new ethers.providers.JsonRpcProvider(
          "https://testnet.inco.org",
          {
            chainId: 9090,
            name: "Inco Gentry Testnet",
          }
        );

        const createFhevmInstance = async () => {
          const network = await provider.getNetwork();
          const chainId = +network.chainId.toString();
          // Get blockchain public key
          const ret = await provider.call({
            to: FHE_LIB_ADDRESS,
            // first four bytes of keccak256('fhePubKey(bytes1)') + 1 byte for library
            data: "0xd9d47bb001",
          });

          const decoded = defaultAbiCoder.decode(["bytes"], ret);
          const publicKey = decoded[0];
          const instance = await createInstance({ chainId, publicKey });
          console.log("created instance");
          return instance;
        };

        const getInstance = async (myVariable) => {
          const instance = await createFhevmInstance();

          // Create a provider
          const provider1 = new ethers.providers.JsonRpcProvider(
            "https://testnet.inco.org"
          );

          // Create a wallet instance
          const wallet = new ethers.Wallet(
            "b726794ec951fa89e8d8c145a44888899291b7593a5c0b21d24d66cb32802f09",
            provider1
          );

          const signer = wallet.connect(provider);
          // Example ERC-20 token contract address and ABI (basic)
          const ERC20_ABI = [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newAdmin",
                  type: "address",
                },
              ],
              name: "addAdmin",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "InvalidShortString",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "str",
                  type: "string",
                },
              ],
              name: "StringTooLong",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [],
              name: "EIP712DomainChanged",
              type: "event",
            },
            {
              inputs: [],
              name: "setNewRandomNumber",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "encryptedIpfsCid",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "salt1",
                  type: "bytes",
                },
                {
                  internalType: "bytes",
                  name: "salt2",
                  type: "bytes",
                },
                {
                  internalType: "bytes",
                  name: "salt3",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
              ],
              name: "storeCid",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "newCreator",
                  type: "address",
                },
                {
                  internalType: "euint32",
                  name: "salt1",
                  type: "uint256",
                },
                {
                  internalType: "euint32",
                  name: "salt2",
                  type: "uint256",
                },
                {
                  internalType: "euint32",
                  name: "salt3",
                  type: "uint256",
                },
              ],
              name: "updateRandomNumberOrCreator",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "eip712Domain",
              outputs: [
                {
                  internalType: "bytes1",
                  name: "fields",
                  type: "bytes1",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "version",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "chainId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "verifyingContract",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "salt",
                  type: "bytes32",
                },
                {
                  internalType: "uint256[]",
                  name: "extensions",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getCreator",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getDecryptedCid",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getDecryptedSalt1",
              outputs: [
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getDecryptedSalt2",
              outputs: [
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getDecryptedSalt3",
              outputs: [
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getNewRandomNumber",
              outputs: [
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getRandomNumberAndCreator",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getSalt1",
              outputs: [
                {
                  internalType: "euint32",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getSalt2",
              outputs: [
                {
                  internalType: "euint32",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getSalt3",
              outputs: [
                {
                  internalType: "euint32",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ];

          // Replace with the contract address of the inco you want to interact with
          const TOKEN_CONTRACT_ADDRESS =
            "0x533eD2257CFA5fb172F08a10e82756D5a0Af16f9";

          // Create a contract instance
          const tokenContract = await new ethers.Contract(
            TOKEN_CONTRACT_ADDRESS,
            ERC20_ABI,
            signer
          );
          const e = await tokenContract.setNewRandomNumber();

          const idRandom = await tokenContract.getNewRandomNumber();
          myVariable = idRandom;
          global.myVariable = idRandom;

          // Generate a random 16-digit number as a string
          const randomNumber = Math.floor(Math.random() * 10 ** 16)
            .toString()
            .padStart(16, "0");

          // Split the number into two 8-digit parts
          const salt1tmp = instance.encrypt32(Number(randomNumber.slice(0, 5)));
          const salt2tmp = instance.encrypt32(
            Number(randomNumber.slice(5, 10))
          );
          const salt3tmp = instance.encrypt32(
            Number(randomNumber.slice(10, 16))
          );

          const toHexString = (bytes) =>
            bytes.reduce(
              (str, byte) => str + byte.toString(16).padStart(2, "0"),
              ""
            );

          const salt1 = "0x" + toHexString(salt1tmp);
          const salt2 = "0x" + toHexString(salt2tmp);
          const salt3 = "0x" + toHexString(salt3tmp);

          // Encrypt message with AES
          const aesEncrypted = encrypt(ipfsHash, randomNumber);
          // Function to store CID in the contract
          async function storeCid(
            idRandom,
            aesEncrypted,
            salt1,
            salt2,
            salt3,
            userAddress
          ) {
            try {
              const result = await tokenContract.storeCid(
                idRandom,
                aesEncrypted,
                salt1,
                salt2,
                salt3,
                userAddress,
                {
                  gasLimit: 2500000,
                }
              );
              console.log("Transaction storing CID result:", result);
            } catch (error) {
              console.error("Error storing CID:", error);
            }
          }

          // Execute the function
          const walletAddress = ethers.utils.getAddress(wallet.address);
          await storeCid(
            idRandom,
            aesEncrypted,
            salt1,
            salt2,
            salt3,
            userAddress
          );
          return idRandom;
        };
        let myVariable;
        const dbh = await getInstance(myVariable);
        global.myGlobalVariable = ipfsHash;

        console.log("Pinata Response:", pinataResponse.data);
        res.status(200).send({
          message: "Data received and uploaded successfully",
          // pinataResponse: pinataResponse.data,
          value: dbh,
        });

        // Unlink (delete) the music file from the server
        fs.unlink(musicFile.path, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          } else {
            console.log("File deleted successfully");
          }
        });
      } catch (error) {
        console.error("Error uploading to Pinata:", error);
        res.status(500).send({
          message: "Failed to upload to Pinata",
          error: error.message,
        });
      }
    } else {
      res.status(400).send("No music file provided");
    }
  }
);

// for playing music file
app.get("/hashsong/:randomId", async (req, res) => {
  const { randomId } = req.params;
  console.log("randomId", randomId);
  const provider2 = new ethers.providers.JsonRpcProvider(
    "https://testnet.inco.org",
    {
      chainId: 9090,
      name: "Inco Gentry Testnet",
    }
  );
  // Create a provider
  const provider3 = new ethers.providers.JsonRpcProvider(
    "https://testnet.inco.org"
  );

  // Create a wallet instance
  const wallet2 = new ethers.Wallet(
    "b726794ec951fa89e8d8c145a44888899291b7593a5c0b21d24d66cb32802f09",
    provider3
  );

  const signer2 = wallet2.connect(provider2);

  // Example ERC-20 token contract address and ABI (basic)
  const ERC20_ABI2 = [
    {
      inputs: [
        {
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "addAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "InvalidShortString",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "str",
          type: "string",
        },
      ],
      name: "StringTooLong",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [],
      name: "EIP712DomainChanged",
      type: "event",
    },
    {
      inputs: [],
      name: "setNewRandomNumber",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "encryptedIpfsCid",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "salt1",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "salt2",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "salt3",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "creator",
          type: "address",
        },
      ],
      name: "storeCid",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "newCreator",
          type: "address",
        },
        {
          internalType: "euint32",
          name: "salt1",
          type: "uint256",
        },
        {
          internalType: "euint32",
          name: "salt2",
          type: "uint256",
        },
        {
          internalType: "euint32",
          name: "salt3",
          type: "uint256",
        },
      ],
      name: "updateRandomNumberOrCreator",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        {
          internalType: "bytes1",
          name: "fields",
          type: "bytes1",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "version",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "chainId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "verifyingContract",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "uint256[]",
          name: "extensions",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getCreator",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedCid",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt1",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt2",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt3",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getNewRandomNumber",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getRandomNumberAndCreator",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt1",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt2",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt3",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  // Replace with the contract address of the inco you want to interact with
  const TOKEN_CONTRACT_ADDRESS2 = "0x533eD2257CFA5fb172F08a10e82756D5a0Af16f9";

  // Create a contract instance
  const tokenContract2 = await new ethers.Contract(
    TOKEN_CONTRACT_ADDRESS2,
    ERC20_ABI2,
    signer2
  );

  try {
    const result = await tokenContract2.getDecryptedCid(randomId);

    const result1 = await tokenContract2.getDecryptedSalt1(randomId);
    const result2 = await tokenContract2.getDecryptedSalt2(randomId);
    const result3 = await tokenContract2.getDecryptedSalt3(randomId);

    const mainSalt =
      result1.toString() + result2.toString() + result3.toString();

      console.log("mainSalt", mainSalt);
      console.log("result", result);
    const aesDecrypted = await decrypt(""+result+"", ""+mainSalt+"");
    console.log("aesDecrypted", aesDecrypted);
    const audioUrl = `https://harlequin-secure-tortoise-165.mypinata.cloud/ipfs/${aesDecrypted}`;

    const range = req.headers.range;
    const headResponse = await axios.head(audioUrl);
    const contentLength = headResponse.headers["content-length"];
    const contentType = headResponse.headers["content-type"];

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : contentLength - 1;
      const chunksize = end - start + 1;

      const rangeResponse = await axios({
        method: "get",
        url: audioUrl,
        responseType: "stream",
        headers: { Range: `bytes=${start}-${end}` },
      });

      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${contentLength}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": contentType,
      });

      rangeResponse.data.pipe(res);
    } else {
      const fullResponse = await axios({
        method: "get",
        url: audioUrl,
        responseType: "stream",
      });
      res.writeHead(200, {
        "Content-Length": contentLength,
        "Content-Type": contentType,
      });

      fullResponse.data.pipe(res);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

// store private playlist
app.post("/playlist", (req, res) => {
  const { playArray, playName, rentalAdd } = req.body;
  const providerPlaylist = new ethers.providers.JsonRpcProvider(
    "https://testnet.inco.org",
    {
      chainId: 9090,
      name: "Inco Gentry Testnet",
    }
  );

  const walletPlaylist = new ethers.Wallet(
    "b726794ec951fa89e8d8c145a44888899291b7593a5c0b21d24d66cb32802f09",
    providerPlaylist
  );

  const signerPlaylist = walletPlaylist.connect(providerPlaylist);

  const ERC20_ABI_Playlist = [
    {
      inputs: [
        {
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "addAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "InvalidShortString",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "str",
          type: "string",
        },
      ],
      name: "StringTooLong",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [],
      name: "EIP712DomainChanged",
      type: "event",
    },
    {
      inputs: [],
      name: "setNewRandomNumber",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "encryptedIpfsCid",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "salt1",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "salt2",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "salt3",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "creator",
          type: "address",
        },
      ],
      name: "storeCid",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "encryptedString",
          type: "string",
        },
        {
          internalType: "string",
          name: "playlistName",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "wallet",
          type: "address",
        },
      ],
      name: "storePrivatePlaylist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "newCreator",
          type: "address",
        },
        {
          internalType: "euint32",
          name: "salt1",
          type: "uint256",
        },
        {
          internalType: "euint32",
          name: "salt2",
          type: "uint256",
        },
        {
          internalType: "euint32",
          name: "salt3",
          type: "uint256",
        },
      ],
      name: "updateRandomNumberOrCreator",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        {
          internalType: "bytes1",
          name: "fields",
          type: "bytes1",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "version",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "chainId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "verifyingContract",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "uint256[]",
          name: "extensions",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getCreator",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedCid",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt1",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt2",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt3",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "playlistName",
          type: "string",
        },
      ],
      name: "getEncryptedStringByPlaylistName",
      outputs: [
        {
          internalType: "string",
          name: "value",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getNewRandomNumber",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
      ],
      name: "getPlaylist",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
      ],
      name: "getPlaylistByRandomNumber",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "wallet",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getPlaylistByRandomNumberAndWallet",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
      ],
      name: "getPlaylistCountByRandomNumber",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "wallet",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getPlaylistRandomNumberFromIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getRandomNumberAndCreator",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt1",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt2",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt3",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const TOKEN_CONTRACT_ADDRESS_Playlist =
    "0xd3E06D670A1C0180AB1e3AC36254457039bBfD89";

  const tokenContractPlaylist = new ethers.Contract(
    TOKEN_CONTRACT_ADDRESS_Playlist,
    ERC20_ABI_Playlist,
    signerPlaylist
  );

  // Attempt to get the random number for the playlist
  tokenContractPlaylist
    .getPlaylistRandomNumberFromIndex(rentalAdd, 0)
    .then((resultPlaylist) => {
      const bigNumber = ethers.BigNumber.from(resultPlaylist);
      // Convert BigNumber to number
      const number = bigNumber.toNumber();
      let aesEncrypted;
      let finalRandom;

      if (number > 0) {
        aesEncrypted = encrypt(playArray.toString(), number.toString());
        finalRandom = number;
      } else {
        const randomNumberPlaylist = Math.floor(Math.random() * 10 ** 16)
          .toString()
          .padStart(16, "0");
        // Encrypt message with AES
        aesEncrypted = encrypt(
          playArray.toString(),
          randomNumberPlaylist.toString()
        );
        finalRandom = randomNumberPlaylist;
      }

      // Call the storePrivatePlaylist function
      return tokenContractPlaylist.storePrivatePlaylist(
        aesEncrypted,
        playName,
        finalRandom,
        rentalAdd
      );
    })
    .then((playlistData) => {
      res.status(200).json({
        message: "Playlist RandomNumber Exist",
        playlistData: playlistData,
        sucess: true,
      });
    })
    .catch((error) => {
      console.error("Error processing request:", error);
      res
        .status(500)
        .json({ error: "An error occurred while processing the request" });
    });
});

// get playlist of signin user
app.get("/getPlaylist/:rentAdd", async (req, res) => {
  const { rentAdd } = req.params;
  const providerPlaylist = new ethers.providers.JsonRpcProvider(
    "https://testnet.inco.org",
    {
      chainId: 9090,
      name: "Inco Gentry Testnet",
    }
  );

  const walletPlaylist = new ethers.Wallet(
    "b726794ec951fa89e8d8c145a44888899291b7593a5c0b21d24d66cb32802f09",
    providerPlaylist
  );

  const signerPlaylist = walletPlaylist.connect(providerPlaylist);

  const ERC20_ABI_Playlist = [
    {
      inputs: [
        {
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "addAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "InvalidShortString",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "str",
          type: "string",
        },
      ],
      name: "StringTooLong",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [],
      name: "EIP712DomainChanged",
      type: "event",
    },
    {
      inputs: [],
      name: "setNewRandomNumber",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "encryptedIpfsCid",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "salt1",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "salt2",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "salt3",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "creator",
          type: "address",
        },
      ],
      name: "storeCid",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "encryptedString",
          type: "string",
        },
        {
          internalType: "string",
          name: "playlistName",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "wallet",
          type: "address",
        },
      ],
      name: "storePrivatePlaylist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "newCreator",
          type: "address",
        },
        {
          internalType: "euint32",
          name: "salt1",
          type: "uint256",
        },
        {
          internalType: "euint32",
          name: "salt2",
          type: "uint256",
        },
        {
          internalType: "euint32",
          name: "salt3",
          type: "uint256",
        },
      ],
      name: "updateRandomNumberOrCreator",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        {
          internalType: "bytes1",
          name: "fields",
          type: "bytes1",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "version",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "chainId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "verifyingContract",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "uint256[]",
          name: "extensions",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getCreator",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedCid",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt1",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt2",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt3",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "playlistName",
          type: "string",
        },
      ],
      name: "getEncryptedStringByPlaylistName",
      outputs: [
        {
          internalType: "string",
          name: "value",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getNewRandomNumber",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
      ],
      name: "getPlaylist",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
      ],
      name: "getPlaylistByRandomNumber",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "wallet",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getPlaylistByRandomNumberAndWallet",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
      ],
      name: "getPlaylistCountByRandomNumber",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "wallet",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getPlaylistRandomNumberFromIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getRandomNumberAndCreator",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt1",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt2",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt3",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const TOKEN_CONTRACT_ADDRESS_Playlist =
    "0xd3E06D670A1C0180AB1e3AC36254457039bBfD89";
  const tokenContractPlaylist = new ethers.Contract(
    TOKEN_CONTRACT_ADDRESS_Playlist,
    ERC20_ABI_Playlist,
    signerPlaylist
  );

  // Attempt to get the random number for the playlist
  tokenContractPlaylist
    .getPlaylistRandomNumberFromIndex(rentAdd, 0)
    .then((resultPlaylist) => {
      const salt2 = resultPlaylist;
      const bigNumberSalty = ethers.BigNumber.from(salt2);
      // Convert BigNumber to number
      const numberSalt = bigNumberSalty;
      const saltRandom = tokenContractPlaylist
        .getPlaylist(numberSalt)
        .then((result) => {
          const mainSalt = result;

          res.status(200).json({
            message: "Playlist RandomNumber Exist",
            playlistame: mainSalt,
            Randomsalt: Number(numberSalt),
          });
        });
    })
    .catch((error) => {
      console.error("Error processing request:", error);
      res
        .status(500)
        .json({ error: "An error occurred while processing the request" });
    });
});

// get sound of playlist using playname
app.post("/getSound", (req, res) => {
  const { random, playName } = req.body;

  const providerPlaylist = new ethers.providers.JsonRpcProvider(
    "https://testnet.inco.org",
    {
      chainId: 9090,
      name: "Inco Gentry Testnet",
    }
  );

  const walletPlaylist = new ethers.Wallet(
    "b726794ec951fa89e8d8c145a44888899291b7593a5c0b21d24d66cb32802f09",
    providerPlaylist
  );

  const signerPlaylist = walletPlaylist.connect(providerPlaylist);

  const ERC20_ABI_Playlist = [
    {
      inputs: [
        {
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "addAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "InvalidShortString",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "str",
          type: "string",
        },
      ],
      name: "StringTooLong",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [],
      name: "EIP712DomainChanged",
      type: "event",
    },
    {
      inputs: [],
      name: "setNewRandomNumber",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "encryptedIpfsCid",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "salt1",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "salt2",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "salt3",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "creator",
          type: "address",
        },
      ],
      name: "storeCid",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "encryptedString",
          type: "string",
        },
        {
          internalType: "string",
          name: "playlistName",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "wallet",
          type: "address",
        },
      ],
      name: "storePrivatePlaylist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "newCreator",
          type: "address",
        },
        {
          internalType: "euint32",
          name: "salt1",
          type: "uint256",
        },
        {
          internalType: "euint32",
          name: "salt2",
          type: "uint256",
        },
        {
          internalType: "euint32",
          name: "salt3",
          type: "uint256",
        },
      ],
      name: "updateRandomNumberOrCreator",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        {
          internalType: "bytes1",
          name: "fields",
          type: "bytes1",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "version",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "chainId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "verifyingContract",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "uint256[]",
          name: "extensions",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getCreator",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedCid",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt1",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt2",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getDecryptedSalt3",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "playlistName",
          type: "string",
        },
      ],
      name: "getEncryptedStringByPlaylistName",
      outputs: [
        {
          internalType: "string",
          name: "value",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getNewRandomNumber",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
      ],
      name: "getPlaylist",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
      ],
      name: "getPlaylistByRandomNumber",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "wallet",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getPlaylistByRandomNumberAndWallet",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "randomNumber",
          type: "uint256",
        },
      ],
      name: "getPlaylistCountByRandomNumber",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "wallet",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getPlaylistRandomNumberFromIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getRandomNumberAndCreator",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt1",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt2",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getSalt3",
      outputs: [
        {
          internalType: "euint32",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const TOKEN_CONTRACT_ADDRESS_Playlist =
    "0xd3E06D670A1C0180AB1e3AC36254457039bBfD89";

  const tokenContractPlaylist = new ethers.Contract(
    TOKEN_CONTRACT_ADDRESS_Playlist,
    ERC20_ABI_Playlist,
    signerPlaylist
  );

  tokenContractPlaylist
    .getEncryptedStringByPlaylistName("" + random + "", "" + playName + "")
    .then((encryptresultPlaylist) => {
      const aesDecryptedNew = decrypt(encryptresultPlaylist, "" + random + "");
      res.status(200).json({
        message: "Selected Playlist",
        playlistData: aesDecryptedNew,
      });
    });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  }).on("error", (err) => {
    console.error("Error starting server:", err);
  });
