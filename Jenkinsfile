#!groovy

node("linux") {  
    stage ("Checkout") {
        checkout scm
    }

    docker.image('beneaththeink/node-xvfb').inside("--user root") {
        sh "pwd"
        
        stage ("Install project dependecies")   {
                sh "npm --version"
                sh "node --version"
                sh "cd build && npm install"
                sh " cd src && npm install"
        }
            
            
            stage ("Run ") {
                sh "pwd"
                    sh "export ELECTRON_ENABLE_LOGGING=true && cd src && node_modules/.bin/xvfb-maybe node_modules/.bin/electron ."
                
            }
    }
}