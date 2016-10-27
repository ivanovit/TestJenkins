#!groovy

node {
    stage "Prepare environment"
        checkout scm

        docker.image('node:5.11.1').inside { 
            stage "Checkout and build deps"
                sh "npm install"

            stage "Validate types"
                sh "./node_modules/.bin/flow"

            stage "Test and validate"
                sh "npm install gulp-cli && ./node_modules/.bin/gulp"
                junit 'reports/**/*.xml'
        }

    stage "Cleanup"
        deleteDir()
}