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

    docker.image('beneaththeink/node-xvfb').inside() {


        stage ("Run ") {
             sh "cd src && xvfb-maybe node_modules/.bin/electron ."
        }
        
        stage ("Build the product") {
            sh "cd build && ./node_modules/.bin/build -mwl"
        }

        stage ("Archiving") {
            archiveArtifacts 'build/dist/win/**/*'
        }
    }
}