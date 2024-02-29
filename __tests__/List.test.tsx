import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import List from '../app/components/List'
import userEvent from '@testing-library/user-event'

// jest.mock('../app/components/List')

// //Given, when and then the cases
// let task =[ {
//     title: "I have to eat",
//     id: 789898,
//     completed: false
// },
// {
//     title: "I have to eat",
//     id: 789897,
//     completed: false
// }
// ]
let task = {
    title: "I have to eat",
    id: 789897,
    completed: false
}
describe('List component', () => {
    describe('Given the user visit the todo app', () => {
        describe('when a user adds a todo', () => {
            beforeEach(() => {
                render(<List {...task} />)
            });
            describe('and clicks on Add', () => {
                it('renders the list of todos', () => {
                    expect(screen.getByText(task.title)).toBeInTheDocument()
                    expect(screen.getByRole("button", { name: "Done" })).toBeInTheDocument()
                    expect(screen.getByRole("button", { name: "X" })).toBeInTheDocument()
                })
            });
            describe('and the removed button is clicked', () => {
                it('removes the todo', async () => {
                    const removeBtn = screen.getByRole("button", { name: "X" })
                    await userEvent.click(removeBtn)
                    expect(screen.queryByRole('paragraph', { name: task.title })).not.toBeInTheDocument()
                })
            });
            // describe('and a task is completed', () => {
            //     it('display a line-through style', () => {
            //         render(<List {...{ ...task, completed: true }} />);
            //         const taskTitle: HTMLParagraphElement = screen.getByTestId("title");
            //         expect(taskTitle).toHaveClass('line-through');
            //     })
            // })
        });
    })
    // let task = {
    //     title: "I have to eat",
    //     id: 789898,
    //     completed: false
    // }
    // describe("List components", ()=> {
    //     beforeEach(()=>{
    //         render(<List {...task}/>)
    //     })
    //     test('renders task title correctly', () => {
    //         expect(screen.getByText(task.title)).toBeInTheDocument()
    //     })
    //     test('render a "Done" button', () => {
    //         expect(screen.getByRole("button", {name: "Done"})).toBeInTheDocument()
    //     })
    //     test('render a "Remove *X" button', () => {
    //         expect(screen.getByRole("button", {name: "X"})).toBeInTheDocument()
    //     })
    //     test('remove task when remove button is clicked', async()=> {
    //         const removeBtn = screen.getByRole("button", {name: "X"})
    //         await userEvent.click(removeBtn)
    //         expect(screen.queryByRole('paragraph', {name: task.title })).not.toBeInTheDocument()
    //     })
    // })
    // test('renders completed task with line-through style', () => {
    //     render(<List {...{...task, completed: true}} />);
    //     const taskTitle: HTMLParagraphElement = screen.getByTestId("title");
    //     expect(taskTitle).toHaveClass('line-through');
    // });
})

