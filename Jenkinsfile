#!groovy

node {
    stage "Prepare environment"
        checkout scm
            stage "Checkout and build deps"
                sh "echo install"
        
    stage "Cleanup"
        deleteDir()
}
