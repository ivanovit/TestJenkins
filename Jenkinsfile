#!groovy

node {
	
	stage "Prepare environment"
        checkout scm
            stage "Checkout and build deps"
                ansiColor('xterm') {
                sh "echo -e \033[31mRed\033[0m"
                publishHTML (target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'tests',
                    reportFiles: 'htmlReport.html',
                    reportName: "Unit tests"
                ])
            }
        
    stage "Cleanup"
        deleteDir()
}
