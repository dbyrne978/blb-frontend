import './App.css'
import * as React from 'react'
import backlogItemsService from './services/backlogItems'
import BacklogItem from './components/BacklogItem.jsx'

function App() {
  const [backlogItems, setBacklogItems] = React.useState([])

  React.useEffect(() => {
    backlogItemsService
      .getAll()
      .then(initialBacklogItems => {
        setBacklogItems(initialBacklogItems)
      })
  }, [])

  return (
    <>
      {backlogItems.map(backlogItem => {
        return (
          <BacklogItem
            key={backlogItem.id}
            backlogItem={backlogItem}
          />
        );
      })}
    </>
  )
}

export default App
