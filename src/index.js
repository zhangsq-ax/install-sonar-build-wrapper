const exec = require("@actions/exec");

(async function() {
    await exec.exec("ls");
    // await exec.exec("sudo apt-get update");
    // await exec.exec("sudo apt-get install wget -y");
    await exec.exec("wget https://sonarcloud.io/static/cpp/build-wrapper-linux-x86.zip");
    await exec.exec("unzip build-wrapper-linux-x86.zip");
    await exec.exec("ls -lh");
    await exec.exec("ls -lh build-wrapper-linux-x86")
    await exec.exec("sudo mv build-wrapper-linux-x86/build-wrapper-linux-x86-64 /usr/local/bin/");
    await exec.exec("sudo mv build-wrapper-linux-x86/libinterceptor-haswell.so /usr/local/bin/");
    await exec.exec("sudo mv build-wrapper-linux-x86/libinterceptor-i686.so /usr/local/bin/");
    await exec.exec("sudo mv build-wrapper-linux-x86/libinterceptor-x86_64.so /usr/local/bin/");
    await exec.extc("build-wrapper-linux-x86-64")
})()