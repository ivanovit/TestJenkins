#!groovy

node("linux") {
    stage ("Checkout") {
        checkout scm
    }
    
    stage ("Install project dependecies")   {
        sh "npm --version"
        sh "cd build && npm install --verbose"
        sh "cd src && npm install"
    }

    docker.image('electronuserland/electron-builder:wine').inside('-ti -v cached-node-modules:/node_modules -v /home/parallels/.electron:/root/.electron') {
        stage ("Build the product") {
            sh "cd build && ./node_modules/.bin/gulp electron-builder"
        }
    }

    stage ("Cleanup") {
        deleteDir()
    }   
}