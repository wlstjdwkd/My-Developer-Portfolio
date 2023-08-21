pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install dependencies') {
            steps {
                // package-lock.json을 기반으로 의존성 설치
                //npm install 보다 안정적
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // 배포 스크립트 또는 도구를 여기에 사용합니다.
                // 예: Docker 이미지 빌드 및 푸시, kubectl을 사용한 Kubernetes에 배포 등
                echo 'Deploy step is currently empty.'
            }
        }
    }
}