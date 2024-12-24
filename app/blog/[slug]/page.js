export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Blog Post</h1>
            <p>{params.slug}</p>
            <p>Under construction: dynamic content will be added later...</p>
        </main>
    );
}