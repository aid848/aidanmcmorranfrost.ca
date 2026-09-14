import {fireEvent, render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import App from './App';
import {MYPROJECTS, type ProjectEntry} from './Content';

const projectHeading = (project: ProjectEntry) =>
    screen.getByRole('heading', {level: 2, name: `${project.name} | ${project.date} | ${project.type}`});

const renderAt = (path: string) =>
    render(
        <ThemeProvider theme={createTheme()}>
            <MemoryRouter initialEntries={[path]}>
                <App/>
            </MemoryRouter>
        </ThemeProvider>
    );

describe('App', () => {
    test('renders the home page at /', () => {
        renderAt('/');
        expect(screen.getByText('Aidan Frost')).toBeInTheDocument();
        expect(screen.getByRole('tab', {name: 'Home'})).toHaveAttribute('aria-selected', 'true');
    });

    test('renders every project on /projects', () => {
        renderAt('/projects');
        for (const project of MYPROJECTS) {
            expect(projectHeading(project)).toBeInTheDocument();
        }
        expect(screen.getByRole('tab', {name: 'Projects'})).toHaveAttribute('aria-selected', 'true');
    });

    test('falls back to the home page for unknown paths', () => {
        renderAt('/does/not/exist');
        expect(screen.getByText('Aidan Frost')).toBeInTheDocument();
    });

    test('"Check out my work" navigates to the projects page', () => {
        renderAt('/');
        fireEvent.click(screen.getByRole('button', {name: 'Check out my work'}));
        expect(projectHeading(MYPROJECTS[0])).toBeInTheDocument();
        expect(screen.getByRole('tab', {name: 'Projects'})).toHaveAttribute('aria-selected', 'true');
    });
});
