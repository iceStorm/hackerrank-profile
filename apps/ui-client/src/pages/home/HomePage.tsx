import { apiClient } from "../../queryClient"

export function HomePage() {
  const { data } = apiClient.getProfile.useQuery(["profile"], { params: { username: "tuanna153" } })

  return (
    <div>
      <p>Welcome.</p>

      <div>{data?.body && <p>{data.body.model.name}</p>}</div>
    </div>
  )
}
