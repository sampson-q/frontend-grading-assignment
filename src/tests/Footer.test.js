// Footer.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
    render(<Footer />);

    // Test Connect with Us section
    expect(screen.getByText('Connect with Us')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();

    // Test Contact Information section
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('Email: UGCS HELP DESK at servicedesk@ug.edu.gh')).toBeInTheDocument();
    expect(screen.getByText('Phone: IP ext 3000.')).toBeInTheDocument();
});