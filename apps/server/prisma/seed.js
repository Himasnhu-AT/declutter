const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const data = [
    {
        "id": "1",
        "project_name": "aris",
        "git_url": "https://github.com/himasnhu-at/aris",
        "local_url": "/Users/himanshu/codes/projects/aris",
        "status": "ACTIVE",
        "progress": 0,
        "tasks": [
            {
                "id": "1",
                "title": "Make api for Gemini",
                "description": "Currently ollama api is allowed. Adding api for Gemini is be highly useful",
                "completion_time": "1 hour",
                "status": "ACTIVE"
            },
            {
                "id": "2",
                "title": "Add support for ChatGPT",
                "description": "Currently ollama api is allowed. Adding api for ChatGPT will help improve usability",
                "completion_time": "1.5 hours",
                "status": "ACTIVE"
            }
        ]
    },
    {
        "id": "2",
        "project_name": "FastSearch",
        "git_url": "https://github.com/himasnhu-at/fastsearch",
        "local_url": "/Users/himanshu/codes/projects/fastsearch",
        "status": "ACTIVE",
        "progress": 0,
        "tasks": [
            {
                "id": "3",
                "title": "add support for multi-threading",
                "description": "Currently single thread is used to run the app, add support for multi-threading will improve speed",
                "completion_time": "3 hours",
                "status": "ACTIVE"
            },
            {
                "id": "4",
                "title": "make binding for js",
                "description": "There are no bindings for JavaScript or other languages. Making bindings will help to use the code in more diverse ways",
                "completion_time": "8 hours",
                "status": "ACTIVE"
            }
        ]
    }
];

async function main() {
    for (let project of data) {
        const createdProject = await prisma.project.create({
            data: {
                id: project.id,
                project_name: project.project_name,
                git_url: project.git_url,
                local_url: project.local_url,
                status: project.status,
            },
        });

        for (let task of project.tasks) {
            await prisma.task.create({
                data: {
                    id: task.id,
                    title: task.title,
                    description: task.description,
                    completion_time: task.completion_time,
                    status: task.status,
                    projectId: createdProject.id,
                },
            });
        }
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
