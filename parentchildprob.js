const inputArray = [
  {
    id: 1,
    name: "x",
  },
  {
    id: 2,
    parentId: 1,
    name: "a",
  },
  {
    id: 3,
    parentId: 2,
    name: "b",
  },
  {
    id: 4,
    parentId: 1,
    name: "j",
  },
  {
    id: 5,
    name: "m",
  },
];

/* 
    [
        {
            id: 1,
            name: "x",
            child: [
                {
                    id: 2,
                    parentId: 1,
                    name: "a",
                    child: [
                        {
                            id: 3,
                            parentId: 2,
                            name: "b",
                            child: []
                        }
                    ]
                },
                {
                    id: 4,
                    parentId: 1,
                    name: "j",
                }
            ]
        },
        {
            id: 5,
            name: "m",
            child: []
        }
    ]
*/

const childarr = (arr, id) => {
  const result = arr.reduce((val, curr) => {
    if (curr.parentId === id) {
      const obj = {
        id: curr.id,
        name: curr.name,
        child: childarr(arr, curr.id),
      };
      val.push(obj);
    }
    return val;
  }, []);
  return result;
};

const parentchildprob = (arr) => {
  const result = arr.reduce((val, curr) => {
    if (!curr.parentId) {
      const obj = {
        id: curr.id,
        name: curr.name,
        child: childarr(arr, curr.id),
      };
      val.push(obj);
    }
    return val;
  }, []);
  return result;
};

console.log(parentchildprob(inputArray));
