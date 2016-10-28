#!groovy

node {
    stage "Checkout"
        checkout scm
		
		docker.image('node').inside { 
			stage "NPM install"
				sh "npm config set registry http://registry.npmjs.org/"
				sh "cd build && npm install"
		}

       docker.image('electronuserland/electron-builder:wine').inside { 
			
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