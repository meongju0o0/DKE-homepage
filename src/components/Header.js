import React, { useCallback } from 'react';
import '../styles/Header.css';

import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from "../assets/particlesConfig.json";


export function Header() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const particlesOptions = particlesConfig
ㅁ
    return (
        <header> {
            <div className="header">
                <Particles id="Particles" init={particlesInit} loaded={particlesLoaded} options={particlesOptions}/>
                <a href="/">
                    <div className="header-content">
                        <h1>Data & Knowledge Engineering Lab.</h1>
                    </div>
                </a>
            </div>
        }
        </header>
    )
}
