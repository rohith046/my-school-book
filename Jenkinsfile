pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Pull code from Git repository
                git 'https://github.com/rohith046/my-school-book'
            }
        }
        stage('Copy Files') {
            steps {
                script {
                    // Define the source and destination directories
                    def sourceDir = "/home/ubuntu"
                    def destinationDir = "/var/www/html"
                    def nginxBackendDir = "/etc/nginx/backend"
                    def staticDir = "static"
                    def warFileDir = "war_file"
                    def warFileName = "wf-0.0.1-SNAPSHOT.jar"
                    def command = "java -jar $warFileName"

                    // Function to copy files
                    def copyFiles = { from, to ->
                        def srcDir = new File(from)
                        def destDir = new File(to)
                        destDir.mkdirs()
                        srcDir.eachFile { file ->
                            def destFile = new File(destDir, file.name)
                            destFile << file.text
                        }
                    }

                    // Copy static files from source directory to destination directory
                    copyFiles(sourceDir + "/" + staticDir, destinationDir)

                    // Create backend directory in nginx
                    def backendDir = new File(nginxBackendDir, "backend")
                    backendDir.mkdirs()

                    // Copy the war file to backend directory
                    copyFiles(sourceDir + "/" + warFileDir + "/" + warFileName, backendDir.toString())

                    // Enter the backend directory
                    def backendFile = new File(backendDir, warFileName)
                    if (backendFile.exists()) {
                        // Run the application
                        def proc = "cd $backendDir && $command".execute()
                        proc.waitFor()
                        println "Application execution completed."
                    } else {
                        println "War file not found in backend directory."
                    }
                }
            }
        }
    }
}
