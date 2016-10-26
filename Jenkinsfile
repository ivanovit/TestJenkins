#!groovy

node {
    stage ("Test new PR2") {
		sh 'echo ${env.BRANCH_NAME}'
	}

    stage "Cleanup"
        deleteDir()
}
