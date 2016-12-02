#!groovy

node("linux") {  
    stage ("Checkout") {
        checkout scm
    }
    
    stage ("Install project dependecies")   {
        sh "npm --version"
        sh "node --version"
        sh "cd build && npm install"
    }

    stage ("Cache dependencies")   {
        sh "rm node_modules.zip"
        zip(archive: true, zipFile: "node_modules.zip", dir: "build", glob: "node_modules/**")
    }
}