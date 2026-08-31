import { useState } from "react";
import DraftList from "./DraftList";
import SubmittedPosts from "./SubmittedPosts";

export default function PostComposer() {

  const limits = {
    Twitter: 280,
    Instagram: 2200,
    LinkedIn: 3000,
  };

  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const [drafts, setDrafts] = useState([]);
  const [submittedPosts, setSubmittedPosts] = useState([]);

  const limit = limits[platform];

  const isEmpty = post.trim() === "";
  const isExceeded = post.length > limit;

  // Save Draft
  const saveDraft = () => {

    if (isEmpty || isExceeded) return;

    const draft = {
      id: Date.now(),
      platform,
      post,
    };

    setDrafts([...drafts, draft]);

    setPost("");

  };

  // Delete Draft
  const deleteDraft = (id) => {

    setDrafts(drafts.filter((draft) => draft.id !== id));

  };

  // Edit Draft
  const editDraft = (draft) => {

    setPlatform(draft.platform);
    setPost(draft.post);

    deleteDraft(draft.id);

  };

  // Submit
  const submitPost = () => {

    if (isEmpty || isExceeded) return;

    const newPost = {
      id: Date.now(),
      platform,
      post,
    };

    setSubmittedPosts([...submittedPosts, newPost]);

    setPost("");

  };

  return (
    <div>

      <div className="card">

        <h2>Post Composer</h2>

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option>Twitter</option>
          <option>Instagram</option>
          <option>LinkedIn</option>
        </select>

        <br /><br />

        <textarea
          rows="6"
          placeholder="Write your post..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

        <br />

        {isEmpty ? (
          <p className="error">
            Post cannot be empty. ({post.length}/{limit})
          </p>
        ) : isExceeded ? (
          <p className="error">
            Character limit exceeded. ({post.length}/{limit})
          </p>
        ) : (
          <p className="count">
            {post.length}/{limit}
          </p>
        )}

        <button
          disabled={isEmpty || isExceeded}
          onClick={submitPost}
        >
          Submit
        </button>

        <button
          disabled={isEmpty || isExceeded}
          onClick={saveDraft}
        >
          Save Draft
        </button>

      </div>

      <DraftList
        drafts={drafts}
        editDraft={editDraft}
        deleteDraft={deleteDraft}
      />

      <SubmittedPosts
        submittedPosts={submittedPosts}
      />

    </div>
  );
}