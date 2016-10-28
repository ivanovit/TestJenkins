#!groovy

node {
    stage "Checkout" 
        checkout scm
    stage "Preparing environment"
        sh "npm install gulp -g"
   
    stage "Installing NPM Project Dependecies"   
        sh "cd build && npm install"
        sh "cd src && npm install"

    stage "Running style checks"
        sh "gulp eslint"
        
    sh "npm install gulp-cli && ./node_modules/.bin/gulp"
        junit 'reports/**/*.xml'
        

    stage "Cleanup"
        deleteDir()
}