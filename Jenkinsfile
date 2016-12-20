#!groovy

node {
    
	
	milestone 1
	stage ("Prepare environment") {
        	sh "git clean -fdx -e node_modules"
		checkout scm
	}
	    
	milestone 2
	stage ("Checkout and build deps") {
	   lock(resource: 'staging-server', inversePrecedence: true) {
		sleep 30
	   }
	}
	
	milestone 3
	stage ("Test and validate") {
		lock(resource: 'staging-server', inversePrecedence: true) {    
			sleep 30
		}
	}
	
	milestone 4
	stage ("Test and validate") {
		lock(resource: 'staging-server', inversePrecedence: true) {    
			sleep 30
		}
	}
}
