import {renderWithProviders, screen} from "@Test/Utils"
import {describe, expect, it} from "vitest";
import ManageStudent from "@Components/ManageStudent/index";
import {StudentClasses} from "@Redux/Slices/StudentsSlice";

describe('<ManageStudent/>', async () => {
    it("Should have name and score textbox, class dropdown and add button", () => {
        renderWithProviders(<ManageStudent gridRef={{} as any}/>)
        expect(screen.getByText("Add")).toBeDefined()
        expect(screen.getByPlaceholderText("Name")).toBeDefined()
        expect(screen.getByPlaceholderText("Score")).toBeDefined()
        expect(screen.getByRole("classSelector")).toBeDefined()

        for (const studentClass of StudentClasses) {
            expect(screen.getByText(studentClass, {exact: true})).toBeDefined()
        }
    })

})
