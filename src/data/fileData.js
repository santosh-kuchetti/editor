const explorer = {
  id: 1,
  name: "root",
  isFolder: true,
  key: 1,
  editKey: false,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      key: 1,
      editKey: false,
      items: [
        {
          id: 3,
          name: "public nested 1",
          isFolder: true,
          key: 1,
          editKey: false,
          items: [
            {
              id: 4,
              name: "index.html",
              isFolder: false,
              key: 2,
              editKey: false,
              items: [],
            },
            {
              id: 5,
              name: "hello.html",
              isFolder: false,
              key: 3,
              editKey: false,
              items: [],
            },
          ],
        },
        {
          id: 6,
          name: "public nested file",
          isFolder: false,
          key: 2,
          editKey: false,
          items: [],
        },
      ],
    },
    {
      id: 7,
      name: "src",
      isFolder: true,
      key: 1,
      editKey: false,
      items: [
        {
          id: 8,
          name: "App.js",
          isFolder: false,
          key: 2,
          editKey: false,
          items: [],
        },
        {
          id: 9,
          name: "Index.js",
          isFolder: false,
          key: 1,
          editKey: false,
          items: [],
        },
        {
          id: 10,
          name: "Styles.js",
          isFolder: false,
          key: 2,
          editKey: false,
          items: [],
        },
      ],
    },
    {
      id: 11,
      name: "Package.json",
      isFolder: false,
      key: 3,
      editKey: false,
      items: [],
    },
  ],
};

export default explorer;
