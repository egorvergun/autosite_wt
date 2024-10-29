import React from 'react';
import '../app/globals.css';

const DHeader = () => {
    return (
        <header style={styles.header}>
            <img src="/follow brabus.png" alt="Follow BRABUS" style={styles.logo} />
            <div style={styles.icons}>
                <img src="/face.png" alt="Facebook" style={styles.icon} />
                <img src="/x.png" alt="X" style={styles.icon} />
                <img src="/inst.png" alt="Instagram" style={styles.icon} />
                <img src="/yt.png" alt="YouTube" style={styles.icon} />
                <img src="/tik.png" alt="TikTok" style={styles.icon} />
            </div>
        </header>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f8f9fa',
    },
    logo: {
        width: '80%',
        maxWidth: '200px', 
        height: 'auto', 
        marginBottom: '10px',
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },
    icon: {
        width: '24px', // Set width for uniform size
        height: '24px', // Set height for uniform size
        cursor: 'pointer',
    },
};

export default DHeader;