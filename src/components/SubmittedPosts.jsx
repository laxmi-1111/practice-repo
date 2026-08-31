export default function SubmittedPosts({
  submittedPosts,
}) {

  return (

    <div className="card">

      <h2>Submitted Posts</h2>

      {submittedPosts.length === 0 ? (

        <p>No submitted posts.</p>

      ) : (

        submittedPosts.map((post) => (

          <div className="item" key={post.id}>

            <h4>{post.platform}</h4>

            <p>{post.post}</p>

          </div>

        ))

      )}

    </div>

  );
}