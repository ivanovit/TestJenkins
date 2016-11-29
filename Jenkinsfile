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

    docker.image('aheuermann/electron').inside() {
        sh "pwd"

        wrap([$class: 'Xvfb', installationName: "System", displayName: 99,  debug: true, additionalOptions: "+extension RANDR -fbdir './test'"  ]) {
            stage ("Run ") {
                sh "pwd"
                sh "echo $DISPLAY"
                timeout(time: 20, unit: 'SECONDS') {
                    sh "export ELECTRON_ENABLE_LOGGING=true && cd src && node_modules/.bin/xvfb-maybe node_modules/.bin/electron ."
                }
            }
        }
        
        stage ("Build the product") {
            sh "cd build && ./node_modules/.bin/build -mwl"
        }

        stage ("Archiving") {
            archiveArtifacts 'build/dist/win/**/*'
        }
    }
}