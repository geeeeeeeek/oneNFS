module.exports = {
  apps: [
    {
      name: "spread",
      script: "nodemon",
      args: "src/index.js", // Arguments to pass to nodemon
      interpreter: "none", // This tells PM2 to use the system's PATH to find the interpreter
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
