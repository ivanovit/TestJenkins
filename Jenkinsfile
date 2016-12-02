#!groovy

node("linux") {  
    stage ("Checkout") {
        checkout scm
        def hasNodeModules = sh script: "if [ -d build/node_modules ]; then echo 'Yes'; else echo 'No'; fi", returnStdout: true
        echo hasNodeModules
        if (fileExists('node_modules.zip') && hasNodeModules != 'Yes') {
            unzip(archive: true, zipFile: "node_modules.zip", dir: "build")
        }
    }
    
    stage ("Install project dependecies")   {
        sh "npm --version"
        sh "node --version"
        sh "cd build && npm install"
    }

    
        stage ("Cache dependencies")   {
            if (fileExists('node_modules.zip')) {
                sh "rm node_modules.zip"
            }
            zip(archive: true, zipFile: "node_modules.zip", dir: "build", glob: "node_modules/**")
        }
    
}