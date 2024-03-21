const { exec } = require("child_process");

exec("java -jar wf-0.0.1-SNAPSHOT.jar", (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  // console.log(`Output: ${stdout}`);
  // console.error(`Output: ${stderr}`);
});
// const { spawn } = require("child_process");

// const child = spawn("java", ["-jar", "wf-0.0.1-SNAPSHOT.jar"]);

// child.stdout.on("data", (data) => {
//   console.log(`JAR output: ${data}`);
// });

// child.stderr.on("data", (data) => {
//   console.error(`JAR error: ${data}`);
// });

// child.on("close", (code) => {
//   console.log(`JAR process exited with code ${code}`);
// });
