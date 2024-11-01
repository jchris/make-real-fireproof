import { useParams } from 'react-router-dom';
import { useFireproof } from 'use-fireproof';
import { connect } from '@fireproof/cloud';

export const ShowPage = () => {
  const { id } = useParams();
  const { database, useLiveQuery } = useFireproof('make-real');

  // @ts-expect-error database type mismatch
  connect(database).then((connection) => {
    console.log('connected to fireproof', connection);
  });

  const query = useLiveQuery('_id', { key: id });
  console.log(query.docs);

  return (
    <div>
      <h1>Page {id}</h1>
      <div className="present-html">
        {query.docs.map((doc) => (
          <iframe
            key={doc._id}
            srcDoc={doc.html}
            style={{
              width: '100%',
              height: '100vh',
              border: 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
};
