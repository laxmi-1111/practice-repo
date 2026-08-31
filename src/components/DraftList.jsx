export default function DraftList({
  drafts,
  editDraft,
  deleteDraft,
}) {

  return (

    <div className="card">

      <h2>Drafts</h2>

      {drafts.length === 0 ? (

        <p>No drafts available.</p>

      ) : (

        drafts.map((draft) => (

          <div className="item" key={draft.id}>

            <h4>{draft.platform}</h4>

            <p>{draft.post}</p>

            <button
              onClick={() => editDraft(draft)}
            >
              Edit
            </button>

            <button
              onClick={() => deleteDraft(draft.id)}
            >
              Delete
            </button>

          </div>

        ))

      )}

    </div>

  );
}