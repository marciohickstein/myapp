import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the main title', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: /Vite \+ React/i })).toBeInTheDocument()
})
