pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Docker image build') {
            steps {
                sh 'docker build -t react-example2 .'
            }
        }
        stage('Push image') {
            steps {
                sh 'docker image tag react-example2 davide92/react-example2:latest'
                sh 'docker push davide92/react-example2:latest'
            }
        }
    }
}