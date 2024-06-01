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
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'github-credentials', url: 'https://github.com/chiheb-devops/pfe.git']])
            }
        }

                   stage('build') {
            steps {
                sh 'podman build -t ${REGISTRY}/DB:latest ~/pfe/volumes'
                sh 'podman build -t ${REGISTRY}/front:latest ~/pfe/frontEnd'
                sh 'podman build -t ${REGISTRY}/auth:latest ~/pfe/Backend-services/service-auth '
                sh 'podman build -t ${REGISTRY}/user:latest ~/pfe/Backend-services/admin/service-utilisateurs'
               
            }
        }
        stage('Push Image to Quay.io') {
            steps {
                script {
                    def username = 'med_chiheb' 
                    def password = credentialsId('quay-io-credentials-id', 'password') 
                    withCredentials([usernamePassword(credentialsId: 'quay-io-credentials-id', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        sh "podman login -u $USERNAME -p $PASSWORD quay.io"
                        sh 'podman push ${REGISTRY}/DB:latest'
                        sh 'podman push ${REGISTRY}/front:latest'
                        sh 'podman push ${REGISTRY}/auth:latest'
                        sh 'podman push ${REGISTRY}/user:lates'
                    }
                }
            }
        }
        stage('Redeploy to Kubernetes with kubectl') {
            steps {
                sh 'kubectl apply -f ~/pfe/deploy.yaml'
            }
        }
    
    triggers {
        // Trigger the pipeline whenever there's a commit to GitHub
        githubPush()
    }
}
}
