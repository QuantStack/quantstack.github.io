import React from "react";

export default function ProgressBar({ value = 0, color = '#4caf50' }) {
    return (

        <div style={{
            background: '#eee',
            borderRadius: '4px',
            border: 'solid 0.5px',
            height: '10px',
            width: '100px',
            margin: '10px 0'
        }}>

            <div style={{
                width: `${value}%`,
                background: color,
                border: 'solid 0.5px',
                height: '100%',
                borderRadius: '4px',
                transition: 'width 0.3s ease-in-out',
            }} />
        </div>
    );
}
