import CreateYourOwnComponent from "@/components/template-create"

export const metadata = {
  title: "Create a Community Handle for your community",
  description: "Host your own tool",
}

export default function CommunityPage() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <CreateYourOwnComponent/>
    </main>
  )
}
