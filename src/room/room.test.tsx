import React from 'react';
import { render } from '@testing-library/react';
import Room from './room.component';



test('renders name field', () => {
    const { getByText } = render(<Room />);
    const linkElement = getByText(/name/i);

    expect(linkElement).not.toBeNull()
});

test('renders floor field', () => {
    const { getByText } = render(<Room />);
    const linkElement = getByText(/floor/i);

    expect(linkElement).not.toBeNull()
});

test('renders button', () => {
    const { getByText } = render(<Room />);
    const linkElement = getByText(/Test/i);

    expect(linkElement).not.toBeNull()
    expect(linkElement).not.toBeUndefined()    
});

