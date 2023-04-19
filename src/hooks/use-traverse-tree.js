import React from "react";

const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder, selectedKey, editKey) {
    if (tree.id == folderId && tree.isFolder) {
      // this is for the root node. when the root node id and the folder id is same
      if (editKey == true) {
        //  tree.items.unshift({
        //    id: new Date().getTime(),
        //    name: item,
        //    isFolder,
        //    key: name,
        //    items: [],
        //  });
        tree = {
          ...tree,
          id: tree.id,
          name: tree.name,
          isFolder,
          key: selectedKey,
          editKey: editKey,
          items: [],
        };
      } else {
        tree.items.unshift({
          id: new Date().getTime(),
          name: item,
          isFolder,
          key: selectedKey,
          items: [],
          editKey: editKey,
        });
      }
      console.log("tree", tree);
      return tree; //  we are returning the tree
    } else {
      console.log("selectedKey", selectedKey);

      // when the folder id is not same as root id, then we need to go search for which item id matches our folder id
      let latestNode = [];
      latestNode = tree.items.map((ob) => {
        // looping into the items of the root calling the same above function recursively
        return insertNode(ob, folderId, item, isFolder, selectedKey, editKey); //  but it gives us now just items. but no the root values involved
      });
      console.log("latestNode", latestNode);
      if (tree.id == folderId) {
        //  tree.items.unshift({
        //    id: new Date().getTime(),
        //    name: item,
        //    isFolder,
        //    key: name,
        //    items: [],
        //  });
        tree = {
          // ...tree,
          id: tree.id,
          name: tree.name,
          isFolder,
          key: selectedKey,
          editKey: editKey,
          items: [],
        };
        return tree
      } else {
        
        return {
          ...tree,
          items: latestNode,
        }; // we are including the root values here and returning whole tree now. and thats it.
      }
    }
  }

  return { insertNode };
};

export default useTraverseTree;
