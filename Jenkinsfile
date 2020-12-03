pipeline {
  agent any
  stages {
    stage('Monorepo app1 analysis') {
      steps {
          withSonarQubeEnv('SonarCloud') {
            script {
              def scannerHome = tool 'SonarScanner';
              sh "${scannerHome}/bin/sonar-scanner -Dproject.settings=sonar-project.app1.properties"
            }
          }
      }
    }
    stage("Monorepo app1 QG") {
      steps {
          timeout(time: 5, unit: 'MINUTES') {
            script {
              def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
              if (qg.status != 'OK') {
                echo "Quality gate failed: ${qg.status}, proceeding anyway"
              }
            }
          }
      }
    }
    stage('Monorepo app2 analysis') {
      steps {
          withSonarQubeEnv('SonarCloud') {
            script {
              def scannerHome = tool 'SonarScanner';
              sh "${scannerHome}/bin/sonar-scanner -Dproject.settings=sonar-project.app2.properties"
            }
          }
      }
    }
    stage("Monorepo app2 QG") {
      steps {
          timeout(time: 5, unit: 'MINUTES') {
            script {
              def qg = waitForQualityGate()
              if (qg.status != 'OK') {
                echo "Quality gate failed: ${qg.status}, proceeding anyway"
              }
            }
          }
      }
    }
  }
}