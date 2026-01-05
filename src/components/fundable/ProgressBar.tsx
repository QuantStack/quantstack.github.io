import React from "react";

export default function ProgressBar({ value = 0, color = '#4caf50' }) {
    return (
        <div style={{ marginBottom: "10px" }}>
            <div style={{
                background: '#eee',
                borderRadius: '16px',
                border: 'solid 0.5px',
                height: '21px',
                width: '190px',
            }}>

                <div style={{
                    width: `${value}%`,
                    background: color,
                    border: 'solid 0.5px',
                    height: '100%',
                    borderRadius: '16px',
                    transition: 'width 0.3s ease-in-out',
                }} />
            </div>
        </div>
    );
}
