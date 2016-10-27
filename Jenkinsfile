#!groovy

node {
    stage "Prepare environment"
        checkout scm

        docker.image('node').inside { 
            stage "Install Dependencies"
                sh "cd build && npm install"
				
			stage "Validate"
                sh "./build/node_modules/.bin/gulp:eslint"
			
			
            stage "Build Package with Electron Builder"
                sh "./build/node_modules/.bin/build -m"
				
			

            stage "Validate"
                sh "npm install gulp-cli && ./node_modules/.bin/gulp"
                junit 'reports/**/*.xml'
        }

    stage "Cleanup"
        deleteDir()
}