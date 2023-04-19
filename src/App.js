import { useEffect, useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/fileData";
import useTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder, selectedKey, editKey) => {
console.log("id", folderId);
    const finalNode = insertNode(
      explorerData,
      folderId,
      item,
      isFolder,
      selectedKey,
      editKey
      );
      console.log("final Node", finalNode);
    setExplorerData(finalNode);
  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
      <button onClick={() => console.log(explorerData)}>Save</button>
    </div>
  );
}

export default App;
