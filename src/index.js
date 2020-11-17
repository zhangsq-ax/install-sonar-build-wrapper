const exec = require("@actions/exec");

(async function() {
    await exec.exec("ls");
    await exec.exec("sudo apt-get update");
    await exec.exec("sudo apt-get install wget -y");
    await exec.exec("wget https://sonarcloud.io/static/cpp/build-wrapper-linux-x86.zip");
    await exec.exec("unzip build-wrapper-linux-x86.zip");
    await exec.exec("mv build-wrapper-linux-x86/* /usr/local/bin/");
    await exec.extc("build-wrapper-linux-x86")
})()