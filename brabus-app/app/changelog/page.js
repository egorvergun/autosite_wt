'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
// Не забудьте установить @mui/icons-material, если он еще не установлен:
// npm install @mui/icons-material

const Changelog = () => {
    const [commits, setCommits] = useState([]);
    const [fontSize, setFontSize] = useState(16);
    const [dyslexicFont, setDyslexicFont] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [expandedCommits, setExpandedCommits] = useState({});

    // Объект с описаниями коммитов
    const commitDescriptions = {
        '5fadfc9f9da8b65c13e380ce4266642b24e1773c': 'Описание для первого коммита. Здесь вы можете подробно описать, что изменилось.',
        '1234567890abcdef1234567890abcdef12345678': 'Описание для второго коммита. Дополнительные детали об улучшениях или исправлениях.',
        // Добавьте больше коммитов по аналогии
    };

    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const response = await fetch('/api/commits');
                if (!response.ok) {
                    throw new Error(`HTTP error! статус: ${response.status}`);
                }
                const data = await response.json();
                console.log('Полученные коммиты:', data); // Отладка

                // Добавляем описание к каждому коммиту из commitDescriptions
                const commitsWithDescriptions = data.map(commit => ({
                    ...commit,
                    description: commitDescriptions[commit.sha] || 'Описание отсутствует.',
                }));

                setCommits(commitsWithDescriptions);
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при получении коммитов:', error);
                setErrorMsg('Не удалось загрузить коммиты. Проверьте консоль для подробностей.');
                setLoading(false);
            }
        };
        fetchCommits();
    }, []); // Вызов при монтировании компонента

    const increaseFontSize = () => setFontSize(fontSize + 2);
    const decreaseFontSize = () => setFontSize(fontSize - 2);
    const toggleDyslexicFont = () => setDyslexicFont(!dyslexicFont);

    const handleToggle = (sha) => {
        setExpandedCommits(prev => ({
            ...prev,
            [sha]: !prev[sha],
        }));
    };

    if (loading) return <Typography sx={{ color: '#fff', textAlign: 'center' }}>Loading...</Typography>;
    if (errorMsg) return <Typography sx={{ color: 'red', textAlign: 'center' }}>{errorMsg}</Typography>;

    return (
        <Box
            sx={{
                fontSize: `${fontSize}px`,
                fontFamily: dyslexicFont ? 'OpenDyslexic, monospace' : 'monospace',
                backgroundColor: '#000', // Черный фон
                color: '#fff', // Белый текст
                padding: '20px',
                borderRadius: '8px',
                maxWidth: '800px',
                margin: '40px auto',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            }}
        >
            <Typography variant="h4" sx={{ textAlign: 'left', mb: 4 }}>
                Changelog
            </Typography>
            <Box
                sx={{
                    backgroundColor: '#111', // Более темный фон для списка
                    padding: '15px',
                    borderRadius: '4px',
                    overflowY: 'auto',
                    maxHeight: '60vh',
                }}
            >
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {commits.map((commit) => (
                        <li key={commit.sha} style={{ marginBottom: '20px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="h6" sx={{ fontFamily: 'monospace', wordBreak: 'break-word', flex: 1 }}>
                                    {commit.commit.message}
                                </Typography>
                                <IconButton onClick={() => handleToggle(commit.sha)} sx={{ color: '#fff' }}>
                                    {expandedCommits[commit.sha] ? <ExpandLess /> : <ExpandMore />}
                                </IconButton>
                            </Box>
                            <Typography variant="body2">
                                <strong>Author:</strong> {commit.commit.author.name}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Date:</strong> {new Date(commit.commit.author.date).toLocaleString()}
                            </Typography>
                            {/* Ссылка на коммит на GitHub */}
                            <Typography variant="body2">
                                <a
                                    href={commit.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#00aced', textDecoration: 'underline' }}
                                >
                                    View the commit on GitHub
                                </a>
                            </Typography>
                            {/* Дополнительные детали коммита */}
                            {expandedCommits[commit.sha] && (
                                <Box sx={{ mt: 2, padding: '10px', backgroundColor: '#222', borderRadius: '4px' }}>
                                    <Typography variant="body1" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                                        {commit.description}
                                    </Typography>
                                </Box>
                            )}
                        </li>
                    ))}
                </ul>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', mt: 4 }}>
                <Button
                    variant="contained"
                    onClick={increaseFontSize}
                    sx={{
                        backgroundColor: '#333',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#444',
                        },
                    }}
                >
                    Increase Font Size
                </Button>
                <Button
                    variant="contained"
                    onClick={decreaseFontSize}
                    sx={{
                        backgroundColor: '#333',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#444',
                        },
                    }}
                >
                    Decrease Font Size
                </Button>
                <Button
                    variant="contained"
                    onClick={toggleDyslexicFont}
                    sx={{
                        backgroundColor: '#333',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#444',
                        },
                    }}
                >
                    Toggle Dyslexic Font
                </Button>
            </Box>
        </Box>
    );
};

export default Changelog;