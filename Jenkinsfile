#!groovy

node("linux") {
    
    stage ("Cleanup") {
        deleteDir()
    }  

    stage ("Checkout") {
        checkout scm
    }
    
    docker.image('electronuserland/electron-builder:wine').inside('-ti -v cached-node-modules:/node_modules -v /home/parallels/.electron:/root/.electron') {
        stage("Test") {
            sh '/test.sh'
        }

        stage ("Build the product") {
            sh "cd build && ./node_modules/.bin/gulp electron-builder"
        }
    }
}