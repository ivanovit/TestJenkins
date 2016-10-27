#!groovy

node {
    stage "Prepare environment"
        checkout scm
		
		setGitHubPullRequestStatus state: 'PENDING', context: "${env.JOB_NAME}", message: "Run #${env.BUILD_NUMBER} started"
        
		stage "Checkout and build deps"
                echo "test"
    
    stage "Cleanup"
        deleteDir()
}