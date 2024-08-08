/// <reference types="cypress" />

describe("Pantalla de tareas", () => {
    it("Renderiza la página correctamente", () => {
        cy.visit("https://react-tema-18.vercel.app/")
    })

    it("Muestra once elementos", () => {
        cy.visit("https://react-tema-18.vercel.app/")

        cy.get("#tasks-table tbody tr").should("have.length", 11)
        cy.get("#tasks-table tbody tr")
            .last()
            .find("td")
            .first()
            .should("have.text", "Diseñar la página de configuración")
    })

    it("Puede añadir tareas nuevas", () => {
        const nuevaTarea = "Testeando la conquista de los 7 reinos"

        cy.visit("https://react-tema-18.vercel.app/")
      
        cy.get("#tasks-table tbody tr td input").type(nuevaTarea)
      
        cy.get("#user-select").select(2)
      
        cy.get("#create-task-button").click()
        cy.get("#tasks-table tbody tr").should("have.length", 12)
      })
})
