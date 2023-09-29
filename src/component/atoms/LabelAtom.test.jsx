import React from 'react'
import {render, screen} from '@testing-library/react'

import LabelAtom from './LabelAtom'

describe("Test Scenario Label", () => {
    test("Valid Test - Render Test", () => {
        const title = "test_label"
        render(
            <LabelAtom name="label1" title={title}/>
        )
        expect(screen.getByText(title)).toBeTruthy()
    })
    // test("Invalid Test - Render Test - title not found", () => {
    //     render(
    //         <LabelAtom name="label1" title=""/>
    //     )
    //     expect(screen.getByRole("label")).toBeFalsy()
    // })
})