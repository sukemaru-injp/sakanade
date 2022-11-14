import { defineConfig } from 'npm:vite'
import react from 'npm:@vitejs/plugin-react'

import 'npm:react'
import 'npm:react-dom/client'
import 'npm:react-router-dom'
import 'npm:styled-components'
import 'npm:react-icons'
import 'npm:recoil'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
