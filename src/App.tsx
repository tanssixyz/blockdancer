import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import { Layout } from "@/components/Layout"
import { Home } from "@/pages/Home"
import { Work } from "@/pages/Work"
import { Writing } from "@/pages/Writing"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="writing" element={<Writing />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
