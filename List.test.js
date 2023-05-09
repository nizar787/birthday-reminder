import { render } from '@testing-library/react'
import List from './List'

describe('List', () => {
  it('should render a list of people', () => {
    const people = [
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        image: 'https://example.com/john.jpg',
      },
      {
        id: 2,
        name: 'Jane Doe',
        age: 30,
        image: 'https://example.com/jane.jpg',
      },
    ]

    const { getByAltText, getByText } = render(<List people={people} />)

    people.forEach((person) => {
      const { name, age, image } = person
      const imgElement = getByAltText(name)
      expect(imgElement).toHaveAttribute('src', image)

      const nameElement = getByText(name)
      expect(nameElement).toBeInTheDocument()

      const ageElement = getByText(`${age} years`)
      expect(ageElement).toBeInTheDocument()
    })
  })
})
