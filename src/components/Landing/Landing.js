import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: theme.type === 'dark' 
                ? '0 8px 32px rgba(255, 255, 255, 0.1)' 
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            background: theme.type === 'dark' 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(255, 255, 255, 0.25)',
            '&:hover': {
                backgroundColor: theme.primary,
                color: theme.secondary,
                border: `3px solid ${theme.primary}`,
                transform: 'translateY(-3px)',
                boxShadow: theme.type === 'dark' 
                    ? '0 12px 40px rgba(255, 255, 255, 0.15)' 
                    : '0 12px 40px rgba(0, 0, 0, 0.15)',
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <Slide left>
                    <div
                        className='landing--container-left'
                        style={{ 
                            backgroundColor: theme.primary,
                            boxShadow: theme.type === 'dark' 
                                ? '0 20px 40px rgba(255, 255, 255, 0.1)' 
                                : '0 20px 40px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <div className='lcl--content'>
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaLinkedin
                                        className='landing--social'
                                        style={{ color: theme.secondary }}
                                        aria-label='LinkedIn'
                                    />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaGithub
                                        className='landing--social'
                                        style={{ color: theme.secondary }}
                                        aria-label='GitHub'
                                    />
                                </a>
                            )}
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaTwitter
                                        className='landing--social'
                                        style={{ color: theme.secondary }}
                                        aria-label='Twitter'
                                    />
                                </a>
                            )}
                            {socialsData.youtube && (
                                <a
                                    href={socialsData.youtube}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaYoutube
                                        className='landing--social'
                                        style={{ color: theme.secondary }}
                                        aria-label='YouTube'
                                    />
                                </a>
                            )}
                            {socialsData.blogger && (
                                <a
                                    href={socialsData.blogger}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaBlogger
                                        className='landing--social'
                                        style={{ color: theme.secondary }}
                                        aria-label='Blogger'
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </Slide>
                <Fade>
                    <img
                        src={headerData.image}
                        alt='Fasih ur Rehman - Product Development Manager & Islamic Fintech Expert'
                        className='landing--img landing--img-enhanced'
                        style={{
                            opacity: `${drawerOpen ? '0' : '1'}`,
                            borderColor: theme.secondary,
                            filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    />
                </Fade>
                <Slide right>
                    <div
                        className='landing--container-right'
                        style={{ 
                            backgroundColor: theme.secondary,
                            boxShadow: theme.type === 'dark' 
                                ? '0 20px 40px rgba(0, 0, 0, 0.5)' 
                                : '0 20px 40px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <div
                            className='lcr--content'
                            style={{ color: theme.tertiary }}
                        >
                            <Fade up delay={200}>
                                <h6 style={{ 
                                    background: `linear-gradient(45deg, ${theme.primary}, ${theme.primary}80)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontWeight: '600',
                                    marginBottom: '0.5rem',
                                    fontSize: '1.2rem'
                                }}>
                                    {headerData.title}
                                </h6>
                            </Fade>
                            <Fade up delay={400}>
                                <h1 style={{ 
                                    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                                    fontWeight: '700',
                                    lineHeight: '1.1',
                                    marginBottom: '1rem',
                                    textShadow: theme.type === 'dark' 
                                        ? '0 2px 4px rgba(255, 255, 255, 0.1)' 
                                        : '0 2px 4px rgba(0, 0, 0, 0.1)'
                                }}>
                                    {headerData.name}
                                </h1>
                            </Fade>
                            <Fade up delay={600}>
                                <p style={{ 
                                    fontSize: '1.1rem',
                                    lineHeight: '1.6',
                                    marginBottom: '2rem',
                                    color: theme.tertiary80
                                }}>
                                    {headerData.desciption}
                                </p>
                            </Fade>

                            <Fade up delay={800}>
                                <div className='lcr-buttonContainer'>
                                    {headerData.resumePdf && (
                                        <a
                                            href={headerData.resumePdf}
                                            download='resume'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <Button className={classes.resumeBtn}>
                                                Download CV
                                            </Button>
                                        </a>
                                    )}
                                    <NavLink
                                        to='/#contacts'
                                        smooth={true}
                                        spy='true'
                                        duration={2000}
                                    >
                                        <Button className={classes.contactBtn}>
                                            Contact
                                        </Button>
                                    </NavLink>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
}

export default Landing;