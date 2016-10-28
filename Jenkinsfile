#!groovy

node {
    stage ("Checkout") {
        checkout scm
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