import { render, screen } from '@testing-library/react'
import Root from 'config/Root'
import Home from 'pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(
    <Root>
        <Home />
        </Root>
    )
  })
})