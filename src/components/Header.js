import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from "../assets/particlesConfig.json";

import '../styles/Header.css';


export function Header() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const particlesOptions = particlesConfig

    return (
        <header> {
            <div className="header">
                <Particles id="Particles" init={particlesInit} loaded={particlesLoaded} options={particlesOptions}/>
                <Link to="/">
                    <div className="header-content">
                        <h1>Data & Knowledge Engineering Lab.</h1>
                    </div>
                </Link>
            </div>
        }
        </header>
    )
}
