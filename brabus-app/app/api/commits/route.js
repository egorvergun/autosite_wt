import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const token = process.env.GITHUB_TOKEN;
        console.log('GITHUB_TOKEN:', token);

        if (!token) {
            console.error('GITHUB_TOKEN не установлен в переменных окружения.');
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }

        const response = await axios.get('https://api.github.com/repos/egorvergun/autosite_wt/commits?sha=main', {
            headers: {
                Authorization: `token ${token}`,
                'User-Agent': 'Next.js',
            },
        });

        console.log('GitHub API Response Status:', response.status);
        console.log('GitHub API Response Data:', response.data);

        // Список конкретных сообщений коммитов для отображения
        const targetCommitMessages = [
            'Change Carosel on main page',
            'Delete unusiing images',
            'Add buttons for carosule',
            'pridane auta',
            'Add fade on main page',
            'do dHeader and fix him',
            'Update main page',
            'Add block with vehicles cards, change header for small displays',
            'test change log',
            'try fix change log token',
            'Page23',

        ];

        const commits = response.data.filter(commit =>
            targetCommitMessages.includes(commit.commit.message)
        ).slice(0, 10); // Ограничение до 10 коммитов

        console.log('Filtered Commits:', commits);

        return NextResponse.json(commits);
    } catch (error) {
        console.error('Ошибка при получении коммитов:', error.response ? error.response.data : error.message);
        return NextResponse.json({ error: 'Не удалось получить коммиты' }, { status: 500 });
    }
}