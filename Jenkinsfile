#!groovy

node("linux") {
    stage ("Checkout") {
        checkout scm
    }

    docker.image('electronuserland/electron-builder:wine').inside('-ti -v cached-node-modules:/node_modules -v /home/parallels/.electron:/root/.electron') {
        stage ("Install project dependecies")   {
            sh "cd build && npm install"
            sh "cd src && npm install"
        }

        stage ("Build the product") {
            sh "cd build && ./node_modules/.bin/gulp electron-builder"
        }
    }

    stage ("Cleanup") {
        deleteDir()
    }   
}