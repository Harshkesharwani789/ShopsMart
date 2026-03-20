import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect, vi } from 'vitest';

describe('App', () => {
    it('renders ShopSmart title and products', async () => {
        // Mock fetch
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve([{ id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Electronics', image: 'link' }])
            })
        );

        render(<App />);
        const titleElement = screen.getByText(/ShopSmart/i);
        expect(titleElement).toBeInTheDocument();
        
        const productName = await screen.findByText(/Wireless Headphones/i);
        expect(productName).toBeInTheDocument();
    });
});
