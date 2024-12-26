
import { BlogPosts } from 'app/components/posts'
export default function Page() {
  return (
    <div>
      
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        the truth
      </h1>
      <p className="mb-4">
        Coding things that may or may not help people. Also part-time logical thinker. <br></br>
        Not unemployed but projected employment.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </div>
  )
}
