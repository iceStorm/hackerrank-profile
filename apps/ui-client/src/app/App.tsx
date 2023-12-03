import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { AppRouter } from "../router"

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnMount: false, refetchOnWindowFocus: false } },
})

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App
