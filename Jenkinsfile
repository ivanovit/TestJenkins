#!groovy

node {
    stage "Checkout" 
        checkout scm
    stage "Preparing environment"
        env.PATH = "~/.npm-global/bin:${env.PATH}"
        sh "npm install --global gulp-cli"
   
    stage "Installing NPM Project Dependecies"   
        sh "cd build && npm install"
        sh "cd src && npm install"

    stage "Running style checks"
        env.PATH = "~/.npm-global/bin:${env.PATH}"
        sh "gulp eslint"
        
    sh "npm install gulp-cli && ./node_modules/.bin/gulp"
        junit 'reports/**/*.xml'
        

    stage "Cleanup"
        deleteDir()
}