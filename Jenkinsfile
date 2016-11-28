#!groovy

node {  
    stage ("Checkout") {
        checkout scm
    }

    docker.image('beneaththeink/node-xvfb') {
        stage ("Install project dependecies")   {
            sh "npm --version"
            sh "node --version"
            sh "cd build && npm install"
            sh "cd src && npm install"
        }

        stage ("Run ") {
            sh "cd src && node_modules/.bin/xvfb-maybe node_modules/.bin/electron ."
        }
    }
    
    stage ("Build the product") {
        sh "cd build && ./node_modules/.bin/build -mwl"
    }

    stage ("Archiving") {
        archiveArtifacts 'build/dist/win/**/*'
    }
}