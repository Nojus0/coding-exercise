import {render, screen} from "@Test/Utils"
import {describe, expect, it} from "vitest";
import ManageStudent from "@Components/ManageStudent/index";

describe('ManageStudent', async () => {
    it("Should add Student to StudentSlice", () => {
        render(<ManageStudent gridRef={{} as any}/>)
        expect(screen.getByText("Add")).toBeDefined()
    })
})
