#!groovy

node("linux") {
    stage ("Checkout") {
        checkout scm
    }

    docker.image('electronuserland/electron-builder:wine').inside('-ti -v ${PWD}:/project -v ~/.electron:/root/.electron') {
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