#!groovy

node {
    stage "Checkout" 
        checkout scm

    stage "Installing NPM Project Dependecies"   
        sh "cd build && npm install"
        sh "cd src && npm install"

    stage "Running style checks"
        sh "cd build && npm install gulp-cli && ./node_modules/.bin/gulp eslint"
        step([$class: 'CheckStylePublisher', pattern: 'build/reports/**/*.xml', unstableTotalAll: '0', usePreviousBuildAsReference: true])
    
    stage "Cleanup"
        deleteDir()
}