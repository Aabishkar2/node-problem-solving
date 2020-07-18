const arra = [
  {
    id: 1,
    sub_id: "",
    name: "aabis",
    amount: "1234",
  },
  {
    id: 2,
    sub_id: "",
    name: "nnest",
    amount: "2345",
  },
  {
    id: 3,
    sub_id: 1,
    name: "adafa",
    amount: "5677",
  },
];

/*
  [
    {
      id: 1,
      name: "asad",
      amount: "6567"
      sub: [
        {
          id: 3,
          sub_id: 1,
          name: "adafa",
          amount: "5677",
        }
      ],
   },
   {
      id: 2,
      name: "sada"
      amount: "1234"
      sub: []
   }
  ]
  */

const varrmap = (arr) => {
  return arr.reduce((rar, curr) => {
    if (curr.sub_id === "") {
      const obj = {
        id: curr.id,
        name: curr.name,
        amount: curr.amount,
        sub: sarmap(curr.id, arr),
      };
      rar.push(obj);
    }
    return rar;
  }, []);
};

const sarmap = (id, arr) => {
  return arr.filter((item) => {
    if (item.sub_id === id) {
      return item;
    }
  });
};

console.log(varrmap(arra));
