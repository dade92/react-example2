pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'CI=false npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Docker image build') {
            steps {
                sh 'docker build -t react-example2 .'
            }
        }
        stage('Publish docker image') {
            steps {
                sh 'docker image tag react-example2 davide92/react-example2:latest'
                sh 'docker push davide92/react-example2:latest'
            }
        }
    }
}