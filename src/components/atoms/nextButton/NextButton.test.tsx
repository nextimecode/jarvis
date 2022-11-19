import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NextButton } from '.'

describe('NextButton', () => {
  it('renders correctly', () => {
    const { debug, getByText } = render(<NextButton>Teste</NextButton>)
    debug()
    expect(getByText('Teste')).toBeInTheDocument()
  })
})
