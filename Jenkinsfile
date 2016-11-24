#!groovy

node("linux") {
    stage ("Checkout") {
        checkout scm
    }

    docker.image('electron-builder:wine').inside {
        stage "Test docker" {
            sh "Run in Docker"
        }
    }
        
    stage ("Install project dependecies")   {
        sh "cd build && npm install"
        sh "cd src && npm install"
    }

    stage ("Run style checks") {
        sh "cd build && ./node_modules/.bin/gulp eslint || exit 0"
        step([$class: 'CheckStylePublisher', pattern: 'build/reports/**/*.xml', unstableTotalAll: '0', usePreviousBuildAsReference: true])
    }

    stage ("Cleanup") {
        deleteDir()
    }   
}