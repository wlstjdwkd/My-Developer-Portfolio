pipeline {
    agent any

    // tools {
    //     nodejs 'my-nodejs'
    // }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install dependencies') {
            steps {
                // script{
                //     def npm = tool name : 'my-nodejs', type: 'NodeJSInstallation'
                //     echo 'npm install...'
                //     env.PATH = "${npm}/bin:${env.PATH}"  // Node.js와 npm의 경로를 환경 변수에 추가합니다.
                // }
                sh 'npm install'
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