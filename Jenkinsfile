pipeline {
    agent any
 environment {
        QUAY_IO_CREDENTIALS = credentials('quay-io-credentials')
        REGISTRY = 'quay.io/med_chiheb'
      
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from GitHub
              checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'github-credentials', url: 'https://github.com/chiheb-devops/pfe.git']])       
            }}

                   stage('build') {
            steps {
                //sh 'podman build -t ${REGISTRY}/mydb:v1.0 ~/pfe/volumes'
                sh ' podman build -t ${REGISTRY}/front:v10 ~/pfe/frontEnd/'
                sh ' podman build -t ${REGISTRY}/auth:v10 ~/pfe/Backend-services/service-auth/ '
          
               
            }
        }
        stage('Push Image to Quay.io') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'quay-io-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        sh "podman login -u $USERNAME -p $PASSWORD quay.io"
                        
                        sh '  podman push ${REGISTRY}/pfe-app:v10'
                        sh '  podman push ${REGISTRY}/auth:v10'
                      
                    }
                }
            }
        }
        stage('deploy to Kubernetes with kubectl') {
            steps {
                 sh 'kubectl apply -f  ~/pfe/deployments/"*.yaml" '
            }
        }
    
 
}
}

