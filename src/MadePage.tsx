import { useFireproof } from 'use-fireproof'
import { connect } from '@fireproof/cloud'

export function MadePage() {
  const { database, useLiveQuery } = useFireproof('make-real')
  // @ts-expect-error database type mismatch

  connect(database).then((connection) => {
    console.log('connected to fireproof', connection)
  })
  
  const query = useLiveQuery('type', {key : 'html'})
  console.log(query.docs)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Made Pages</h1>
      <div className="space-y-4">
        {query.docs.map(doc => (
          <div key={doc._id} className="border p-4 rounded-lg shadow">
            <a 
              href={`/show/${doc._id}`}
              className="text-blue-500 hover:text-blue-700 text-lg font-medium"
            >
              View Page {doc._id.slice(-8)}
            </a>
            <div className="text-sm text-gray-600 mt-2">
              Created: {new Date(doc.created).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
