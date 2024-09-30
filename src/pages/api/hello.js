let data = [{ name: "John Doe" },{ name: "John Doe" },{ name: "John Doe" }]

export default function handler(req, res) {
  // req에 있는 여러 값들 중 필요한것만 꺼내서 쓸 수 있음.
  const {method, body, query} = req;

  switch(method) {
    //          data배열에 body ({name:"한주"}) 를 푸시해줘.
    case 'POST': data.push(JSON.parse(body)); break;
    case 'PUT':; break;
    case 'DELETE':
      data = data.filter(obj=>obj.name !== query.name)  
    ; break;
  }

  console.log(method, body, query.name)
  res.status(200).json(data);
}
