// brabus-app/app/changelog/page.js

'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const Changelog = () => {
  const [commits, setCommits] = useState([]);
  const [fontSize, setFontSize] = useState(16);
  const [increasedSpacing, setIncreasedSpacing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [expandedCommits, setExpandedCommits] = useState({});
  const [sliderValue, setSliderValue] = useState(16);
  const [selectedFontSize, setSelectedFontSize] = useState(16);

  // Objekt s popismi commitov
const commitDescriptions = {
    'a31e88ef0c9aad7f600b8ad66dce27eb4d30c269':
        'Prepracovaný dizajn "Sekcia zmeny" a pridané funkcie na správu textu',
    'fbfda9659dee038d42766a7c854305dcfeae92d2':
        'Pridanie fotografií členov tímu',
    'cd13043fabd3642fcd1e1a12ce271dd1658f1cb1':
        'Pridanie nových fontov na hlavnú stránku a "Header"',
    'dfe5d8e4c89bea1511fb100c6cbc4194a28fb816':
        'Pridanie dvoch nových stránok: "Vehicles" a "About us"',
    'dfa68300eb2734bc36a2d7edc7434a9b4c99c9eb':
        'Úprava Git Token a pridanie prepojenia komentárov na stránku',
    '5fadfc9f9da8b65c13e380ce4266642b24e1773c':
        'Testovanie stránky "Sekcia zmeny"',
    '7c684b29f582ab61b37d0f6ead0a6bc27325d69c':
        'Pridanie vehicles cards na hlavnú stránku a pridanie adaptívnosti "Header" pre malé displeje',
    '03b1230133315a56bdbb9a54f58e78f0ff80a7d3':
        'Pridanie základného dizajnu na hlavnú stránku',
    '61b0e3b6a22b39b003a1bd496ef5e8968d6fc7c7':
        'Pridanie footeru a oprava zobrazenia na rôznych displejoch',
    '7915768d8e98d5981836ee495a6e791d179c3d57':
        'Pridanie fade na hlavnú stránku',
    // Pridajte viac commitov podľa potreby
};

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('/api/commits');
        if (!response.ok) {
          throw new Error(`HTTP chyba! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Načítané commity:', data);

        // Pridávame popis ku každému commitu z commitDescriptions
        const commitsWithDescriptions = data.map((commit) => ({
          ...commit,
          description: commitDescriptions[commit.sha] || 'Popis chýba.',
        }));

        setCommits(commitsWithDescriptions);
        setLoading(false);
      } catch (error) {
        console.error('Chyba pri načítaní commitov:', error);
        setErrorMsg('Nepodarilo sa načítať commity. Skontrolujte konzolu pre podrobnosti.');
        setLoading(false);
      }
    };
    fetchCommits();
  }, []);

  const increaseFontSize = () => setFontSize((prev) => prev + 2);
  const decreaseFontSize = () => setFontSize((prev) => prev - 2);
  const toggleSpacing = () => setIncreasedSpacing((prev) => !prev);
  const handleToggle = (sha) => {
    setExpandedCommits((prev) => ({
      ...prev,
      [sha]: !prev[sha],
    }));
  };
  const handleSliderChange = (event, newValue) => {
    setFontSize(newValue);
    setSliderValue(newValue);
  };
  const handleSelectChange = (event) => {
    setFontSize(event.target.value);
    setSelectedFontSize(event.target.value);
  };

  const predefinedSizes = [14, 16, 18, 20, 22, 24, 26, 28, 30];

  const textStyles = {
    fontSize: `${fontSize}px`,
    lineHeight: increasedSpacing ? 1.8 : 1.5,
    letterSpacing: increasedSpacing ? '0.05em' : 'normal',
  };

  if (loading)
    return (
      <Typography sx={{ color: '#fff', textAlign: 'center', ...textStyles }}>
        Načítavanie...
      </Typography>
    );
  if (errorMsg)
    return (
      <Typography sx={{ color: 'red', textAlign: 'center', ...textStyles }}>
        {errorMsg}
      </Typography>
    );

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '1200px',
        margin: '40px auto',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        color: '#fff',
      }}
    >
      {/* Blok s commitmi */}
      <Box
        sx={{
          backgroundColor: '#111',
          padding: '15px',
          borderRadius: '4px',
          overflowY: 'auto',
          maxHeight: '80vh',
          flex: 3,
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, ...textStyles }}>
          Sekcia zmeny
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {commits.map((commit) => (
            <li key={commit.sha} style={{ marginBottom: '20px' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'monospace',
                    wordBreak: 'break-word',
                    flex: 1,
                    ...textStyles,
                  }}
                >
                  {commit.commit.message}
                </Typography>
                <IconButton onClick={() => handleToggle(commit.sha)} sx={{ color: '#fff' }}>
                  {expandedCommits[commit.sha] ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
              <Typography variant="body2" sx={{ ...textStyles }}>
                <strong>Autor:</strong> {commit.commit.author.name}
              </Typography>
              <Typography variant="body2" sx={{ ...textStyles }}>
                <strong>Dátum:</strong>{' '}
                {new Date(commit.commit.author.date).toLocaleString()}
              </Typography>
              <Typography variant="body2" sx={{ color: '#00aced', ...textStyles }}>
                <a
                  href={commit.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline', color: '#00aced' }}
                >
                  Zobraziť commit na GitHub
                </a>
              </Typography>
              {expandedCommits[commit.sha] && (
                <Box
                  sx={{
                    mt: 2,
                    padding: '10px',
                    backgroundColor: '#222',
                    borderRadius: '4px',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'monospace',
                      whiteSpace: 'pre-wrap',
                      ...textStyles,
                    }}
                  >
                    {commit.description}
                  </Typography>
                </Box>
              )}
            </li>
          ))}
        </ul>
      </Box>

      {/* Blok s ovládacími prvkami */}
      <Box
        sx={{
          backgroundColor: '#111',
          padding: '15px',
          borderRadius: '4px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, ...textStyles }}>
          Správa zobrazenia textu
        </Typography>
        <Button
          variant="contained"
          onClick={increaseFontSize}
          sx={{
            backgroundColor: '#333',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#444',
            },
            fontSize: `${fontSize}px`,
            width: '100%',
          }}
        >
          Zväčšiť veľkosť písma
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
            fontSize: `${fontSize}px`,
            width: '100%',
          }}
        >
          Zmenšiť veľkosť písma
        </Button>
        <Button
          variant="contained"
          onClick={toggleSpacing}
          sx={{
            backgroundColor: '#333',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#444',
            },
            fontSize: `${fontSize}px`,
            width: '100%',
          }}
        >
          {increasedSpacing ? 'Normálne rozostupy' : 'Zväčšiť rozostupy'}
        </Button>
        {/* Slider pre úpravu veľkosti písma */}
        <Box sx={{ width: '100%', mt: 2 }}>
          <Typography gutterBottom sx={{ textAlign: 'center', ...textStyles }}>
            Regulácia veľkosti písma
          </Typography>
          <Slider
            value={sliderValue}
            min={12}
            max={36}
            step={1}
            onChange={handleSliderChange}
            aria-labelledby="font-size-slider"
            sx={{ color: '#fff' }}
          />
        </Box>
        {/* Rozbaľovacia ponuka pre prednastavené veľkosti písma */}
        <FormControl variant="outlined" sx={{ minWidth: 120, width: '100%' }}>
          <InputLabel sx={{ color: '#fff', ...textStyles }}>Veľkosť písma</InputLabel>
          <Select
            value={selectedFontSize}
            onChange={handleSelectChange}
            label="Veľkosť písma"
            sx={{
              color: '#fff',
              ...textStyles,
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff',
              },
            }}
          >
            {predefinedSizes.map((size) => (
              <MenuItem key={size} value={size}>
                {size}px
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ mt: 2 }}>
      <Typography variant="body2" sx={{ ...textStyles }}>
        <strong>Spôsoby zmeny veľkosti písma:</strong>
      </Typography>
      <Typography variant="body2" sx={{ ...textStyles }}>
        - <strong>Kliknutie na tlačidlo:</strong> Umožňuje postupne zväčšovať alebo zmenšovať veľkosť textu o 2 pixely pri každom kliknutí.
      </Typography>
      <Typography variant="body2" sx={{ ...textStyles }}>
        - <strong>Použitie posuvníka:</strong> Posunutím posuvníka môžete plynulo nastaviť veľkosť písma od 12 do 36 pixelov podľa vašich preferencií.
      </Typography>
      <Typography variant="body2" sx={{ ...textStyles }}>
        - <strong>Výber z prednastavených:</strong> V rozbaľovacej ponuke si môžete vybrať jednu z predvolených veľkostí písma (napr. 14px, 16px, 18px, atď.) pre rýchle nastavenie.
      </Typography>
    </Box>
      </Box>
    </Box>
  );
};

export default Changelog;