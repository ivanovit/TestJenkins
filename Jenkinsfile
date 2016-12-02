#!groovy

node("linux") {  
    stage ("Checkout") {
        checkout scm
    }
    
    stage ("Install project dependecies")   {
        sh "npm --version"
        sh "node --version"
        sh "cd build && npm install"
        sh " cd src && npm install"
    }

    stage ("Cache dependencies")   {
        zip(zipFile: "node_modules.zip", dir: "build", "build/node_modules")
    }
}