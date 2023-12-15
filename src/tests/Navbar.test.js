// Navbar.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

// Mock data
const mockUsername = 'James Caster';

describe('Navbar Component', () => {
    it('renders Navbar component', () => {
        render(<Router><Navbar loggedIn={false} /></Router>);

        // Test for initial state when not logged in
        expect(screen.getByText('Grade Tracker')).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Contact Support')).toBeInTheDocument();
    });

    it('renders Navbar component when logged in', () => {
        render(<Router><Navbar loggedIn={true} username={mockUsername} /></Router>);

        // Test for logged-in state
        expect(screen.getByText(`Welcome, ${mockUsername}!`)).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    it('toggles Sidebar on button click', () => {
        render(<Router><Navbar loggedIn={true} username={mockUsername} /></Router>);

        // Sidebar should be initially closed
        expect(screen.queryByText('Logout')).toBeNull();

        // Click the toggle button
        fireEvent.click(screen.getByText('☰'));

        // Sidebar should be open now
        expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    it('closes Sidebar on close button click', () => {
        render(<Router><Navbar loggedIn={true} username={mockUsername} /></Router>);

        // Open the Sidebar
        fireEvent.click(screen.getByText('☰'));

        // Sidebar should be open
        expect(screen.getByText('Logout')).toBeInTheDocument();

        // Click the close button
        fireEvent.click(screen.getByTestId('close-sidebar-button'));

        // Sidebar should be closed now
        expect(screen.queryByText('Logout')).toBeNull();
    });
});
