import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Page from '../app/page'
import userEvent from '@testing-library/user-event'
import InputModal from '@/app/components/InputModal'
import ListContainer from '@/app/components/ListContainer'
 
describe('Page', () => {
  beforeEach(()=> {
    render(<Page />)
  })
  test('Home component should contain a heading with the text "Todo"', () => {
    const heading = screen.getByText(/Todo/i)
 
    expect(heading).toBeInTheDocument()
  })
  test('Home component should render an "ADD" button', ()=> {
    const addBtn = screen.getByRole('button', {name: "ADD"})

    expect(addBtn).toBeInTheDocument()
  })

  test('InputModal should appear when add button is clicked', () => {
    const addBtn = screen.getByRole('button')

    userEvent.click(addBtn)
    render(<InputModal/>)
    const closeBtn = screen.getByRole('button', {name: "X"})

    expect(closeBtn).toBeInTheDocument()
  })

  test("ListContainer should render its children", ()=> {
    render(<ListContainer><p>Pray</p></ListContainer>)

    expect(screen.getByText("Pray")).toBeInTheDocument()
  })
})