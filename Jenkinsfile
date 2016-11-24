#!groovy

node("mac") {
    
    stage ("Cleanup") {
        deleteDir()
    }  

    stage ("Checkout") {
        checkout scm
    }

    docker.image('electronuserland/electron-builder:wine').inside('-ti -u root -v cached-node-modules:/node_modules -v /Users/iiivanov/.electron:/root/.electron') {
        stage ("Install project dependecies")   {
            sh "npm --version"
            sh "node --version"
            sh "cd build && npm install"
            sh "cd src && npm install"
        }

        stage ("Build the product") {
            sh "./buid/node_modules/.bin/build src -wl"
        }
    }
}