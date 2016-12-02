#!groovy

node("linux") {  
    stage ("Checkout") {
        checkout scm
    }
    
    stage ("Install project dependecies")   {
        sh "npm --version"
        sh "node --version"
        sh "cd build && npm install"
        sh " cd src && npm install"
    }

    stage ("Build and test") {
         parallel "Tests" : {
                docker.image('beneaththeink/node-xvfb').inside("--user root") {
                    sh "pwd"
                    sh "export ELECTRON_ENABLE_LOGGING=true && cd src && node_modules/.bin/xvfb-maybe node_modules/.bin/electron ."
                 }
            },
            "Build": {
                node ('windows') {
                    checkout scm
                    bat "cd build && npm install"
                    bat "cd build && node_modules\\.bin\\build -w"
                }
            }
    }
}