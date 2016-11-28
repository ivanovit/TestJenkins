#!groovy

node {  
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

        stage ("Run ") {
             sh "cd src && node_modules/.bin/electron ."
        }
        
        stage ("Build the product") {
            sh "cd build && ./node_modules/.bin/build -mwl"
        }

        stage ("Archiving") {
            archiveArtifacts 'build/dist/win/**/*'
        }
    }
}