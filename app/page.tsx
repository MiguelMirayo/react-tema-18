"use client"

import { Container, Sidebar } from "@/components"
import styles from "./page.module.css"
import AppContextProvider from "@/contexts/AppContextProvider"
import { Toaster } from "sonner"

export default function Home() {
    return (
        <AppContextProvider>
          <Toaster />
            <main className={styles.main}>
                <Sidebar />
                <Container />
            </main>
        </AppContextProvider>
    )
}
