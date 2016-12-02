#!groovy

node("linux") {  
    stage ("Checkout") {
        checkout scm

            unzip(archive: true, zipFile: "node_modules.zip", dir: "build")
        
    }
    
    stage ("Install project dependecies")   {
        sh "npm --version"
        sh "node --version"
        sh "cd build && npm install"
    }

    
        stage ("Cache dependencies")   {
            sh "rm node_modules.zip"
            zip(archive: true, zipFile: "node_modules.zip", dir: "build", glob: "node_modules/**")
            sh "rm -rf build/node_modules"
             sh "rm node_modules.zip"
        }
    
}