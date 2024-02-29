import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import InputModal from '@/app/components/InputModal'
import userEvent from '@testing-library/user-event'
import List from '@/app/components/List'
 
describe('Input Modal', () => {
  beforeEach(()=> {
    render(<InputModal/>)
  })
  test('Should have the close btn', () => {
    const closeBtn = screen.getByRole('button', {name: 'X'})
    expect(closeBtn).toBeInTheDocument()
  })
  test('Should have the Add btn', () => {
    const addBtn = screen.getByRole('button', {name: 'Add'})
    expect(addBtn).toBeInTheDocument()
  })
  test('Should have an input field', () => {
    const inputTask: HTMLInputElement = screen.getByTestId('tasks')
    expect(inputTask).toBeInTheDocument()
  })
  test('input should take text from user', async()=> {
    const inputTask: HTMLInputElement = screen.getByTestId("tasks")
    await userEvent.type(inputTask, "I have to go to the market")
    expect(inputTask).toHaveValue("I have to go to the market")
  })
  test('should render newly added task in the list after clicking add', async () => {
    const inputTask: HTMLInputElement = screen.getByTestId("tasks");
    await userEvent.type(inputTask, "I have to go to the market");
    const addBtn = screen.getByRole('button', { name: 'Add' });
    userEvent.click(addBtn);
    render(<List title={inputTask.value} id={21233} completed={false}/>)
    expect(screen.getByText(inputTask.value)).toBeInTheDocument()
  });
  test('should not add tasks to list after clicking add if the input is empty', () => {
    const inputTask: HTMLInputElement = screen.getByTestId("tasks");
    const addBtn = screen.getByRole('button', { name: 'Add' });
    userEvent.click(addBtn);
    expect(screen.queryByRole('paragraph', {name: inputTask.value})).not.toBeInTheDocument()
  });
})