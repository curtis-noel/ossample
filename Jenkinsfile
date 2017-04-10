node('master') {
    try {
        stage 'Checkout'
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/curtis-noel/ossample.git']]])
        def gradleHome = tool 'gradle'
        stage 'Build'
        sh "${gradleHome}/bin/gradle clean buildDocker"
    }
    catch(Exception e) {
        throw e;
    }
}
