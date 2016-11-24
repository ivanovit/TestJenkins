#!groovy

node("mac") {
    
    stage ("Cleanup") {
        deleteDir()
    }  

    stage ("Checkout") {
        checkout scm
    }

    docker.image('electronuserland/electron-builder:wine').inside('-ti -v cached-node-modules:/node_modules -v /Users/iiivanov/.electron:/root/.electron') {
        stage ("Install project dependecies")   {
            sh "export NPM_CONFIG_PREFIX=~/.npm-global"
            sh "npm --version"
            sh "cd build && npm install"
            sh "cd src && npm install"
        }

        stage ("Build the product") {
            sh "cd build && ./node_modules/.bin/gulp electron-builder"
        }
    }
}