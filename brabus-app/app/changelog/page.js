'use client';

// components/Changelog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Changelog = () => {
    const [commits, setCommits] = useState([]);
    const [fontSize, setFontSize] = useState(16);
    const [dyslexicFont, setDyslexicFont] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const response = await axios.get('https://api.github.com/repos/egorvergun/autosite_wt/commits?sha=main', {
                    headers: {
                        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
                    }
                });
                console.log('Fetched commits:', response.data); // Отладка
                setCommits(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching commits:', error);
                setErrorMsg('Не удалось загрузить коммиты. Проверьте консоль для подробностей.');
                setLoading(false);
            }
        };
        fetchCommits();
    }, []);

    const increaseFontSize = () => setFontSize(fontSize + 2);
    const decreaseFontSize = () => setFontSize(fontSize - 2);
    const toggleDyslexicFont = () => setDyslexicFont(!dyslexicFont);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (errorMsg) {
        return <div>{errorMsg}</div>;
    }

    return (
        <div className={`changelog-container ${dyslexicFont ? 'dyslexic-font' : ''}`} style={{ fontSize: `${fontSize}px` }}>
            <div className="controls">
                <button onClick={increaseFontSize}>A+</button>
                <button onClick={decreaseFontSize}>A-</button>
                <button onClick={toggleDyslexicFont}>Dyslexic Font</button>
            </div>
            <div className="commits">
                {commits.map(commit => (
                    <div key={commit.sha} className="commit">
                        <h3>{commit.commit.message}</h3>
                        <p>Автор: {commit.commit.author.name}</p>
                        <p>Дата: {new Date(commit.commit.author.date).toLocaleString()}</p>
                        <a href={commit.html_url} target="_blank" rel="noopener noreferrer">Просмотреть на GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Changelog;