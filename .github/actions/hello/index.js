const core = require("@actions/core");
const github = require("@actions/github");
try {

  //Enable debugging
  core.debug('Debug message');
  core.warning('Warning message');
  core.error('Error message');
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());
  core.startGroup('Logging Github Object');
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();
  core.exportVariable('HELLO', 'Hello, Mr. Yefi');
} catch (error) {
  core.setFailed(error.message);
}
