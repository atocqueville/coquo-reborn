import ButtonLink from '@/components/button-link'
import { getPosts } from '@/lib/api/post'

export const dynamic = 'force-dynamic'

export default async function Page() {
    const posts = await getPosts()

    return (
        <>
            <h2>Welcome to Posts page</h2>
            <ButtonLink path="/">Go back to home page !</ButtonLink>

            <ButtonLink path="/create">Create a new post !</ButtonLink>

            {posts.map((post) => (
                <div
                    key={post.id}
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                >
                    <div>
                        <p>{post.title}</p>
                        <p>{post.content}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
